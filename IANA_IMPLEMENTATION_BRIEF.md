# IANA Website Implementation Brief
## Technical Specification for AI-Assisted Development

**Project:** IANA Website Improvements  
**Approach:** Static HTML/CSS/JavaScript (no CMS)  
**Date:** November 28, 2025

---

## Project Context

You are helping to improve the website for the International Association for Neuro Acupuncture (IANA), a professional association that sets standards, accredits training providers, and recognises qualified neuro acupuncture practitioners.

**Important guidelines:**
- IANA should be presented as an established, professional organisation
- Do not use language suggesting IANA is "new," "launching," or seeking "founding members"
- Be factual about what's available now versus in development, without drawing attention to newness
- Maintain the existing visual design language (see current CSS)

**Key information:**
- Practitioner directory launches: March 2026
- Accredited training provider at launch: NeuroAlign Institute
- Recognised modalities: Zhu's Scalp Acupuncture, Fang's Scalp Acupuncture, Tang's Scalp Acupuncture, YNSA, NeuroAlign Methods (NeuroRelief, NeuroRehab, NeuroBalance)

---

## Task 1: Navigation Update

**File:** All HTML pages (header section)

**Current navigation:**
```html
<li class="has-dropdown">
    <a href="directory.html">IANA Practitioners</a>
    <ul class="dropdown">
        <li><a href="directory.html">Find a Practitioner</a></li>
        <li><a href="membership.html">Join IANA</a></li>
    </ul>
</li>
```

**Change to:**
```html
<li class="has-dropdown">
    <a href="membership.html">For Practitioners</a>
    <ul class="dropdown">
        <li><a href="membership.html">Join IANA</a></li>
        <li><a href="membership.html#benefits">Membership Benefits</a></li>
        <li><a href="directory.html">Practitioner Directory</a> <span class="nav-badge">March 2026</span></li>
    </ul>
</li>
```

**Add CSS for nav badge:**
```css
.nav-badge {
    font-size: 0.7rem;
    background: var(--light-blue);
    color: var(--primary-blue);
    padding: 0.15rem 0.4rem;
    border-radius: 2px;
    margin-left: 0.5rem;
    font-weight: 500;
}
```

---

## Task 2: Homepage Hero Update

**File:** `index.html`

**Current hero CTA:**
```html
<a href="membership.html" class="cta-button">Apply for Membership</a>
```

**Change to dual CTAs:**
```html
<div class="hero-ctas">
    <a href="directory.html" class="cta-button">Find a Practitioner</a>
    <a href="what-is-neuro-acupuncture.html" class="cta-button cta-button-secondary">Learn About Neuro Acupuncture</a>
</div>
```

**Add CSS:**
```css
.hero-ctas {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.cta-button-secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
}

.cta-button-secondary:hover {
    background-color: white;
    color: var(--primary-blue);
}
```

---

## Task 3: Directory Page (Coming Soon)

**File:** `directory.html`

**Replace current directory content with:**

```html
<main>
    <section class="content-section text-center" style="background: linear-gradient(135deg, var(--light-blue) 0%, rgba(232, 241, 248, 0.4) 100%); margin: 0 -3rem 4rem; padding: 4rem 3rem; border-radius: 3px;">
        <h2>Practitioner Directory</h2>
        <p style="max-width: 800px; margin: 0 auto; font-size: 1.15rem;">Find qualified IANA members specialising in neuro acupuncture. Search by location, modality, and specialisation.</p>
    </section>

    <section class="content-section text-center">
        <div class="directory-coming-soon">
            <h3>Launching March 2026</h3>
            <p>IANA's practitioner directory will connect patients with qualified neuro acupuncture practitioners worldwide.</p>
            
            <div class="directory-features">
                <p>All listed practitioners will have:</p>
                <ul class="check-list">
                    <li>Completed training from an IANA-accredited provider</li>
                    <li>Met IANA's professional standards</li>
                    <li>Current professional indemnity insurance</li>
                    <li>Commitment to continuing professional development</li>
                </ul>
            </div>

            <div class="notify-signup">
                <h4>Be Notified When We Launch</h4>
                <form class="notify-form" action="[FORM_ENDPOINT]" method="POST">
                    <input type="email" name="email" placeholder="Your email address" required aria-label="Email address">
                    <button type="submit" class="cta-button-primary">Notify Me</button>
                </form>
                <p class="form-note">We'll email you once when the directory goes live. No spam.</p>
            </div>
        </div>
    </section>

    <section class="content-section" style="background: var(--background-grey); margin: 4rem -3rem; padding: 4rem 3rem; border-radius: 3px;">
        <div class="text-center">
            <h3 style="padding-left: 0;">Are You a Neuro Acupuncture Practitioner?</h3>
            <p style="max-width: 700px; margin: 0 auto 2rem;">Qualified practitioners can apply for IANA membership to be listed in our international directory.</p>
            <a href="membership.html" class="cta-button-primary">Apply for Membership</a>
        </div>
    </section>

    <section class="content-section">
        <h3>Directory Listing Requirements</h3>
        <p>To be listed in the IANA practitioner directory, members must:</p>
        <ul>
            <li>Hold current IANA membership in good standing</li>
            <li>Have completed training from an IANA-accredited provider</li>
            <li>Maintain professional indemnity insurance</li>
            <li>Adhere to IANA's Code of Ethics and Code of Safe Practice</li>
            <li>Engage in continuing professional development</li>
        </ul>
    </section>
</main>
```

**Add CSS:**
```css
.directory-coming-soon {
    max-width: 700px;
    margin: 0 auto;
}

.directory-coming-soon h3 {
    color: var(--primary-blue);
    font-size: 1.75rem;
    margin-bottom: 1rem;
    padding-left: 0;
}

.directory-coming-soon h3::before {
    display: none;
}

.directory-features {
    background: var(--background-grey);
    padding: 2rem;
    border-radius: 3px;
    margin: 2rem 0;
    text-align: left;
}

.check-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0 0;
}

.check-list li {
    padding-left: 1.75rem;
    position: relative;
    margin-bottom: 0.75rem;
}

.check-list li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--primary-blue);
    font-weight: 600;
}

.notify-signup {
    background: white;
    border: 2px solid var(--border-light);
    padding: 2.5rem;
    border-radius: 3px;
    margin-top: 2rem;
}

.notify-signup h4 {
    margin-bottom: 1.5rem;
    color: var(--text-primary);
}

.notify-form {
    display: flex;
    gap: 1rem;
    max-width: 450px;
    margin: 0 auto;
}

.notify-form input[type="email"] {
    flex: 1;
    padding: 0.875rem 1rem;
    border: 2px solid var(--border-medium);
    border-radius: 3px;
    font-size: 1rem;
}

.notify-form input[type="email"]:focus {
    outline: none;
    border-color: var(--primary-blue);
}

.form-note {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-top: 1rem;
}

@media (max-width: 768px) {
    .notify-form {
        flex-direction: column;
    }
}
```

---

## Task 4: Membership Page Updates

**File:** `membership.html`

### 4.1 Add Benefits Anchor

Add `id="benefits"` to the membership benefits section heading:
```html
<h3 id="benefits" style="text-align: center; margin-bottom: 3rem; padding-left: 0;">Membership Benefits</h3>
```

### 4.2 Add "What's Available" Section

After the pricing cards section, add:

```html
<section class="content-section">
    <h3 style="text-align: center; padding-left: 0;">What Membership Includes</h3>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 2rem; max-width: 900px; margin-left: auto; margin-right: auto;">
        <div class="availability-box available-now">
            <h4>Available Now</h4>
            <ul class="check-list">
                <li>IANA membership certificate</li>
                <li>Use of IANA member designation</li>
                <li>Listing in practitioner directory (launching March 2026)</li>
                <li>Access to professional standards documentation</li>
                <li>Monthly newsletter with research updates</li>
            </ul>
        </div>
        <div class="availability-box in-development">
            <h4>In Development</h4>
            <ul class="pending-list">
                <li>CPD events and workshops</li>
                <li>Member forums and networking</li>
                <li>Advanced training opportunities</li>
                <li>Annual conference</li>
            </ul>
        </div>
    </div>
</section>
```

**Add CSS:**
```css
.availability-box {
    background: white;
    padding: 2rem;
    border-radius: 3px;
    border: 1px solid var(--border-light);
}

.availability-box h4 {
    color: var(--primary-blue);
    margin-bottom: 1.25rem;
    font-size: 1.2rem;
}

.available-now {
    border-left: 4px solid var(--primary-blue);
}

.in-development {
    border-left: 4px solid var(--border-medium);
}

.pending-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.pending-list li {
    padding-left: 1.75rem;
    position: relative;
    margin-bottom: 0.75rem;
    color: var(--text-secondary);
}

.pending-list li::before {
    content: "○";
    position: absolute;
    left: 0;
    color: var(--text-muted);
}

@media (max-width: 768px) {
    .content-section > div[style*="grid-template-columns: 1fr 1fr"] {
        grid-template-columns: 1fr !important;
    }
}
```

---

## Task 5: Training Page Update (Provider Directory)

**File:** `training.html`

**Purpose:** This page is where students/practitioners find IANA-accredited training providers. Update to show NeuroAlign Institute as an accredited provider.

**Add accredited providers section:**

```html
<section class="content-section">
    <h3 style="text-align: center; padding-left: 0;">IANA-Accredited Training Providers</h3>
    <p style="text-align: center; max-width: 800px; margin: 0 auto 3rem;">The following training providers have met IANA's rigorous accreditation standards. Graduates of these programmes are eligible for IANA membership.</p>
    
    <div class="accredited-providers">
        <div class="provider-card">
            <h4>NeuroAlign Institute</h4>
            <p class="provider-description">Specialist training in the NeuroAlign Methods for neuro acupuncture practice.</p>
            <div class="accredited-programmes">
                <p><strong>Accredited Programmes:</strong></p>
                <ul>
                    <li>NeuroRelief Method</li>
                    <li>NeuroRehab Method</li>
                    <li>NeuroBalance Method</li>
                </ul>
            </div>
            <a href="[PROVIDER_WEBSITE]" class="provider-link" target="_blank" rel="noopener">Visit Website →</a>
        </div>
    </div>
    
    <div class="text-center" style="margin-top: 3rem;">
        <p style="color: var(--text-secondary);">Additional accredited providers coming soon.</p>
    </div>
</section>

<section class="content-section" style="background: var(--background-grey); margin: 4rem -3rem; padding: 4rem 3rem; border-radius: 3px;">
    <div class="text-center">
        <h3 style="padding-left: 0;">Are You a Training Provider?</h3>
        <p style="max-width: 700px; margin: 0 auto 2rem;">Training providers offering neuro acupuncture education can apply for IANA accreditation.</p>
        <a href="accreditation.html" class="cta-button-primary">Learn About Accreditation</a>
    </div>
</section>
```

**Add CSS:**
```css
.accredited-providers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
}

.provider-card {
    background: white;
    border: 1px solid var(--border-light);
    border-radius: 3px;
    padding: 2rem;
    border-top: 4px solid var(--primary-blue);
}

.provider-card h4 {
    color: var(--primary-blue);
    margin-bottom: 0.75rem;
    font-size: 1.3rem;
}

.provider-description {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
}

.accredited-programmes {
    background: var(--background-grey);
    padding: 1.25rem;
    border-radius: 3px;
    margin-bottom: 1.5rem;
}

.accredited-programmes p {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
}

.accredited-programmes ul {
    margin: 0;
    padding-left: 1.25rem;
}

.accredited-programmes li {
    margin-bottom: 0.35rem;
}

.provider-link {
    color: var(--primary-blue);
    font-weight: 500;
    text-decoration: none;
}

.provider-link:hover {
    text-decoration: underline;
}
```

---

## Task 5b: Accreditation Page (Optional Update)

**File:** `accreditation.html`

**Purpose:** This page is for training providers wanting to *become* accredited. No listing of accredited providers needed here — that's on training.html.

**Optional addition** — reference the training page:

```html
<section class="content-section">
    <p>Training providers who achieve IANA accreditation are listed in our <a href="training.html">Training Provider Directory</a>, where prospective students can find accredited programmes.</p>
</section>
```

---

## Task 6: New Page — FAQ

**File:** Create `faq.html`

**Structure:**

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frequently Asked Questions - IANA</title>
    <!-- Standard head content from other pages -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Standard header/nav -->

    <main>
        <section class="content-section text-center" style="background: linear-gradient(135deg, var(--light-blue) 0%, rgba(232, 241, 248, 0.4) 100%); margin: 0 -3rem 4rem; padding: 4rem 3rem; border-radius: 3px;">
            <h2>Frequently Asked Questions</h2>
            <p style="max-width: 800px; margin: 0 auto; font-size: 1.15rem;">Find answers to common questions about IANA, membership, and neuro acupuncture.</p>
        </section>

        <section class="content-section">
            <h3>About IANA</h3>
            
            <div class="faq-accordion">
                <div class="faq-item">
                    <button class="faq-question" aria-expanded="false">
                        What is IANA?
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>The International Association for Neuro Acupuncture (IANA) is a professional body that sets standards for neuro acupuncture practice, accredits training providers, and recognises qualified practitioners. IANA does not provide clinical treatment or deliver training directly.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" aria-expanded="false">
                        Does IANA provide acupuncture treatment?
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>No. IANA is a professional standards body. We set standards and recognise qualified practitioners, but we do not provide clinical services. To receive treatment, please consult a qualified practitioner through our directory.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" aria-expanded="false">
                        Does IANA provide training courses?
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>No. IANA accredits training providers but does not deliver training directly. For information about accredited training programmes, please visit our <a href="training.html">Training page</a>.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section">
            <h3>For Patients</h3>
            
            <div class="faq-accordion">
                <div class="faq-item">
                    <button class="faq-question" aria-expanded="false">
                        How do I find a neuro acupuncture practitioner?
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>IANA's practitioner directory launches in March 2026. You can <a href="directory.html">sign up to be notified</a> when it goes live. In the meantime, look for practitioners with specialist training from accredited providers in recognised modalities such as Zhu's Scalp Acupuncture, YNSA, or the NeuroAlign Methods.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" aria-expanded="false">
                        What conditions can neuro acupuncture help with?
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>Neuro acupuncture may help with a range of neurological conditions including stroke recovery, Parkinson's disease, chronic pain, migraine, multiple sclerosis, and other neurological challenges. Visit our <a href="conditions/">conditions pages</a> for more information.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" aria-expanded="false">
                        What should I look for when choosing a practitioner?
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>Look for practitioners with: specialist training in a recognised neuro acupuncture modality from an accredited provider; professional registration with an acupuncture regulatory body; professional indemnity insurance; and a commitment to continuing professional development.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" aria-expanded="false">
                        Is neuro acupuncture safe?
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>When performed by a qualified practitioner, neuro acupuncture is generally considered safe. IANA members are required to maintain professional indemnity insurance and adhere to our Code of Safe Practice. Always ensure your practitioner has appropriate qualifications and training.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section">
            <h3>For Practitioners</h3>
            
            <div class="faq-accordion">
                <div class="faq-item">
                    <button class="faq-question" aria-expanded="false">
                        How do I become an IANA member?
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>To apply for IANA membership, you must have completed comprehensive training in neuro acupuncture from an IANA-accredited provider, hold qualifications in anatomy and physiology, actively practice neuro acupuncture, and maintain professional indemnity insurance. Visit our <a href="membership.html">Membership page</a> to apply.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" aria-expanded="false">
                        Which training modalities does IANA recognise?
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>IANA recognises training in: Zhu's Scalp Acupuncture, Fang's Scalp Acupuncture, Tang's Scalp Acupuncture, YNSA (Yamamoto New Scalp Acupuncture), and the NeuroAlign Methods (NeuroRelief Method, NeuroRehab Method, NeuroBalance Method). Training must be from an IANA-accredited provider.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" aria-expanded="false">
                        Can I use the IANA logo on my website?
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>IANA members in good standing may display the official IANA member badge on their professional website and marketing materials. Guidelines for logo usage are provided upon membership approval.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section">
            <h3>For Training Providers</h3>
            
            <div class="faq-accordion">
                <div class="faq-item">
                    <button class="faq-question" aria-expanded="false">
                        How do I get my training programme accredited?
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>To apply for IANA accreditation, submit an application along with documentation demonstrating that your programme meets IANA's curriculum, instructor, and assessment standards. Visit our <a href="accreditation.html">Accreditation page</a> for full requirements and application details.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" aria-expanded="false">
                        What are the benefits of IANA accreditation?
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>IANA accreditation demonstrates that your training programme meets international professional standards. Graduates of accredited programmes are eligible for IANA membership and listing in our practitioner directory.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section text-center" style="background-color: var(--light-blue); padding: 3.5rem; border-radius: 2px; margin-top: 4rem; border: 1px solid var(--border-light);">
            <h3 style="padding-left: 0;">Still Have Questions?</h3>
            <p class="mb-2">We're here to help. Contact us with any questions about IANA, membership, or accreditation.</p>
            <a href="contact.html" class="cta-button-primary">Contact Us</a>
        </section>
    </main>

    <!-- Standard footer -->
    
    <script>
        // FAQ accordion functionality
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const faqItem = button.parentElement;
                const isOpen = faqItem.classList.contains('open');
                
                // Close all other items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('open');
                    item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                });
                
                // Toggle current item
                if (!isOpen) {
                    faqItem.classList.add('open');
                    button.setAttribute('aria-expanded', 'true');
                }
            });
        });
    </script>
</body>
</html>
```

**Add CSS:**
```css
.faq-accordion {
    max-width: 800px;
    margin: 0 auto 2rem;
}

.faq-item {
    border-bottom: 1px solid var(--border-light);
}

.faq-question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 0;
    background: none;
    border: none;
    text-align: left;
    font-size: 1.05rem;
    font-weight: 500;
    color: var(--text-primary);
    cursor: pointer;
    transition: color 0.2s ease;
}

.faq-question:hover {
    color: var(--primary-blue);
}

.faq-icon {
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--primary-blue);
    transition: transform 0.3s ease;
}

.faq-item.open .faq-icon {
    transform: rotate(45deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
}

.faq-item.open .faq-answer {
    max-height: 500px;
    padding-bottom: 1.25rem;
}

.faq-answer p {
    color: var(--text-secondary);
    line-height: 1.7;
}

.faq-answer a {
    color: var(--primary-blue);
}
```

---

## Task 7: New Page — For Patients

**File:** Create `for-patients.html`

**Content structure:**

```html
<main>
    <section class="content-section text-center" style="background: linear-gradient(135deg, var(--light-blue) 0%, rgba(232, 241, 248, 0.4) 100%); margin: 0 -3rem 4rem; padding: 4rem 3rem; border-radius: 3px;">
        <h2>For Patients</h2>
        <p style="max-width: 800px; margin: 0 auto; font-size: 1.15rem;">Information for patients considering neuro acupuncture treatment.</p>
    </section>

    <section class="content-section">
        <h3>What is Neuro Acupuncture?</h3>
        <p>Neuro acupuncture is a specialised form of acupuncture that focuses on the brain and nervous system. Using precise techniques — particularly on the scalp — practitioners aim to influence central nervous system activity to promote recovery and relieve symptoms.</p>
        <p>Unlike traditional body acupuncture, neuro acupuncture specifically targets neurological function and is often used alongside conventional medical care for neurological conditions.</p>
        <p><a href="what-is-neuro-acupuncture.html">Learn more about neuro acupuncture →</a></p>
    </section>

    <section class="content-section">
        <h3>What Can It Help With?</h3>
        <p>Neuro acupuncture may help with conditions including:</p>
        <div class="cards-grid">
            <div class="card">
                <h4>Stroke Recovery</h4>
                <p>Supporting motor function recovery and rehabilitation after stroke.</p>
            </div>
            <div class="card">
                <h4>Chronic Pain</h4>
                <p>Addressing musculoskeletal and neuropathic pain conditions.</p>
            </div>
            <div class="card">
                <h4>Parkinson's Disease</h4>
                <p>Helping to manage tremor and improve motor function.</p>
            </div>
            <div class="card">
                <h4>Migraine & Headaches</h4>
                <p>Reducing frequency and intensity of chronic headaches.</p>
            </div>
        </div>
        <p style="margin-top: 2rem;"><a href="conditions/">View all conditions →</a></p>
    </section>

    <section class="content-section" style="background: var(--background-grey); margin: 4rem -3rem; padding: 4rem 3rem; border-radius: 3px;">
        <h3 style="text-align: center; padding-left: 0;">Finding a Qualified Practitioner</h3>
        <p style="text-align: center; max-width: 800px; margin: 0 auto 2rem;">When choosing a neuro acupuncture practitioner, look for:</p>
        
        <div style="max-width: 700px; margin: 0 auto;">
            <ul class="check-list-large">
                <li><strong>Specialist Training</strong><br>Training in a recognised modality (Zhu's Scalp Acupuncture, YNSA, Fang's, Tang's, or NeuroAlign Methods) from an accredited provider.</li>
                <li><strong>Professional Registration</strong><br>Registration with an acupuncture regulatory body in their country.</li>
                <li><strong>Professional Insurance</strong><br>Current professional indemnity insurance.</li>
                <li><strong>Continuing Development</strong><br>Commitment to ongoing professional development and learning.</li>
            </ul>
        </div>
        
        <div class="text-center" style="margin-top: 2.5rem;">
            <a href="directory.html" class="cta-button-primary">Find a Practitioner</a>
        </div>
    </section>

    <section class="content-section">
        <h3>Questions to Ask Your Practitioner</h3>
        <p>Before booking treatment, consider asking:</p>
        <ul>
            <li>What specialist neuro acupuncture training have you completed?</li>
            <li>Which modality do you practice?</li>
            <li>How many patients with my condition have you treated?</li>
            <li>How many sessions might I need?</li>
            <li>What should I expect during and after treatment?</li>
            <li>Are you registered with a professional body?</li>
            <li>Do you have professional indemnity insurance?</li>
        </ul>
    </section>

    <section class="content-section">
        <h3>What to Expect</h3>
        <p>A typical neuro acupuncture session involves:</p>
        <ol>
            <li><strong>Initial consultation:</strong> Discussion of your condition, medical history, and treatment goals.</li>
            <li><strong>Assessment:</strong> Evaluation of your neurological function and treatment planning.</li>
            <li><strong>Treatment:</strong> Insertion of fine needles into specific scalp points, often combined with movement or exercises.</li>
            <li><strong>Session duration:</strong> Typically 45-60 minutes for initial sessions, 30-45 minutes for follow-ups.</li>
            <li><strong>Treatment course:</strong> Often 6-12 sessions, depending on your condition and response.</li>
        </ol>
    </section>
</main>
```

**Add CSS:**
```css
.check-list-large li {
    padding-left: 2rem;
    margin-bottom: 1.5rem;
}

.check-list-large li::before {
    font-size: 1.2rem;
}
```

---

## Task 8: New Page — What is Neuro Acupuncture?

**File:** Create `what-is-neuro-acupuncture.html`

Comprehensive explainer page covering:
- Definition and overview
- History and development
- How it differs from traditional acupuncture
- Neurological basis
- Different modalities (Zhu's, Fang's, Tang's, YNSA, NeuroAlign Methods)
- Conditions treated
- Evidence base

*[Detailed content to be written based on IANA's materials]*

---

## Task 9: Condition Pages

**Files:** Create in `/conditions/` directory:
- `stroke-recovery.html`
- `chronic-pain.html`
- `parkinsons-disease.html`
- `migraine-headaches.html`
- `multiple-sclerosis.html`

**Template structure:**

```html
<main>
    <section class="content-section text-center" style="background: linear-gradient(135deg, var(--light-blue) 0%, rgba(232, 241, 248, 0.4) 100%); margin: 0 -3rem 4rem; padding: 4rem 3rem; border-radius: 3px;">
        <h2>Neuro Acupuncture for [Condition]</h2>
    </section>

    <section class="content-section">
        <h3>Understanding [Condition]</h3>
        <p>[Overview of the condition]</p>
    </section>

    <section class="content-section">
        <h3>How Neuro Acupuncture May Help</h3>
        <p>[Explanation of approach and mechanisms]</p>
    </section>

    <section class="content-section">
        <h3>What the Research Shows</h3>
        <p>[Summary of evidence with citations]</p>
    </section>

    <section class="content-section">
        <h3>What to Expect from Treatment</h3>
        <p>[Typical approach, session frequency, duration]</p>
    </section>

    <section class="content-section text-center" style="background-color: var(--light-blue); padding: 3.5rem; border-radius: 2px; margin-top: 4rem; border: 1px solid var(--border-light);">
        <h3 style="padding-left: 0;">Find a Qualified Practitioner</h3>
        <p class="mb-2">IANA members are qualified specialists in neuro acupuncture treatment.</p>
        <a href="../directory.html" class="cta-button-primary">Find a Practitioner</a>
    </section>
</main>
```

---

## Task 10: News Section

**Files:**
- Create `/news/index.html` — News listing page
- Create individual article pages as needed

**Listing page structure:**

```html
<main>
    <section class="content-section text-center" style="background: linear-gradient(135deg, var(--light-blue) 0%, rgba(232, 241, 248, 0.4) 100%); margin: 0 -3rem 4rem; padding: 4rem 3rem; border-radius: 3px;">
        <h2>News & Updates</h2>
        <p style="max-width: 800px; margin: 0 auto; font-size: 1.15rem;">The latest from IANA.</p>
    </section>

    <section class="content-section">
        <div class="news-list">
            <article class="news-item">
                <time datetime="2025-12-01">1 December 2025</time>
                <h3><a href="2025-12-iana-launches.html">[Article Title]</a></h3>
                <p>[Brief excerpt]</p>
                <a href="2025-12-iana-launches.html" class="read-more">Read more →</a>
            </article>
            
            <!-- Add new articles above this comment -->
        </div>
    </section>
</main>
```

**Add CSS:**
```css
.news-list {
    max-width: 800px;
    margin: 0 auto;
}

.news-item {
    padding: 2rem 0;
    border-bottom: 1px solid var(--border-light);
}

.news-item:first-child {
    padding-top: 0;
}

.news-item time {
    display: block;
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-bottom: 0.5rem;
}

.news-item h3 {
    margin-bottom: 0.75rem;
    padding-left: 0;
}

.news-item h3::before {
    display: none;
}

.news-item h3 a {
    color: var(--text-primary);
    text-decoration: none;
}

.news-item h3 a:hover {
    color: var(--primary-blue);
}

.news-item p {
    margin-bottom: 1rem;
}

.read-more {
    color: var(--primary-blue);
    font-weight: 500;
    text-decoration: none;
}

.read-more:hover {
    text-decoration: underline;
}
```

---

## Task 11: Footer Navigation Update

**File:** All pages (footer section)

Add FAQ and For Patients to footer navigation:

```html
<div class="footer-section">
    <h3>Navigation</h3>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About IANA</a></li>
        <li><a href="for-patients.html">For Patients</a></li>
        <li><a href="directory.html">Find a Practitioner</a></li>
        <li><a href="membership.html">Membership</a></li>
        <li><a href="accreditation.html">For Training Providers</a></li>
        <li><a href="faq.html">FAQ</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</div>
```

---

## File Structure Summary

```
/
├── index.html                 [UPDATE: Hero CTAs, standards section]
├── about.html                 [UPDATE: Replace placeholders]
├── directory.html             [UPDATE: Coming Soon version]
├── membership.html            [UPDATE: What's Available section]
├── training.html              [UPDATE: Add NeuroAlign Institute listing]
├── accreditation.html         [Existing - optionally reference training page]
├── contact.html               [Existing]
├── faq.html                   [NEW]
├── for-patients.html          [NEW]
├── what-is-neuro-acupuncture.html [NEW]
├── code-of-ethics.html        [Existing]
├── code-of-safe-practice.html [Existing]
├── privacy-policy.html        [Existing]
├── terms-of-service.html      [Existing]
├── impressum.html             [Existing]
├── styles.css                 [UPDATE: Add new CSS]
│
├── /conditions/
│   ├── index.html             [NEW - listing page]
│   ├── stroke-recovery.html   [NEW]
│   ├── chronic-pain.html      [NEW]
│   ├── parkinsons-disease.html [NEW]
│   ├── migraine-headaches.html [NEW]
│   └── multiple-sclerosis.html [NEW]
│
└── /news/
    ├── index.html             [NEW]
    └── [articles].html        [NEW as needed]
```

---

## CSS Summary

All new CSS should be added to `styles.css`. Key additions:

- `.nav-badge` — Small badge for navigation items
- `.hero-ctas` — Dual CTA container
- `.cta-button-secondary` — Outline button style
- `.check-list` — Checkmark list styling
- `.pending-list` — Circle/pending list styling
- `.notify-signup`, `.notify-form` — Email signup styling
- `.availability-box` — Available Now/In Development boxes
- `.provider-card` — Training provider cards
- `.faq-accordion`, `.faq-item`, `.faq-question`, `.faq-answer` — FAQ accordion
- `.news-list`, `.news-item` — News listing styles

---

## Notes for Implementation

1. **Maintain existing design language** — Use the same colour variables, typography, and spacing as existing pages
2. **Copy header/footer from existing pages** — Ensure consistency
3. **Mobile responsiveness** — Test all new components on mobile
4. **Accessibility** — Maintain keyboard navigation, ARIA attributes, focus states
5. **Form handling** — Email signup forms need backend endpoint (suggest Tally.so embed)
6. **Images** — Placeholder replacement is manual task; code should use appropriate `alt` text

---

**Document End**
