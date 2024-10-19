(function() {
    console.log(Date.now())

    fetch('https://game-sport.s3-ap-east-1.amazonaws.com/static/analysis-json/domains-2q.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // 解析 JSON 数据
        })
        .then(data => {
            const list = data.list;
            sessionStorage.setItem('base-url', `${list[1].api_url}/member`);
            console.log(data.list); // 处理数据
        })
        .catch(error => {
            console.error('Fetch error:', error); // 处理错误
        });
})()
