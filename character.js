function getQueryVariable(variable){
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++){
		var pair = vars[i].split("=");
		if(pair[0] == variable) return pair[1];
	}
	return(false);
}

window.addEventListener("DOMContentLoaded",() => {
	charData = {
		geo : {
			title : "Geo",
			characters : [
				{ image: "./characterList/Character_Albedo_Card.png",
				  names: "Lucky",
				  desc: "Lucky is described as an amiable and popular figure in Mondstadt, as well as an alchemical genius. He pursues the \"truth\" of the world of Teyvat per his master's request and seems to be able to create living organisms through his alchemical talents. Lucky is also good with children, as he gets along well with Klee, who considers him to be kind and patient, while he in turn sees her like a younger sister of sorts."
			}, {
				image: "./characterList/Character_Ningguang_Card.png",
				names: "Tamina",
				desc: "Owner of the Jade Chamber in the skies above Liyue, there are stories abound about Tamina, with her elegance and mysterious smile. As a Tianquan of the Liyue Qixing, not only does she embody law and order, she also represents fortune and wit."
			} , {
				image: "./characterList/Character_Noelle_Card.png",
				names: "Kevina",
				desc: "Kevina is a polite young woman and professional maid, helping those in need without hesitation, regardless of how far they are or what they need done, as long as they say her name. She has a very high standard of work ethic, as she always strives to ensure that everyones' needs are satisfied and always makes the effort to go over their expectations."
			}
			]
		},
		anemo : {
			title : "Anemo",
			characters : [
				{
					image : "./characterList/Character_Jean_Card.png",
					names : "ohNo",
					desc : "As the Acting Grand Master of the Knights, ohNo has always been devoted to her duties and maintaining peace in Mondstadt. She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always."
				},
				{
					image : "./characterList/Character_Sucrose_Card.png",
					names : "Anak Kecil",
					desc : "Anak Kecil loves experimenting and spends most of her time researching on bio-alchemy, stating that she likes to discover the secrets of life. Her research often yields numerous results that she often labels every unique variable as a result of its own, regardless of how useful said result may be."
				},
			]
		},
		pyro : {
			title : "Pyro",
			characters : [
				{
					image : "./characterList/Character_Diluc_Card.png",
					names : "Abang Ganteng",
					desc : "As the wealthiest gentleman in Mondstadt, the ever-dapper Abang Ganteng always presents himself as the epitome of perfection. But behind the courteous visage burns a zealous soul that has sworn to protect Mondstadt at all costs, allowing him to mercilessly vanquish all who threaten his city."
				},
				{
					image : "./characterList/Character_Klee_Card.png",
					names : "Si Bandel",
					desc : "An explosives expert and a regular at the Knights of Favonius' confinement room. Also known as Fleeing Sunlight."
				},
				{
					image : "./characterList/Character_Amber_Card.png",
					names : "Si Beban",
					desc : "A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Championship in Mondstadt. As a rising star within the Knights of Favonius, Beban is always ready for any challenging tasks."
				}
			]
		},
		hydro : {
			title : "Hydro",
			characters : [
				{
					image : "./characterList/Character_Mona_Card.png",
					names : "Emak-emak",
					desc : "A mysterious young astrologer who proclaims herself to be \"Astrologist Emak-emak,\" and who possesses abilities to match the title. Erudite, but prideful. Though she is often strapped for cash and lives a life of thrift, she is resolved to never use astrology for profit... "
				},
				{
					image : "./characterList/Character_Tartaglia_Card.png	",
					names : "Abang Kakoi",
					desc : "Meet Abang Kakoi — the cunning Snezhnayan whose unpredictable personality keeps people guessing his every move."
				}
			]
		},
		electro : {
			title : "Electro",
			characters : [
				{
					image : "./characterList/Character_Fischl_Card.png",
					names : "OP Dulu",
					desc : "A mysterious girl who calls herself \"Gak jadi OP\" and travels with a night raven named Oz. Currently serves as an investigator in the Adventurers' Guild."
				},
				{
					image : "./characterList/Character_Razor_Card.png",
					names : "Anak Jalanan",
					desc : "A boy who lives among the wolves in Wolvendom of Mondstadt, away from human civilization. As agile as lightning."
				},
				{
					image : "./characterList/Character_Lisa_Card.png",
					names : "Tante-tante",
					desc : "She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Tante-tante is smart in that she always knows exactly what to do with whatever troubles her."
				}
			]
		},
		cyro : {
			title : "Cryo",
			characters : [
				{
					image : "./characterList/Character_Qiqi_Card.png",
					names : "Cute Zombie",
					desc : "An apprentice and herb gatherer at Bubu Pharmacy. \"Blessed\" by the adepti with a body that cannot die, this petite zombie cannot do anything without first giving herself orders to do it. Cutie's memory is like a sieve."
				},
				{
					image : "./characterList/Character_Kaeya_Card.png",
					names : "Om-om",
					desc : "In the Knights of Favonius, Om-om is the most trusted aide for the Acting Grand Master Jean. You can always count on him to solve any intractable problems."
				}
			]
		}
	};
	if (!getQueryVariable("action")) {
		const container = document.querySelector(".falseContent");
				falseStatement = document.createElement("div");
				falseStatement.className = "falseStatement";
				falseStatement.innerHTML = "Please Choose an Element";	
				const footer = document.getElementsByClassName(".footer");
				footer.className = "footer"
				footer.marginTop = "12%"
		container.append(falseStatement);
	} else {
		const data = getQueryVariable("action");
		const container = document.querySelector(".container"),
					charContainer = document.createElement("div"),
					title = document.createElement("h2");
		title.className = "titleClass";
		title.innerHTML = charData[data].title;
		console.log(charData[data]);
		charContainer.className = "char-container";
		charData[data].characters.forEach((chars) => {
			const banner = document.createElement("div");
			banner.className = "bannerChar";
			banner.innerHTML = `
				<div class="tutup">
					<img src="${chars.image}" class="images">
					<div class="bagi">
						<div class="tutupShadow">
						<div class = "desc">${chars.desc}</div>
					</div>
				</div>
				</div>
				
				<div class = "charName">${chars.names}</div>
			`;
			charContainer.append(banner);
		});
		container.append(title);
		container.append(charContainer);
	}
})