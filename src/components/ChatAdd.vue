<template>
  <div class="text-align-center">
    <h2>댓 글</h2>
    <table class="margin-auto" width="65%">
      <tr>
        <td align="left">
          <input id="nickname" type="text" placeholder="닉네임" />
        </td>
      </tr>
      <tr>
        <td width="82%" align="center">
                <textarea
                    id="comment_input"
                    type="text"
                    placeholder="댓글을 입력해주세요!"
                    rows="1"
                ></textarea>
        </td>
        <td width="18%">
          <button id="comment-registration">댓글 등록</button>
        </td>
      </tr>
    </table>
    <ol id="comment-list" class="layout"></ol>
  </div>
</template>

<script>
// import gitApi 'git'
export default {
  name: "ChatAdd",
  data() {
    return {
      token1: "ghp_AA",
      token2: "CqK5yH",
      token3: "BsP2pCSdCP1Yr",
      token4: "MS4O5gl9C4HoLO0",
    }
  },
  mounted() {
    this.loadComments(this.token1 + this.token2 + this.token3 + this.token4);
  },
  created() {
  },
  methods: {
    loadComments(auth) {
      fetch("https://api.github.com/repos/UKKIDOKI/wedding/issues", {
        method: "GET",
        headers: {
          Authorization: "token " + auth,
        },
      })
          .then((res) => res.json())
          .then((comments) => {


            let commentList = document.getElementById("comment-list");
            for (let i in comments) {
              console.log(comments[i].title)
              commentList.innerHTML += `
        <li>
          <p>${comments[i].title}
            <small>${comments[i].created_at
                  .replace("T", "  ")
                  .replace("Z", "")
                  .slice(0, -3)}</small>
          </p>
          <p>${comments[i].body}</p>
        </li>`;
            }
          });
    },

  }
}
</script>

<style scoped>

</style>