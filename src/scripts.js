document.addEventListener('DOMContentLoaded', function(event){
    if(window.scrollY > 3) {
        console.log("1")
    }
})

window.addEventListener('scroll', function(){
    if(window.scrollY > 0) {
        document.querySelector("#top_menu").classList.add("top_menu")
        document.querySelector("#top_menu_plug").classList.add("top_menu_plug")
    } else {
        document.querySelector("#top_menu").classList.remove("top_menu")
        document.querySelector("#top_menu_plug").classList.remove("top_menu_plug")
    }
    if(window.scrollY > 212) {
        document.querySelector("#EmotionTabs").classList.add("EmotionTabs_fix")
        document.querySelector("#EmotionsTabs_plug").classList.add("EmotionTabs_fix_plug")
    } else {
        document.querySelector("#EmotionTabs").classList.remove("EmotionTabs_fix")
        document.querySelector("#EmotionsTabs_plug").classList.remove("EmotionTabs_fix_plug")
    }
})
