let obj;
let isCreate = false;

function create() {
    //创建音频标签
    let a = document.createElement("audio");

    a.autoplay = true;
    a.loop = false;
    a.style.visibility = "hidden";
    //创建资源标签
    let s = document.createElement("source");
    //音频路径
    s.src = "../audio/bo.mp3";
    //音频类型
    s.type = "audio/mp3";
    a.appendChild(s);
    document.body.appendChild(a);
    obj = new Object(a);
    isCreate = true;
}
//播放音效
function start() {
    //判断音频标签是否创建
    if (!isCreate)
        create();
    obj.volume = 0.2;
    obj.currentTime = 0.7;
    obj.play();
    console.log('波~~~');
}