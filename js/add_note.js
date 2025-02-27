// DOM読み込み完了時の処理
document.addEventListener('DOMContentLoaded', function () {
    // ピアノキーのアニメーション遅延設定
    const keys = document.querySelectorAll('.piano .key, .piano .black-key');
    keys.forEach(key => {
        key.style.animationDelay = (Math.random() * 2) + 's';
    });

    // 音符のアニメーション遅延をランダムに設定（ふわふわ動きのバリエーション用）
    const notes = document.querySelectorAll('img.note');
    notes.forEach(note => {
        note.style.animationDelay = (Math.random() * 2) + 's';
    });

    // 音符を追加するユーティリティ関数（必要に応じて使用）
    window.addNote = function (x, y, imageIndex = 1, size = 50) {
        const note = document.createElement('img');
        note.className = 'note';
        note.src = `img/note${imageIndex}.png`;
        note.alt = '音符';
        note.style.width = size + 'px';
        note.style.left = x + '%';
        note.style.top = y + '%';
        note.style.animationDelay = (Math.random() * 2) + 's';

        // コンテナに追加
        let container = document.querySelector('.note-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'note-container';
            document.body.appendChild(container);
        }
        container.appendChild(note);

        return note;
    };

    // 特定の位置に音符を配置
    const notesToAdd = [
        { x: 4, y: 44.5, type: 3, size: 50 },
        { x: 45, y: 51.3, type: 2, size: 50 },
        { x: 82, y: 48, type: 7, size: 40 },
        { x: 29, y: 48, type: 5, size: 40 },
        { x: 63, y: 47, type: 6, size: 40 }
    ];

    notesToAdd.forEach(noteData => {
        addNote(noteData.x, noteData.y, noteData.type, noteData.size);
    });

});
