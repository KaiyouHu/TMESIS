<template>
  <d2-container>
    <div class="serviceinfo">为确定服务的所属的服务模式，设置以下问题，请如实回答：</div>
    <!-- 服务基本信息填写 -->
    <el-form ref="formServiceInfo" :rules="rules" :model="formServiceInfo" @submit.native.prevent label-width="160px">
      <!--<el-form-item label="信息服务业务编号" prop="service_id">
        <el-input v-model="formServiceInfo.service_id"></el-input>
      </el-form-item>-->
      <!--<el-form-item label="选择公司">
        <el-input v-model="formServiceInfo.service_name"></el-input>
      </el-form-item>-->
      <el-form-item label="信息服务业务名称">
        <el-input v-model="formServiceInfo.service_name"></el-input>
      </el-form-item>
      <el-form-item label="信息服务业务描述">
        <el-input v-model="formServiceInfo.service_describe"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="信息服务业务行业">
            <el-select v-model="formServiceInfo.service_industry">
              <el-option
                      v-for="item in industry"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="信息服务业务业务">
            <el-select v-model="formServiceInfo.service_procedure">
              <el-option
                      v-for="item in procedure"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <!-- 服务基本信息填写 -->

      <!-- 服务评估信息填写 -->
      <!--<el-form-item label="保密性">
        <el-radio-group v-model="formServiceInfo.confidentiality">
          <el-radio label="0">低</el-radio>
          <el-radio label="1">中</el-radio>
          <el-radio label="2">高</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="完整性">
        <el-radio-group v-model="formServiceInfo.integrity">
          <el-radio label="0">低</el-radio>
          <el-radio label="1">中</el-radio>
          <el-radio label="2">高</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="可用性">
        <el-radio-group v-model="formServiceInfo.availability">
          <el-radio label="0">低</el-radio>
          <el-radio label="1">中</el-radio>
          <el-radio label="2">高</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="抗抵赖性">
        <el-radio-group v-model="formServiceInfo.no_repudiation">
          <el-radio label="0">低</el-radio>
          <el-radio label="1">中</el-radio>
          <el-radio label="2">高</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="真实性">
        <el-radio-group v-model="formServiceInfo.availability">
          <el-radio label="0">低</el-radio>
          <el-radio label="1">中</el-radio>
          <el-radio label="2">高</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="隐私性">
        <el-radio-group v-model="formServiceInfo.no_repudiation">
          <el-radio label="0">低</el-radio>
          <el-radio label="1">中</el-radio>
          <el-radio label="2">高</el-radio>
        </el-radio-group>
      </el-form-item>-->
      <!-- 服务评估信息填写 -->

      <el-form-item>
        <el-button type="primary" @click="submitForm('formServiceInfo')">立即创建</el-button>
        <el-button @click="resetForm('formServiceInfo')">重置</el-button>
      </el-form-item>
    </el-form>
  </d2-container>
</template>

<script>
import { AddService } from '@/api/provider/service'

export default {
  name: 'provider-certificationapplication-index3',
  data () {
    return {
      formServiceInfo: {
        service_name: '北京工商局登记全程电子化云存储租用',
        service_describe: '北京工商局登记全程电子化云存储租用的描述',
        service_industry: '',
        service_procedure: ''
      },
      industry: [
        {
          value: '1',
          label: '电力'
        },
        {
          value: '2',
          label: '石油化工'
        }
      ],
      procedure: [
        {
          value: '1',
          label: '网络游戏'
        },
        {
          value: '2',
          label: '信息社区平台'
        },
        {
          value: '2',
          label: '信息即时交互'
        }
      ],
      rules: {
        /* service_id: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ] */
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit:' + JSON.stringify(this.formServiceInfo))
          AddService(JSON.stringify(this.formServiceInfo))
            .then(async res => {
              console.log('res' + JSON.stringify(res))
              alert('添加服务成功')
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
  .serviceinfo{
    text-align: center;
  }
</style>
