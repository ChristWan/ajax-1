getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());
        }
    }
    request.send();
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const div = document.createElement('div');
            div.innerHTML = request.response;
            document.body.appendChild(div);
        }
    };
    request.send();
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            console.log(request.response);
            const script = document.createElement('script');
            script.innerHTML = request.response;
            document.body.appendChild(script);
        }
    };
    request.send();
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css");
    request.onreadystatechange = () => {
        // 下载完成，但是不知道是成功还是失败
        if (request.readyState === 4) {
            // 处理下载成功（即状态代码为2开头的数字）的结果
            if (request.status >= 200 && request.status < 300) {
                // 创建style标签
                const style = document.createElement('style')
                // 填写style内容
                style.innerHTML = request.response
                // 插入head里面
                document.head.appendChild(style)
            // 处理下载失败（即状态代码为4或5开头的数字）的结果
            } else {
                alert('加载CSS失败');
            }
        }
    };
    request.send();
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const object = JSON.parse(request.response); // JSON.parse用法为将符合JSON语法的字符串转换成对应的对象或其他东西
                myName.textContent = object.name;
            } else {
                alert('加载JSON失败');
            }
        }
    };
    request.send();
}

let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n + 1}`) // 只有反引号支持${}
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item=> {
               const li = document.createElement('li');
               li.textContent = item.id;
               ul1.appendChild(li);
            });
            n += 1;
        }
    };
    request.send();
}