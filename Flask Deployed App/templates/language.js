<script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
<script type="text/javascript">
    function googleTranslateElementInit(){
        new google.translate.TranslateElement({
            pageLanguage: "en" 
        }, 'google_translate_element');
    }
    const languageChanger = ()=>{
    var language=document.getElementById("google_translate_element").value;
    var selectField=document.querySelector("#google_translate_element select");
    for (var i=0; i<selectField.children.length; i++){
        var option = selectField.children[i];
        if(option.value==language){
            selectField.selectedIndex =i;
            selectField.dispatchEvent(new Event('change '));
            break;
        }
    }
    }
</script>



