/* ============================================================
   EDIT THIS FILE to add her name, real photos, and real messages.
   No other file needs to change.
   ============================================================ */

// 1) PHOTOS — put your image files in the /photos folder next to
//    this script, then list their filenames + a short caption here.
//    If a file is missing, the card still looks fine (gradient box).
// No limit on how many you add — the grid reflows to fit.
const PHOTOS = [
  { file: "1.jpeg", caption: "study group, week one" },
  { file: "2.jpeg", caption: "3am before the midterm" },
  { file: "3.jpeg", caption: "the good coffee run" },
  { file: "4.jpeg", caption: "finally done" },
  { file: "5.jpeg", caption: "" },
  { file: "6.jpeg", caption: "" },
];

// 2) MESSAGES — one object per person. "message" can be one line
//    or several paragraphs, short or long, it'll lay out fine.
//    Replace these placeholders with what people actually sent you.
const MESSAGES = [
  {
    from: "Love Hope♥️",
    message: "Words could never be enough to describe what your friendship means to me. You are a gift from God and a blessing in my life♥️. As you celebrate your graduation I pray to God that he may continue to bless you and to keep you; that his face may shine on you all the days of your life. I pray that you may continue to walk with Him all the days of your life and always remember that He will never leave you nor turn His face from you."
  },
  {
    from: "Feliscia",
    message: "Congratulations Debbie🥳🥳🥳. I am so happy and proud of you🥰.This is such a beautiful achievement💐.Wishing you the very best into this new chapter✨✨. To more wins,opportunities and blessings."
  },
  {
    from: "Janny💗💗",
    message: "Congratulations Debbie dear🥳🎉🥹 I'm so happy for you. Honestly it is such a big accomplishment to be able to finish school and graduate🤭🤭. God has been gracious to you and will continue filling your life with wonderful unimaginable blessings. Sahi nikitembea watu watajua I have a friend who is an amazing pastor 💃🏾💃🏾💃🏾I honestly wish you all the best as you close this chapter and open a new one. I pray for a smooth transition as you continue being the wonderful,kind and gorgeous woman that you are. Thank you for allowing me to share this very important day with you🥹🥹 I'm very honoured to be your friend🤭🫶🏾"
  },
  {
    from: "With love, Mwende ❤️",
    message: `Hey Debbie 🥰
Congratulations 🎉❤️ congratulations 🎉 . My goodness ☺️today is a beautiful reminder of how far you’ve come and how much your hard work, patience, and determination have paid off. I’m genuinely proud of you and so happy to celebrate this special achievement with you. Keep believing in yourself and reaching for your dreams—you are capable of amazing things. This is only the beginning of greater victories ahead. Once again, Congratulations 🥳🎓❤️✨
`
  },
  {
    from: "Yours truly, Baraka 😊 ",
    message: `Hey Debbie, I'll leave you with this:
Numbers 6:24-26.
I love you very much. 
`
  },
  {
    from: `Bemmy`,
    message: `To our dearest Debbie,

I join you to celebrate a graduation of one of the greats in our generation. My heartfelt congratulations to you for successfully going through this season. You have indeed been working through countless days and nights. In both good times and tumultuous times you kept the light of your candle shining. And here we are not only to praise the One who made the way for you, but also to commend you for doing that job that no one else could have done. Thank you for being faithful with this talent. Surely you are up for more. 

Cheers to the laughter you bring to the world, and the tears that you wipe off our faces; for the guidance and encouraging words and the humble correction you give. You are a wonderful person. Thank you for keeping on showing us that unmistakably unique Debbie that we have come to greatly love`
  },
  {
    from: "From Fabian",
    message: `Congratulations on your graduation Debbie. I pray that your path beyond graduation may be decorated with blessings, strength and abundant grace! Keep going Debbie 🥳`
  },
  {
    from: "Ash",
    message: `Debbie, it’s a joy to celebrate this far you’ve come and being part of the many people whom you inspire. Truly, your love for God is abundant and you are always striving to share the light to those around and beyond you.  That is truly inspiring. As you begin this new chapter, may the Lord give you strength to continue His works and encourage us as you always do in bible study.
Your fellow Park Bo-gum lover,`
  },
  {
    from: "Anita",
    message: `Hey Debbie! (I’d love to refer to you that way, since that’s how you introduced yourself back at the meetup on April 4th!)
​I’m so thrilled for you! 🥳 A brand-new chapter unlocked, full of exciting experiences waiting for you to jump into.
​Wishing you all the very best with this amazing milestone—may it be filled with God's blessings and grace. 😌🙌🏻🫶🏻
​Congratulations again, Debbie! 🌸`
  },
  {
    from: "Seok Hoonah✌🏼",
    message: `Congratulations, graduate! 🎓🪷

Some people pass through your life; others quietly leave it better than they found it. You’re the latter. You’re intentional, brilliant, resilient, deeply rooted in your faith, endlessly goofy, sweet, and just the right amount of delusional 😂—and somehow, that beautiful smile of yours makes all of it even more contagious.

You’ve taught me things without always meaning to: to look at life differently, to hold firmly to what matters, and to keep showing up even when things aren't easy. I genuinely admire that about you.

My favourite K-drama character, Seol-a, has officially completed this arc. 😂 And if life is a chessboard, I hope you keep making those quiet, intentional moves that eventually leave everyone wondering how you got so far ahead. ♟️

Keep your faith. Keep your heart. Keep that smile. And please, never become too normal. 😄

I’m genuinely happy for you, proud of you, and grateful I got to know you along the way.

Congratulations, Debbie. You’ve earned this moment—and I have a feeling your best chapters are still unwritten. 🤍🎻`
  },
  {
    from: `✨From Emily✨`,
    message: `Congratulations on your graduation Debbie!!! 🥹🎓❤️ It’s such a beautiful thing to see you reach this amazing milestone😌, and I’m genuinely so happy to celebrate this special moment with you😊. It was such a blessing getting to know you through our Bible study, and I’m grateful that we get to witness and celebrate this achievement together.🥳

As you step into this new chapter, may God continue to guide your steps, give you wisdom in every decision you make, bless the work of your hands and open doors beyond what you could ever imagine. May He fill this next season with purpose, joy, growth and countless blessings. Keep trusting Him and remember that His plans for you are always good.🫴🏼

Congratulations once again! Here’s to many more wins, beautiful opportunities and even greater achievements!!! I'm so proud of you Debbie!!!🥹🎓✨❤️🙏🏽`
  }
];

// ---------------- rendering, no need to edit below ----------------

function renderGallery() {
  const track = document.getElementById("gallery-track");
  PHOTOS.forEach((p) => {
    const fig = document.createElement("figure");
    fig.className = "polaroid";

    const img = document.createElement("img");
    img.src = `assets/${p.file}`;
    img.alt = p.caption || "";
    img.loading = "lazy";
    img.onerror = () => {
      img.removeAttribute("src");
      img.style.aspectRatio = "4 / 5"; // keeps the card's shape even with no photo yet
    };

    const cap = document.createElement("figcaption");
    cap.textContent = p.caption || "";

    fig.appendChild(img);
    fig.appendChild(cap);
    track.appendChild(fig);
  });
}

function renderWall() {
  const wall = document.getElementById("wall");
  MESSAGES.forEach((m, i) => {
    const note = document.createElement("article");
    note.className = "note";

    const tilt = (Math.random() * 3 - 1.5).toFixed(2);
    note.style.setProperty("--tilt", `${tilt}deg`);
    note.style.setProperty("--delay", `${Math.min(i * 0.06, 0.6)}s`);

    const msg = document.createElement("p");
    msg.className = "note-message";
    msg.textContent = m.message;

    const from = document.createElement("p");
    from.className = "note-from";
    from.textContent = m.from;

    note.appendChild(msg);
    note.appendChild(from);
    wall.appendChild(note);
  });
}

renderGallery();
renderWall();
