
// scripts.js - minimal scroll reveal & parallax
document.addEventListener('DOMContentLoaded', function(){
  // simple reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  function reveal(){
    for(const el of reveals){
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 60){ el.style.opacity = 1; el.style.transform = 'translateY(0)'; }
    }
  }
  reveals.forEach(el => { el.style.opacity=0; el.style.transform='translateY(20px)'; el.style.transition='all .8s ease'; });
  window.addEventListener('scroll', reveal); reveal();

  // parallax on hero background
  const hero = document.querySelector('.hero-visual');
  if(hero){
    window.addEventListener('mousemove', (e)=>{
      const x = (e.clientX / window.innerWidth) * 20;
      const y = (e.clientY / window.innerHeight) * 20;
      hero.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // WhatsApp quick chat button
  const waBtn = document.getElementById('wa-btn');
  if(waBtn){ waBtn.addEventListener('click', ()=>{
    const number = waBtn.dataset.number || '+17159905020';
    const text = encodeURIComponent('Hello! I am interested in STAR IPTV SERVICE plans.');
    window.open(`https://wa.me/${number.replace(/[^0-9]/g,'') }?text=${text}`,'_blank');
  })}

  // Payment placeholder buttons (open external checkout page or show modal)
  const payBtns = document.querySelectorAll('.pay-btn');
  payBtns.forEach(b=> b.addEventListener('click', ()=>{ alert('This would redirect to your payment gateway (Stripe/PayPal) with plan details. Replace with real checkout URL.'); }));

  // Simple contact form -> mailto fallback
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = this.name.value||'No name'; const email = this.email.value||'no-reply'; const msg=this.message.value||'';
      const subject = encodeURIComponent('Contact from STAR IPTV SERVICE - ' + name);
      const body = encodeURIComponent('From: '+name+' ('+email+')\n\n'+msg);
      window.location.href = `mailto:sales@stariptvservice.example?subject=${subject}&body=${body}`;
    });
  }
});
