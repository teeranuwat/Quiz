const groupString = [ 'VMRCO', 'VORCM', 'MCRTOX', 'ZXTAC', 'XZATC', 'XMTCOR', 'OXVS', 'AZTXC', 'VXOS', 'RZAT', 'MRCOTX', 'SVXO',
    'TRAZ', 'ZTAR', 'MVOCR' ]

let result

function comparegroup(){
    let a = []
    groupString.forEach(item=>{
            let c = groupString.filter(item2 =>{
                return compareString(item,item2)
            })
        a.push(c)
    })
    let result = a.filter(( t={}, g=> !(t[g]=g in t) ));
    console.log('result', result)

}

function compareString(a,b){
    if(a.length !== b.length ){
        return false;
    }

    let d = [...a].filter(item1 => {
        let c = [...b].filter(item2 =>{
            return item1 === item2
        })
       return c.length === 0
    });
    return d.length === 0
}

comparegroup()