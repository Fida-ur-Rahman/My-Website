 // small helpers
    function scrollToSection(id){
      document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})
    }

 // modal
    function openProject(title,desc){
      document.getElementById('modalTitle').innerText = title;
      document.getElementById('modalBody').innerText = desc;
      document.getElementById('modal').style.display = 'flex';
    }
    function closeModal(){ document.getElementById('modal').style.display = 'none'; }

// contact form basic handling
    const form = document.getElementById('contactForm');
    const formMsg = document.getElementById('formMsg');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if(!name || !email || !message){ formMsg.innerText = 'Please fill all fields.'; return; }

 // simple mailto fallback
      const subject = encodeURIComponent('Portfolio contact from ' + name);
      const body = encodeURIComponent(message + '\n\n--\n' + name + ' (' + email + ')');
      const mailto = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
      window.location.href = mailto;
      formMsg.innerText = 'Opening your email app...';
    });
    function resetForm(){ form.reset(); formMsg.innerText='Form cleared.' }

    // set year
    document.getElementById('year').innerText = new Date().getFullYear();

// small accessibility: close modal on escape
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeModal(); });

//  footer 1
// Automatically update the year
document.getElementById('year').textContent = new Date().getFullYear();

