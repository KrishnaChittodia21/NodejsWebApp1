class CACHE {
    static checkCache(url) {
         var cache = {
            'http://A/index.html': '<html> <body> This is a test page for learning to crawl! <p> It is a good idea to <a href="http://A/crawling.html"> learn to crawl </a> before you try to <a href="http://A/walking.html"> walk </a> or <a href="http://A/fly.html"> fly </a> </p> </body> </html>',
            'http://A/crawling.html': '<html> <body> I have not learned to crawl yet , but I am quite good at  kicking </a> </body> </html>',
            'http://A/walking.html': '<html> <body> I cant get enough <a href="http://A/index.html"> crawling </a> </body> </html>',
            'http://A/fly.html': '<html> <body> The magic words are Squeamish Ossifrage! </body> </html>'
        }
        return cache[url];
    }
}

module.exports = CACHE
