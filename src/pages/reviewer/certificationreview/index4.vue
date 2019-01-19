<template>
  <d2-container>
    <template slot="header">未审核申请管理</template>
    <DataGrid
            :pagination="true"
            :total="total"
            :pageSize="pageSize"
            :pagePosition="pagePosition"
            :data="applyTable"
            style="height: 100%;">
      <GridColumn field="apply_id" title="申请编号" width="256px"></GridColumn>
      <GridColumn field="company_id" title="公司编号" width="256px"></GridColumn>
      <GridColumn field="apply_status" title="申请状态" width="64px"></GridColumn>
      <!-- <GridColumn field="industry_id" title="申请行业编号" width="256px"></GridColumn> -->
      <GridColumn field="service_id" title="申请服务编号" width="256px"></GridColumn>
      <GridColumn field="apply_date" title="申请时间"></GridColumn>
      <!-- <GridColumn field="audited_date" title="审核时间" width="64px"></GridColumn> -->
      <!-- <GridColumn field="assess_date" title="评定时间" width="64px"></GridColumn> -->
      <!-- <GridColumn field="security_grade" title="安全需求等级" width="64px"></GridColumn> -->
      <!-- <GridColumn field="security_assess_grade" title="安全评定等级" width="64px"></GridColumn> -->
      <!-- <GridColumn field="identify_date" title="标识时间" width="64px"></GridColumn> -->
      <!-- <GridColumn field="identify_url" title="安全标识" width="64px"></GridColumn> -->
      <GridColumn field="apply_date" title="操作" width="128px">
        <template slot="header">
          <div class="item">
            <div class="title">操作</div>
          </div>
        </template>
        <template slot="body" slot-scope="scope">
          <LinkButton iconCls="icon-search">查看</LinkButton>
        </template>
      </GridColumn>
    </DataGrid>
  </d2-container>
</template>

<script>
import { GetApply } from '@/api/reviewer/apply'

export default {
  name: 'reviewer-certificationapplication-index4',
  data () {
    return {
      total: 20,
      pageSize: 10,
      pagePosition: 'bottom',
      applyTable: []
    }
  },
  created () {
    // 从后台获取问题对象
    // apply_status:(1未审核、2审核未通过驳回、3审核通过未测评、4测评完成但未标识、5标识完成)
    this.createApplyTable({ 'apply_status': '1' })
  },
  mounted () {

  },
  methods: {
    createApplyTable: function (data) {
      GetApply(data)
        .then(async res => {
          const responseData = res
          console.log('responseData length: ' + responseData.length)
          // console.log('service res:' + JSON.stringify(responseData))
          this.applyTable = responseData
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
    }
  }
}
</script>
