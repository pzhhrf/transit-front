<template>
    <div class="index">
        <Header></Header>
        <div class="in">
            <div class="in_01">使用教程</div>
            <div class="in_02">
                一、本中转的服务流程：
            </div>
            <div class="in_03">
                用户提交文件链接 -> 速方云提取文件信息 -> 用户确认中转 -> 本站高速中转目标文件至速方云服务器 -> 中转完毕生成下载链接 -> 用户下载
            </div>
            <div class="in_02">
                二、使用流程图解
            </div>
            <div class="in_03">
                <img src="../assets/i08.png">
            </div>
            <div class="in_01">常见问题</div>
            <div class="in_02">
                一、支持的 File Host 列表
            </div>
            <div class="in_03">
                支持列表以速方云首页为准，包括 rapidgator、alfafile、nitroflare、uploadgig、uploaded、extmatrix、filespace、wdupload、xubster、mexashare等
            </div>
            <div class="in_02">
                二、是否支持Premium(高级会员/白金会员)文件的下载
            </div>
            <div class="in_03">
                支持，能否进行中转的唯一标准是在速方云首页进行链接检测，检测成功(提示成功或添加至文件提取列表)即可中转。
            </div>
            <div class="in_02">
                三、从中转到用户下载程涉及两个速度：
            </div>
            <div class="in_03">
                第一是中转速度，速方云中转速度平均 20MB/s ，平均1G文件处理1分钟左右。 <br>
                第二是用户客户端下载速度，因客户端网络环境而异。由于服务器集群位于海外，使用前请务必进行速度测试，速度不佳谨慎使用 <br>
                线路一 ： <a href="http://suu-test.suufun.info/100mb.bin">http://suu-test.suufun.info/100mb.bin</a> <br>
                线路二 ： <a href="http://suu-test.suufun.xyz/100mb.bin">http://suu-test.suufun.xyz/100mb.bin</a> <br>
                （请使用下载软件测试，浏览器测试误差较大)
            </div>
            <div class="in_02">
                四、流量是否通用
            </div>
            <div class="in_03">
                流量通用
            </div>
            <div class="in_02">
                五、文件有效期
            </div>
            <div class="in_03">
                文件有效期：48小时，无下载IP和下载次数限制。<br>
                流量有效期：永久有效，用完为止
            </div>
            <div class="in_02">
                六、流量是否支持累加
            </div>
            <div class="in_03">
                支持。
            </div>
            <div class="in_02">
                七、文件转存失败
            </div>
            <div class="in_03">
                文件转存失败请刷新页面，流量将自动返回。<br>
                注：部分国际云盘服务(如wdupload)不稳定，可能出现检测成功但转存失败的现象。出现此类现象说明文件链接已不可用。
            </div>
            <div class="in_02">
                八、文件损坏、被加密或无法使用
            </div>
            <div class="in_03">
                本中转服务保证严格于源文件的一致性，保证不会对中转的数据任何改动。用户可自行校验哈希值证明。<br>
                关于文件的准确性、有效性、真实度只能用户自己甄别。<br>
                此外，由于文件是由网络用户上传，若有解压密码等请联系咨询文件提供者，本站不可能知晓。
            </div>
            <div class="in_02">
                九、下载工具推荐
            </div>
            <div class="in_03">
                Windows系统推荐工具：<br>
                <a href="javascript:;">IDM下载</a>　<a href="javascript:;">NDM下载</a><br>
                Mac系统推荐工具：<br>
                <a href="javascript:;">Aria2下载</a>　<a href="javascript:;">FDM下载</a> <br>
            </div>
            <div class="in_02">
                其他说明
            </div>
            <div class="in_03">
                1. 本中转服务保证严格于源文件的一致性，保证不会对中转的数据任何改动。用户可自行校验哈希值证明。<br>
                2. 关于文件的准确性、有效性、真实度只能用户自己甄别。<br>
                3. 此外，由于文件是由网络用户上传，若有解压密码等请联系咨询文件提供者，本站不可能知晓。<br>
                4. 在完成中转后，文件保留48小时即自动删除。如遇特殊情况需要延长，请提前联系服务人员。<br>
                5. 本站持续更新新的云支持。若请求支持某个云，可于QQ工作人员留言。<br>
                6. 目前暂不会接受支持的有： filejoker, keespan2share, fileboom, filesmonster, takefile, hotlink <br>
                7. 流量的有效期：永久有效、用完为止
            </div>
            <div class="in_04" @click="index">
                <a href="javascript:;">返回首页</a>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Common/Header.vue'
export default {
    name: 'Index',
    components: {
        Header
    },
    data () {
        return {
            accessToken: sessionStorage.getItem('accessToken')
        }
    },
    created: function(){
        var th = this;
        //th.getInfo();
    },
    methods: {
        getInfo: function(){
            var th = this;
            th.$http.post(th.Common.baseUrl + 'getIndex',{
                accessToken: th.accessToken
            }).then(function(res){
                if(res.data.status == 'success')
                {
                    th.info = res.data.info;
                }
                else
                {
                    alert(res.data.info);
                    if(res.data.code == '0')
                    {
                        sessionStorage.removeItem('accessToken');
                        th.$router.push({path: '/'});
                    }
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
        index: function(){
            var th = this;
            th.$router.push({ 
                path: '/index'
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{width: 100%;min-height: 100%;}
  .in{width:820px;height: auto;background: #fff;margin:0 auto;margin-top: 50px; padding: 50px 90px;}
  .in_01{width:800px;height:45px;font-size: 28px;color:#466ef5;border-left:4px solid #466cf5;padding-left: 20px;font-weight: bold;}
  .in_02{width:820px;height: 60px;line-height: 60px;font-size: 20px;color: #466ef5;}
  .in_03{width:820px;line-height: 30px;font-size: 14px;color: #474747;}
  .in_03 a{color: #466ef5;margin:10px;}
  .in_04{width:820px;height: 60px;line-height: 60px;margin:0 auto;text-align: center;}
  .in_04 a{color: #466ef5;font-size: 20px;}
</style>
