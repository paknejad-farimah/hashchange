window.addEventListener("hashchange",e=>{
    router()
})
function router(){
    switch(location.hash){
    case "":
        render({title:"HOME" ,color:"red",href:"#home"})
        break;
        case "#home":
        render({title:"HOME" ,color:"red",href:"#home"})
        break;
        case "#search":
            render({title:"SEARCH" ,color:"blue",href:"#search"})
            break;
            case "#likes":
                render({title:"LIKES" ,color:"green",href:"#likes"})
                break;
                case "#profile":
                    render({title:"PROFILE" ,color:"pink",href:"#profile"})
}
}
    
     function render(data){
        document.querySelector("h1").innerText=data.title
        document.querySelector("main").style.backgroundColor=data.color
    }