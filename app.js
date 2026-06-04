/* ===== API BASE ===== */
const API_BASE = 'api/';

/* ===== DATOS DE DEMO (fallback sin servidor PHP) ===== */
const USUARIOS = [
  { id:1, username:'admin', nombre:'Carlos Rodríguez', email:'admin@seniat.gob.ve', pass:'Admin123*', rol:'admin' },
  { id:2, username:'dr.garcia', nombre:'Dra. María García', email:'garcia@seniat.gob.ve', pass:'Doctor123*', rol:'doctor', especialidad:'Medicina General' },
];

const PACIENTES = [
  { id:1,  nombres:'Gabriela', apellidos:'Jiménez',  cedula:'V-18234567', email:'gjimene23@gmail.com',      telefono:'0412-1234567', depto:'Fiscalización',    nacimiento:'1995-03-12', observaciones:'Ninguna' },
  { id:2,  nombres:'Luis',     apellidos:'Pérez',    cedula:'V-15678901', email:'lperez@seniat.gob.ve',     telefono:'0414-9876543', depto:'Administración',   nacimiento:'1988-07-25', observaciones:'Alergia a penicilina' },
  { id:3,  nombres:'Ana',      apellidos:'Martínez', cedula:'V-20345678', email:'amartinez@seniat.gob.ve',  telefono:'0416-5554433', depto:'Cobranzas',         nacimiento:'1992-11-08', observaciones:'Diabetes tipo 2' },
  { id:4,  nombres:'Carlos',   apellidos:'Flores',   cedula:'V-14567890', email:'cflores@seniat.gob.ve',    telefono:'0412-3334455', depto:'Informática',      nacimiento:'1984-05-20', observaciones:'Hipertensión arterial' },
  { id:5,  nombres:'María',    apellidos:'Valera',   cedula:'V-22345678', email:'mvalera@seniat.gob.ve',    telefono:'0416-7778899', depto:'Recursos Humanos',  nacimiento:'1998-09-14', observaciones:'Ninguna' },
  { id:6,  nombres:'José',     apellidos:'Ramírez',  cedula:'V-12890123', email:'jramirez@seniat.gob.ve',   telefono:'0414-6665544', depto:'Planificación',   nacimiento:'1980-02-28', observaciones:'Asma bronquial' },
  { id:7,  nombres:'Andreina', apellidos:'González', cedula:'V-25678901', email:'agonzalez@seniat.gob.ve', telefono:'0412-9990011', depto:'Legal',             nacimiento:'2000-07-03', observaciones:'Ninguna' },
  { id:8,  nombres:'Ricardo',  apellidos:'Castillo', cedula:'V-16789012', email:'rcastillo@seniat.gob.ve',  telefono:'0416-1112233', depto:'Fiscalización',    nacimiento:'1986-11-19', observaciones:'Colesterol alto' },
  { id:9,  nombres:'Yelitza',  apellidos:'Moreno',   cedula:'V-19876543', email:'ymoreno@seniat.gob.ve',    telefono:'0414-4445566', depto:'Administración',   nacimiento:'1993-04-07', observaciones:'Ninguna' },
  { id:10, nombres:'Fernando', apellidos:'Salcedo',  cedula:'V-13456789', email:'fsalcedo@seniat.gob.ve',   telefono:'0412-7778800', depto:'Gerencia',           nacimiento:'1975-12-30', observaciones:'Operado de rodilla 2023' },
];

const MEDICOS = [
  { id:1, nombres:'María', apellidos:'García', rol:'Doctor', especialidad:'Medicina General', email:'garcia@seniat.gob.ve', telefono:'0412-5550001' },
  { id:2, nombres:'Pedro', apellidos:'López', rol:'Doctor', especialidad:'Odontología', email:'plopez@seniat.gob.ve', telefono:'0414-5550002' },
  { id:3, nombres:'Carmen', apellidos:'Ruiz', rol:'Enfermera', especialidad:'Enfermería', email:'cruiz@seniat.gob.ve', telefono:'0416-5550003' },
  { id:4, nombres:'Roberto', apellidos:'Silva', rol:'Doctor', especialidad:'Psicología', email:'rsilva@seniat.gob.ve', telefono:'0412-5550004' },
  { id:5, nombres:'Laura', apellidos:'Torres', rol:'Doctor', especialidad:'Pediatría', email:'ltorres@seniat.gob.ve', telefono:'0414-5550005' },
];

const CITAS = [
  // Abril (historial)
  { id:1,  pacienteId:1,  medicoId:1, especialidad:'Medicina General', fecha:'2026-04-10', hora:'08:30', estado:'Completada', motivo:'Control de rutina anual' },
  { id:2,  pacienteId:2,  medicoId:2, especialidad:'Odontología',      fecha:'2026-04-15', hora:'10:00', estado:'Completada', motivo:'Extracción molar' },
  { id:3,  pacienteId:4,  medicoId:1, especialidad:'Medicina General', fecha:'2026-04-18', hora:'09:00', estado:'Completada', motivo:'Control de presión arterial' },
  { id:4,  pacienteId:6,  medicoId:4, especialidad:'Psicología',       fecha:'2026-04-22', hora:'14:00', estado:'Completada', motivo:'Evaluación de estrés laboral' },
  { id:5,  pacienteId:3,  medicoId:3, especialidad:'Enfermería',       fecha:'2026-04-25', hora:'08:00', estado:'Completada', motivo:'Toma de muestras' },
  { id:6,  pacienteId:8,  medicoId:2, especialidad:'Odontología',      fecha:'2026-04-28', hora:'11:00', estado:'Cancelada',  motivo:'Limpieza dental' },
  // Mayo
  { id:7,  pacienteId:1,  medicoId:3, especialidad:'Enfermería',       fecha:'2026-05-05', hora:'08:00', estado:'Completada', motivo:'Vacunación antigripal' },
  { id:8,  pacienteId:5,  medicoId:1, especialidad:'Medicina General', fecha:'2026-05-07', hora:'09:30', estado:'Completada', motivo:'Chequeo general' },
  { id:9,  pacienteId:9,  medicoId:4, especialidad:'Psicología',       fecha:'2026-05-08', hora:'15:00', estado:'Completada', motivo:'Terapia cognitiva' },
  { id:10, pacienteId:3,  medicoId:1, especialidad:'Medicina General', fecha:'2026-05-12', hora:'10:00', estado:'Confirmada',  motivo:'Control diabetes' },
  { id:11, pacienteId:7,  medicoId:5, especialidad:'Pediatría',        fecha:'2026-05-12', hora:'11:30', estado:'Confirmada',  motivo:'Control de crecimiento' },
  { id:12, pacienteId:4,  medicoId:2, especialidad:'Odontología',      fecha:'2026-05-13', hora:'09:00', estado:'Pendiente',   motivo:'Revisión ortodóntica' },
  { id:13, pacienteId:10, medicoId:1, especialidad:'Medicina General', fecha:'2026-05-14', hora:'08:30', estado:'Confirmada',  motivo:'Seguimiento post-operatorio' },
  { id:14, pacienteId:2,  medicoId:4, especialidad:'Psicología',       fecha:'2026-05-15', hora:'14:00', estado:'Pendiente',   motivo:'Primera evaluación' },
  { id:15, pacienteId:6,  medicoId:3, especialidad:'Enfermería',       fecha:'2026-05-16', hora:'07:30', estado:'Confirmada',  motivo:'Curación de herida' },
  { id:16, pacienteId:8,  medicoId:1, especialidad:'Medicina General', fecha:'2026-05-19', hora:'10:30', estado:'Pendiente',   motivo:'Control colesterol' },
  { id:17, pacienteId:1,  medicoId:5, especialidad:'Pediatría',        fecha:'2026-05-20', hora:'09:00', estado:'Confirmada',  motivo:'Consulta infantil' },
  { id:18, pacienteId:5,  medicoId:2, especialidad:'Odontología',      fecha:'2026-05-21', hora:'11:00', estado:'Pendiente',   motivo:'Limpieza y blanqueamiento' },
  { id:19, pacienteId:9,  medicoId:1, especialidad:'Medicina General', fecha:'2026-05-22', hora:'08:00', estado:'Confirmada',  motivo:'Revisión general' },
  { id:20, pacienteId:7,  medicoId:4, especialidad:'Psicología',       fecha:'2026-05-26', hora:'15:30', estado:'Pendiente',   motivo:'Ansiedad situacional' },
  // Junio
  { id:21, pacienteId:10, medicoId:2, especialidad:'Odontología',      fecha:'2026-06-02', hora:'09:30', estado:'Pendiente',   motivo:'Corona dental' },
  { id:22, pacienteId:3,  medicoId:4, especialidad:'Psicología',       fecha:'2026-06-04', hora:'14:00', estado:'Pendiente',   motivo:'Continuación terapia' },
  { id:23, pacienteId:6,  medicoId:1, especialidad:'Medicina General', fecha:'2026-06-09', hora:'10:00', estado:'Pendiente',   motivo:'Control asma' },
  { id:24, pacienteId:2,  medicoId:5, especialidad:'Pediatría',        fecha:'2026-06-11', hora:'11:00', estado:'Pendiente',   motivo:'Consulta especializada' },
  { id:25, pacienteId:8,  medicoId:3, especialidad:'Enfermería',       fecha:'2026-06-16', hora:'08:30', estado:'Pendiente',   motivo:'Toma de presión y glucosa' },
];

// Inicializar estado activo/inactivo en datos de demo
USUARIOS.forEach(u => u.estado = u.estado || 'activo');
PACIENTES.forEach(p => p.estado = p.estado || 'activo');
MEDICOS.forEach(m => m.estado = m.estado || 'activo');

/* ===== ESTADO GLOBAL ===== */
let currentUser  = null;
let currentRol   = null;   // rol seleccionado en pantalla de roles
let charts       = {};
let _clockInterval = null;

/* ===== PERSISTENCIA localStorage ===== */
function cargarUsuariosGuardados() {
  try {
    const saved = localStorage.getItem('mediseniat_usuarios');
    if (saved) {
      const extras = JSON.parse(saved);
      // Fusionar: no duplicar emails ya existentes
      extras.forEach(u => {
        if (!USUARIOS.find(x => x.email === u.email)) USUARIOS.push(u);
      });
    }
  } catch(e) {}
}

function guardarUsuariosEnStorage() {
  try {
    // Solo guardar los que NO son los originales (demo)
    const originalesIds = [1,2,3];
    const extras = USUARIOS.filter(u => !originalesIds.includes(u.id));
    localStorage.setItem('mediseniat_usuarios', JSON.stringify(extras));
  } catch(e) {}
}

/* ===== INICIALIZACIÓN ===== */
document.addEventListener('DOMContentLoaded', () => {
  // Cargar usuarios guardados
  cargarUsuariosGuardados();
  // Ocultar loading screen
  setTimeout(() => {
    const ls = document.getElementById('loading-screen');
    if (ls) ls.classList.add('hidden');
  }, 1200);
});

/* ===== MENÚS POR ROL ===== */
const MENUS = {
  admin: [
    { id:'dashboard',   icon:'fa-gauge-high',    label:'Dashboard' },
    { id:'calendario',  icon:'fa-calendar-days', label:'Calendario' },
    { id:'citas',       icon:'fa-calendar-check',label:'Gestión de Citas' },
    { id:'pacientes',   icon:'fa-users',          label:'Pacientes' },
    { id:'medicos',     icon:'fa-user-doctor',    label:'Médicos' },
    { id:'usuarios',    icon:'fa-user-shield',    label:'Usuarios' },
    { id:'reportes',    icon:'fa-chart-bar',      label:'Reportes' },
    { id:'perfil',      icon:'fa-circle-user',    label:'Mi Perfil' },
  ],
  doctor: [
    { id:'dashboard',  icon:'fa-gauge-high',     label:'Dashboard' },
    { id:'calendario', icon:'fa-calendar-days',  label:'Calendario' },
    { id:'citas',      icon:'fa-calendar-check', label:'Mis Citas' },
    { id:'pacientes',  icon:'fa-users',           label:'Pacientes' },
    { id:'reportes',   icon:'fa-chart-bar',       label:'Reportes' },
    { id:'perfil',     icon:'fa-circle-user',     label:'Mi Perfil' },
  ],
};

/* ===== VALIDACIÓN CONTRASEÑA ===== */
function validarPass(pass) {
  return {
    len:     pass.length >= 8,
    upper:   /[A-Z]/.test(pass),
    num:     /[0-9]/.test(pass),
    special: /[^A-Za-z0-9]/.test(pass),
  };
}

function setHint(id, ok) {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = 'hint ' + (ok ? 'good' : 'bad');
  const icon = el.querySelector('i');
  if (icon) icon.className = ok ? 'fas fa-circle-check' : 'fas fa-circle-xmark';
}

function checkRegPass() {
  const v = validarPass(document.getElementById('reg-pass')?.value || '');
  setHint('rhint-len',     v.len);
  setHint('rhint-upper',   v.upper);
  setHint('rhint-num',     v.num);
  setHint('rhint-special', v.special);
}

/* ===== FLUJO DE SELECCIÓN DE ROL ===== */
function seleccionarRol(rol) {
  currentRol = rol;

  // Resaltar tarjeta seleccionada brevemente
  document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
  const btn = document.getElementById(`role-btn-${rol}`);
  if (btn) btn.classList.add('selected');

  // Actualizar badge de rol en el paso 2
  const badge = document.getElementById('step-role-badge');
  if (badge) {
    const cfg = {
      admin:  { cls:'admin-badge',  icon:'fa-user-shield', label:'Administrador / Secretaria' },
      doctor: { cls:'doctor-badge', icon:'fa-user-doctor', label:'Doctor / Enfermera' },
    }[rol];
    badge.className = `step-role-badge ${cfg.cls}`;
    badge.innerHTML = `<i class="fas ${cfg.icon}"></i> ${cfg.label}`;
  }

  // Mostrar/ocultar campos extra para doctor en registro
  const extraDoctor = document.getElementById('reg-extra-doctor');
  if (extraDoctor) extraDoctor.classList.toggle('hidden', rol !== 'doctor');

  // Transición: salir roles → entrar form (dentro de la misma carta)
  const pageRoles = document.getElementById('page-roles');
  const pageForm  = document.getElementById('page-form');

  setTimeout(() => {
    // Ocultar página de roles con animación
    pageRoles.classList.remove('card-page--active');
    pageRoles.classList.remove('card-page--enter-left');
    pageRoles.classList.add('card-page--exit-right');

    setTimeout(() => {
      pageRoles.style.display = 'none';
      pageRoles.classList.remove('card-page--exit-right');

      // Mostrar página del formulario con animación
      pageForm.style.display = 'block';
      pageForm.classList.add('card-page--active');
      pageForm.classList.remove('card-page--enter-left');
      switchTab('login');
    }, 300);
  }, 200);
}

function volverRoles() {
  const pageRoles = document.getElementById('page-roles');
  const pageForm  = document.getElementById('page-form');

  // Animar la salida del formulario
  pageForm.classList.remove('card-page--active');
  pageForm.classList.add('card-page--exit-right');

  setTimeout(() => {
    pageForm.style.display = 'none';
    pageForm.classList.remove('card-page--exit-right');

    // Animar la entrada de roles (desde la izquierda, volviendo)
    pageRoles.style.display = 'block';
    pageRoles.classList.add('card-page--active', 'card-page--enter-left');

    document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
    currentRol = null;
    // Limpiar formularios
    document.getElementById('form-login').reset();
    document.getElementById('form-register').reset();
    document.getElementById('login-error').classList.add('hidden');
    document.getElementById('reg-error').classList.add('hidden');
  }, 300);
}

function switchTab(tab) {
  ['login','register'].forEach(t => {
    document.getElementById(`tab-${t}`)?.classList.toggle('active', t === tab);
    document.querySelector(`[data-panel="${t}"]`)?.classList.toggle('active', t === tab);
  });
  const titleEl = document.getElementById('auth-form-title');
  if (titleEl) {
    titleEl.textContent = tab === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta';
  }
}

/* ===== LOGIN ===== */
document.getElementById('form-login')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email  = document.getElementById('login-email').value.trim();
  const pass   = document.getElementById('login-pass').value;
  const errBox = document.getElementById('login-error');
  const errMsg = document.getElementById('login-error-msg');

  errBox.classList.add('hidden');
  document.getElementById('err-email').textContent = '';
  document.getElementById('err-pass').textContent  = '';

  if (!email) { document.getElementById('err-email').textContent = 'Ingrese su correo electrónico.'; return; }
  if (!pass)  { document.getElementById('err-pass').textContent  = 'Ingrese su contraseña.'; return; }

  const user = USUARIOS.find(u => u.email === email && u.pass === pass);
  if (!user) {
    errBox.classList.remove('hidden');
    errMsg.textContent = 'Correo o contraseña incorrectos. Verifique sus credenciales.';
    return;
  }

  // Verificar que el rol coincida con lo seleccionado
  if (currentRol && user.rol !== currentRol) {
    errBox.classList.remove('hidden');
    errMsg.textContent = `Esta cuenta no es de tipo "${currentRol === 'admin' ? 'Administrador/Secretaria' : 'Doctor/Enfermera'}". Seleccione el acceso correcto.`;
    return;
  }

  entrarAlSistema(user);
});

/* ===== REGISTRO ===== */
document.getElementById('form-register')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const nombres    = document.getElementById('reg-nombres').value.trim();
  const apellidos  = document.getElementById('reg-apellidos').value.trim();
  const email      = document.getElementById('reg-email').value.trim();
  const pass       = document.getElementById('reg-pass').value;
  const pass2      = document.getElementById('reg-pass2').value;
  const errBox     = document.getElementById('reg-error');
  const errMsg     = document.getElementById('reg-error-msg');

  errBox.classList.add('hidden');

  if (!nombres || !apellidos) { errMsg.textContent='Ingrese nombre y apellido completos.'; errBox.classList.remove('hidden'); return; }
  if (!email) { errMsg.textContent='Ingrese un correo institucional válido.'; errBox.classList.remove('hidden'); return; }
  if (USUARIOS.find(u => u.email === email)) { errMsg.textContent='Ya existe una cuenta con ese correo.'; errBox.classList.remove('hidden'); return; }

  const v = validarPass(pass);
  if (!v.len || !v.upper || !v.num || !v.special) {
    errMsg.textContent='La contraseña no cumple los requisitos de seguridad.';
    errBox.classList.remove('hidden'); return;
  }
  if (pass !== pass2) { errMsg.textContent='Las contraseñas no coinciden.'; errBox.classList.remove('hidden'); return; }

  // Crear nuevo usuario
  const nuevoId = Date.now();
  const nuevoUsuario = {
    id: nuevoId,
    username: email.split('@')[0],
    nombre: nombres + ' ' + apellidos,
    email,
    pass,
    rol: currentRol || 'doctor',
  };

  USUARIOS.push(nuevoUsuario);

  // Si es doctor, también agregar al listado de médicos
  if (currentRol === 'doctor') {
    const especialidad = document.getElementById('reg-especialidad')?.value || 'Medicina General';
    const cargo        = document.getElementById('reg-cargo')?.value || 'Doctor';
    MEDICOS.push({
      id: nuevoId,
      nombres,
      apellidos,
      rol: cargo,
      especialidad,
      email,
      telefono: '-',
    });
  }

  // Guardar en localStorage
  guardarUsuariosEnStorage();

  showToast(`✅ Cuenta creada para ${nombres}. Ya puede iniciar sesión.`, 'success');
  switchTab('login');
  document.getElementById('form-register').reset();
  document.getElementById('login-email').value = email;
});

function entrarAlSistema(user) {
  currentUser = user;

  const ls = document.getElementById('loading-screen');
  if (ls) ls.classList.add('hidden');

  document.getElementById('screen-login').classList.add('hidden');
  document.getElementById('screen-login').classList.remove('active');
  const app = document.getElementById('screen-app');
  app.classList.remove('hidden');

  // Datos en sidebar / topbar
  const inicial = user.nombre.charAt(0).toUpperCase();
  document.getElementById('nav-avatar').textContent  = inicial;
  document.getElementById('nav-name').textContent    = user.nombre;
  document.getElementById('topbar-user').textContent = user.nombre;
  const topbarAv = document.getElementById('topbar-avatar');
  if (topbarAv) topbarAv.textContent = inicial;

  const rolLabel = { admin:'Administrador', doctor:'Doctor / Enfermera' };
  const rolBadge = document.getElementById('nav-role');
  rolBadge.textContent  = rolLabel[user.rol] || user.rol;
  rolBadge.className    = 'user-role-badge badge-' + user.rol;

  // Menú según rol
  const nav = document.getElementById('sidebar-nav');
  const menu = MENUS[user.rol] || MENUS.doctor;
  nav.innerHTML = menu.map(m => `
    <button class="nav-item" onclick="showView('${m.id}')" id="nav-${m.id}">
      <i class="fas ${m.icon}"></i><span>${m.label}</span>
    </button>
  `).join('');

  startClock();
  showView('dashboard');
}

function logout() {
  currentUser = null;
  currentRol  = null;
  if (_clockInterval) { clearInterval(_clockInterval); _clockInterval = null; }
  Object.values(charts).forEach(c => c.destroy());
  charts = {};
  document.getElementById('screen-app').classList.add('hidden');
  document.getElementById('screen-login').classList.remove('hidden');
  document.getElementById('screen-login').classList.add('active');
  // Volver al paso 1 (roles)
  const pageForm  = document.getElementById('page-form');
  const pageRoles = document.getElementById('page-roles');
  pageForm.style.display = 'none';
  pageForm.classList.remove('card-page--active', 'card-page--exit-right');
  pageRoles.style.display = 'block';
  pageRoles.classList.add('card-page--active');
  pageRoles.classList.remove('card-page--exit-right', 'card-page--enter-left');
  document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('login-email').value = '';
  document.getElementById('login-pass').value  = '';
  document.getElementById('login-error').classList.add('hidden');
}

/* ===== RELOJ EN TIEMPO REAL ===== */
function startClock() {
  if (_clockInterval) clearInterval(_clockInterval);
  const tick = () => {
    const now = new Date();
    const dias = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
    const mesesCortos = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const hora = now.toLocaleTimeString('es-VE', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
    const fecha = `${dias[now.getDay()]} ${now.getDate()} ${mesesCortos[now.getMonth()]}`;
    const el = document.getElementById('topbar-clock');
    if (el) el.innerHTML = `<i class="fas fa-clock" style="color:var(--primary);margin-right:.4rem"></i>${fecha} &nbsp;|&nbsp; ${hora}`;
  };
  tick();
  _clockInterval = setInterval(tick, 1000);
}

/* ===== NAVEGACIÓN ===== */
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const view = document.getElementById('view-' + viewId);
  if (view) view.classList.add('active');

  const navBtn = document.getElementById('nav-' + viewId);
  if (navBtn) navBtn.classList.add('active');

  const titles = {
    dashboard:'Dashboard', calendario:'Calendario de Citas', citas:'Gestión de Citas',
    pacientes:'Pacientes', medicos:'Médicos y Personal', usuarios:'Gestión de Usuarios',
    reportes:'Reportes y Estadísticas', perfil:'Mi Perfil'
  };
  const secciones = {
    dashboard:'Inicio', calendario:'Calendario', citas:'Citas',
    pacientes:'Pacientes', medicos:'Médicos', usuarios:'Usuarios', reportes:'Reportes', perfil:'Perfil'
  };
  document.getElementById('topbar-title').textContent = titles[viewId] || viewId;
  const bc = document.getElementById('breadcrumb-section');
  if (bc) bc.textContent = secciones[viewId] || viewId;

  if (window.innerWidth <= 768) toggleSidebar(false);

  const renders = {
    dashboard: renderDashboard, calendario: renderCalendario, citas: renderCitas,
    pacientes: renderPacientes, medicos: renderMedicos, usuarios: renderUsuarios,
    reportes: renderReportes, perfil: renderPerfil
  };
  if (renders[viewId]) renders[viewId]();
}

/* ===== SIDEBAR ===== */
function toggleSidebar(force) {
  const s = document.getElementById('sidebar');
  const o = document.getElementById('overlay');
  const open = force !== undefined ? force : !s.classList.contains('open');
  s.classList.toggle('open', open);
  o.classList.toggle('hidden', !open);
}

/* ===== TOGGLE CONTRASEÑA ===== */
function togglePass(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const show = input.type === 'password';
  input.type = show ? 'text' : 'password';
  btn.querySelector('i').className = show ? 'fas fa-eye-slash' : 'fas fa-eye';
}

/* ===== DASHBOARD ===== */
function renderDashboard() {
  const totalCitas = CITAS.length;
  const pendientes = CITAS.filter(c => c.estado === 'Pendiente').length;
  const completadas = CITAS.filter(c => c.estado === 'Completada').length;

  let statsData;
  if (currentUser.rol === 'admin') {
    statsData = [
      { num: totalCitas, label:'Total de Citas', icon:'fa-calendar', color:'bg-blue', border:'var(--primary)' },
      { num: PACIENTES.length, label:'Pacientes Registrados', icon:'fa-users', color:'bg-green', border:'#22c55e' },
      { num: MEDICOS.length, label:'Personal Médico', icon:'fa-user-doctor', color:'bg-teal', border:'#0d9488' },
      { num: pendientes, label:'Citas Pendientes', icon:'fa-clock', color:'bg-orange', border:'#f97316' },
    ];
  } else if (currentUser.rol === 'doctor') {
    const misCitas = CITAS.filter(c => {
      const m = MEDICOS.find(m => m.email === currentUser.email);
      return m && c.medicoId === m.id;
    });
    statsData = [
      { num: misCitas.length, label:'Mis Citas', icon:'fa-calendar', color:'bg-blue', border:'var(--primary)' },
      { num: misCitas.filter(c=>c.estado==='Pendiente').length, label:'Pendientes', icon:'fa-clock', color:'bg-orange', border:'#f97316' },
      { num: misCitas.filter(c=>c.estado==='Completada').length, label:'Completadas', icon:'fa-check', color:'bg-green', border:'#22c55e' },
      { num: PACIENTES.length, label:'Pacientes', icon:'fa-users', color:'bg-teal', border:'#0d9488' },
    ];
  } else {
    const misCitas = CITAS.filter(c => {
      const p = PACIENTES.find(p => p.email === currentUser.email);
      return p && c.pacienteId === p.id;
    });
    statsData = [
      { num: misCitas.length, label:'Mis Citas', icon:'fa-calendar', color:'bg-blue', border:'var(--primary)' },
      { num: misCitas.filter(c=>c.estado==='Pendiente').length, label:'Pendientes', icon:'fa-clock', color:'bg-orange', border:'#f97316' },
      { num: misCitas.filter(c=>c.estado==='Confirmada').length, label:'Confirmadas', icon:'fa-check-circle', color:'bg-green', border:'#22c55e' },
      { num: misCitas.filter(c=>c.estado==='Completada').length, label:'Completadas', icon:'fa-check-double', color:'bg-teal', border:'#0d9488' },
    ];
  }

  const grid = document.getElementById('stats-grid');
  grid.innerHTML = statsData.map(s => `
    <div class="stat-card" style="border-left-color:${s.border}">
      <div class="stat-icon ${s.color}"><i class="fas ${s.icon}"></i></div>
      <div><div class="stat-num">${s.num}</div><div class="stat-label">${s.label}</div></div>
    </div>
  `).join('');

  // Título y fecha del dashboard
  const greet = { admin:'Panel de Administración', doctor:'Panel del Doctor', paciente:'Bienvenido/a' };
  document.getElementById('dash-title').textContent = greet[currentUser.rol];
  document.getElementById('dash-subtitle').textContent = `Hola, ${currentUser.nombre}. Aquí tienes el resumen de hoy.`;

  // Fecha actual en el dashboard
  const pd = document.getElementById('page-date');
  if (pd) {
    const now = new Date();
    const opciones = { weekday:'long', year:'numeric', month:'long', day:'numeric' };
    pd.innerHTML = `<i class="fas fa-calendar-days"></i>${now.toLocaleDateString('es-VE', opciones)}`;
  }

  // Tabla próximas citas — filtrar por médico si es doctor
  let citasParaDash = CITAS.filter(c => c.estado !== 'Cancelada' && c.estado !== 'Completada');
  if (currentUser.rol === 'doctor') {
    const mDoc = MEDICOS.find(m => m.email === currentUser.email);
    if (mDoc) citasParaDash = citasParaDash.filter(c => c.medicoId === mDoc.id);
  }
  const proximas = citasParaDash.slice(0,5);
  const tbody = document.getElementById('tbody-proximas');
  tbody.innerHTML = proximas.map(c => {
    const p = PACIENTES.find(p => p.id === c.pacienteId);
    const m = MEDICOS.find(m => m.id === c.medicoId);
    return `<tr>
      <td><strong>${p ? p.nombres+' '+p.apellidos : '-'}</strong></td>
      <td>${m ? 'Dr/Dra. '+m.apellidos : '-'}</td>
      <td>${formatFecha(c.fecha)}</td>
      <td>${c.hora}</td>
      <td><span class="badge ${badgeEstado(c.estado)}">${c.estado}</span></td>
    </tr>`;
  }).join('') || `<tr><td colspan="5" class="empty-state"><i class="fas fa-calendar-xmark"></i>No hay citas próximas</td></tr>`;

  renderCharts();
}

function renderCharts() {
  // Destruir previas
  if (charts.citas) { charts.citas.destroy(); delete charts.citas; }
  if (charts.estado) { charts.estado.destroy(); delete charts.estado; }

  // Gráfica de barras — citas por mes
  const meses = ['Ene','Feb','Mar','Abr','May','Jun'];
  const datosMes = [3, 7, 5, 9, CITAS.length, 4];
  const ctx1 = document.getElementById('chart-citas');
  if (ctx1) {
    charts.citas = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: meses,
        datasets: [{ label:'Citas', data: datosMes, backgroundColor: '#1a6fa8cc', borderRadius: 6, borderSkipped: false }]
      },
      options: { responsive: true, plugins:{ legend:{ display:false } }, scales:{ y:{ beginAtZero:true, grid:{ color:'#e2e8f0' } }, x:{ grid:{ display:false } } } }
    });
  }

  // Gráfica de torta — estado
  const estados = ['Pendiente','Confirmada','Completada','Cancelada'];
  const colores = ['#f59e0b','#3b82f6','#22c55e','#ef4444'];
  const datosEstado = estados.map(e => CITAS.filter(c => c.estado === e).length);
  const ctx2 = document.getElementById('chart-estado');
  if (ctx2) {
    charts.estado = new Chart(ctx2, {
      type: 'doughnut',
      data: { labels: estados, datasets: [{ data: datosEstado, backgroundColor: colores, borderWidth: 2, borderColor:'#fff' }] },
      options: { responsive: true, plugins:{ legend:{ position:'bottom', labels:{ font:{ size:11 } } } } }
    });
  }
}

/* ===== CITAS ===== */
function renderCitas() {
  let lista = [...CITAS];
  if (currentUser.rol === 'paciente') {
    const p = PACIENTES.find(p => p.email === currentUser.email);
    if (p) lista = lista.filter(c => c.pacienteId === p.id);
  } else if (currentUser.rol === 'doctor') {
    const m = MEDICOS.find(m => m.email === currentUser.email);
    if (m) lista = lista.filter(c => c.medicoId === m.id);
  }

  // Ocultar botón nueva cita a pacientes
  const btnNueva = document.querySelector('#view-citas .btn-primary');
  if (btnNueva) btnNueva.style.display = currentUser.rol === 'paciente' ? 'none' : '';

  renderTablaCitas(lista);
}

function renderTablaCitas(lista) {
  const tbody = document.getElementById('tbody-citas');
  tbody.innerHTML = lista.map((c, i) => {
    const p = PACIENTES.find(p => p.id === c.pacienteId);
    const m = MEDICOS.find(m => m.id === c.medicoId);
    const acciones = currentUser.rol !== 'paciente'
      ? `<div class="action-btns">
          <button class="btn-atender" title="Atender paciente" onclick="abrirConsulta(${c.id})"><i class="fas fa-stethoscope"></i> Atender</button>
          <button class="btn-sm btn-view" title="Ver detalle" onclick="verCita(${c.id})"><i class="fas fa-eye"></i></button>
          <button class="btn-sm btn-edit" title="Editar" onclick="editarCita(${c.id})"><i class="fas fa-pen"></i></button>
          <button class="btn-sm btn-del"  title="Eliminar" onclick="eliminarCita(${c.id})"><i class="fas fa-trash"></i></button>
        </div>`
      : `<button class="btn-sm btn-view" onclick="verCita(${c.id})"><i class="fas fa-eye"></i> Ver</button>`;
    return `<tr>
      <td><strong>${p ? p.nombres+' '+p.apellidos : '-'}</strong></td>
      <td>${m ? 'Dr/Dra. '+m.apellidos : '-'}</td>
      <td>${c.especialidad}</td>
      <td>${formatFecha(c.fecha)}</td>
      <td>${c.hora}</td>
      <td><span class="badge ${badgeEstado(c.estado)}">${c.estado}</span></td>
      <td>${acciones}</td>
    </tr>`;
  }).join('') || `<tr><td colspan="7" class="empty-state"><i class="fas fa-calendar-xmark"></i>No hay citas registradas</td></tr>`;

  // Contador de registros
  const footer = document.getElementById('footer-citas');
  if (footer) {
    // Para doctor: total y pendientes de SUS citas; para admin: global
    let totalBase = CITAS.length;
    let pendientes = CITAS.filter(c => c.estado === 'Pendiente').length;
    if (currentUser.rol === 'doctor') {
      const mDoc = MEDICOS.find(m => m.email === currentUser.email);
      if (mDoc) {
        const misCitas = CITAS.filter(c => c.medicoId === mDoc.id);
        totalBase  = misCitas.length;
        pendientes = misCitas.filter(c => c.estado === 'Pendiente').length;
      }
    }
    footer.innerHTML = `<span>Mostrando <span class="table-footer-badge">${lista.length}</span> de ${totalBase} citas</span><span>${pendientes} pendiente(s)</span>`;
  }
}

function verCita(id) {
  const c = CITAS.find(c => c.id === id);
  if (!c) return;
  const p = PACIENTES.find(p => p.id === c.pacienteId);
  const m = MEDICOS.find(m => m.id === c.medicoId);
  document.getElementById('detalle-cita-content').innerHTML = `
    <div class="detalle-row"><i class="fas fa-user"></i><strong>Paciente:</strong>${p ? p.nombres+' '+p.apellidos : '-'}</div>
    <div class="detalle-row"><i class="fas fa-id-card"></i><strong>Cédula:</strong>${p ? p.cedula : '-'}</div>
    <div class="detalle-row"><i class="fas fa-user-doctor"></i><strong>Doctor:</strong>${m ? m.nombres+' '+m.apellidos : '-'}</div>
    <div class="detalle-row"><i class="fas fa-stethoscope"></i><strong>Especialidad:</strong>${c.especialidad}</div>
    <div class="detalle-row"><i class="fas fa-calendar"></i><strong>Fecha:</strong>${formatFecha(c.fecha)}</div>
    <div class="detalle-row"><i class="fas fa-clock"></i><strong>Hora:</strong>${c.hora}</div>
    <div class="detalle-row"><i class="fas fa-notes-medical"></i><strong>Motivo:</strong>${c.motivo}</div>
    <div class="detalle-row"><i class="fas fa-circle-dot"></i><strong>Estado:</strong><span class="badge ${badgeEstado(c.estado)}">${c.estado}</span></div>
  `;
  openModal('modal-detalle-cita');
}

function eliminarCita(id) {
  if (!confirm('¿Está seguro de eliminar esta cita?')) return;
  const idx = CITAS.findIndex(c => c.id === id);
  if (idx > -1) { CITAS.splice(idx, 1); showToast('Cita eliminada', 'success'); renderCitas(); }
}

function editarCita(id) {
  const c = CITAS.find(c => c.id === id);
  if (!c) return;
  openModal('modal-cita');
  setTimeout(() => {
    document.getElementById('cita-paciente').value = c.pacienteId;
    document.getElementById('cita-medico').value   = c.medicoId;
    autoEspecialidad();
    document.getElementById('cita-especialidad').value = c.especialidad;
    document.getElementById('cita-fecha').value   = c.fecha;
    document.getElementById('cita-hora').value    = c.hora;
    document.getElementById('cita-estado').value  = c.estado;
    document.getElementById('cita-motivo').value  = c.motivo;
    document.getElementById('modal-cita').dataset.editId = id;
    document.querySelector('#modal-cita .modal-header h3').innerHTML = '<i class="fas fa-pen"></i> Editar Cita';
  }, 80);
}

function saveCita() {
  const pacienteId = parseInt(document.getElementById('cita-paciente').value);
  // Si es doctor, forzar su propio medicoId
  let medicoId = parseInt(document.getElementById('cita-medico').value);
  if (currentUser.rol === 'doctor') {
    const mDoc = MEDICOS.find(m => m.email === currentUser.email);
    if (mDoc) medicoId = mDoc.id;
  }
  const especialidad = document.getElementById('cita-especialidad').value;
  const fecha = document.getElementById('cita-fecha').value;
  const hora  = document.getElementById('cita-hora').value;
  // Doctor siempre crea en Pendiente
  const estado = currentUser.rol === 'doctor' ? 'Pendiente' : (document.getElementById('cita-estado').value || 'Pendiente');
  const motivo = document.getElementById('cita-motivo').value;

  if (!pacienteId || !medicoId || !fecha || !hora) { showToast('Complete todos los campos requeridos', 'error'); return; }

  const editId = document.getElementById('modal-cita').dataset.editId;
  if (editId) {
    const c = CITAS.find(c => c.id === parseInt(editId));
    if (c) { Object.assign(c, { pacienteId, medicoId, especialidad, fecha, hora, estado, motivo }); }
    showToast('Cita actualizada correctamente', 'success');
    delete document.getElementById('modal-cita').dataset.editId;
  } else {
    CITAS.push({ id: Date.now(), pacienteId, medicoId, especialidad, fecha, hora, estado, motivo });
    showToast('Cita registrada correctamente', 'success');
  }
  // Re-habilitar el select al cerrar
  document.getElementById('cita-medico').disabled = false;
  closeModal('modal-cita');
  renderCitas();
}

/* ===== PACIENTES ===== */
function buildPacienteRow(p, i) {
  const activo = (p.estado || 'activo') === 'activo';
  return `<tr class="${activo ? '' : 'row-inactive'}">
    <td><strong>${p.nombres} ${p.apellidos}</strong></td>
    <td>${p.cedula}</td>
    <td>${p.email}</td>
    <td>${p.telefono}</td>
    <td><span class="badge badge-blue">${p.depto}</span></td>
    <td>
      <div class="action-btns">
        <button class="btn-sm btn-view" title="Ver historial" onclick="verHistorialPaciente(${p.id})"><i class="fas fa-eye"></i></button>
        ${buildToggleHTML('pacientes', p.id, p.estado || 'activo')}
      </div>
    </td>
  </tr>`;
}
function renderPacientes() {
  const tbody = document.getElementById('tbody-pacientes');
  tbody.innerHTML = PACIENTES.length
    ? PACIENTES.map(buildPacienteRow).join('')
    : `<tr><td colspan="6" class="empty-state"><i class="fas fa-users"></i>No hay pacientes registrados</td></tr>`;
  // Contador
  const footer = document.getElementById('footer-pacientes');
  if (footer) footer.innerHTML = `<span>Total: <span class="table-footer-badge">${PACIENTES.length}</span> pacientes registrados</span><span>Actualizado ${new Date().toLocaleTimeString('es-VE',{hour:'2-digit',minute:'2-digit'})}</span>`;
}
function verHistorialPaciente(id) {
  const p  = PACIENTES.find(p => p.id === id);
  if (!p) return;
  const citas = CITAS.filter(c => c.pacienteId === id);
  document.getElementById('detalle-cita-content').innerHTML = `
    <div class="detalle-row"><i class="fas fa-user"></i><strong>Paciente:</strong>${p.nombres} ${p.apellidos}</div>
    <div class="detalle-row"><i class="fas fa-id-card"></i><strong>Cédula:</strong>${p.cedula}</div>
    <div class="detalle-row"><i class="fas fa-building"></i><strong>Área:</strong>${p.depto}</div>
    <div class="detalle-row"><i class="fas fa-phone"></i><strong>Teléfono:</strong>${p.telefono}</div>
    <div class="detalle-row"><i class="fas fa-calendar"></i><strong>Citas:</strong>${citas.length} registrada(s)</div>
    <div class="detalle-row"><i class="fas fa-notes-medical"></i><strong>Obs.:</strong>${p.observaciones || 'Ninguna'}</div>
  `;
  document.querySelector('#modal-detalle-cita .modal-header h3').innerHTML = '<i class="fas fa-user"></i> Historial del Paciente';
  openModal('modal-detalle-cita');
}

function savePaciente() {
  const nombres = document.getElementById('pac-nombres').value.trim();
  const apellidos = document.getElementById('pac-apellidos').value.trim();
  const cedula  = document.getElementById('pac-cedula').value.trim();
  const email   = document.getElementById('pac-email').value.trim();
  const telefono = document.getElementById('pac-telefono').value.trim();
  const depto   = document.getElementById('pac-depto').value.trim();
  const nacimiento = document.getElementById('pac-nacimiento').value;
  const observaciones = document.getElementById('pac-observaciones').value.trim();

  if (!nombres || !apellidos || !cedula || !email) { showToast('Complete los campos requeridos','error'); return; }

  // Validar CI venezolana
  const ciNum = cedula.replace(/[VEJGvejg-]/g,'');
  if (isNaN(ciNum) || parseInt(ciNum) < 100000 || parseInt(ciNum) > 100000000) {
    showToast('La cédula debe estar entre 100.000 y 100.000.000','error'); return;
  }

  // Validar duplicados
  if (PACIENTES.find(p => p.cedula === cedula)) { showToast('Ya existe un paciente con esa cédula','error'); return; }
  if (PACIENTES.find(p => p.email === email)) { showToast('Ya existe un paciente con ese email','error'); return; }
  if (PACIENTES.find(p => p.telefono === telefono && telefono)) { showToast('Ya existe un paciente con ese teléfono','error'); return; }

  PACIENTES.push({ id: Date.now(), nombres, apellidos, cedula, email, telefono, depto, nacimiento, observaciones });
  showToast('Paciente registrado correctamente','success');
  closeModal('modal-paciente');
  renderPacientes();
  document.getElementById('form-paciente').reset();
}

/* ===== MÉDICOS ===== */
function renderMedicos() {
  const tbody = document.getElementById('tbody-medicos');
  if (!tbody) return;
  tbody.innerHTML = MEDICOS.map((m, i) => {
    const activo = (m.estado || 'activo') === 'activo';
    return `<tr class="${activo ? '' : 'row-inactive'}">
    <td><strong>${m.nombres} ${m.apellidos}</strong></td>
    <td><span class="badge ${m.rol==='Doctor'?'badge-doctor':'badge-paciente'}">${m.rol}</span></td>
    <td>${m.especialidad}</td>
    <td>${m.email}</td>
    <td>${m.telefono}</td>
    <td>
      <div class="action-btns">
        ${buildToggleHTML('medicos', m.id, m.estado || 'activo')}
      </div>
    </td>
  </tr>`;
  }).join('');
}

function saveMedico() {
  const nombres = document.getElementById('med-nombres').value.trim();
  const apellidos = document.getElementById('med-apellidos').value.trim();
  const rol = document.getElementById('med-rol').value;
  const especialidad = document.getElementById('med-especialidad').value.trim();
  const email = document.getElementById('med-email').value.trim();
  const telefono = document.getElementById('med-telefono').value.trim();
  if (!nombres || !apellidos || !especialidad || !email) { showToast('Complete los campos requeridos','error'); return; }
  MEDICOS.push({ id: Date.now(), nombres, apellidos, rol, especialidad, email, telefono });
  showToast('Médico registrado correctamente','success');
  closeModal('modal-medico');
  renderMedicos();
  document.getElementById('form-medico').reset();
}

/* ===== USUARIOS ===== */
function renderUsuarios() {
  const tbody = document.getElementById('tbody-usuarios');
  if (!tbody) return;
  // Solo mostrar admin y doctor, nunca pacientes
  const usuariosFiltrados = USUARIOS.filter(u => u.rol !== 'paciente');
  tbody.innerHTML = usuariosFiltrados.map((u,i) => {
    const activo = (u.estado || 'activo') === 'activo';
    return `<tr class="${activo ? '' : 'row-inactive'}">
    <td><strong>${u.nombre}</strong></td>
    <td>${u.email}</td>
    <td><span class="badge badge-${u.rol}">${{admin:'Administrador',doctor:'Doctor/Enfermera'}[u.rol]||u.rol}</span></td>
    <td>
      <div class="action-btns">
        ${buildToggleHTML('usuarios', u.id, u.estado || 'activo')}
      </div>
    </td>
  </tr>`;
  }).join('');
}

function saveUsuario() {
  const username = document.getElementById('usr-username').value.trim();
  const email = document.getElementById('usr-email').value.trim();
  const rol = document.getElementById('usr-rol').value;
  const pass = document.getElementById('usr-pass').value;
  const pass2 = document.getElementById('usr-pass2').value;

  if (!username || !email || !pass) { showToast('Complete todos los campos','error'); return; }
  if (pass !== pass2) { showToast('Las contraseñas no coinciden','error'); return; }

  const v = validarPass(pass);
  if (!v.len || !v.upper || !v.num || !v.special) { showToast('La contraseña no cumple los requisitos','error'); return; }
  if (USUARIOS.find(u => u.email === email)) { showToast('Ya existe un usuario con ese email','error'); return; }
  if (USUARIOS.find(u => u.username === username)) { showToast('Ese nombre de usuario ya existe','error'); return; }

  USUARIOS.push({ id: Date.now(), username, nombre: username, email, pass, rol });
  showToast('Usuario creado correctamente','success');
  closeModal('modal-usuario');
  renderUsuarios();
  document.getElementById('form-usuario').reset();
}

/* ===== REPORTES ===== */
function renderReportes() {
  if (charts.anual) { charts.anual.destroy(); delete charts.anual; }
  const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  const datosAnual = [8, 12, 6, 14, 9, 11, 7, 15, 10, 13, 5, CITAS.length];
  const ctx = document.getElementById('chart-anual');
  if (ctx) {
    charts.anual = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: meses,
        datasets: [{ label:'Atenciones', data: datosAnual,
          backgroundColor: meses.map((_,i) => i === 11 ? '#1a6fa8' : '#1a6fa855'),
          borderRadius: 6, borderSkipped: false }]
      },
      options: { responsive: true, plugins:{ legend:{ display:false } }, scales:{ y:{ beginAtZero:true, grid:{ color:'#e2e8f0' } }, x:{ grid:{ display:false } } } }
    });
  }
}

function generateReport(tipo) {
  // Mapear tipo a la clave de generarReportePDF
  const map = { mensual:'citas', doctor:'medicos', paciente:'pacientes', estado:'citas' };
  generarReportePDF(map[tipo] || 'citas');
}

/* ===== PERFIL ===== */
function renderPerfil() {
  const u = currentUser;

  const avatarEl = document.getElementById('perfil-avatar-letra');
  if (avatarEl) avatarEl.textContent = u.nombre.charAt(0).toUpperCase();

  const perfilNombre = document.getElementById('perfil-nombre');
  if (perfilNombre) perfilNombre.textContent = u.nombre;

  const perfilRol = document.getElementById('perfil-rol-badge');
  if (perfilRol) {
    const label = { admin:'Administrador', doctor:'Doctor / Enfermera', paciente:'Paciente' };
    perfilRol.textContent = label[u.rol];
    perfilRol.className = 'badge badge-' + u.rol;
  }

  const perfilEmail = document.getElementById('perfil-email');
  if (perfilEmail) perfilEmail.textContent = u.email;

  const perfilUser = document.getElementById('perfil-username');
  if (perfilUser) perfilUser.textContent = u.username || u.nombre;

  // Mis citas
  const tbody = document.getElementById('tbody-mis-citas');
  if (tbody) {
    let misCitas = [];
    if (u.rol === 'paciente') {
      const p = PACIENTES.find(p => p.email === u.email);
      misCitas = p ? CITAS.filter(c => c.pacienteId === p.id) : [];
    } else if (u.rol === 'doctor') {
      const m = MEDICOS.find(m => m.email === u.email);
      misCitas = m ? CITAS.filter(c => c.medicoId === m.id) : [];
    } else {
      misCitas = CITAS.slice(0, 5);
    }
    tbody.innerHTML = misCitas.map(c => {
      const p = PACIENTES.find(p => p.id === c.pacienteId);
      const m = MEDICOS.find(m => m.id === c.medicoId);
      return `<tr>
        <td>${m ? 'Dr/Dra. '+m.apellidos : '-'}</td>
        <td>${formatFecha(c.fecha)}</td>
        <td>${c.hora}</td>
        <td><span class="badge ${badgeEstado(c.estado)}">${c.estado}</span></td>
      </tr>`;
    }).join('') || '<tr><td colspan="4" style="text-align:center;color:var(--text-muted);padding:2rem">No hay citas registradas</td></tr>';
  }
}

/* ===== BÚSQUEDA / FILTROS ===== */
function filterTable(tabla) {
  if (tabla === 'citas') {
    const q   = document.getElementById('search-citas').value.toLowerCase();
    const est = document.getElementById('filter-estado-cita').value;
    // Base: filtrar por médico si es doctor
    let base = [...CITAS];
    if (currentUser.rol === 'doctor') {
      const mDoc = MEDICOS.find(m => m.email === currentUser.email);
      if (mDoc) base = base.filter(c => c.medicoId === mDoc.id);
    }
    const lista = base.filter(c => {
      const p = PACIENTES.find(p => p.id === c.pacienteId);
      const m = MEDICOS.find(m => m.id === c.medicoId);
      const texto = `${p?.nombres} ${p?.apellidos} ${m?.apellidos} ${c.especialidad}`.toLowerCase();
      return texto.includes(q) && (!est || c.estado === est);
    });
    renderTablaCitas(lista);
  }
  if (tabla === 'pacientes') {
    const q = document.getElementById('search-pacientes').value.toLowerCase();
    const lista = PACIENTES.filter(p =>
      `${p.nombres} ${p.apellidos} ${p.cedula} ${p.email}`.toLowerCase().includes(q)
    );
    const tbody = document.getElementById('tbody-pacientes');
    tbody.innerHTML = lista.length
      ? lista.map(buildPacienteRow).join('')
      : `<tr><td colspan="7" class="empty-state"><i class="fas fa-search"></i>Sin resultados para "${q}"</td></tr>`;
  }
}

/* ===== MODALES ===== */
function openModal(id) {
  if (id === 'modal-cita') {
    const selPac = document.getElementById('cita-paciente');
    const selMed = document.getElementById('cita-medico');
    selPac.innerHTML = '<option value="">-- Seleccione paciente --</option>' +
      PACIENTES.filter(p => (p.estado || 'activo') === 'activo')
        .map(p => `<option value="${p.id}">${p.nombres} ${p.apellidos} (${p.cedula})</option>`).join('');

    // Si el usuario es doctor, pre-asignar SU medico y bloquear el select
    if (currentUser.rol === 'doctor') {
      const mDoc = MEDICOS.find(m => m.email === currentUser.email);
      if (mDoc) {
        selMed.innerHTML = `<option value="${mDoc.id}">${mDoc.nombres} ${mDoc.apellidos} — ${mDoc.especialidad}</option>`;
        selMed.value = mDoc.id;
        selMed.disabled = true;
        const esp = document.getElementById('cita-especialidad');
        if (esp) esp.value = mDoc.especialidad;
      }
    } else {
      selMed.disabled = false;
      selMed.innerHTML = '<option value="">-- Seleccione doctor --</option>' +
        MEDICOS.filter(m => (m.estado || 'activo') === 'activo')
          .map(m => `<option value="${m.id}">${m.nombres} ${m.apellidos} — ${m.especialidad}</option>`).join('');
    }

    // Fecha minima = hoy
    document.getElementById('cita-fecha').min = new Date().toISOString().split('T')[0];
    if (!document.getElementById('modal-cita').dataset.editId) {
      document.getElementById('cita-paciente').value = '';
      document.getElementById('cita-fecha').value    = '';
      document.getElementById('cita-hora').value     = '';
      document.getElementById('cita-estado').value   = 'Pendiente';
      document.getElementById('cita-motivo').value   = '';
      document.querySelector('#modal-cita .modal-header h3').innerHTML = '<i class="fas fa-calendar-plus"></i> Nueva Cita';
    }
  }
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('hidden');
  el.setAttribute('aria-hidden','false');
  // Cerrar al hacer clic en el overlay
  el._overlayHandler = (e) => { if (e.target === el) closeModal(id); };
  el.addEventListener('click', el._overlayHandler);
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('hidden');
  el.setAttribute('aria-hidden','true');
  if (el._overlayHandler) el.removeEventListener('click', el._overlayHandler);
}

/* ===== NOTIFICACIONES ===== */
function showNotifications() {
  const notifs = [
    { icon:'fa-calendar-plus', color:'bg-blue', title:'Nueva cita registrada', sub:'Gabriela Jiménez — Hoy 09:00' },
    { icon:'fa-clock', color:'bg-orange', title:'Cita próxima en 30 min', sub:'Luis Pérez — Odontología' },
    { icon:'fa-check-circle', color:'bg-green', title:'Cita completada', sub:'Ana Martínez — Enfermería' },
  ];
  document.getElementById('notif-list').innerHTML = notifs.map(n => `
    <div class="notif-item">
      <div class="notif-icon ${n.color}"><i class="fas ${n.icon}"></i></div>
      <div class="notif-text"><strong>${n.title}</strong><span>${n.sub}</span></div>
    </div>
  `).join('');
  openModal('modal-notif');
}

/* ===== TOAST ===== */
let _toastTimer = null;
function showToast(msg, tipo = 'success') {
  const t = document.getElementById('toast');
  const icons = { success:'fa-circle-check', error:'fa-circle-xmark', warning:'fa-triangle-exclamation', info:'fa-circle-info' };
  t.innerHTML = `<i class="fas ${icons[tipo] || 'fa-circle-info'}"></i><span>${msg}</span>`;
  t.className = `toast ${tipo}`;
  if (_toastTimer) clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => { t.classList.add('hidden'); _toastTimer = null; }, 3500);
}

/* ===== HELPERS ===== */
function badgeEstado(estado) {
  return { Pendiente:'badge-pending', Confirmada:'badge-confirmed', Completada:'badge-done', Cancelada:'badge-cancelled' }[estado] || '';
}

function formatFecha(f) {
  if (!f) return '-';
  const [y,m,d] = f.split('-');
  const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  return `${d} ${meses[parseInt(m)-1]} ${y}`;
}

/* ===== TOGGLE SWITCH ACTIVO/INACTIVO ===== */
function buildToggleHTML(tipo, id, estado) {
  const isActive = estado === 'activo';
  return `<button class="status-toggle" onclick="toggleEstado('${tipo}', ${id})" title="${isActive ? 'Desactivar' : 'Activar'}">
    <div class="toggle-track ${isActive ? 'active' : ''}">
      <div class="toggle-thumb">
        <i class="fas ${isActive ? 'fa-check' : 'fa-xmark'}"></i>
      </div>
    </div>
    <span class="toggle-label ${isActive ? 'lbl-active' : 'lbl-inactive'}">${isActive ? 'Activo' : 'Inactivo'}</span>
  </button>`;
}

async function toggleEstado(tipo, id) {
  const mapas = {
    pacientes: { arr: PACIENTES, label: 'Paciente', render: renderPacientes },
    medicos:   { arr: MEDICOS,   label: 'Médico',   render: renderMedicos },
    usuarios:  { arr: USUARIOS,  label: 'Usuario',  render: renderUsuarios },
  };
  const conf = mapas[tipo];
  if (!conf) return;

  const item = conf.arr.find(x => x.id === id);
  if (!item) return;

  const isActive = (item.estado || 'activo') === 'activo';
  const accion = isActive ? 'desactivar' : 'activar';

  const ok = await showConfirm(
    `¿Desea ${accion} este ${conf.label.toLowerCase()}?`,
    isActive ? 'Desactivar' : 'Activar',
    isActive
      ? 'background:linear-gradient(135deg,#ef4444,#b91c1c)'
      : 'background:linear-gradient(135deg,#22c55e,#16a34a)'
  );
  if (!ok) return;

  // Intentar API PHP
  try {
    const res = await fetch(`${API_BASE}${tipo}.php?action=toggle&id=${id}`, { method: 'PUT' });
    const data = await res.json();
    if (data.success) {
      item.estado = data.estado;
    }
  } catch(e) {
    // Fallback local si no hay servidor PHP
    item.estado = isActive ? 'inactivo' : 'activo';
  }

  conf.render();
  showToast(`${conf.label} ${item.estado === 'activo' ? 'activado' : 'desactivado'} correctamente`, 'success');
}

/* ===== CERRAR MODALES CON ESC ===== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay:not(.hidden)').forEach(m => m.classList.add('hidden'));
  }
});

/* ===== AUTO ESPECIALIDAD ===== */
function autoEspecialidad() {
  const selMed = document.getElementById('cita-medico');
  const medId  = parseInt(selMed?.value);
  const m = MEDICOS.find(m => m.id === medId);
  const esp = document.getElementById('cita-especialidad');
  if (esp) esp.value = m ? m.especialidad : '';
}

/* ===== CALENDARIO ===== */
let _calYear  = new Date().getFullYear();
let _calMonth = new Date().getMonth(); // 0-indexed

function renderCalendario() {
  const cont = document.getElementById('calendario-container');
  if (!cont) return;

  const MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
                 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const DIAS  = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];

  const year  = _calYear;
  const month = _calMonth;
  const primerDia  = new Date(year, month, 1).getDay(); // 0=Dom
  const diasMes    = new Date(year, month + 1, 0).getDate();
  const hoy        = new Date();
  const esHoyMes   = hoy.getFullYear() === year && hoy.getMonth() === month;

  // Agrupar citas por fecha del mes actual (filtrar por doctor si aplica)
  let citasFiltradas = [...CITAS];
  if (currentUser && currentUser.rol === 'doctor') {
    const mDoc = MEDICOS.find(m => m.email === currentUser.email);
    if (mDoc) citasFiltradas = citasFiltradas.filter(c => c.medicoId === mDoc.id);
  }
  const citasPorDia = {};
  citasFiltradas.forEach(c => {
    const [cy, cm, cd] = c.fecha.split('-').map(Number);
    if (cy === year && cm - 1 === month) {
      if (!citasPorDia[cd]) citasPorDia[cd] = [];
      citasPorDia[cd].push(c);
    }
  });

  // Stats del mes
  const citasMes   = citasFiltradas.filter(c => { const [cy,cm] = c.fecha.split('-'); return +cy===year && +cm-1===month; });
  const totalMes   = citasMes.length;
  const pendMes    = citasMes.filter(c => c.estado==='Pendiente').length;
  const confMes    = citasMes.filter(c => c.estado==='Confirmada').length;
  const compMes    = citasMes.filter(c => c.estado==='Completada').length;

  // Construir grid
  let celdas = '';
  // Días vacíos antes del primero
  for (let i = 0; i < primerDia; i++) celdas += `<div class="cal-day cal-day--empty"></div>`;

  for (let d = 1; d <= diasMes; d++) {
    const esHoy   = esHoyMes && hoy.getDate() === d;
    const citasDia = citasPorDia[d] || [];
    const maxShow = 3;
    const extras  = citasDia.length - maxShow;

    const chips = citasDia.slice(0, maxShow).map(c => {
      const p = PACIENTES.find(p => p.id === c.pacienteId);
      const nombre = p ? p.nombres.split(' ')[0] + ' ' + p.apellidos.split(' ')[0] : 'Paciente';
      const clsMap = { Pendiente:'cal-chip--pending', Confirmada:'cal-chip--confirmed', Completada:'cal-chip--done', Cancelada:'cal-chip--cancelled' };
      return `<div class="cal-chip ${clsMap[c.estado]||''}" title="${nombre} — ${c.hora} — ${c.estado}">${c.hora} ${nombre}</div>`;
    }).join('');

    const extrasHtml = extras > 0 ? `<div class="cal-chip cal-chip--more">+${extras} más</div>` : '';

    celdas += `
      <div class="cal-day${esHoy ? ' cal-day--today' : ''}${citasDia.length > 0 ? ' cal-day--has-events' : ''}"
           onclick="${citasDia.length > 0 ? `verCitasDelDia(${d},${month+1},${year})` : ''}">
        <div class="cal-day-num">${d}</div>
        <div class="cal-events">${chips}${extrasHtml}</div>
      </div>`;
  }

  cont.innerHTML = `
    <!-- Navegación -->
    <div class="cal-nav">
      <button class="cal-nav-btn" onclick="navCalendario(-1)"><i class="fas fa-chevron-left"></i></button>
      <h3 class="cal-month-title">${MESES[month]} ${year}</h3>
      <button class="cal-nav-btn" onclick="navCalendario(1)"><i class="fas fa-chevron-right"></i></button>
      <button class="cal-today-btn" onclick="navCalendarioHoy()"><i class="fas fa-crosshairs"></i> Hoy</button>
    </div>

    <!-- Mini stats del mes -->
    <div class="cal-stats">
      <div class="cal-stat"><span class="cal-stat-num">${totalMes}</span><span class="cal-stat-label">Total</span></div>
      <div class="cal-stat cal-stat--confirmed"><span class="cal-stat-num">${confMes}</span><span class="cal-stat-label">Confirmadas</span></div>
      <div class="cal-stat cal-stat--pending"><span class="cal-stat-num">${pendMes}</span><span class="cal-stat-label">Pendientes</span></div>
      <div class="cal-stat cal-stat--done"><span class="cal-stat-num">${compMes}</span><span class="cal-stat-label">Completadas</span></div>
    </div>

    <!-- Cabecera días de la semana -->
    <div class="cal-grid">
      ${DIAS.map(d => `<div class="cal-header-day">${d}</div>`).join('')}
      ${celdas}
    </div>

    <!-- Leyenda -->
    <div class="cal-legend">
      <span class="cal-chip cal-chip--confirmed" style="pointer-events:none">Confirmada</span>
      <span class="cal-chip cal-chip--pending"   style="pointer-events:none">Pendiente</span>
      <span class="cal-chip cal-chip--done"      style="pointer-events:none">Completada</span>
      <span class="cal-chip cal-chip--cancelled" style="pointer-events:none">Cancelada</span>
    </div>
  `;
}

function navCalendario(dir) {
  _calMonth += dir;
  if (_calMonth > 11) { _calMonth = 0;  _calYear++; }
  if (_calMonth < 0)  { _calMonth = 11; _calYear--; }
  renderCalendario();
}

function navCalendarioHoy() {
  _calYear  = new Date().getFullYear();
  _calMonth = new Date().getMonth();
  renderCalendario();
}

function verCitasDelDia(dia, mes, anio) {
  const fechaStr = `${anio}-${String(mes).padStart(2,'0')}-${String(dia).padStart(2,'0')}`;
  let lista = CITAS.filter(c => c.fecha === fechaStr);
  if (currentUser && currentUser.rol === 'doctor') {
    const mDoc = MEDICOS.find(m => m.email === currentUser.email);
    if (mDoc) lista = lista.filter(c => c.medicoId === mDoc.id);
  }
  if (!lista.length) return;

  const MESES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const titulo = `${dia} de ${MESES[mes-1]} de ${anio}`;

  document.getElementById('detalle-cita-content').innerHTML = `
    <p style="color:var(--text-muted);font-size:.8rem;margin-bottom:1rem;font-weight:600;text-transform:uppercase;letter-spacing:.05em">
      <i class="fas fa-calendar-day" style="color:var(--primary)"></i> ${titulo}
    </p>
    ${lista.map(c => {
      const p = PACIENTES.find(p => p.id === c.pacienteId);
      const m = MEDICOS.find(m => m.id === c.medicoId);
      return `
        <div style="background:var(--bg);border-radius:10px;padding:.85rem;margin-bottom:.6rem;border-left:3px solid var(--primary)">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.4rem">
            <strong style="font-size:.9rem">${p ? p.nombres+' '+p.apellidos : '-'}</strong>
            <span class="badge ${badgeEstado(c.estado)}">${c.estado}</span>
          </div>
          <div style="font-size:.78rem;color:var(--text-muted);display:flex;gap:1rem;flex-wrap:wrap">
            <span><i class="fas fa-clock" style="color:var(--primary)"></i> ${c.hora}</span>
            <span><i class="fas fa-user-doctor" style="color:var(--secondary)"></i> ${m ? 'Dr/Dra. '+m.apellidos : '-'}</span>
            <span><i class="fas fa-stethoscope" style="color:var(--accent)"></i> ${c.especialidad}</span>
          </div>
          <div style="font-size:.78rem;margin-top:.4rem;color:var(--text-muted)">
            <i class="fas fa-notes-medical" style="color:var(--primary)"></i> ${c.motivo}
          </div>
        </div>`;
    }).join('')}
  `;
  document.querySelector('#modal-detalle-cita .modal-header h3').innerHTML =
    `<i class="fas fa-calendar-day"></i> Citas del ${titulo}`;
  openModal('modal-detalle-cita');
}

/* =================================================================
   CONSULTA MÉDICA
   ================================================================= */
let _consultaCitaId = null;
let _medCounter = 0;

function abrirConsulta(citaId) {
  const c = CITAS.find(c => c.id === citaId);
  if (!c) return;
  const p = PACIENTES.find(p => p.id === c.pacienteId);
  const m = MEDICOS.find(m => m.id === c.medicoId);
  _consultaCitaId = citaId;
  _medCounter = 0;

  // Llenar info del paciente
  document.getElementById('consulta-info').innerHTML = `
    <div class="consulta-info-item">
      <span class="ci-label">Paciente</span>
      <span class="ci-value">${p ? p.nombres+' '+p.apellidos : '-'}</span>
    </div>
    <div class="consulta-info-item">
      <span class="ci-label">Cédula</span>
      <span class="ci-value">${p ? p.cedula : '-'}</span>
    </div>
    <div class="consulta-info-item">
      <span class="ci-label">Doctor</span>
      <span class="ci-value">${m ? 'Dr/Dra. '+m.nombres+' '+m.apellidos : '-'}</span>
    </div>
    <div class="consulta-info-item">
      <span class="ci-label">Especialidad</span>
      <span class="ci-value">${c.especialidad}</span>
    </div>
    <div class="consulta-info-item">
      <span class="ci-label">Fecha</span>
      <span class="ci-value">${formatFecha(c.fecha)}</span>
    </div>
    <div class="consulta-info-item">
      <span class="ci-label">Hora</span>
      <span class="ci-value">${c.hora}</span>
    </div>
    <div class="consulta-info-item">
      <span class="ci-label">Motivo</span>
      <span class="ci-value">${c.motivo}</span>
    </div>
    <div class="consulta-info-item">
      <span class="ci-label">Observaciones</span>
      <span class="ci-value">${p && p.observaciones ? p.observaciones : 'Ninguna'}</span>
    </div>
  `;

  // Limpiar diagnóstico y medicamentos
  document.getElementById('consulta-diagnostico').value = c.diagnostico || '';
  document.getElementById('tbody-meds').innerHTML = '';
  updateMedsEmpty();

  // Si ya tiene medicamentos guardados, cargarlos
  if (c.medicamentos && c.medicamentos.length > 0) {
    c.medicamentos.forEach(med => addMedicamento(med));
  }

  openModal('modal-consulta');
}

function addMedicamento(med = {}) {
  _medCounter++;
  const n = _medCounter;
  const tbody = document.getElementById('tbody-meds');
  const tr = document.createElement('tr');
  tr.id = `med-row-${n}`;
  tr.innerHTML = `
    <td style="width:32px;text-align:center;font-weight:700;color:var(--text-muted)">${n}</td>
    <td><input type="text" id="med-nombre-${n}" placeholder="Ej: Amoxicilina 500mg" value="${med.nombre||''}" /></td>
    <td style="width:100px"><input type="text" id="med-dosis-${n}" placeholder="Ej: 1 cáp." value="${med.dosis||''}" /></td>
    <td style="width:120px">
      <select id="med-frec-${n}">
        <option value="Cada 8 horas" ${(med.frecuencia||'')==='Cada 8 horas'?'selected':''}>Cada 8 h</option>
        <option value="Cada 12 horas" ${(med.frecuencia||'')==='Cada 12 horas'?'selected':''}>Cada 12 h</option>
        <option value="Cada 24 horas" ${(med.frecuencia||'')==='Cada 24 horas'?'selected':''}>Cada 24 h</option>
        <option value="Al despertar" ${(med.frecuencia||'')==='Al despertar'?'selected':''}>Al despertar</option>
        <option value="Con cada comida" ${(med.frecuencia||'')==='Con cada comida'?'selected':''}>Con comida</option>
        <option value="Al dormir" ${(med.frecuencia||'')==='Al dormir'?'selected':''}>Al dormir</option>
      </select>
    </td>
    <td style="width:80px"><input type="number" id="med-dias-${n}" placeholder="7" min="1" max="365" value="${med.dias||''}" /></td>
    <td><input type="text" id="med-inst-${n}" placeholder="Tomar con agua, después de comer..." value="${med.instrucciones||''}" /></td>
    <td style="width:36px">
      <button class="btn-del-med" onclick="removeMedicamento(${n})" title="Quitar"><i class="fas fa-xmark"></i></button>
    </td>
  `;
  tbody.appendChild(tr);
  updateMedsEmpty();
}

function removeMedicamento(n) {
  document.getElementById(`med-row-${n}`)?.remove();
  updateMedsEmpty();
}

function updateMedsEmpty() {
  const tbody = document.getElementById('tbody-meds');
  const empty = document.getElementById('meds-empty');
  const tableWrap = document.querySelector('#modal-consulta .table-wrapper');
  const hasRows = tbody && tbody.children.length > 0;
  if (empty) empty.style.display = hasRows ? 'none' : 'block';
  if (tableWrap) tableWrap.style.display = hasRows ? '' : 'none';
}

function getMedicamentosFromForm() {
  const rows = document.querySelectorAll('#tbody-meds tr');
  const meds = [];
  rows.forEach(row => {
    const n = row.id.replace('med-row-','');
    const nombre = document.getElementById(`med-nombre-${n}`)?.value?.trim();
    if (!nombre) return;
    meds.push({
      nombre,
      dosis:        document.getElementById(`med-dosis-${n}`)?.value?.trim() || '',
      frecuencia:   document.getElementById(`med-frec-${n}`)?.value || '',
      dias:         document.getElementById(`med-dias-${n}`)?.value || '',
      instrucciones:document.getElementById(`med-inst-${n}`)?.value?.trim() || '',
    });
  });
  return meds;
}

function guardarConsulta() {
  const c = CITAS.find(c => c.id === _consultaCitaId);
  if (!c) return;
  c.diagnostico    = document.getElementById('consulta-diagnostico').value.trim();
  c.medicamentos   = getMedicamentosFromForm();
  c.estado         = 'Completada';
  closeModal('modal-consulta');
  showToast('Consulta guardada correctamente', 'success');
  renderCitas();
}

/* =================================================================
   RECETA PDF (ventana de impresión)
   ================================================================= */
function descargarRecipe() {
  const c = CITAS.find(c => c.id === _consultaCitaId);
  if (!c) return;
  const p = PACIENTES.find(p => p.id === c.pacienteId);
  const m = MEDICOS.find(m => m.id === c.medicoId);
  const meds = getMedicamentosFromForm();
  const diagnostico = document.getElementById('consulta-diagnostico').value.trim();
  const fecha = new Date().toLocaleDateString('es-VE', { weekday:'long', year:'numeric', month:'long', day:'numeric' });

  const medsRows = meds.length
    ? meds.map((med, i) => `
        <tr>
          <td style="text-align:center;font-weight:700;color:#1a6fa8">${i+1}</td>
          <td><strong>${med.nombre}</strong></td>
          <td>${med.dosis}</td>
          <td>${med.frecuencia}</td>
          <td>${med.dias ? med.dias+' días' : '-'}</td>
          <td style="font-size:11px;color:#555">${med.instrucciones}</td>
        </tr>`).join('')
    : `<tr><td colspan="6" style="text-align:center;color:#999;padding:1rem">No se recetaron medicamentos</td></tr>`;

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <title>Receta Médica — ${p ? p.nombres+' '+p.apellidos : 'Paciente'}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Inter',sans-serif;color:#1a1a2e;background:#fff;padding:0}
    .page{width:210mm;min-height:297mm;margin:0 auto;padding:18mm 20mm;position:relative}
    /* Encabezado */
    .header{display:flex;align-items:center;justify-content:space-between;border-bottom:3px solid #1a6fa8;padding-bottom:14px;margin-bottom:16px}
    .header-left{display:flex;align-items:center}
    .header-right{text-align:right}
    .recipe-label{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#1a6fa8;background:#eff6ff;padding:3px 10px;border-radius:20px;display:inline-block}
    .recipe-date{font-size:10px;color:#666;margin-top:5px}
    /* Info grid */
    .info-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;background:#f8faff;border:1px solid #dbeafe;border-radius:10px;padding:12px 16px;margin-bottom:16px}
    .info-item{display:flex;flex-direction:column;gap:2px}
    .info-label{font-size:9px;font-weight:700;color:#1a6fa8;text-transform:uppercase;letter-spacing:.5px}
    .info-value{font-size:12px;font-weight:600;color:#1a1a2e}
    /* Diagnóstico */
    .section-title{font-size:11px;font-weight:700;color:#0b1f35;text-transform:uppercase;letter-spacing:.5px;border-left:3px solid #1a6fa8;padding-left:8px;margin-bottom:8px}
    .diagnosis-box{background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:10px 14px;font-size:12px;color:#431407;line-height:1.6;margin-bottom:16px;min-height:48px}
    /* Tabla medicamentos */
    table{width:100%;border-collapse:collapse;margin-bottom:20px;font-size:11px}
    th{background:#0b1f35;color:#fff;padding:7px 9px;text-align:left;font-size:9px;text-transform:uppercase;letter-spacing:.4px}
    td{padding:7px 9px;border-bottom:1px solid #e2e8f0;vertical-align:top}
    tr:nth-child(even) td{background:#f8faff}
    /* Firma */
    .firma-section{display:flex;justify-content:flex-end;margin-top:20px}
    .firma-box{text-align:center;width:200px}
    .firma-line{border-top:1.5px solid #0b1f35;padding-top:6px;margin-top:40px}
    .firma-name{font-size:12px;font-weight:700;color:#0b1f35}
    .firma-esp{font-size:10px;color:#666}
    /* Footer */
    .footer{position:absolute;bottom:14mm;left:20mm;right:20mm;border-top:1px solid #e2e8f0;padding-top:8px;display:flex;justify-content:space-between;font-size:9px;color:#999}
    .rx-symbol{font-size:36px;font-weight:800;color:#1a6fa8;opacity:.08;position:absolute;top:24mm;right:20mm;line-height:1}
    @media print{.page{margin:0;padding:14mm 16mm}body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
  </style>
</head>
<body>
<div class="page">
  <div class="rx-symbol">Rx</div>
  <div class="header">
    <div class="header-left">
      <img src="logo-mediseniat.svg" alt="MediSENIAT" style="height:80px;width:auto;display:block;" />
    </div>
    <div class="header-right">
      <div class="recipe-label">Receta Médica</div>
      <div class="recipe-date">${fecha}</div>
    </div>
  </div>

  <div class="info-grid">
    <div class="info-item">
      <span class="info-label">Paciente</span>
      <span class="info-value">${p ? p.nombres+' '+p.apellidos : '-'}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Cédula de Identidad</span>
      <span class="info-value">${p ? p.cedula : '-'}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Departamento</span>
      <span class="info-value">${p ? p.depto : '-'}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Especialidad</span>
      <span class="info-value">${c.especialidad}</span>
    </div>
  </div>

  <div class="section-title">Diagnóstico</div>
  <div class="diagnosis-box">${diagnostico || 'Sin diagnóstico registrado.'}</div>

  <div class="section-title">Medicamentos Indicados</div>
  <table>
    <thead>
      <tr>
        <th style="width:30px">#</th>
        <th>Medicamento</th>
        <th style="width:80px">Dosis</th>
        <th style="width:110px">Frecuencia</th>
        <th style="width:60px">Duración</th>
        <th>Instrucciones</th>
      </tr>
    </thead>
    <tbody>${medsRows}</tbody>
  </table>

  <div class="firma-section">
    <div class="firma-box">
      <div class="firma-line">
        <div class="firma-name">${m ? m.nombres+' '+m.apellidos : currentUser.nombre}</div>
        <div class="firma-esp">${m ? m.especialidad : 'Médico'} — SENIAT</div>
      </div>
    </div>
  </div>

  <div class="footer">
    <span>MediSENIAT v2.1.0 — Sistema de Gestión de Citas Médicas</span>
    <span>Documento generado el ${new Date().toLocaleDateString('es-VE')}</span>
  </div>
</div>
<script>window.onload=()=>{window.print();window.onafterprint=()=>window.close();}<\/script>
</body>
</html>`;

  const win = window.open('', '_blank', 'width=900,height=700');
  win.document.write(html);
  win.document.close();
}

/* =================================================================
   REPORTES PDF
   ================================================================= */
function generarReportePDF(tipo) {
  const fecha = new Date().toLocaleDateString('es-VE', { year:'numeric', month:'long', day:'numeric' });
  let titulo = '', tabla = '', resumen = '';

  if (tipo === 'citas') {
    titulo = 'Reporte de Citas Médicas';
    const por = { Pendiente:0, Confirmada:0, Completada:0, Cancelada:0 };
    CITAS.forEach(c => por[c.estado] = (por[c.estado]||0)+1);
    resumen = `
      <div class="res-grid">
        <div class="res-card"><span class="res-num">${CITAS.length}</span><span class="res-lbl">Total de Citas</span></div>
        <div class="res-card" style="border-color:#bfdbfe;background:#eff6ff"><span class="res-num" style="color:#1d4ed8">${por.Confirmada}</span><span class="res-lbl">Confirmadas</span></div>
        <div class="res-card" style="border-color:#fde68a;background:#fffbeb"><span class="res-num" style="color:#92400e">${por.Pendiente}</span><span class="res-lbl">Pendientes</span></div>
        <div class="res-card" style="border-color:#bbf7d0;background:#f0fdf4"><span class="res-num" style="color:#166534">${por.Completada}</span><span class="res-lbl">Completadas</span></div>
        <div class="res-card" style="border-color:#fecaca;background:#fef2f2"><span class="res-num" style="color:#991b1b">${por.Cancelada}</span><span class="res-lbl">Canceladas</span></div>
      </div>`;
    tabla = `
      <table>
        <thead><tr><th>#</th><th>Paciente</th><th>Doctor</th><th>Especialidad</th><th>Fecha</th><th>Hora</th><th>Estado</th></tr></thead>
        <tbody>${CITAS.map((c,i)=>{
          const p=PACIENTES.find(p=>p.id===c.pacienteId);
          const m=MEDICOS.find(m=>m.id===c.medicoId);
          const cl={Pendiente:'#fffbeb',Confirmada:'#eff6ff',Completada:'#f0fdf4',Cancelada:'#fef2f2'};
          return `<tr style="background:${cl[c.estado]||''}">
            <td style="text-align:center">${i+1}</td>
            <td>${p?p.nombres+' '+p.apellidos:'-'}</td>
            <td>${m?'Dr/Dra. '+m.apellidos:'-'}</td>
            <td>${c.especialidad}</td>
            <td>${formatFecha(c.fecha)}</td>
            <td>${c.hora}</td>
            <td><strong>${c.estado}</strong></td>
          </tr>`;
        }).join('')}</tbody>
      </table>`;
  } else if (tipo === 'pacientes') {
    titulo = 'Reporte de Pacientes Registrados';
    resumen = `<div class="res-grid">
      <div class="res-card"><span class="res-num">${PACIENTES.length}</span><span class="res-lbl">Total Pacientes</span></div>
    </div>`;
    tabla = `
      <table>
        <thead><tr><th>#</th><th>Nombre</th><th>Cédula</th><th>Departamento</th><th>Email</th><th>Teléfono</th><th>Citas</th></tr></thead>
        <tbody>${PACIENTES.map((p,i)=>{
          const nCitas=CITAS.filter(c=>c.pacienteId===p.id).length;
          return `<tr>
            <td style="text-align:center">${i+1}</td>
            <td>${p.nombres+' '+p.apellidos}</td>
            <td>${p.cedula}</td>
            <td>${p.depto}</td>
            <td>${p.email}</td>
            <td>${p.telefono}</td>
            <td style="text-align:center;font-weight:700">${nCitas}</td>
          </tr>`;
        }).join('')}</tbody>
      </table>`;
  } else if (tipo === 'medicos') {
    titulo = 'Reporte de Personal Médico';
    resumen = `<div class="res-grid">
      <div class="res-card"><span class="res-num">${MEDICOS.length}</span><span class="res-lbl">Personal Total</span></div>
      <div class="res-card"><span class="res-num">${MEDICOS.filter(m=>m.rol==='Doctor').length}</span><span class="res-lbl">Doctores</span></div>
      <div class="res-card"><span class="res-num">${MEDICOS.filter(m=>m.rol==='Enfermera').length}</span><span class="res-lbl">Enfermeras</span></div>
    </div>`;
    tabla = `
      <table>
        <thead><tr><th>#</th><th>Nombre</th><th>Rol</th><th>Especialidad</th><th>Email</th><th>Citas Asignadas</th></tr></thead>
        <tbody>${MEDICOS.map((m,i)=>{
          const nC=CITAS.filter(c=>c.medicoId===m.id).length;
          return `<tr>
            <td style="text-align:center">${i+1}</td>
            <td>${m.nombres+' '+m.apellidos}</td>
            <td>${m.rol}</td>
            <td>${m.especialidad}</td>
            <td>${m.email}</td>
            <td style="text-align:center;font-weight:700">${nC}</td>
          </tr>`;
        }).join('')}</tbody>
      </table>`;
  }

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <title>${titulo}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Inter',sans-serif;color:#1a1a2e;background:#fff}
    .page{width:210mm;margin:0 auto;padding:16mm 18mm}
    .header{border-bottom:3px solid #1a6fa8;padding-bottom:12px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:flex-end}
    .header h1{font-size:20px;font-weight:800;color:#0b1f35}
    .header .sub{font-size:10px;color:#666;margin-top:2px}
    .header-right{text-align:right;font-size:10px;color:#666}
    .section-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#0b1f35;border-left:3px solid #1a6fa8;padding-left:8px;margin:14px 0 8px}
    .res-grid{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px}
    .res-card{flex:1;min-width:100px;border:1.5px solid #e2e8f0;border-radius:10px;padding:10px;text-align:center;background:#f8faff}
    .res-num{display:block;font-size:24px;font-weight:800;color:#0b1f35;line-height:1}
    .res-lbl{display:block;font-size:9px;color:#666;font-weight:600;text-transform:uppercase;margin-top:3px}
    table{width:100%;border-collapse:collapse;font-size:10px}
    th{background:#0b1f35;color:#fff;padding:6px 8px;text-align:left;font-size:9px;text-transform:uppercase;letter-spacing:.3px}
    td{padding:6px 8px;border-bottom:1px solid #e2e8f0}
    tr:hover td{background:#f1f5f9}
    .footer{margin-top:20px;border-top:1px solid #e2e8f0;padding-top:8px;display:flex;justify-content:space-between;font-size:9px;color:#999}
    @media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
  </style>
</head>
<body>
<div class="page">
  <div class="header">
    <div style="display:flex;align-items:center;gap:16px">
      <img src="logo-mediseniat.svg" alt="MediSENIAT" style="height:65px;width:auto;display:block;" />
      <div>
        <div style="font-size:14px;font-weight:800;color:#0b1f35">${titulo}</div>
        <div class="sub">Sistema de Gestión de Citas Médicas — MediSENIAT v2.1.0</div>
      </div>
    </div>
    <div class="header-right">
      <div>Generado por: <strong>${currentUser ? currentUser.nombre : 'Sistema'}</strong></div>
      <div>${fecha}</div>
    </div>
  </div>

  <div class="section-title">Resumen</div>
  ${resumen}

  <div class="section-title">Listado Detallado</div>
  ${tabla}

  <div class="footer">
    <span>MediSENIAT — Documento oficial. No requiere firma.</span>
    <span>Impreso el ${new Date().toLocaleString('es-VE')}</span>
  </div>
</div>
<script>window.onload=()=>{window.print();window.onafterprint=()=>window.close();}<\/script>
</body>
</html>`;

  const win = window.open('', '_blank', 'width=960,height=720');
  win.document.write(html);
  win.document.close();
}

/* =================================================================
   CONFIRM DIALOG PERSONALIZADO
   ================================================================= */
let _confirmResolve = null;

function showConfirm(msg, okLabel = 'Confirmar', okStyle = '') {
  document.getElementById('confirm-msg').textContent = msg;
  const btn = document.getElementById('confirm-ok-btn');
  const iconMap = { 'Desactivar':'fa-toggle-off', 'Activar':'fa-toggle-on', 'Eliminar':'fa-trash', 'Confirmar':'fa-check' };
  const icon = iconMap[okLabel] || 'fa-check';
  btn.innerHTML = `<i class="fas ${icon}"></i> ${okLabel}`;
  if (okStyle) btn.style.cssText = okStyle;
  else btn.style.cssText = 'background:linear-gradient(135deg,#ef4444,#b91c1c)';
  openModal('modal-confirm');
  return new Promise(res => { _confirmResolve = res; });
}

function resolveConfirm(val) {
  closeModal('modal-confirm');
  if (_confirmResolve) { _confirmResolve(val); _confirmResolve = null; }
}
