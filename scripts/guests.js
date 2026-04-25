/* ═══ GUEST DATA ═══ */
  const GUESTS_BACKUP = [
    { initials:"🐕", name:"Calypso", photo:"assets/photos/calypso.jpg", role:"Stay-at-Home Dog · Professional Good Girl", bio:"Likes: Herding children and dogs, Attention, Confrontation. Dislikes: Being chased by children and dogs, attention, confrontation.", status:"Dawg", nationalities:[], acquaintance:3.5, passports:0, room:"1K1", bunking:"Judith Zhu", age:"Baby Dog" },
    { initials:"OL", name:"Oliver Laso", photo:"assets/photos/oliver-laso.jpg", role:"Software Engineer @ Palantir", bio:"Likes: Calypso. Dislikes: Whatever Calypso dislikes.", status:"Dawg", nationalities:["UK","Spain","Germany"], acquaintance:10, passports:3, room:"1K1", bunking:"Calypso", age:"Old Coot" },
    { initials:"JC", name:"Jess Cao", photo:"assets/photos/jess-cao.jpg", role:"Resident @ UChicago Medicine", bio:"Likes: Drugs, Alcohol, and general delinquency, pussy. Dislikes: Pussies.", status:"In a Relationship", nationalities:["USA"], acquaintance:14, passports:1, room:"2K1", bunking:"Ashley Leonard", age:"Old Coot" },
    { initials:"AL", name:"Ashley Leonard", photo:"assets/photos/ashley-leonard.jpg", role:"PhD Candidate @ UC Berkeley", bio:"Likes: Mushrooms.", status:"In a Relationship", nationalities:["USA"], acquaintance:12, passports:1, room:"2K1", bunking:"Jess Cao", age:"Skibidi iPad Kid" },
    { initials:"MW", name:"Maggie Wang", photo:"assets/photos/maggie-wang.jpg", role:"MA Candidate @ TUM", bio:"Likes: Taking the most difficult path.", status:"In a Relationship", nationalities:["Taiwan","USA"], acquaintance:14, passports:2, room:"1K3", bunking:"Nolan Betts", age:"Skibidi iPad Kid" },
    { initials:"NB", name:"Nolan Betts", photo:"assets/photos/nolan-betts.jpg", role:"Lead Software Engineer @ Capital One", bio:"Likes: Beer, boys and ball. Dislikes: Cars.", status:"In a Relationship", nationalities:["USA"], acquaintance:7, passports:1, room:"1K3", bunking:"Maggie Wang", age:"Old Coot" },
    { initials:"TR", name:"Terrence Rice", photo:"assets/photos/terrence-rice.jpg", role:"Hedge Fund Analyst @ Systems 2 Capital", bio:"Likes: BeepBoop. Dislikes: The smell of fermentation.", status:"In a Relationship", nationalities:["USA"], acquaintance:12, passports:1, room:"1K2", bunking:"Jordan Smith", age:"Old Coot" },
    { initials:"JS", name:"Jordan Smith", photo:"assets/photos/jordan-smith.jpg", role:"Procurements and Contracts Solicitor @ Chelsea and Kennsington Borough", bio:"Likes: Good music, Jamaican food, and chill walks with Taro. Dislikes: Child solicitors.", status:"In a Relationship", nationalities:["UK"], acquaintance:9, passports:1, room:"1K2", bunking:"Terrence Rice", age:"Old Coot" },
    { initials:"LC", name:"Lauren Chin", photo:"assets/photos/lauren-chin.jpg", role:"R&R (Resting & Recovering)", bio:"Likes: Tall skinny white men. Dislikes: English weather.", status:"In a Relationship", nationalities:["UK","USA"], acquaintance:13, passports:2, room:"2K3", bunking:"Dan Forman", age:"Old Coot" },
    { initials:"DF", name:"Dan Forman", photo:"assets/photos/dan-forman.jpg", role:"Global Marketing Director, Oncology @ GSK", bio:"Likes: Lauren & Tennis. Dislikes: Playing tennis with Lauren.", status:"In a Relationship", nationalities:["UK"], acquaintance:1, passports:1, room:"2K3", bunking:"Lauren Chin", age:"Old Coot" },
    { initials:"RH", name:"Riva Han", photo:"assets/photos/riva-han.jpg", role:"Judicial Law Clerk @ SD", bio:"Likes: Saving immigrants and life-threatening hobbies on her down time. Dislikes: Donald Trump.", status:"In a Relationship", nationalities:["USA"], acquaintance:17, passports:1, room:"3K1", bunking:"Yadi Yang", age:"Skibidi iPad Kid" },
    { initials:"YY", name:"Yadi Yang", photo:"assets/photos/yadi-yang.jpg", role:"Product Manager @ Boeing", bio:"Likes: Selling defence secrets to china. Dislikes: Normal diet methods.", status:"Single", nationalities:["China"], acquaintance:12, passports:1, room:"3K1", bunking:"Riva Han", age:"Skibidi iPad Kid" },
    { initials:"PA", name:"Paige Amormino", photo:"assets/photos/paige-amormino.jpg", role:"Post Doc @ Penn State", bio:"Likes: Cats and Hot cheetos. Dislikes: When her cats eat her hot cheetos.", status:"In a Relationship", nationalities:["USA"], acquaintance:13, passports:1, room:"3K2", bunking:"Leila Fujiwara", age:"Skibidi iPad Kid" },
    { initials:"LF", name:"Leila Fujiwara", photo:"assets/photos/leila-fujiwara.jpg", role:"Associate @ McDermott Will & Emery", bio:"Likes: Self care. Dislikes: The brakes.", status:"Single", nationalities:["Japan"], acquaintance:12, passports:1, room:"3K2", bunking:"Paige Amormino", age:"Old Coot" },
    { initials:"DP", name:"Danni Pair", photo:"assets/photos/danni-pair.jpg", role:"Group Account Supervisor @ Synapse", bio:"Likes: Chinese men. Dislikes: Slavic men.", status:"In a Relationship", nationalities:["USA"], acquaintance:11, passports:1, room:"3K3", bunking:"Carina Escobar", age:"Old Coot" },
    { initials:"CE", name:"Carina Escobar", photo:"assets/photos/carina-escobar.jpg", role:"Project Manager @ Maslansky + Partners", bio:"Likes: Getting injured. Dislikes: Undercooked meat.", status:"Single", nationalities:["USA"], acquaintance:12, passports:1, room:"3K3", bunking:"Danni Pair", age:"Old Coot" },
    { initials:"JV", name:"Jay Viray", photo:"assets/photos/jay-viray.jpg", role:"Fine Arts Underwriter @ Berkeley Asset Protection", bio:"Likes: Falling off the wagon and indulging in drinking, smoking and Mcdonalds.", status:"Single", nationalities:["USA"], acquaintance:12, passports:1, room:"3T5", bunking:"Jay Nam", age:"Old Coot" },
    { initials:"JN", name:"Jay Nam", photo:"assets/photos/jay-nam.jpg", role:"MBA Candidate @ Harvard Business School", bio:"Likes: Money & uber drivers (but not together). Dislikes: Using the birthday gifts his friends get him.", status:"Single", nationalities:["USA"], acquaintance:14, passports:1, room:"3T5", bunking:"Jay Viray", age:"Old Coot" },
    { initials:"JO", name:"Jordi Soxa", photo:"assets/photos/jordi-soxa.jpg", role:"Product Design Lead @ Meta", bio:"Likes: South east asia. Dislikes: Carbs.", status:"Single", nationalities:["Venezuela","UK"], acquaintance:1, passports:2, room:"1K4", bunking:"TBD", age:"Old Coot" },
    { initials:"GD", name:"Gautier Dagan", photo:"assets/photos/gautier-dagan.jpg", role:"Member of Technical Staff @ Cohere", bio:"Likes: Cheese and to be called Dr. Dagan. Dislikes: People who are late.", status:"Married", nationalities:["France","UK"], acquaintance:4, passports:2, room:"2K4", bunking:"Lizzie Roberts", age:"Old Coot" },
    { initials:"LR", name:"Lizzie Roberts", photo:"assets/photos/lizzie-roberts.jpg", role:"Deputy News Editor @ The Sunday Times", bio:"Likes: Gossiping to the whole of the UK. Dislikes: Liberal media.", status:"Married", nationalities:["UK"], acquaintance:4, passports:1, room:"2K4", bunking:"Gautier Dagan", age:"Old Coot" },
    { initials:"DM", name:"Dino Mujkic", photo:"assets/photos/dino-mujkic.jpg", role:"Staff Software Engineer @ Meta", bio:"Likes: War, Napoleon, and saying I'm easy. Dislikes: Showing up on time or anywhere close to the proposed time.", status:"In a Relationship", nationalities:["Bosnia"], acquaintance:4, passports:1, room:"2K2", bunking:"Verna Gao", age:"Old Coot" },
    { initials:"VG", name:"Verna Gao", photo:"assets/photos/verna-gao.jpg", role:"Channel 4 Chef + Influencer", bio:"Likes: Cooking, eating, travelling. Dislikes: Internet trolls.", status:"In a Relationship", nationalities:["UK","China"], acquaintance:0.25, passports:2, room:"2K2", bunking:"Dino Mujkic", age:"Old Coot" },
    { initials:"HG", name:"Hugo Grochau", photo:"assets/photos/hugo-grochau.jpg", role:"Staff Software Engineer @ Meta", bio:"Likes: Taken Women. Dislikes: Bad health insights.", status:"Single", nationalities:["Brazil","Italy"], acquaintance:1, passports:2, room:"2T5", bunking:"Cameron Rhodes", age:"Old Coot" },
    { initials:"CR", name:"Cameron Rhodes", photo:"assets/photos/cameron-rhodes.jpg", role:"Account Executive @ Velaris", bio:"Likes: Volleyball and trading his last will to survive for shareholder value. Dislikes: Ginger CROs.", status:"Single", nationalities:["UK"], acquaintance:3, passports:1, room:"2T5", bunking:"Hugo Grochau", age:"Old Coot" },
    { initials:"AT", name:"Alex Tupper", photo:"assets/photos/alex-tupper.jpg", role:"Co-Founder @ Kettel", bio:"Likes: AI.", status:"Married", nationalities:["UK"], acquaintance:1, passports:1, room:"1T5", bunking:"Cesar Lamas", age:"Old Coot" },
    { initials:"CL", name:"Cesar Lamas", photo:"assets/photos/cesar-lamas.jpg", role:"Software Engineer @ Airbus", bio:"Likes: Red flags. Dislikes: Anything that doesn't stress him out.", status:"In a Relationship", nationalities:["Spain"], acquaintance:7, passports:1, room:"1T5", bunking:"Alex Tupper", age:"Old Coot" },
    { initials:"AG", name:"Aimee Gutierrez", photo:"assets/photos/aimee-gutierrez.jpg", role:"Sr. Specialist Procurement @ Nestle", bio:"Likes: Her new baby. Dislikes: Being tackled.", status:"Married", nationalities:["USA","Mexico"], acquaintance:16, passports:2, room:"2K4", bunking:"TBD", age:"Old Coot" },
    { initials:"KC", name:"Kevin Chacon", photo:"assets/photos/kevin-chacon.jpg", role:"", bio:"", status:"Single", nationalities:[], acquaintance:0, passports:0, room:"TBD", bunking:"", age:"" },
    { initials:"GK", name:"Gabby Kinder", photo:"assets/photos/gabby-kinder.jpg", role:"", bio:"", status:"Single", nationalities:[], acquaintance:0, passports:0, room:"TBD", bunking:"", age:"" },
  ];

    const GUESTS = [
    {name:"Calypso",initials:"C",url:"https://www.instagram.com/calythecollie/",age:"Baby",role:"Stay at home dog",bio:"Herding children and dogs, Attention, Confrontation · Being chased by children and dogs, attention, confrontation",room:"1K1",bunking:"Judith Zhu",status:"Dawg",passports:0,acquaintance:3.5,nationalities:[]},
    {name:"Oliver Laso",initials:"OL",url:"https://www.linkedin.com/in/oliver-barry",age:"Old Coot",role:"Staff Software Engineer @ Palantir",bio:"Calypso · Whatever Calypso dislikes",room:"1K1",bunking:"Calypso",status:"Dawg",passports:3,acquaintance:10,nationalities:["UK","Spain","Germany"]},
    {name:"Yadi Yang",initials:"YY",url:"https://www.linkedin.com/in/yadi-yang-9873b8142",age:"Skibidi iPad kid",role:"Product Manager @ Boeing",bio:"Selling defence secrets to china · Normal diet methods",room:"1K2",bunking:"Leila Fujiwara",status:"Single",passports:1,acquaintance:12,nationalities:["China"]},
    {name:"Leila Fujiwara",initials:"LF",url:"https://www.linkedin.com/in/leila-fujiwara-b40621136",age:"Old Coot",role:"Associate @ McDermott Will & Emery",bio:"Self care · The brakes",room:"1K2",bunking:"Yadi Yang",status:"Single",passports:1,acquaintance:12,nationalities:["Japan"]},
    {name:"Nolan Betts",initials:"NB",url:"https://www.linkedin.com/in/nolanbetts",age:"Old Coot",role:"Lead Software Engineer @ Capital One",bio:"losing toenails · Cars",room:"1K3",bunking:"Maggie Wang",status:"In a relationship",passports:1,acquaintance:7,nationalities:["USA"]},
    {name:"Maggie Wang",initials:"MW",url:"https://contactout.com/Maggie-Wang-86630684",age:"Skibidi iPad kid",role:"MA candidate @ TUM",bio:"playing life on hard-mode · Convenience",room:"1K3",bunking:"Nolan Betts",status:"In a relationship",passports:2,acquaintance:14,nationalities:["Taiwan","USA"],photoPosition:"center center"},
    {name:"Dino Mujkic",initials:"DM",url:"https://www.linkedin.com/in/dino-mujkic",age:"Old Coot",role:"Staff Software Engineer @ Meta",bio:"War, Napoleon, and saying \"I'm easy\" · showing up on time or anywhere close to the proposed time",room:"1K4",bunking:"Verna Gao",status:"In a relationship",passports:1,acquaintance:4,nationalities:["Bosnia"]},
    {name:"Verna Gao",initials:"VG",url:"https://www.linkedin.com/in/vzgao",age:"Old Coot",role:"Channel 4 Chef + Influencer",bio:"Cooking, eating, travelling · Internet trolls",room:"1K4",bunking:"Dino Mujkic",status:"In a relationship",passports:2,acquaintance:0.5,nationalities:["UK","China"]},
    {name:"Alex Tupper",initials:"AT",url:"https://www.linkedin.com/in/alex-tupper-606319a9",age:"Old Coot",role:"Co-Founder @ Kettel",bio:"Public speaking when nobody is looking · AI",room:"1T5",bunking:"Cesar Lamas",status:"Married",passports:1,acquaintance:1,nationalities:["UK"]},
    {name:"Cesar Lamas",initials:"CL",url:"https://www.linkedin.com/in/cesar-lamas-davila-278b4b206",age:"Old Coot",role:"Software Engineer @ Airbus",bio:"Red flags · Anything that doesn't stress him out",room:"1T5",bunking:"Alex Tupper",status:'"In a relationship"',passports:1,acquaintance:7,nationalities:["Spain"]},
    {name:"Jess Cao",initials:"JC",url:"https://x.com/caolujessica",age:"Old Coot",role:"Resident @ UChicago",bio:"Drugs, Alcohol, and pussy · Pussies",room:"2K1",bunking:"Ashley Leonard",status:'"In a relationship"',passports:1,acquaintance:14,nationalities:["USA"]},
    {name:"Ashley Leonard",initials:"AL",url:"https://www.linkedin.com/in/ashley-cao-716547215",age:"Skibidi iPad kid",role:"PhD Candidate @ UC Berkeley",bio:"To be edged · Edges",room:"2K1",bunking:"Jess Cao",status:"In a relationship",passports:1,acquaintance:12,nationalities:["USA"]},
    {name:"Riva Han",initials:"RH",url:"https://www.linkedin.com/in/riva-han",age:"Skibidi iPad kid",role:"Judicial Law Clerk @ SD",bio:"Life-threatening hobbies on her down time · Donald Trump",room:"2K2",bunking:"Paige Amormino",status:'"In a relationship"',passports:1,acquaintance:17,nationalities:["USA"]},
    {name:"Paige Amormino",initials:"PA",url:"https://www.linkedin.com/in/paige-amormino-1105433bb",age:"Skibidi iPad kid",role:"Post Doc @ Penn State",bio:"Cats and hot cheetos · When her cats eat her hot cheetos",room:"2K2",bunking:"Riva Han",status:"In a relationship",passports:1,acquaintance:13,nationalities:["USA"]},
    {name:"Lauren Chin",initials:"LC",url:"https://www.linkedin.com/in/lauren-chin-638a6a83",age:"Old Coot",role:"R&R",bio:"English men · English weather",room:"2K3",bunking:"Dan Forman",status:"In a relationship",passports:2,acquaintance:13,nationalities:["UK","USA"]},
    {name:"Dan Forman",initials:"DF",url:"https://www.linkedin.com/in/daniel-forman-39052253",age:"Old Coot",role:"Global Marketing Director - Oncology @ GSK",bio:"Being exactly Lauren's type · poor form (on and off the court)",room:"2K3",bunking:"Lauren Chin",status:"In a relationship",passports:1,acquaintance:1,nationalities:["UK"]},
    {name:"Danni Pair",initials:"DP",url:"https://www.linkedin.com/in/dannipair",age:"Old Coot",role:"Group Account Supervisor @ Synapse",bio:"Chinese men · Slavic men",room:"2K4",bunking:"Carina Escobar",status:'"In a relationship"',passports:1,acquaintance:11,nationalities:["USA"]},
    {name:"Carina Escobar",initials:"CE",url:"https://www.linkedin.com/in/carina-escobar95",age:"Old Coot",role:"Project Manager @ Maslansky + Partners",bio:"Burnt Meat · Anything that doesn't smell like shoving sugar down your throat",room:"2K4",bunking:"Danni Pair",status:"Single",passports:1,acquaintance:12,nationalities:["USA"]},
    {name:"Hugo Grochau",initials:"HG",url:"https://www.linkedin.com/in/hugogrochau/",age:"Old Coot",role:"Staff Software Engineer @ Meta",bio:"Taken Women · Licking da pussy",room:"2T5",bunking:"Cameron Rhodes",status:"Single",passports:3,acquaintance:1,nationalities:["Brazil","Italy","Australia"]},
    {name:"Cameron Rhodes",initials:"CR",url:"https://www.linkedin.com/in/cameron-rhodes-2016a1169",age:"Old Coot",role:"Account Executive @ Velaris",bio:"Volleyball and tall blondes that play volleyball · Ginger CROs",room:"2T5",bunking:"Hugo Grochau",status:"Single",passports:1,acquaintance:3,nationalities:["UK"]},
    {name:"Kevin Chacon",initials:"KC",url:"https://uk.linkedin.com/in/kevinchacon",age:"Old Coot",role:"ADHD-fueled entrepreneur",bio:"Spawning new side quests · the main quest",room:"3Q1",bunking:"Gabby Kinder",status:"In a relationship",passports:2,acquaintance:3,nationalities:["Uruguay","UK"],photoPosition:"center center"},
    {name:"Gabby Kinder",initials:"GK",url:"https://www.linkedin.com/in/gabrielle-kinder-b70b5581/",age:"Old Coot",role:"Carbon Research Lead @ London Stock Exchange",bio:"Chubby men? · When Kevin becomes a chubby man",room:"3Q1",bunking:"Kevin Chacon",status:"In a relationship",passports:1,acquaintance:4,nationalities:["UK"],photoPosition:"center center"},
    {name:"Terrence Rice",initials:"TR",url:"https://www.linkedin.com/in/terrence-rice-b383aa99",age:"Old Coot",role:"HedgeFund Analyst @ Systems 2 Capital",bio:"BeepBoop · The smell of fermentation",room:"3Q2",bunking:"Jordan Smith",status:"In a relationship",passports:1,acquaintance:12,nationalities:["USA"]},
    {name:"Jordan Smith",initials:"JS",url:"https://www.linkedin.com/in/jordan-smith-205126bb/",age:"Old Coot",role:"Contracts and Procurement Solicitor @ Chelsea and Kensington Council",bio:"Good music, Jamaican food, and chill walks with Taro · Child solicitors",room:"3Q2",bunking:"Terrence Rice",status:"In a relationship",passports:1,acquaintance:9,nationalities:["UK"]},
    {name:"Gautier Dagan",initials:"GD",url:"https://www.linkedin.com/in/gautier-dagan",age:"Old Coot",role:"Member of Technical Staff @ Cohere",bio:"Cheese & being called Dr. Dagan · People who are late",room:"3Q3",bunking:"Lizzie Roberts",status:"Married",passports:2,acquaintance:4,nationalities:["France","UK"]},
    {name:"Lizzie Roberts",initials:"LR",url:"https://www.linkedin.com/in/lizzie-roberts-930a268b",age:"Old Coot",role:"Deputy News Editor @ The Sunday Times",bio:"Running the hottest gossip in the UK · Saturdays",room:"3Q3",bunking:"Gautier Dagan",status:"Married",passports:1,acquaintance:4,nationalities:["UK"]},
    {name:"Jordi Soxa",initials:"JSo",url:"https://www.linkedin.com/in/jordisoxa",age:"Old Coot",role:"Product Design Lead @ Meta",bio:"Running away to SE Asia · hot, steamy reunions with bad past decisions",room:"3S4",bunking:"NA",status:"Single",passports:2,acquaintance:1,nationalities:["Venezuela","UK"]},
    {name:"Aimee Gutierrez",initials:"AG",url:"https://www.linkedin.com/in/aimee-gutierrez",age:"Old Coot",role:"Sr. Specialist Procurement Category Manager @ Nestle",bio:"Her new baby · Being tackled",room:"3S5",bunking:"NA",status:"Married",passports:2,acquaintance:16,nationalities:["USA","Mexico"]},
    {name:"Jay Nam",initials:"JN",url:"https://www.linkedin.com/in/jaywnam",age:"Old Coot",role:"MBA Candidate @ Harvard Business School",bio:"Money, Uber drivers, Bears, Social chaos with hot gays · being told \"I don't see color\"",room:"3T6",bunking:"Jay Viray",status:"Single",passports:1,acquaintance:14,nationalities:["USA"]},
    {name:"Jay Viray",initials:"JV",url:"https://www.linkedin.com/in/jayhviray",age:"Skibidi iPad kid",role:"Fine Arts Underwriter @ Berkeley Asset Protection",bio:"Falling off the wagon and indulging in drinking, smoking and Mcdonalds · the day after falling off the wagon",room:"3T6",bunking:"Jay Nam",status:"Single",passports:1,acquaintance:12,nationalities:["USA"]},
  ];

  // Copy photos from backup entries into new GUESTS array
  GUESTS_BACKUP.forEach(function(old) {
    var g = GUESTS.find(function(x) { return x.name === old.name; });
    if (g && old.photo) g.photo = old.photo;
  });

  function floorFromRoom(room) {
    if (!room || room === "TBD") return null;
    const m = room.match(/^(\d)/);
    return m ? parseInt(m[1]) : null;
  }

  function renderGuests() {
    var ageEl    = document.getElementById("flt-age");
    var statusEl = document.getElementById("flt-status");
    var natEl    = document.getElementById("flt-nationality");
    var floorEl  = document.getElementById("flt-room");
    var sortEl   = document.getElementById("srt-by");
    if (!statusEl) return;

    var age    = ageEl ? ageEl.value : "";
    var status = statusEl.value;
    var nat    = natEl.value;
    var floor  = floorEl.value;
    var sort   = sortEl.value;

    var list = GUESTS.filter(function(g) {
      if (age && g.age !== age) return false;
      if (status && g.status.indexOf(status) === -1) return false;
      if (nat && g.nationalities.indexOf(nat) === -1) return false;
      if (floor && floorFromRoom(g.room) !== parseInt(floor)) return false;
      return true;
    });

    list.sort(function(a, b) {
      if (sort === "name")              return a.name.localeCompare(b.name);
      if (sort === "acquaintance_desc") return b.acquaintance - a.acquaintance;
      if (sort === "acquaintance_asc")  return a.acquaintance - b.acquaintance;
      if (sort === "passports_desc")    return b.passports - a.passports;
      if (sort === "room")              return (a.room||"ZZZ").localeCompare(b.room||"ZZZ");
      return 0;
    });

    var grid  = document.getElementById("guest-grid");
    var count = document.getElementById("guest-count");
    if (count) count.textContent = list.length + " guest" + (list.length !== 1 ? "s" : "");

    var tagStyle = 'font-size:6.5px;letter-spacing:.13em;padding:2px 6px;border:1px solid rgba(138,96,48,0.28);color:rgba(42,31,24,0.5);text-transform:uppercase;';

    var html = list.map(function(g) {
      var acqText = g.acquaintance < 1 ? "A few months" : g.acquaintance + " yr" + (g.acquaintance !== 1 ? "s" : "");
      var nats = g.nationalities.length > 0 ? g.nationalities.join(" · ") : "Very Good Dog";
      var floorNum = floorFromRoom(g.room);
      var floorLabel = floorNum ? " · Floor " + floorNum : "";
      var roomTag = g.room ? '<span style="' + tagStyle + '">Room ' + g.room + floorLabel + '</span>' : "";
      var passTag = g.passports > 1 ? '<span style="' + tagStyle + '">' + g.passports + ' Passports</span>' : "";

      var photoInner = g.photo
        ? '<img src="' + g.photo + '" style="width:100%;height:100%;object-fit:cover;object-position:' + (g.photoPosition || 'center top') + ';display:block;">'
        : '<div style="display:flex;flex-direction:column;align-items:center;gap:5px;"><div style="font-family:\'Playfair Display\',serif;font-size:22px;font-weight:300;color:#8a6030;opacity:0.42;letter-spacing:.05em;">' + g.initials + '</div><div style="font-size:7px;letter-spacing:.26em;color:rgba(42,31,24,0.25);text-transform:uppercase;">Photo</div></div>';
      return '<div style="background:rgba(255,252,248,0.55);display:flex;flex-direction:column;">'
        + '<div style="width:100%;aspect-ratio:1;background:#e8ddd0;display:flex;align-items:center;justify-content:center;overflow:hidden;min-height:110px;border-radius:50%;">'
        + photoInner
        + '</div>'
        + '<div style="padding:13px 15px 15px;flex:1;display:flex;flex-direction:column;">'
        + '<div style="font-family:\'Playfair Display\',serif;font-size:15px;font-weight:400;color:#2a1f18;letter-spacing:-.01em;line-height:1.2;margin-bottom:2px;">' + (g.url ? '<a href="' + g.url + '" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;border-bottom:1px solid rgba(138,96,48,0.35);">' + g.name + '</a>' : g.name) + '</div>'
        + '<span style="font-size:7.5px;letter-spacing:.18em;color:#8a6030;text-transform:uppercase;margin-bottom:7px;display:block;">' + g.role + '</span>'
        + (function() {
            var label = 'font-style:normal;font-size:7px;letter-spacing:.2em;text-transform:uppercase;color:rgba(42,31,24,0.35);display:block;margin-bottom:2px;';
            var parts = g.bio.split(' · ');
            var html = parts.length === 2
              ? '<span style="' + label + '">Loves</span>' + parts[0] + '<br><span style="' + label + 'margin-top:6px;">Hates</span>' + parts[1]
              : g.bio;
            return '<div style="font-family:\'Cormorant Garamond\',serif;font-style:italic;font-size:12px;color:rgba(42,31,24,0.5);line-height:1.58;margin-bottom:10px;flex:1;">' + html + '</div>';
          })()
        + '<div style="display:flex;flex-wrap:wrap;gap:3px;">'
        + '<span style="' + tagStyle + '">' + nats + '</span>'
        + '<span style="' + tagStyle + '">' + g.status + '</span>'
        + (g.age ? '<span style="' + tagStyle + '">' + g.age + '</span>' : '')
        + '<span style="' + tagStyle + '">Known ' + acqText + '</span>'
        + roomTag + passTag
        + '</div>'
        + '</div>'
        + '</div>';
    }).join("");

    if (list.length === 0) {
      html = '<div style="grid-column:1/-1;padding:52px;text-align:center;font-family:\'Cormorant Garamond\',serif;font-style:italic;font-size:15px;color:rgba(42,31,24,0.28);">No guests match the current filters.</div>';
    }

    grid.innerHTML = html;
  }

  function resetFilters() {
    document.getElementById("flt-age").value = "";
    document.getElementById("flt-status").value = "";
    document.getElementById("flt-nationality").value = "";
    document.getElementById("flt-room").value = "";
    document.getElementById("srt-by").value = "name";
    renderGuests();
  }

  function toggleFilters() {
    const panel = document.getElementById("guest-controls");
    const arrow = document.getElementById("filter-arrow");
    const open  = panel.style.display === "none";
    panel.style.display = open ? "block" : "none";
    arrow.style.transform = open ? "rotate(180deg)" : "rotate(0deg)";
  }

  // Render on load and when attendees tab is opened
  document.addEventListener("DOMContentLoaded", renderGuests);
  const _origOpenSub = window.openSub;
  window.openSub = function(e, id) {
    _origOpenSub(e, id);
    if (id === "attendees") setTimeout(renderGuests, 50);
  };
