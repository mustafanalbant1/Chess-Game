import { Chess } from "chess.js";
import { BehaviorSubject } from "rxjs";

const chess = new Chess();

const subjectGame = new BehaviorSubject({
    chess: chess.board(), // Başlangıç tahtası durumu
    isGameOver: false, // Oyun başlangıçta bitmediği için false
    result: null // Başlangıçta sonuç yok
});

export default subjectGame;

export const initGame = () => {
    updateGame();
}

export const move = (from, to) => {
    console.log(from, to);
    const moveOperation = chess.move({ from, to });
    if (moveOperation) {
        updateGame();
    }
}

const updateGame = () => {
    const isGameOver = chess.isGameOver(); // isGameOver kontrolü
    subjectGame.next({
        chess: chess.board(),
        isGameOver, // Anahtar burada doğru kullanılıyor
        result: isGameOver ? getGameResult() : null
    });
}

const getGameResult = () => {
    if (chess.isCheckmate()) {
        const winner = chess.turn() === "w" ? "Siyah" : "Beyaz"; // Kazanan rengi belirt
        return `Şah Mat - Kazanan : ${winner}`;
    } else if (chess.isDraw()) {
        let reason = "50 Hamle Kuralı";
        if (chess.isStalemate()) {
            reason = 'Çıkmaz Döngü';
        } else if (chess.isThreefoldRepetition()) {
            reason = 'Tekrarlama';
        } else if (chess.isInsufficientMaterial()) {
            reason = 'Yetersiz Taş';
        }
        return reason;
    } else {
        return 'Bilinmeyen Durum';
    }
}
