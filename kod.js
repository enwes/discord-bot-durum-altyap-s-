client.once('ready', () => { //Client hazır olduğunda
    console.log('ISTEDIGINIZ SEY'); //Konsola "ISTEDIGINIZ SEY" yazdır.
    client.user.setActivity("BOTUN DURUMUNA YAZILACAK YAZI", { //Bot hesabının aktivitesini "BOTUN DURUMUNA YAZILACAK YAZI" olarak ayarla
    type: "BOTUN AKTİVİTE DURUMU"//örnek : LISTENING: dinliyor       STREAMING: yayınlıyor      WATCHING: izliyor vb.             NOT: mesela LISTENİNG yazarsanız kod çalışmaz i leri ı olarak yazmanız lazım....
  })
  });


//https://discord.gg/lykia
