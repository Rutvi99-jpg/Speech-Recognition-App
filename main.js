const texts = document.querySelector('.texts');
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results).map(result =>result[0]).map(result => result.transcript).join('');
    p.innerText = text;
    texts.appendChild(p);

    if(e.results[0].isFinal){
        if(text.includes('hello')){
            p=document.createElement('p');
            p.classList.add('replay');
            p.innerText='Hi';
            texts.appendChild(p);
        }

        if(text.includes('what is your name')|| text.includes("what's your name")){
            p=document.createElement('p');
            p.classList.add('replay');
            p.innerText='My Name is Rutvi, Yours?';
            texts.appendChild(p);
        }

        
        if(text.includes('open my YouTube channel')){
            p=document.createElement('p');
            p.classList.add('replay');
            p.innerText='Opening Your Channel';
            texts.appendChild(p);
            window.open('https://www.youtube.com/watch?v=LJsyVBJMfUs&list=RDLJsyVBJMfUs&start_radio=1')
        }

        if(text.includes('how are you')){
            p=document.createElement('p');
            p.classList.add('replay');
            p.innerText='I am fine';
            texts.appendChild(p);
            
        }

        if(text.includes('open my GitHub account')){
            p=document.createElement('p');
            p.classList.add('replay');
            p.innerText='Opening Your GitHub';
            texts.appendChild(p);
            window.open('https://github.com/Rutvi99-jpg')
        }



        p=document.createElement('p');
    }
   
    console.log(text);
})

recognition.addEventListener('end', ()=>{
    recognition.start();
})

recognition.start();