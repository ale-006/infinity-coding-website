let config = {
    "serverID": "847530805378547803"
}

function getCount() {
    fetch ("https://discordapp.com/api/guilds/" + config.serverID + "/widget.json", {
      method: "GET",
      cache: "reload"
    }).then (function(res) {
      if (res.status !== 200) {
        console.error(res.status)
        return
      }
      res.json().then(function (data) {
        document.getElementById("onlineMembers").innerHTML = "Online: " + data.members.length
      })
    })
}

function getMembers() {
    fetch ("https://discordapp.com/api/guilds/" + config.serverID + "/widget.json", {
        method: "GET",
        cache: "reload"
      }).then (function(res) {
        if (res.status !== 200) {
          console.error(res.status)
          return
        }
        res.json().then(function (data) {
            data.members.forEach(element => {
                let elem = document.createElement("li")
                elem.textContent = element.username + "#" + element.discriminator + " (" + element.status + ")"
                document.getElementById("elenco").appendChild(elem)
            });
        })
      })
}
