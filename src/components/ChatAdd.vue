<template>
  <div class="q-card q-card--square no-border-radius q-card--flat no-shadow wrapper" style="order:8;"
       data-aos="fade-up"
       data-aos-duration="2000">
    <div column="" class="text-center row justify-between"
         style="opacity: 1; transform: translateY(0px); transition: all 1.2s cubic-bezier(0.39, 0.575, 0.565, 1);">
      <div class="col text-center" style="border-top:1px solid var(--subColor);"></div>
      <div class="text-center" style="font-size:10px;margin-top:-8px;margin-left:12px;margin-right:12px;">♥</div>
      <div class="col-auto text-center t-font-a" style="margin-top:-10px;letter-spacing:-0.05em;">신랑 &amp; 신부에게 축하글을
        남겨주세요
      </div>
      <div class="text-center" style="font-size:10px;margin-top:-8px;margin-left:12px;margin-right:12px;">♥</div>
      <div class="col text-center" style="border-top:1px solid var(--subColor);"></div>
    </div>
    <div style="opacity: 1; transform: translateY(0px); transition: all 1.2s cubic-bezier(0.39, 0.575, 0.565, 1);">
      <div class="col-auto q-ma-sm">
        <div class="text-align-center">
          <input id="nickname" type="text" placeholder="이름" maxlength="10"
                 v-model="InputTitle"/>
          <div>

            <textarea placeholder="메시지"
                      v-model="InputBody"
                      rows="4"
                      id="message"
                      maxlength="100">

            </textarea>
          </div>
          <button id="comment-registration"
                  v-bind:disabled="isProcessing()"
                  @click="registerComment()">댓글 등록
          </button>
        </div>
      </div>
    </div>
    <div class="q-expansion-item q-item-type q-expansion-item--expanded q-expansion-item--standard q-py-md t-font-c"
         style="opacity: 1; transform: translateY(0px); transition: all 1.2s cubic-bezier(0.39, 0.575, 0.565, 1);
         margin-top: 20px;">
      <div class="q-expansion-item__container relative-position">
        <div class="q-expansion-item__content relative-position"
             v-for="(item, index) in ChatData" :key="index"
             style=""><!--[-->
          <div
              style="opacity: 1; transform: translateY(0px); transition: all 1.2s cubic-bezier(0.39, 0.575, 0.565, 1);">
            <div class="q-card q-card--flat no-shadow q-ma-sm guestBook">
              <div class="q-card__section q-card__section--vert">
                <div class="row">
                  <div class="col-8"><b>{{ item.title }}</b></div>
                  <div class="col-3 text-right">
                    <div style="font-size: 12px;">{{ dateFormat(new Date(item.created_at)) }}</div>
                  </div>
                </div>
                <div class="q-pt-sm">
                  {{ item.body }}
                </div>
              </div>
            </div>
          </div>
          <!--]--></div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';
export default {
  name: "ChatAdd",
  data() {
    return {
      processing: false,
      token1: "ghp_AA",
      token2: "CqK5yH",
      token3: "BsP2pCSdCP1Yr",
      token4: "MS4O5gl9C4HoLO0",
      ChatData: [],
      ChatData2: [],
      ChatData3: [],
      InputTitle: "",
      InputBody: "",
      date: ""
    }
  },
  mounted() {
    this.loadComments(this.token1 + this.token2 + this.token3 + this.token4);
  },
  created() {
    // this.startProcessing();
    console.log(this.isProcessing())
  },
  methods: {
    sendEmail(nickname,comment) {
      let templateParams = {
        nickname: nickname,
        comment: comment,
        type: "우리"
      };
      console.log(templateParams)
      emailjs.send('service_s2rz7ja', 'template_ucxjjhf', templateParams,"_41b6484onaUN4gZh")
      .then((result) => {
        console.log('SUCCESS!', result.text);
      }, (error) => {
        console.log('FAILED...', error.text);
      });
    },
    startProcessing: function() {
      this.processing = true
    },
    endProcessing: function() {
      this.processing = false
    },
    isProcessing: function() {
      console.log("Processing...", this.processing)
      return this.processing
    },
    dateFormat(date) {
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hour = date.getHours();
      let minute = date.getMinutes();

      month = month >= 10 ? month : '0' + month;
      day = day >= 10 ? day : '0' + day;
      hour = hour >= 10 ? hour : '0' + hour;
      minute = minute >= 10 ? minute : '0' + minute;

      return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    },
    loadComments(auth) {
      fetch("https://api.github.com/repos/UKKIDOKI/wedding/issues", {
        method: "GET",
        headers: {
          Authorization: "token " + auth,
        },
      })
      .then((res) => res.json())
      .then((comments) => {
        console.log("comments--->", comments)
        this.ChatData = comments;
      });
    },
    registerComment() {
      this.startProcessing();
      if(this.InputTitle == "") {
        alert("이름을 입력해주세요!");
        this.endProcessing()
      } else if(this.InputBody == "") {
        alert("내용을 입력해주세요!");
        this.endProcessing()
      } else {
        let check = confirm("메시지를 등록하시겠습니까?")
        if(check) {
          fetch(
              "https://api.github.com/repos/UKKIDOKI/wedding/issues",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "token " + this.token1 + this.token2 + this.token3 + this.token4,
                },
                body: JSON.stringify({
                  title: this.InputTitle,
                  body: this.InputBody,
                }),
              }
          ).then(() => {
            this.endProcessing()
            this.sendEmail(this.InputTitle, this.InputBody);
            this.InputTitle = "";
            this.InputBody = "";
            this.loadComments(this.token1 + this.token2 + this.token3 + this.token4)
          }).catch((e) => {
            this.sendEmail(this.InputTitle, this.InputBody);
            console.log("err", e)

          });
        } else {
          this.endProcessing()
        }
      }
    }
  }
}

</script>

<style scoped>
#nickname {
  border: 1px solid #e9e0e0;
  width: 100%;
  border-radius: 3px;
  padding: 5px;
}

#message {
  border: 1px solid #e9e0e0;
  width: 100%;
  border-radius: 3px;
  padding: 5px;
}

#comment-registration {
  background-color: white;
  border: 1px solid #e9e0e0;
  border-radius: 3px;
  float: right;
  padding: 5px;
  margin-bottom: 3px;
}
.row > .col-3, .row > .col-xs-3{
  width: 33%
}
</style>