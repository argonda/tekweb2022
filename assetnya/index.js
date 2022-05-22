Vue.createApp({
    data() {
      return {
          heading:{
            nama:"Argo Ndaru Husada",
            deskripsi:"Seorang mahasiswa yang sedang berkuliah di Universitas Ahmad Dahlan."
          },
        table:{
            judul:"Tabel",
            judul_t:["No","Keterampilan","Skill"],
            datan:[
                {
                    k:"Microsoft Word",
                    s:"Expert"
                },
                {
                    k:"Microsoft Power Point",
                    s:"Expert"
                },
                {
                    k:"Microsoft Excell",
                    s:"Expert"
                },
                {
                    k:"CSS",
                    s:"Intermediatte"
                },
                {
                    k:"Microsoft Excell",
                    s:"Intermediatte"
                },
                {
                    k:"HTML",
                    s:"Intermediatte"
                }
            ]
        },



        artikel: [],
        article: null,
      };
    },
    methods: {
      getArticle()
      {
        axios
          .get(
            src="../artikel/index.json"
            )
          .then((res) => {
            console.log(res.data);
            this.artikel = res.data;
          })
          .catch((error) => {
            console.log(error); 
          });
      },
      getDataMarkdown()
      {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const article = urlParams.get('article');        
        var converter = new showdown.Converter();
        console.log(article);
        axios
          .get(
            src="../artikel/"+article
          )
          .then((res) => {
            var html = converter.makeHtml(res.data);           
            this.article = html;
            console.log(html);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() { 
      this.getArticle(),
      this.getDataMarkdown()
    },
  }).mount("#app");