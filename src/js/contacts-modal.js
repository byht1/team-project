function selectLocation(i){
    var el = document.getElementsByClassName("contacts-modal__loc-info");
    if (el[i].classList.contains("colorless")) {
        for (let j = 0; j <= 2;j++){
            if(!(el[j].classList.contains("colorless"))) el[j].classList.add("colorless");
        }
        el[i].classList.remove("colorless");
        let source;
        switch (i) {
            case 0:
                source = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.3355312815006!2d-87.57536521436054!3d41.77798200063016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e29abe65db847%3A0x79ab2236c86890b6!2sJackson%20Park%20Inner%20Harbor!5e0!3m2!1sru!2s!4v1655210545068!5m2!1sru!2s";
                break;
            case 1:
                source = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40868.420862757106!2d-118.26003150368656!3d33.87712116854914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ca1456fd696f%3A0x46327f7ea1d5d76f!2z0J_QsNGA0Log0JDRgtC10L3RgQ!5e0!3m2!1sru!2s!4v1655224777223!5m2!1sru!2s";
                break;
            case 2:
                source = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10785.59494930131!2d-73.97524186946028!3d40.6606317624366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1e35d1dea88787a!2z0J_QsNGA0Log0JzQsNGD0L3RgiDQn9GA0L7RgdC_0LXQutGC!5e0!3m2!1sru!2s!4v1655224591132!5m2!1sru!2s";
                break;
        }
        document.getElementById("contacts-modal_map").src = source;
     } 
}
function contactsModalOpen(){
    document.getElementsByClassName("contacts-backdrop")[0].classList.remove("is-hidden");
}
function contactsModalClose(){
    document.getElementsByClassName("contacts-backdrop")[0].classList.add("is-hidden"); 
}