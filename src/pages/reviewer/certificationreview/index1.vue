<template>
  <d2-container>
    <template slot="header">公司基本信息管理</template>
    <DataGrid
            :pagination="true"
            :total="total"
            :pageSize="pageSize"
            :pagePosition="pagePosition"
            :data="companyTable"
            style="height: 100%;">
      <GridColumn :expander="true" width="30"></GridColumn>
      <GridColumn field="company_num" title="公司编号" width="120px"></GridColumn>
      <GridColumn field="company_name" title="公司名称" width="200px">
        <template slot="body" slot-scope="scope">
          <span v-Tooltip="scope.row.company_name">{{scope.row.company_name}}</span>
        </template>
      </GridColumn>
      <GridColumn field="company_nature" title="公司性质" width="120px">
        <template slot="body" slot-scope="scope">
          <span v-Tooltip="scope.row.company_nature">{{scope.row.company_nature}}</span>
        </template>
      </GridColumn>
      <GridColumn field="company_website" title="网址" width="40px">
        <template slot="body" slot-scope="scope">
          <div class="item">
            <a :href="scope.row.company_website"  target="_blank">链接</a>
          </div>
        </template>
      </GridColumn>
      <GridColumn field="organize_code" title="组织机构代码" width="170px">
        <template slot="body" slot-scope="scope">
          <span v-Tooltip="scope.row.organize_code">{{scope.row.organize_code}}</span>
        </template>
      </GridColumn>
      <GridColumn field="license_code" title="营业执照注册号" width="170px">
        <template slot="body" slot-scope="scope">
          <span v-Tooltip="scope.row.license_code">{{scope.row.license_code}}</span>
        </template>
      </GridColumn>
      <GridColumn field="main_business" title="主营业务" width="170px">
        <template slot="body" slot-scope="scope">
          <span v-Tooltip="scope.row.main_business">{{scope.row.main_business}}</span>
        </template>
      </GridColumn>
      <GridColumn field="legal_representative" title="法人" width="50px">
        <template slot="body" slot-scope="scope">
          <span v-Tooltip="scope.row.legal_representative">{{scope.row.legal_representative}}</span>
        </template>
      </GridColumn>
      <GridColumn field="superior_company" title="上级主管公司" width="120px">
        <template slot="body" slot-scope="scope">
          <span v-Tooltip="scope.row.superior_company">{{scope.row.superior_company}}</span>
        </template>
      </GridColumn>
      <GridColumn title="操作" width="120px">
        <template slot="body" slot-scope="scope">
          <LinkButton iconCls="icon-ok" :toggle="true" @click="confirmClick(scope.row)">确认</LinkButton>
          <LinkButton iconCls="icon-cancel" :toggle="true" :disabled="true">删除</LinkButton>
        </template>
      </GridColumn>
      <template slot="detail" slot-scope="scope">
        <div>
          <Row class="expand-row">
            <i-col span="8">
              <span class="expand-key">注册资金: </span>
              <span class="expand-value">{{ scope.row.register_captial }}</span>
            </i-col>
            <i-col span="8">
              <span class="expand-key">通讯地址: </span>
              <span class="expand-value">{{ scope.row.company_address }}</span>
            </i-col>
            <i-col span="8">
              <span class="expand-key">开户银行: </span>
              <span class="expand-value">{{ scope.row.bank_name }}</span>
            </i-col>
          </Row>
          <Row>
            <i-col span="8">
              <span class="expand-key">bank_account: </span>
              <span class="expand-value">{{ scope.row.bank_account }}</span>
            </i-col>
            <i-col span="8">
              <span class="expand-key">银行账户: </span>
              <span class="expand-value">{{ scope.row.bank_account }}</span>
            </i-col>
            <i-col span="8">
              <span class="expand-key">员工总数: </span>
              <span class="expand-value">{{ scope.row.total_employee }}</span>
            </i-col>
          </Row>
        </div>
      </template>
    </DataGrid>
    <!--<Dialog ref="d1"
            :title="操作"
            :dialogStyle="{width:'400px',height:'200px'}"
            bodyCls="f-column"
            :modal="true">
      <div class="f-full">
        <Row>
          <i-col></i-col>
        </Row>
        <Row>
          <i-col></i-col>
        </Row>
      </div>
      <div class="dialog-button">
        <LinkButton style="width:80px">确定</LinkButton>
        <LinkButton style="width:80px">放弃</LinkButton>
      </div>
    </Dialog>-->
  </d2-container>
</template>

<script>
import { RetrieveCompany, UpdateCompany } from '@/api/reviewer/company'

export default {
  name: 'reviewer-certificationapplication-index1',
  data () {
    return {
      total: 20,
      pageSize: 10,
      pagePosition: 'bottom',
      companyTable: []
    }
  },
  created () {
    // 从后台获取问题对象
    this.createCompanyTable()
  },
  mounted () {

  },
  methods: {
    createCompanyTable: function (data) {
      RetrieveCompany(JSON.stringify({ 'flag': '0' }))
        .then(async res => {
          const responseData = res
          // console.log('responseData length: ' + responseData.length)
          // console.log('service res:' + JSON.stringify(responseData))
          this.companyTable = responseData
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
    confirmClick: function (currentRow) {
      let a = currentRow
      a.flag = '1'
      UpdateCompany(a).then(
        async res => {
          console.log(res)
        }).catch(err => {
        console.log(err)
      })
      // 从后台获取问题对象
      this.createCompanyTable()

      console.log(currentRow)
    }
  }
}
</script>

<style scoped>
  .expand-row{
    margin-bottom: 16px;
  }
  .expand-key{

  }
  .expand-value{

  }
</style>
