<template>
  <d2-container>
    <template slot="header">服务信息列表</template>
    <DataGrid
      :pagination="true"
      :total="total"
      :pageSize="pageSize"
      :pagePosition="pagePosition"
      :data="serviceTable"
      style="height: 100%;">
     <!-- <GridColumn field="service_id" title="信息服务业务编号"></GridColumn>-->
      <GridColumn field="service_name" title="信息服务业务名称"></GridColumn>
      <GridColumn field="service_describe" title="信息服务业务描述"></GridColumn>
      <GridColumn field="company_name" title="公司名"></GridColumn>
      <GridColumn field="username" title="用户名"></GridColumn>
      <GridColumn title="操作" width="128px">
        <template slot="header">
          <div class="item">
            <div class="title">操作</div>
          </div>
        </template>
        <template slot="body" slot-scope="scope">
          <LinkButton iconCls="icon-ok" :toggle="true" @click="confirmClick(scope.row)">确认</LinkButton>
          <LinkButton iconCls="icon-cancel" :toggle="true" :disabled="true">删除</LinkButton>
        </template>
      </GridColumn>
      <!--<GridColumn field="confidentiality" title="保密性" width="64px"></GridColumn>
      <GridColumn field="integrity" title="完整性" width="64px"></GridColumn>
      <GridColumn field="availability" title="可用性" width="64px"></GridColumn>
      <GridColumn field="no_repudiation" title="抗抵赖性" width="64px"></GridColumn>
      <GridColumn field="authenticity" title="真实性" width="64px"></GridColumn>
      <GridColumn field="privacy" title="隐私性" width="64px"></GridColumn>-->
    </DataGrid>
  </d2-container>
</template>

<script>
import { RetrieveASU, UpdateASU } from '@/api/dto/apply_service_user'

export default {
  name: 'reviewer-certificationapplication-index2',
  data () {
    return {
      total: 20,
      pageSize: 10,
      pagePosition: 'bottom',
      serviceTable: []
    }
  },
  created () {
    // 从后台获取问题对象
    this.createServiceTable()
  },
  mounted () {

  },
  methods: {
    createServiceTable: function (data) {
      RetrieveASU({ 'apply_status': '1', 'apply_flag': '1' })
        .then(async res => {
          const responseData = res
          // console.log('responseData length: ' + responseData.length)
          // console.log('service res:' + JSON.stringify(responseData))
          this.serviceTable = responseData.reverse()
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
      a.apply_status = '3'
      UpdateASU(a).then(
        async res => {
          // console.log(res)
          // 从后台获取问题对象
          this.createServiceTable()
        }).catch(err => {
        console.log(err)
      })

      console.log('cuurentRow' + JSON.stringify(currentRow))
    }
  }
}
</script>
