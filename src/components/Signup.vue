<template>
  <section>
    <!--
			광고수신 동의 체크박스
			BoxAgreement는 커스텀 컴포넌트로 동의 여부를 묻는 버튼 정도로 생각
		-->
    <BoxAgreement
        @click.native="controlModal(true)"
    />
    <!--
			광고 동의 모달 starts
			상황에 따라 내용 변경가능, template 태그는 상단 문서 참고
		-->
    <Modal @close="controlModal(false)" v-if="isModalOpen">
      <!-- header slot starts -->
      <template #title>
        <div>타이틀</div>
      </template>

      <!-- content slot starts -->
      <template #content>
        <p>콘텐츠 내용</p>
      </template>

      <!-- footer slot starts -->
      <template #footer>
        <button @click="controlModal(false)">동의</button>
      </template>
    </Modal>

  </section>
</template>

<script lang="ts">
import Modal from "../components/Modal";

export default {
  components: {
    Modal,
  },
}
</script>