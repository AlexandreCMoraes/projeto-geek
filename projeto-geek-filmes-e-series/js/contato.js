window.addEventListener("load", function(){
    let formulario = document.querySelector("form.formulario")
    formulario.addEventListener("submit", function(event){
        event.preventDefault()
        
    })
})


function validaForm(frm) {
    /*
    o parâmetro frm desta função significa: this.form,
    pois a chamada da função - validaForm(this) foi
    definida na tag form.
    */
        //Verifica se o campo nome foi preenchido e
        //contém no mínimo três caracteres.
    if (frm.name.value == "" || frm.name.value == null || frm.name.value.lenght < 3) {
        //É mostrado um alerta, caso o campo esteja vazio.
        alert("Por favor, indique o seu nome.");
        //Foi definido um focus no campo.
        frm.name.focus();
        //o form não é enviado.
        return false;
    }
    //o campo e-mail precisa de conter: "@", "." e não pode estar vazio
    if (frm.email.value.indexOf("@") == -1 ||
        frm.email.valueOf.indexOf(".") == -1 ||
        frm.email.value == "" ||
        frm.email.value == null) {
            alert("Por favor, indique um e-mail válido.");
            frm.email.focus();
            return false;
    }
    
    //Valida a textArea, que é como validar um campo de texto simples.
    if (frm.mensagem.value == "" || frm.mensagem.value == null || frm.mensagem.value.lenght < 5) {
        alert("Por favor, escreva sua mensagem.");
        frm.mensagem.focus();
        return false;
    }
}