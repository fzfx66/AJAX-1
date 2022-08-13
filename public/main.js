let n = 1;
getPage.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET',`/page${n+1}`);
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response)   //此时打印出的是字符串;下面将其转变为对象
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.id;
                // id可以直接用，而不用写长串的getElementby……
                xxx.appendChild(li);
            } );
            n += 1;
        }
    };
    request.send()
};

getJSON.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET','/5.json');
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response)   //此时打印出的是字符串;下面将其转变为对象
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    };
    request.send()
};

getXML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    };
    request.send()
};

getHTML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload = () => {
        console.log(request.response)
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {}
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/2.js');
    request.onload = () => {
        // 用AJAX加载JS完整步骤: 1.创建script标签
        // 2.填写script内容
        const script = document.createElement('script')
        // 3.插入到身体里
        script.innerHTML = request.response
        document.body.appendChild(script)
    };
    request.onerror = () => {};
    request.send();
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/style.css');
    request.onreadystatechange = () => {
        // 下载完成，但不知下载成功的是需求页面 2xx 还是 无响应页面 4xx 5xx
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                // 用AJAX加载CSS完整步骤: 1.创建style标签
                const style = document.createElement('style');
                //2.填写style内容
                style.innerHTML = request.response;
                //3.插到头部
                document.head.appendChild(style)
            } else {
                alert("加载 CSS 失败")
            }
        }
    } ;
    request.send();
};
