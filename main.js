
fetch('content/notices.json')
.then(r=>r.json())
.then(d=>{
  document.getElementById('notices').innerHTML =
    d.map(n=>`<p><b>${n.title}</b>: ${n.body}</p>`).join('');
});
