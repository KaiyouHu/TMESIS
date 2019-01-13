<template>
  <d2-container>
    <template slot="header">已审核申请管理</template>
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
      <GridColumn width="64px">
        <template slot="header">
          <div class="item">
            <div class="title">预评等级</div>
          </div>
        </template>
        <template slot="body" slot-scope="scope">
          <LinkButton :toggle="true" @click="showLevel(scope.row)">等级3</LinkButton>
        </template>
      </GridColumn>

      <!-- <GridColumn title="操作" width="128px">
        <template slot="header">
          <div class="item">
            <div class="title">操作</div>
          </div>
        </template>
        <template slot="body" slot-scope="scope">
          <LinkButton iconCls="icon-ok" :toggle="true" @click="confirmClick(scope.row)">确认</LinkButton>
          <LinkButton iconCls="icon-cancel" :toggle="true" :disabled="true">删除</LinkButton>
        </template>
      </GridColumn> -->
    </DataGrid>

    <!-- 测评内容 -->
    <el-dialog title="预测评内容以及预期结果" width="60%" :visible.sync="testContentVisiable">

      <div slot="footer" class="dialog-footer">
        <el-button @click="testContentVisiable = false">取 消</el-button>
        <el-button type="primary" @click="testContentVisiable = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 测评内容 -->

  </d2-container>
</template>

<script>
import { RetrieveASU, UpdateASU } from '@/api/dto/apply_service_user'

export default {
  name: 'certificationmanagement-index1',
  data () {
    return {
      total: 20,
      pageSize: 10,
      pagePosition: 'bottom',
      serviceTable: [],

      // 测评内容
      testContentVisiable: false
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
    },
    /**
     * @author Kaiyou Hu
     * @data 2019/1/14
     * @description 显示预评价等级的内容
     * @param currentRow.level
     * @return 需要评价的内容
     */
    showLevel: function (currentRow) {
      this.testContentVisiable = true
    }
  }
}
</script>
