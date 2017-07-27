let log = (type)=>{
    return (target,name,descriptor) => {
        const method = descriptor.value;
        descriptor.value = (...args) =>{
            console.info(`正在执行:${name}(${args})=?`);
            let ret;
            try{
                ret = method.apply(target,args);
                console.info(`成功 : ${name}(${args}) => ${ret}`);
            } catch (error) {
                console.error(`失败: ${name}(${args}) => ${error}`);
            }
            return ret;
        }
    }
}
@log('hello')
function hello() {
    let a = 1;
    if (a < 1) {
        console.log("less than one");
    } else {
        console.log("more than one");
    }
}

hello();