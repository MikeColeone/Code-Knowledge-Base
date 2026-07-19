# promise


```js

```

# promise.all


```js
function myPromiseAll(promises){
    return new Promise((resolve,reject) => {
        if(!Array.isArray(promises)){
            return reject(new TypeError('Argument must be an array'))
        }

        const results = []
        let count = 0
        promises.forEach((promise,index) => {
            Promise.resolve(promise).then(
                res => {
                results[index] = res
                count++
                if(count === promises.length){
                    resolve(results)
                }

            }).catch(err => {
                reject(err)
            })

        })

        if(promises.length === 0){
            resolve(results)
        }
    })
}

```

# promise.race
