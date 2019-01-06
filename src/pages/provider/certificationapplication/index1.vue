<template>
    <!-- 公司基本信息填写 -->
    <el-form ref="formCompany" :rules="rules" :model="formCompany" @submit.native.prevent label-width="160px">
      <Row>
        <i-col span="12">
          <!-- 公司名称 -->
          <el-form-item label="公司名称" prop="company_name" class="company_info_input">
            <el-input v-model="formCompany.company_name"></el-input>
          </el-form-item>
        </i-col>
        <i-col span="12">
          <!-- 公司性质 -->
          <el-form-item label="公司性质">
            <el-input v-model="formCompany.company_nature"></el-input>
          </el-form-item>
        </i-col>
      </Row>
      <Row>
        <i-col span="12">
          <!-- 注册资金 -->
          <el-form-item label="注册资金">
            <el-input type="number" prefix-icon="el-icon-search" v-model="formCompany.register_captial"></el-input>
          </el-form-item>
        </i-col>
        <i-col span="12">
          <!-- 通信地址 -->
          <el-form-item label="通信地址">
            <el-input v-model="formCompany.company_address"></el-input>
          </el-form-item>
        </i-col>
      </Row>
      <Row>
        <i-col span="12">
          <!-- 公司网址 -->
          <el-form-item label="公司网址">
            <el-input v-model="formCompany.company_website"></el-input>
          </el-form-item>
        </i-col>
        <i-col span="12">
          <!-- 机构代码 -->
          <el-form-item label="机构代码">
            <el-input v-model="formCompany.organize_code"></el-input>
          </el-form-item>
        </i-col>
      </Row>
      <Row>
        <i-col span="12">
          <!-- 营业执照 -->
          <el-form-item label="营业执照">
            <el-input v-model="formCompany.license_code"></el-input>
          </el-form-item>
        </i-col>
        <i-col span="12">
          <!-- 经营期限 -->
          <el-form-item label="经营期限">
            <el-input v-model="formCompany.operating_period"></el-input>
          </el-form-item>
        </i-col>
      </Row>
      <Row>
        <i-col span="12">
          <!-- 主营业务 -->
          <el-form-item label="主营业务">
            <el-input v-model="formCompany.main_business"></el-input>
          </el-form-item>
        </i-col>
        <i-col span="12">
          <!-- 法人代表 -->
          <el-form-item label="法人代表">
            <el-input v-model="formCompany.legal_representative"></el-input>
          </el-form-item>
        </i-col>
      </Row>
      <Row>
        <i-col span="12">
          <!-- 开户银行 -->
          <el-form-item label="开户银行">
            <el-input v-model="formCompany.bank_name"></el-input>
          </el-form-item>
        </i-col>
        <i-col span="12">
          <!-- 开户银行 -->
          <el-form-item label="开户银行账号">
            <el-input v-model="formCompany.bank_account"></el-input>
          </el-form-item>
        </i-col>
      </Row>
      <Row>
        <i-col span="12">
          <!-- 上级主管公司名称 -->
          <el-form-item label="上级主管公司名称">
            <el-input v-model="formCompany.superior_company"></el-input>
          </el-form-item>
        </i-col>
        <i-col span="12">
          <!-- 公司成立时间 -->
          <el-form-item label="公司成立时间">
            <el-input v-model="formCompany.founding_time"></el-input>
          </el-form-item>
        </i-col>
      </Row>
      <Row>
        <i-col span="12">
          <!-- 工商注册号 -->
          <el-form-item label="工商注册号">
            <el-input v-model="formCompany.register_code"></el-input>
          </el-form-item>
        </i-col>
        <i-col span="12">
          <!-- 公司员工总数 -->
          <el-form-item label="公司员工总数">
            <el-input v-model="formCompany.total_employee"></el-input>
          </el-form-item>
        </i-col>
      </Row>
      <Row>
        <i-col span="12">
          <!-- 总资产 -->
          <el-form-item label="总资产">
            <el-input v-model="formCompany.total_asset"></el-input>
          </el-form-item>
        </i-col>
        <i-col span="12">
          <!-- 净资产 -->
          <el-form-item label="净资产">
            <el-input v-model="formCompany.net_asset"></el-input>
          </el-form-item>
        </i-col>
      </Row>

      <Row>
        <i-col span="8"></i-col>
        <i-col span="8">
          <el-form-item>
            <el-button type="primary" @click="submitForm('formCompany')">立即创建</el-button>
            <el-button @click="resetForm('formCompany')">重置</el-button>
          </el-form-item>
        </i-col>
        <i-col span="8"></i-col>
      </Row>

    </el-form>
</template>

<script>
import { CreateCompany } from '@/api/provider/company'
import util from '@/libs/util.js'

export default {
  name: 'provider-certificationapplication-index1',
  data () {
    return {
      formCompany: {
        company_name: '重庆演示测试公司1',
        company_nature: '国有控股公司',
        register_captial: 0,
        company_address: '重庆演示测试大道',
        company_website: 'http://www.baidu.com/',
        organize_code: '123456',
        license_code: '123456',
        operating_period: '5年',
        main_business: '演示测试业务1',
        legal_representative: '演示者1',
        bank_name: '重庆工商银行观音桥支行',
        bank_account: '62170000000000000',
        superior_company: '重庆大学',
        founding_time: '2018/12/06',
        register_code: '231232132131231',
        total_employee: '50000',
        total_asset: '8000000000',
        net_asset: '600000000'
      },
      rules: {
        company_name: [
          { required: true, message: '请输入公司名称', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
        company_nature: [
          { required: true, message: '请输入公司性质', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        register_captial: [
          { required: true, message: '请输入公司注册资金', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit:' + JSON.stringify(this.formCompany))
          this.formCompany.user_id = util.cookies.get('uuid')
          CreateCompany(JSON.stringify(this.formCompany))
            .then(async res => {
              console.log('res' + JSON.stringify(res))
              if (confirm('添加成功！是否留在本页？')) {

              } else {
                // 跳转路由
                this.$router.push({
                  name: 'index'
                })
              }
            }
            ).catch(err => {
              console.log(err)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
  .company_info_input{
    min-width: 640px;
  }
</style>
