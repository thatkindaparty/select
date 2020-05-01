// for every elem with class game-link
// get data-name
// that is the subdomain name
// and append the current game id
// add navigation onclick

const host = 'thatkindaparty.com';
const gameId = window.location.pathname;

function linkGames() {
	$('.game-link').each(function(i) {
		let elem = $(this);

		const name = elem.attr('data-name');
		elem.click(_ => {
			window.location.href = 'https://' + name + '.' + host + gameId;
		});
	});
}

$(document).ready(linkGames);
