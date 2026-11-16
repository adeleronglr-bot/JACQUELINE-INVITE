const { useEffect, useMemo, useRef, useState } = React;

const inviteData = {
  girlName: "JACQUELINE",
  age: 9,
  subtitle: "Join us for a dreamy birthday celebration filled with wonder, laughter, sweet surprises and magical little moments.",
  dateLabel: "Saturday, 12 December 2026",
  timeLabel: "2:30pm - 6:30pm",
  venue: "Flat E, 3/F, Block 1, Grand Palisades",
  addressEn: "FLAT E, 3/F, BLOCK 1, GRAND PALISADES, NO. 8 SHAN YIN ROAD, TAI PO, NEW TERRITORIES, HONG KONG",
  addressZh: "新界山贤路8号大埔宝马山1座3E",
  dressCode: "Comfy party clothes in Lavender are perfect.",
  activities: [
    { emoji: "🎲", time: "14:45 - 15:45", title: "PINDOU", text: "A fun game session to kick off the party." },
    { emoji: "🎬", time: "15:45 - 16:45", title: "MOVIE", text: "A cosy movie break for everyone to relax together." },
    { emoji: "🧸", time: "16:45 - 17:15", title: "SQUISHIES", text: "Soft, cute and playful fun time." },
    { emoji: "🍽️", time: "17:15 - 18:00", title: "DINNER", text: "Family-style dinner at home." },
    { emoji: "🎂", time: "18:00 - 18:15", title: "BIRTHDAY CAKE", text: "Cake, candles and birthday wishes." },
    { emoji: "🎈", time: "18:15 - 18:30", title: "FREE PLAY", text: "A little extra time to play and enjoy the party." }
  ],
  mapUrl: "https://maps.google.com/?q=Flat+E+3%2FF+Block+1+Grand+Palisades+No.+8+Shan+Yin+Road+Tai+Po+Hong+Kong",
  hostName: "Adele",
  hostPhone: "69429985",
  rsvpText: "Please reply on WhatsApp.",
  rsvpHint: "Tap below to send your RSVP by WhatsApp."
};

function useCuteBirthdayMusic() {
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);
  const stepRef = useRef(0);
  const bootstrappedRef = useRef(false);
  const noiseBufferRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const arrangement = useMemo(
    () => [
      {
        duration: 3.2,
        events: [
          { at: 0.0, notes: [523.25, 659.25], duration: 1.5, velocity: 0.05 },
          { at: 0.42, notes: [783.99], duration: 1.05, velocity: 0.034 },
          { at: 0.95, notes: [659.25], duration: 0.95, velocity: 0.03 },
          { at: 0.0, notes: [261.63], duration: 2.0, velocity: 0.022 },
          { at: 1.55, notes: [392.0], duration: 1.25, velocity: 0.018 }
        ]
      },
      {
        duration: 3.0,
        events: [
          { at: 0.0, notes: [587.33, 698.46], duration: 1.35, velocity: 0.048 },
          { at: 0.45, notes: [880.0], duration: 0.92, velocity: 0.032 },
          { at: 1.0, notes: [698.46], duration: 0.82, velocity: 0.028 },
          { at: 0.0, notes: [293.66], duration: 1.95, velocity: 0.02 },
          { at: 1.42, notes: [440.0], duration: 1.08, velocity: 0.018 }
        ]
      },
      {
        duration: 3.15,
        events: [
          { at: 0.0, notes: [659.25, 783.99], duration: 1.45, velocity: 0.05 },
          { at: 0.48, notes: [987.77], duration: 0.96, velocity: 0.034 },
          { at: 0.98, notes: [783.99], duration: 0.86, velocity: 0.03 },
          { at: 0.0, notes: [329.63], duration: 2.0, velocity: 0.022 },
          { at: 1.54, notes: [493.88], duration: 1.05, velocity: 0.018 }
        ]
      },
      {
        duration: 3.35,
        events: [
          { at: 0.0, notes: [698.46, 880.0], duration: 1.55, velocity: 0.05 },
          { at: 0.52, notes: [1046.5], duration: 1.0, velocity: 0.034 },
          { at: 1.1, notes: [880.0], duration: 0.9, velocity: 0.03 },
          { at: 0.0, notes: [349.23], duration: 2.15, velocity: 0.022 },
          { at: 1.7, notes: [523.25], duration: 1.08, velocity: 0.018 }
        ]
      },
      {
        duration: 3.05,
        events: [
          { at: 0.0, notes: [659.25, 783.99], duration: 1.35, velocity: 0.048 },
          { at: 0.4, notes: [880.0], duration: 0.88, velocity: 0.03 },
          { at: 0.95, notes: [783.99], duration: 0.82, velocity: 0.028 },
          { at: 0.0, notes: [329.63], duration: 1.9, velocity: 0.02 },
          { at: 1.45, notes: [493.88], duration: 0.95, velocity: 0.016 }
        ]
      },
      {
        duration: 3.15,
        events: [
          { at: 0.0, notes: [587.33, 739.99], duration: 1.45, velocity: 0.048 },
          { at: 0.5, notes: [880.0], duration: 0.95, velocity: 0.03 },
          { at: 1.02, notes: [739.99], duration: 0.86, velocity: 0.028 },
          { at: 0.0, notes: [293.66], duration: 2.0, velocity: 0.02 },
          { at: 1.55, notes: [440.0], duration: 1.0, velocity: 0.016 }
        ]
      },
      {
        duration: 3.5,
        events: [
          { at: 0.0, notes: [523.25, 698.46], duration: 1.65, velocity: 0.05 },
          { at: 0.56, notes: [783.99], duration: 1.02, velocity: 0.032 },
          { at: 1.18, notes: [698.46], duration: 0.92, velocity: 0.03 },
          { at: 0.0, notes: [261.63], duration: 2.2, velocity: 0.022 },
          { at: 1.82, notes: [392.0], duration: 1.1, velocity: 0.016 }
        ]
      },
      {
        duration: 3.25,
        events: [
          { at: 0.0, notes: [493.88, 659.25], duration: 1.5, velocity: 0.048 },
          { at: 0.5, notes: [783.99], duration: 0.95, velocity: 0.03 },
          { at: 1.04, notes: [659.25], duration: 0.88, velocity: 0.028 },
          { at: 0.0, notes: [246.94], duration: 2.05, velocity: 0.02 },
          { at: 1.6, notes: [392.0], duration: 1.02, velocity: 0.016 }
        ]
      }
    ],
    []
  );

  function getNoiseBuffer(ctx) {
    if (noiseBufferRef.current) return noiseBufferRef.current;
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.03, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (data.length * 0.22));
    }
    noiseBufferRef.current = buffer;
    return buffer;
  }

  function playTone(freq, when, duration, volume = 0.03) {
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    const noteFilter = ctx.createBiquadFilter();
    noteFilter.type = "lowpass";
    noteFilter.frequency.setValueAtTime(3200, when);
    noteFilter.frequency.exponentialRampToValueAtTime(1200, when + duration * 0.6);
    noteFilter.Q.setValueAtTime(0.7, when);

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, when);
    masterGain.gain.linearRampToValueAtTime(volume, when + 0.012);
    masterGain.gain.exponentialRampToValueAtTime(Math.max(volume * 0.45, 0.0001), when + duration * 0.22);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, when + duration);

    const bodyGain = ctx.createGain();
    bodyGain.gain.setValueAtTime(0.6, when);
    const overtoneGain = ctx.createGain();
    overtoneGain.gain.setValueAtTime(0.18, when);
    const hammerGain = ctx.createGain();
    hammerGain.gain.setValueAtTime(0.12, when);
    hammerGain.gain.exponentialRampToValueAtTime(0.0001, when + 0.025);

    const body = ctx.createOscillator();
    body.type = "sine";
    body.frequency.setValueAtTime(freq, when);

    const upper = ctx.createOscillator();
    upper.type = "triangle";
    upper.frequency.setValueAtTime(freq * 2, when);
    upper.detune.setValueAtTime(3, when);

    const resonance = ctx.createOscillator();
    resonance.type = "sine";
    resonance.frequency.setValueAtTime(freq * 3, when);
    resonance.detune.setValueAtTime(-4, when);

    const hammer = ctx.createBufferSource();
    hammer.buffer = getNoiseBuffer(ctx);

    body.connect(bodyGain);
    upper.connect(overtoneGain);
    resonance.connect(overtoneGain);
    hammer.connect(hammerGain);

    bodyGain.connect(masterGain);
    overtoneGain.connect(masterGain);
    hammerGain.connect(masterGain);
    masterGain.connect(noteFilter);
    noteFilter.connect(ctx.destination);

    body.start(when);
    upper.start(when);
    resonance.start(when);
    hammer.start(when);

    body.stop(when + duration + 0.05);
    upper.stop(when + duration + 0.04);
    resonance.stop(when + duration + 0.03);
    hammer.stop(when + 0.03);
  }

  function playStep(step) {
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    const now = ctx.currentTime + 0.02;
    step.events.forEach(event => {
      event.notes.forEach((freq, index) => {
        playTone(freq, now + event.at + index * 0.035, event.duration, Math.max(event.velocity - index * 0.006, 0.012));
      });
    });
  }

  async function start() {
    const Ctx = window.AudioContext || window["webkitAudioContext"];
    if (!Ctx) return false;
    if (!audioCtxRef.current) audioCtxRef.current = new Ctx();
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") {
      try {
        await ctx.resume();
      } catch (error) {
        return false;
      }
    }
    if (ctx.state === "suspended") return false;
    if (timerRef.current) window.clearTimeout(timerRef.current);
    stepRef.current = 0;

    const queueNext = () => {
      const step = arrangement[stepRef.current % arrangement.length];
      playStep(step);
      stepRef.current += 1;
      timerRef.current = window.setTimeout(queueNext, step.duration * 1000);
    };

    queueNext();
    setPlaying(true);
    bootstrappedRef.current = true;
    return true;
  }

  function stop() {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setPlaying(false);
  }

  function toggle() {
    if (playing) stop();
    else start();
  }

  useEffect(() => {
    const ensureMusic = () => {
      if (!bootstrappedRef.current && playing) start();
    };

    window.addEventListener("pointerdown", ensureMusic, { once: true });
    window.addEventListener("touchstart", ensureMusic, { once: true });

    return () => {
      window.removeEventListener("pointerdown", ensureMusic);
      window.removeEventListener("touchstart", ensureMusic);
      stop();
    };
  }, []);

  return { playing, toggle };
}

function App() {
  const sections = {
    top: useRef(null),
    rsvp: useRef(null),
    details: useRef(null),
    fun: useRef(null),
    map: useRef(null)
  };
  const [activeTab, setActiveTab] = useState("top");
  const { playing, toggle } = useCuteBirthdayMusic();
  const guestName = useMemo(() => {
    const value = new URLSearchParams(window.location.search).get("guest");
    return value ? value.trim() : "";
  }, []);

  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [childName, setChildName] = useState("");
  const [attending, setAttending] = useState(null);
  const [allergies, setAllergies] = useState("");
  const [arrangement, setArrangement] = useState(null);
  const [notes, setNotes] = useState("");

  const formValid = attending !== null;

  function buildFormRsvpText() {
    const lines = [
      `Hello ${inviteData.hostName}, here is my RSVP for ${inviteData.girlName}'s birthday party.`,
      ""
    ];
    if (guestName) lines.push(`Invited guest: ${guestName}`);
    lines.push(`Child's name: ${childName || "-"}`);
    lines.push(`Will your child attend the party: ${attending === "yes" ? "Yes, we'll be there." : "Sorry, can't make it."}`);
    if (attending === "yes") {
      lines.push(`Food or nut allergies, or special dietary needs: ${allergies.trim() || "None"}`);
      lines.push(`Arrangement: ${arrangement === "stay" ? "Parent will stay" : arrangement === "dropoff" ? "Drop-off only" : "-"}`);
    }
    if (notes.trim()) lines.push(`Anything else we should know: ${notes.trim()}`);
    return lines.join("\n");
  }

  function submitRsvp() {
    if (!formValid) return;
    const phone = getWhatsappNumber();
    const text = encodeURIComponent(buildFormRsvpText());
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    setRsvpSubmitted(true);
  }

  function resetRsvp() {
    setRsvpSubmitted(false);
    setChildName("");
    setAttending(null);
    setAllergies("");
    setArrangement(null);
    setNotes("");
  }

  useEffect(() => {
    const refs = Object.entries(sections);
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveTab(visible.target.dataset.section);
      },
      { threshold: [0.35, 0.5, 0.8] }
    );

    refs.forEach(([, ref]) => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, []);

  function scrollToSection(key) {
    const node = sections[key]?.current;
    if (!node) return;
    node.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function buildShareText() {
    return [
      `${inviteData.girlName}'s ${inviteData.age}th Birthday Invitation`,
      `${inviteData.dateLabel} ${inviteData.timeLabel}`,
      `${inviteData.addressEn}`,
      window.location.href
    ].join("\n");
  }

  function getWhatsappNumber() {
    const digits = inviteData.hostPhone.replace(/\D/g, "");
    if (digits.length === 8) return `852${digits}`;
    return digits;
  }

  async function shareInvite() {
    const text = buildShareText();
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${inviteData.girlName}'s Birthday Invitation`,
          text,
          url: window.location.href
        });
        return;
      } catch (error) {}
    }
    openWhatsapp();
  }

  function openWhatsapp() {
    const text = encodeURIComponent(buildShareText());
    window.open(`https://wa.me/?text=${text}`, "_blank");
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied. You can now paste it into WhatsApp.");
    } catch (error) {
      alert("Copy failed. Please copy the page URL manually.");
    }
  }

  return (
    <div className="invite-app">
      <div className="bg-stars" />
      <div className="bg-balloons" aria-hidden="true">
        <div className="bg-balloon bg-balloon-1" />
        <div className="bg-balloon bg-balloon-2" />
        <div className="bg-balloon bg-balloon-3" />
        <div className="bg-balloon bg-balloon-4" />
        <div className="bg-balloon bg-balloon-5" />
      </div>
      <div className="dream-border" aria-hidden="true">
        <div className="frame-corner tl" />
        <div className="frame-corner tr" />
        <div className="frame-corner bl" />
        <div className="frame-corner br" />
        <div className="frame-balloon fb1" />
        <div className="frame-balloon fb2" />
        <div className="frame-balloon fb3" />
        <div className="frame-balloon fb4" />
        <div className="frame-balloon fb5" />
        <div className="frame-balloon fb6" />
        <div className="frame-balloon fb7" />
        <div className="frame-balloon fb8" />
        <div className="frame-balloon fb9" />
        <div className="frame-balloon fb10" />
        <div className="frame-balloon fb11" />
        <div className="frame-balloon fb12" />
        <div className="frame-bow b1" />
        <div className="frame-bow b2" />
      </div>

      <section className="hero" ref={sections.top} data-section="top">
        <div className="hero-shell">
          <div className="hero-ribbon">Jacqueline's Dreamy Birthday Party</div>

          <div className="hero-top">
          <div className="badge">Joyful Moments With Friends</div>
            <button className="music-btn" onClick={toggle}>
              {playing ? "Mute" : "Music"}
            </button>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">You Are Invited</div>
              {guestName ? <div className="eyebrow">For {guestName}</div> : null}
              <h1 className="hero-title hero-title-row">
                <span className="hero-name">{inviteData.girlName}</span>
                <span className="hero-turning">IS TURNING</span>
                <span className="hero-age">{inviteData.age}</span>
              </h1>
              <p className="hero-subtitle">{inviteData.subtitle}</p>

              <div className="pill-list">
                <div className="pill">Joyful Time Together</div>
                <div className="pill">Sweet Memories to Share</div>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <button className="share-btn" onClick={shareInvite}>Share on WhatsApp</button>
            <button className="ghost-btn" onClick={copyLink}>Copy Link</button>
          </div>
        </div>
      </section>

      <section className="section" ref={sections.rsvp} data-section="rsvp">
        <div className="section-title">
          <div>
            <h2>Coming to the party?</h2>
            <p>Let us know who's coming to celebrate!</p>
          </div>
          <div className="section-icon">💌</div>
        </div>

        {rsvpSubmitted ? (
          <div className="rsvp-result">
            <div className="rsvp-result-icon">🌸</div>
            <strong>Thank you for your reply!</strong>
            <span>Your RSVP has been sent to {inviteData.hostName} via WhatsApp. We can't wait to celebrate with you!</span>
            <div className="rsvp-actions">
              <button className="mini-btn" onClick={resetRsvp}>Submit another reply</button>
            </div>
          </div>
        ) : (
          <form className="rsvp-form" onSubmit={e => { e.preventDefault(); submitRsvp(); }}>
            <label className="field">
              <span className="field-label">Child's Name</span>
              <input
                type="text"
                className="field-input"
                value={childName}
                onChange={e => setChildName(e.target.value)}
                placeholder="Enter child's name"
                autoComplete="given-name"
              />
            </label>

            <div className="field">
              <span className="field-label">Will your child attend the party?</span>
              <div className="attend-options">
                <button
                  type="button"
                  className={`attend-btn ${attending === "yes" ? "active" : ""}`}
                  onClick={() => setAttending("yes")}
                >
                  Yes, we'll be there. ✨
                </button>
                <button
                  type="button"
                  className={`attend-btn ${attending === "no" ? "active" : ""}`}
                  onClick={() => setAttending("no")}
                >
                  Sorry, can't make it.
                </button>
              </div>
            </div>

            {attending === "yes" && (
              <>
                <label className="field">
                  <span className="field-label">Any food or nut allergies, or special dietary needs?</span>
                  <input
                    type="text"
                    className="field-input"
                    value={allergies}
                    onChange={e => setAllergies(e.target.value)}
                    placeholder="e.g. peanut allergy, vegetarian, gluten-free..."
                  />
                </label>

                <div className="field">
                  <span className="field-label">Arrangement (drop-off / stay)</span>
                  <div className="attend-options">
                    <button
                      type="button"
                      className={`attend-btn ${arrangement === "stay" ? "active" : ""}`}
                      onClick={() => setArrangement("stay")}
                    >
                      Parent will stay
                    </button>
                    <button
                      type="button"
                      className={`attend-btn ${arrangement === "dropoff" ? "active" : ""}`}
                      onClick={() => setArrangement("dropoff")}
                    >
                      Drop-off only
                    </button>
                  </div>
                </div>
              </>
            )}

            <label className="field">
              <span className="field-label">Anything else we should know? <em>(optional)</em></span>
              <textarea
                className="field-input field-textarea"
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="A little note for us..."
                rows={4}
              />
            </label>

            <button type="submit" className="submit-btn" disabled={!formValid}>
              Submit Reply
            </button>
            <p className="form-note">Your reply will be sent to {inviteData.hostName} on WhatsApp.</p>
          </form>
        )}
      </section>

      <section className="section" ref={sections.details} data-section="details">
        <div className="section-title">
          <div>
            <h2>Party Details</h2>
            <p>An afternoon filled with laughter, games and sweet celebration.</p>
          </div>
          <div className="section-icon">🎂</div>
        </div>

        <div className="detail-grid">
          <div className="detail-card">
            <div className="detail-label">Date</div>
            <div className="detail-value">{inviteData.dateLabel}</div>
          </div>
          <div className="detail-card">
            <div className="detail-label">Time</div>
            <div className="detail-value">{inviteData.timeLabel}</div>
          </div>
          <div className="detail-card full">
            <div className="detail-label">Address</div>
            <div className="detail-value">{inviteData.addressEn}</div>
          </div>
          <div className="detail-card full">
            <div className="detail-label">地址</div>
            <div className="detail-value">{inviteData.addressZh}</div>
          </div>
          <div className="detail-card full">
            <div className="detail-label">Dress Code</div>
            <div className="detail-value">{inviteData.dressCode}</div>
          </div>
        </div>
      </section>

      <section className="section" ref={sections.fun} data-section="fun">
        <div className="section-title">
          <div>
            <h2>Party Schedule</h2>
            <p>Guests are welcome from 2:30pm for a warm-up before activities begin at 2:45pm.</p>
          </div>
          <div className="section-icon">✨</div>
        </div>

        <div className="activity-list">
          {inviteData.activities.map(item => (
            <div className="activity-card" key={item.title}>
              <div className="activity-emoji">{item.emoji}</div>
              <div>
                <div className="activity-time">{item.time}</div>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" ref={sections.map} data-section="map">
        <div className="section-title">
          <div>
            <h2>How To Get Here</h2>
            <p>Tap below for directions to the party.</p>
          </div>
          <div className="section-icon">📍</div>
        </div>

        <div className="map-card">
          <div className="mini-map">
            <div className="map-pin" />
            <div className="map-label">Birthday Party Spot</div>
          </div>

          <div className="divider" />

          <div className="contact-grid">
            <div className="contact-card">
              <strong>Address</strong>
              <span>{inviteData.addressEn}<br />{inviteData.addressZh}</span>
            </div>
          </div>

          <div className="map-actions">
            <a className="cta-btn" href={inviteData.mapUrl} target="_blank" rel="noreferrer">Open Map</a>
            <button className="mini-btn" onClick={openWhatsapp}>Send to WhatsApp</button>
          </div>
        </div>
      </section>

      <nav className="floating-bar">
        <button className={`tab-btn ${activeTab === "top" ? "active" : ""}`} onClick={() => scrollToSection("top")}>
          <span className="tab-emoji">🖤</span>
          <span className="tab-text">Home</span>
        </button>
        <button className={`tab-btn ${activeTab === "rsvp" ? "active" : ""}`} onClick={() => scrollToSection("rsvp")}>
          <span className="tab-emoji">💌</span>
          <span className="tab-text">RSVP</span>
        </button>
        <button className={`tab-btn ${activeTab === "details" ? "active" : ""}`} onClick={() => scrollToSection("details")}>
          <span className="tab-emoji">🎂</span>
          <span className="tab-text">Details</span>
        </button>
        <button className={`tab-btn ${activeTab === "fun" ? "active" : ""}`} onClick={() => scrollToSection("fun")}>
          <span className="tab-emoji">✨</span>
          <span className="tab-text">Plan</span>
        </button>
        <button className={`tab-btn ${activeTab === "map" ? "active" : ""}`} onClick={() => scrollToSection("map")}>
          <span className="tab-emoji">📍</span>
          <span className="tab-text">Map</span>
        </button>
      </nav>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
