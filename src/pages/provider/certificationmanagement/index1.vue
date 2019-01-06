<template>
  <d2-container>
    <template slot="header">未审核申请管理</template>
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
      <GridColumn title="重要性" width="120px">
        <template slot="header">
          <div class="item">
            <div class="title">重要性</div>
          </div>
        </template>
        <template slot="body" slot-scope="scope">
          <LinkButton iconCls="icon-ok" :toggle="true" @click="callImportance(scope.row)">重要性</LinkButton>
        </template>
      </GridColumn>

      <GridColumn title="依赖性" width="120px">
        <template slot="header">
          <div class="item">
            <div class="title">依赖性</div>
          </div>
        </template>
        <template slot="body" slot-scope="scope">
          <LinkButton iconCls="icon-ok" :toggle="true" @click="callDependence(scope.row)">依赖性</LinkButton>
        </template>
      </GridColumn>
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
    </DataGrid>

    <!-- 重要性弹窗 -->
    <el-dialog title="重要性" width="60%" :visible.sync="dialogImportanceVisiable">

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
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogImportanceVisiable = false">取 消</el-button>
        <el-button type="primary" @click="dialogImportanceVisiable = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 重要性弹窗 -->

    <!-- 依赖性弹窗 -->
    <el-dialog title="依赖性" width="60%" :visible.sync="dialogDependenceVisiable">

      <el-form ref="formDependence" @submit.native.prevent label-width="240px">
        <template v-for="answer_list in formDependence">
          <el-form-item :key="answer_list.dependence_question_id"  :label="answer_list.dependence_question_describe">
            <el-radio-group v-model="answer_list.dependence_answer_item_id">
              <el-radio
                      v-for="item in answer_list.dependence_answer_item_info"
                      :key="item.dependence_answer_item_id"
                      border
                      :label="item.dependence_answer_item_id">
                {{item.dependence_answer_item}}}
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </template>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDependenceVisiable = false">取 消</el-button>
        <el-button type="primary" @click="dialogDependenceVisiable = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 依赖性弹窗 -->

  </d2-container>
</template>

<script>
import { RetrieveASU, UpdateASU } from '@/api/dto/apply_service_user'
import { GetImportance } from '@/api/provider/importance'
import { GetDependence } from '@/api/provider/dependence'

export default {
  name: 'certificationmanagement-index1',
  data () {
    return {
      total: 20,
      pageSize: 10,
      pagePosition: 'bottom',
      serviceTable: [],
      // 服务重要性
      formImportance: null,
      dialogImportanceVisiable: false,
      // 服务依赖性
      formDependence: null,
      dialogDependenceVisiable: false

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
    callImportance: function (cuurentRow) {
      this.dialogImportanceVisiable = true
      GetImportance(null)
        .then(async res => {
          const responseData = res
          this.formImportance = responseData
        })
        .catch(err => {
          console.log('err: ', err)
        })
    },
    callDependence: function (cuurentRow) {
      this.dialogDependenceVisiable = true
      GetDependence(null)
        .then(async res => {
          const responseData = res
          this.formDependence = responseData
        })
        .catch(err => {
          console.log('err: ', err)
        })
    }
  }
}
</script>
