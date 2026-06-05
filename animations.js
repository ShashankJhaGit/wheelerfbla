/* ============================================================
   Wheeler High School FBLA — animations.js
   ============================================================ */

/* ── MEETING RECAPS DATA ─────────────────────────────────────
   To add a real recap: use key "YYYY-MM-DD"
   { recap: "Summary text...", slides: "https://..." }
   Leave slides: "" if not yet posted.
   ALL Wednesdays are clickable — entries without a key in this
   object will show placeholder text automatically.
   ──────────────────────────────────────────────────────────── */
const meetingRecaps = {
  // Add real recaps here as the year progresses, e.g.:
  // "2025-09-10": {
  //   recap: "Kick-off meeting! Introduced the officer team, reviewed the competitive events calendar, and discussed dues.",
  //   slides: "https://docs.google.com/presentation/d/YOUR_ID"
  // },
};

/* ── PLACEHOLDER text shown for any Wednesday with no recap entry */
const PLACEHOLDER_RECAP = "Recap coming soon! Check back after the meeting for a full summary of what was discussed, resources shared, and any upcoming announcements.";

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Sticky Navbar ────────────────────────────────────── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* ── 2. Mobile hamburger ─────────────────────────────────── */
  const hamburger  = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
    document.addEventListener('click', e => {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    });
  }

  /* ── 3. Scroll-reveal ────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(el => obs.observe(el));
  }

  /* ── 4. Leadership Profile Modal ────────────────────────── */
  const backdrop = document.getElementById('profileModal');
  if (backdrop) {
    const modalName   = backdrop.querySelector('#modalName');
    const modalRole   = backdrop.querySelector('#modalRole');
    const modalImg    = backdrop.querySelector('#modalImg');
    const modalBio    = backdrop.querySelector('#modalBio');
    const modalDuties = backdrop.querySelector('#modalDuties');
    const closeBtn    = backdrop.querySelector('.modal-close');

    const profileData = {
      state_officer: {
        name: 'State Officer', role: 'FBLA State Officer', img: 'state_officer.png',
        bio: 'Our State Officer represents Wheeler FBLA and the state of Georgia at the highest levels of FBLA competition and governance. They have demonstrated exceptional leadership, competed successfully at state and national conferences, and serve as an ambassador for our chapter.',
        duties: ['Represent Wheeler FBLA and Georgia FBLA at state events','Mentor chapter members competing at higher levels','Assist with chapter recruitment and engagement','Liaise between the chapter and state FBLA leadership'],
      },
      co_president_1: {
        name: 'Co-President', role: 'Co-President', img: 'co_president_1.png',
        bio: 'As one of our two Co-Presidents, this leader shares responsibility for overseeing all chapter operations, ensuring members are engaged, motivated, and prepared for competition and professional development.',
        duties: ['Co-preside over all chapter and officer meetings','Represent the chapter at district and state events','Coordinate with advisors on chapter goals and strategies','Motivate and support all officer positions'],
      },
      co_president_2: {
        name: 'Co-President', role: 'Co-President', img: 'co_president_2.png',
        bio: 'As one of our two Co-Presidents, this leader shares responsibility for overseeing all chapter operations, bringing a collaborative spirit and dedication to every initiative.',
        duties: ['Co-preside over all chapter and officer meetings','Represent the chapter at district and state events','Coordinate chapter partnerships and outreach','Support and develop officer team cohesion'],
      },
      vice_president: {
        name: 'Vice President', role: 'Vice President', img: 'vice_president.png',
        bio: 'The Vice President supports the Co-Presidents in all leadership duties and steps in whenever necessary. They play a key role in coordinating events, mentoring members, and maintaining chapter morale.',
        duties: ['Assist the Co-Presidents with chapter initiatives','Oversee committee assignments and progress','Help organize community service and outreach events','Facilitate communication between officer teams'],
      },
      treasurer: {
        name: 'Treasurer', role: 'Treasurer', img: 'treasurer.png',
        bio: "The Treasurer manages Wheeler FBLA's financial health with accuracy and transparency. They oversee budgets, track expenses, and ensure the chapter has the resources needed to thrive.",
        duties: ['Maintain and report on the chapter budget','Collect dues and track all transactions','Coordinate with the Fundraising Director on revenue goals','Prepare financial reports for officers and advisors'],
      },
      secretary: {
        name: 'Secretary', role: 'Secretary', img: 'secretary.png',
        bio: 'The Secretary ensures the operational backbone of Wheeler FBLA runs smoothly. Precise, organized, and reliable, they manage all documentation and correspondence.',
        duties: ['Record and distribute meeting minutes','Maintain accurate member attendance records','Handle chapter correspondence and email communications','Assist with registration for events and conferences'],
      },
      historian: {
        name: 'Historian', role: 'Historian', img: 'historian.png',
        bio: "The Historian captures and preserves the memories and milestones of Wheeler FBLA through photos, videos, and written records.",
        duties: ['Document meetings, events, and competitions','Manage photo and media archives','Create the end-of-year chapter scrapbook or recap','Assist with visual content for social media'],
      },
      ce_director_head: {
        name: 'Competitive Events Director', role: 'Competitive Events Director', img: 'ce_director_head.png',
        bio: "The Competitive Events Director leads the charge on preparing Wheeler FBLA members for competitions at the district, state, and national level. They oversee the entire competitive events program.",
        duties: ['Oversee all competitive event preparation and strategy','Coordinate with CE Coordinators to support members','Track competition registrations and deadlines','Organize mock judging sessions and practice rounds','Communicate competitive results and updates to chapter'],
      },
      reporter: {
        name: 'Reporter', role: 'Reporter', img: 'reporter.png',
        bio: "The Reporter is the voice of Wheeler FBLA — communicating our chapter's story to the school, community, and beyond.",
        duties: ['Write and distribute the chapter newsletter','Prepare press releases for local media and school','Announce upcoming events and results on school channels','Collaborate with the Historian on content creation'],
      },
      programs_director: {
        name: 'Programs Director', role: 'Programs Director', img: 'programs_director.png',
        bio: 'The Programs Director curates the educational and professional development experiences that define the Wheeler FBLA experience.',
        duties: ['Schedule and coordinate guest speakers and workshops','Plan meeting agendas and educational programming','Organize practice rounds and competitive event prep','Survey members to identify learning interests and needs'],
      },
      fundraising_director: {
        name: 'Fundraising Director', role: 'Fundraising Director', img: 'fundraising_director.png',
        bio: "The Fundraising Director is the chapter's creative engine for generating revenue through innovative campaigns.",
        duties: ['Plan and manage fundraising campaigns','Coordinate with sponsors and local businesses','Track fundraising progress and report to Treasurer','Motivate members to participate in fundraising efforts'],
      },
      ce_engagement_director: {
        name: 'Community Engagement Director', role: 'Community Engagement Director', img: 'ce_engagement_director.png',
        bio: "The Community Engagement Director leads Wheeler FBLA's outreach and service efforts, building bridges between our chapter and the local community.",
        duties: ['Plan and execute community service events','Build partnerships with local businesses and nonprofits','Track and report volunteer hours for members','Represent FBLA in school and community initiatives'],
      },
      ce_coordinator_1: {
        name: 'Competitive Events Coordinator', role: 'CE Coordinator', img: 'ce_coordinator_1.png',
        bio: 'Working under the Competitive Events Director, this Coordinator directly supports members in their event preparation with guidance, resources, and encouragement.',
        duties: ['Support members preparing for competitive events','Assist with practice sessions and feedback','Help track member event registrations','Coordinate with CE Director on preparation strategies'],
      },
      ce_coordinator_2: {
        name: 'Competitive Events Coordinator', role: 'CE Coordinator', img: 'ce_coordinator_2.png',
        bio: 'Working under the Competitive Events Director, this Coordinator directly supports members in their event preparation with guidance, resources, and encouragement.',
        duties: ['Support members preparing for competitive events','Assist with practice sessions and feedback','Help track member event registrations','Coordinate with CE Director on preparation strategies'],
      },
    };

    function openModal(key) {
      const data = profileData[key]; if (!data) return;
      modalName.textContent  = data.name;
      modalRole.textContent  = data.role;
      modalImg.src           = data.img;
      modalImg.alt           = data.name;
      modalBio.textContent   = data.bio;
      modalDuties.innerHTML  = data.duties.map(d => `<li>${d}</li>`).join('');
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeModal() { backdrop.classList.remove('open'); document.body.style.overflow = ''; }
    document.querySelectorAll('.profile-card[data-key]').forEach(c => c.addEventListener('click', () => openModal(c.dataset.key)));
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }

  /* ── 5. Home page events calendar (Wednesdays) ───────────── */
  const calEl = document.getElementById('fblaCalendar');
  if (calEl) {
    let cur = new Date(); cur.setDate(1);
    const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const lbl = calEl.querySelector('#calMonthLabel');
    const cells = calEl.querySelector('#calCells');

    function renderHomeCal() {
      const y = cur.getFullYear(), m = cur.getMonth();
      lbl.textContent = `${MONTHS[m]} ${y}`;
      const fd = new Date(y,m,1).getDay(), dim = new Date(y,m+1,0).getDate(), pd = new Date(y,m,0).getDate();
      const today = new Date();
      cells.innerHTML = '';
      let dc=1, nc=1;
      const total = Math.ceil((fd+dim)/7)*7;
      for (let i=0;i<total;i++) {
        const cell = document.createElement('div'); cell.className='cal-cell';
        let dn, cd;
        if (i<fd) { dn=pd-fd+i+1; cd=new Date(y,m-1,dn); cell.classList.add('other-month'); }
        else if (dc<=dim) { dn=dc; cd=new Date(y,m,dc++); if(cd.toDateString()===today.toDateString()) cell.classList.add('today'); }
        else { dn=nc++; cd=new Date(y,m+1,dn); cell.classList.add('other-month'); }
        const n=document.createElement('div'); n.className='cal-num'; n.textContent=dn; cell.appendChild(n);
        if (cd.getDay()===3 && !cell.classList.contains('other-month')) {
          const ev=document.createElement('div'); ev.className='cal-event'; ev.innerHTML='🕞 3:30pm<br>FBLA Meeting'; cell.appendChild(ev);
        }
        cells.appendChild(cell);
      }
    }
    calEl.querySelector('#calPrev').addEventListener('click', ()=>{ cur.setMonth(cur.getMonth()-1); renderHomeCal(); });
    calEl.querySelector('#calNext').addEventListener('click', ()=>{ cur.setMonth(cur.getMonth()+1); renderHomeCal(); });
    renderHomeCal();
  }

  /* ── 6. Google-Calendar-style RECAP calendar (Resources) ─── */
  const gcalWrapper = document.getElementById('gcalWrapper');
  if (gcalWrapper) {
    let gcalCur = new Date(); gcalCur.setDate(1);
    const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const LONG_MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const gcalLbl   = document.getElementById('gcalMonthLabel');
    const gcalCells = document.getElementById('gcalCells');
    const gcalPrev  = document.getElementById('gcalPrev');
    const gcalNext  = document.getElementById('gcalNext');

    // Popup elements
    const recapPopup      = document.getElementById('recapPopup');
    const recapPopupClose = document.getElementById('recapPopupClose');
    const recapDateText   = document.getElementById('recapPopupDateText');
    const recapText       = document.getElementById('recapPopupText');
    const recapSlides     = document.getElementById('recapPopupSlides');

    function padZ(n) { return String(n).padStart(2,'0'); }
    function toKey(y,m,d) { return `${y}-${padZ(m+1)}-${padZ(d)}`; }

    function openRecap(key, dateLabel) {
      const data = meetingRecaps[key] || {};
      recapDateText.textContent = dateLabel;
      recapText.textContent = data.recap && data.recap.trim() ? data.recap : PLACEHOLDER_RECAP;

      if (data.slides && data.slides.trim()) {
        recapSlides.innerHTML = `<a href="${data.slides}" target="_blank" rel="noopener" class="recap-slides-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          View Meeting Slides
        </a>`;
      } else {
        recapSlides.innerHTML = `<span class="recap-no-slides">📎 Slides not yet posted — check back soon!</span>`;
      }
      recapPopup.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeRecap() { recapPopup.classList.remove('open'); document.body.style.overflow = ''; }
    recapPopupClose.addEventListener('click', closeRecap);
    recapPopup.addEventListener('click', e => { if (e.target === recapPopup) closeRecap(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeRecap(); });

    function renderGcal() {
      const y = gcalCur.getFullYear(), m = gcalCur.getMonth();
      gcalLbl.textContent = `${MONTHS[m]} ${y}`;
      const fd  = new Date(y,m,1).getDay();
      const dim = new Date(y,m+1,0).getDate();
      const pd  = new Date(y,m,0).getDate();
      const today = new Date();
      gcalCells.innerHTML = '';
      let dc=1, nc=1;
      const total = Math.ceil((fd+dim)/7)*7;

      for (let i=0;i<total;i++) {
        const cell = document.createElement('div'); cell.className='gcal-cell';
        let dn, cd;
        if (i<fd) {
          dn = pd-fd+i+1; cd = new Date(y,m-1,dn); cell.classList.add('other-month');
        } else if (dc<=dim) {
          dn=dc; cd=new Date(y,m,dc++);
          if (cd.toDateString()===today.toDateString()) cell.classList.add('today');
        } else {
          dn=nc++; cd=new Date(y,m+1,dn); cell.classList.add('other-month');
        }

        // Date number
        const numEl = document.createElement('div'); numEl.className='gcal-date-num'; numEl.textContent=dn; cell.appendChild(numEl);

        // Wednesday pill — every Wednesday in current month
        if (cd.getDay()===3 && !cell.classList.contains('other-month')) {
          const key = toKey(y,m,dn);
          const dateLabel = cd.toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });

          const pill = document.createElement('div');
          pill.className = 'gcal-event-pill';
          pill.innerHTML = `<span class="pill-icon">🕞</span><span>3:30pm FBLA Meeting</span>`;
          pill.addEventListener('click', e => {
            e.stopPropagation();
            openRecap(key, dateLabel);
          });
          cell.appendChild(pill);
        }

        gcalCells.appendChild(cell);
      }
    }

    gcalPrev.addEventListener('click', ()=>{ gcalCur.setMonth(gcalCur.getMonth()-1); renderGcal(); });
    gcalNext.addEventListener('click', ()=>{ gcalCur.setMonth(gcalCur.getMonth()+1); renderGcal(); });
    renderGcal();
  }

  /* ── 7. Button ripple ────────────────────────────────────── */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = btn.getBoundingClientRect();
      const r = document.createElement('span');
      r.style.cssText=`position:absolute;border-radius:50%;background:rgba(255,255,255,.3);width:0;height:0;left:${e.clientX-rect.left}px;top:${e.clientY-rect.top}px;transform:translate(-50%,-50%);animation:ripple-anim .55s ease-out forwards;pointer-events:none;`;
      if (!btn.style.position||btn.style.position==='static'){btn.style.position='relative';btn.style.overflow='hidden';}
      btn.appendChild(r); setTimeout(()=>r.remove(),600);
    });
  });
  if (!document.getElementById('rippleStyle')) {
    const s=document.createElement('style'); s.id='rippleStyle';
    s.textContent=`@keyframes ripple-anim{to{width:200px;height:200px;opacity:0;}}`;
    document.head.appendChild(s);
  }

  /* ── 8. Hero stagger ─────────────────────────────────────── */
  document.querySelectorAll('.stagger-children > *').forEach((el,i) => {
    el.style.animationDelay=`${i*0.12}s`; el.classList.add('anim-fade-up');
  });

});