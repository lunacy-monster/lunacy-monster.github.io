import { PasteClient, Publicity, ExpireDate } from "pastebin-api";
const client = new PasteClient("DtCde2097z73sYcc8xW3M3_JLv-HLDPZ");

var intext = document.getElementById('text').value;
document.getElementById('text').value = 'new value';

function upload () {
    const url = await client.createPaste({
        code: document.getElementById('text').value = 'new value',
        expireDate: ExpireDate.Never,
        format: "javascript",
        name: "> monokai document",
        publicity: Publicity.Public,
      });
      
      console.log(url);
}
