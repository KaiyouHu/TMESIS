<template>
  <d2-container>
    <div class="serviceimportance">服务重要性认定</div>
    <!-- 服务重要性认定 -->
    <el-form ref="formImportance" @submit.native.prevent label-width="240px">
      <template v-for="answer_list in formImportance">
        <el-form-item :key="answer_list.importance_question_id"  :label="answer_list.importance_question_describe">
          <el-radio-group v-model="answer_list.importance_answer_item_id">
            <el-radio
              v-for="item in answer_list.importance_answer_item_info"
              :key="item.importance_answer_item_id"
              border
              :label="item.importance_answer_item_id">
              {{item.importance_answer_item}}}
            </el-radio>
          </el-radio-group>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formImportance')">立即创建</el-button>
        <el-button @click="resetForm('formImportance')">重置</el-button>
      </el-form-item>
    </el-form>
  </d2-container>
</template>

<script>
import { GetImportance } from '@/api/provider/importance'
export default {
  name: 'provider-certificationapplication-index2',
  data () {
    return {
      formImportance: null
    }
  },
  created: function () {
    // 从后台获取问题对象
    this.createImportanceProblem()
  },
  mounted: function () {

  },
  methods: {
    createImportanceProblem: function (data) {
      GetImportance(null)
        .then(async res => {
          const responseData = res
          // console.log('responseData length: ' + responseData.length)
          // console.log('importance problem res:' + JSON.stringify(responseData))
          this.formImportance = responseData
          /* for (let i in responseData) {
            this.rules.
          }
          this.rules =
          console.log(Object.keys(responseData))
           */
        })
        .catch(err => {
          console.log('err: ', err)
        })
    },
    submitForm (formName) {
      /* this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      }) */
      console.log(JSON.stringify(this.formImportance))
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
  .serviceimportance{
    text-align: center;
  }
</style>
