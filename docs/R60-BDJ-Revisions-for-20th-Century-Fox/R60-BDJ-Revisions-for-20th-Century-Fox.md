---
pageNumber: I
chapter: 
---
# Dedication

> 测试原盘：Ready or Not 2019 1080p EUR Blu-ray AVC DTS-HD MA 5.1-JATO
>
> 修改工具：JD-GUI | IntelliJ IDEA | HxD | PhotoShop | Sublime

## 定位需要修改的class文件

首先删除JAR文件夹中所有jar包的签名，即`META-INF`文件夹。

使用`jd-gui`打开jar包，找到`com.foxbd.sdac/ready.f2/StandardMenuXlet.class`，这是一个入口文件。

在`StandardMenuXlet.class`中找到`startXlet()`方法，这里找到调用`a()`方法的类，如图所示，即`ab.class`。

![StandardMenuXlet.class](https://cdn.jsdelivr.net/gh/JiaJingZ6/IMG_STORE/R60-20-Century-Fox/2024-09-19_134708.png)



进入`ab.class`后，可以看到开头定义了不少关键字（为了减少篇幅，删去部分代码），根据关键字的定义，可以知道cx是字幕菜单。下面的`a()`方法就是StandardMenuXlet中调用的方法，这个方法是根据`l.m().n()`返回的字段决定哪种语言菜单，根据代码可知英语菜单要调用`b()`方法。由于Java源代码编译后关键字全部混淆，在`b()`方法中只能通过一个个方法查看来确定要修改的类。

```java
public abstract class ab {
  public static String cx = "subtitleMenu";
  
  // ...
  
  public static String cO = "sDWarningPopupMenu";
  
  public static void a(vd paramvd) {
    String str = l.m().n();
    if (str != null)
      if (str.equals("_eng")) {
        b(paramvd);
      } else if (str.equals("_fra")) {
        c(paramvd);
      // ...
      } else {
        b(paramvd);
      }  
  }
  
  private static void b(vd paramvd) {
    fe fe = new fe();
    paramvd.a(fe, new kb(), new bg());
    ce ce = new ce();
    paramvd.a(ce, new hb(), new am());
    ex ex = new ex();
    paramvd.a(ex, new ju(), new be());
    bq bq = new bq();
    paramvd.a(bq, new gn(), new ah());
    cl cl = new cl();
    paramvd.a(cl, new hi(), new ao());
    ec ec = new ec();
    paramvd.a(ec, new iz(), new ay());
    ej ej = new ej();
    paramvd.a(ej, new jg(), new ba());
    eq eq = new eq();
    paramvd.a(eq, new jn(), new bc());
    bx bx = new bx();
    paramvd.a(bx, new gu(), new aj());
    fs fs = new fs();
    paramvd.a(fs, new kp(), new bk());
    gg gg = new gg();
    paramvd.a(gg, new ld(), new bo());
    fl fl = new fl();
    paramvd.a(fl, new ki(), new bi());
    dv dv = new dv();
    paramvd.a(dv, new is(), new aw());
    fz fz = new fz();
    paramvd.a(fz, new kw(), new bl());
    cz cz = new cz();
    paramvd.a(cz, new hw(), new ar());
    cs cs = new cs();
    paramvd.a(cs, new hp(), new aq());
    dg dg = new dg();
    paramvd.a(dg, new id(), new as());
    do do = new do();
    paramvd.a(do, new il(), new au());
    fe.f(cl);
    ce.f(cl);
    ex.f(cl);
    bq.f(fe);
    fl.f(fe);
  }
```



确定字幕轨道要修改的类为`fl.class`和`ki.class`

确定OSI要修改的类为`dv.class`和`is.class`

在JD-GUI中搜索字符串常量`MLP`确定要修改的类为`pv.class`

## fl.class

```java
public class fl extends vf {
  public void init() {
    try {
      xj xj = new xj("subtitle_List", 421, 102, new xc(false), new xd(0.3F));

      wu wu1 = new wu(250, 55);
      wt wt1 = wb.bK("FoxTemplate_en_su_sub_eng_s");
      wu1.b("layer_342", wt1);
      wu wu2 = new wu(250, 55);
      wt wt2 = wb.bK("FoxTemplate_en_su_sub_eng_s");
      wu2.b("layer_343", wt2);
      wu wu3 = new wu(250, 55);
      wt wt3 = wb.bK("FoxTemplate_en_su_sub_eng_a");
      wu3.b("layer_344", wt3);
      wu wu4 = new wu(250, 55);
      wt wt4 = wb.bK("FoxTemplate_en_su_sub_eng_a");
      wu4.b("layer_345", wt4);
      wf wf1 = new wf("eng_SDLG_", 250, 55, wu1, wu2, wu3, wu4);
      xj.g(wf1);
      // 以上是一个按钮块

      wu wu5 = new wu(104, 27);
      wt wt5 = wb.bK("FoxTemplate_en_su_sub_fre_s");
      wu5.b("layer_752", wt5);
      wu wu6 = new wu(104, 27);
      wt wt6 = wb.bK("FoxTemplate_en_su_sub_fre_s");
      wu6.b("layer_753", wt6);
      wu wu7 = new wu(104, 27);
      wt wt7 = wb.bK("FoxTemplate_en_su_sub_fre_a");
      wu7.b("layer_754", wt7);
      wu wu8 = new wu(104, 27);
      wt wt8 = wb.bK("FoxTemplate_en_su_sub_fre_a");
      wu8.b("layer_763", wt8);
      wf wf2 = new wf("fra_TXT_", 104, 27, wu5, wu6, wu7, wu8);
      xj.g(wf2);
      // 以上是法语的，因为我们按钮跟法语完全一致，所以中文的也是复制这里的改就行，修改结果如下代码所示
	  
      // ... 此处省略部分按钮  
      
      wu cn1_wu5 = new wu(104, 27);
      wt cn1_wt5 = wb.bK("CNAs");
      cn1_wu5.b("layer_752", cn1_wt5);
      wu cn1_wu6 = new wu(104, 27);
      wt cn1_wt6 = wb.bK("CNAs");
      cn1_wu6.b("layer_753", cn1_wt6);
      wu cn1_wu7 = new wu(104, 27);
      wt cn1_wt7 = wb.bK("CNAa");
      cn1_wu7.b("layer_754", cn1_wt7);
      wu cn1_wu8 = new wu(104, 27);
      wt cn1_wt8 = wb.bK("CNAa");
      cn1_wu8.b("layer_763", cn1_wt8);
      wf cn1_wf2 = new wf("zho_CNA_", 104, 27, cn1_wu5, cn1_wu6, cn1_wu7, cn1_wu8);
      xj.g(cn1_wf2); 
      
      wu cn2_wu5 = new wu(104, 27);
      wt cn2_wt5 = wb.bK("CNBs");
      cn2_wu5.b("layer_752", cn2_wt5);
      wu cn2_wu6 = new wu(104, 27);
      wt cn2_wt6 = wb.bK("CNBs");
      cn2_wu6.b("layer_753", cn2_wt6);
      wu cn2_wu7 = new wu(104, 27);
      wt cn2_wt7 = wb.bK("CNBa");
      cn2_wu7.b("layer_754", cn2_wt7);
      wu cn2_wu8 = new wu(104, 27);
      wt cn2_wt8 = wb.bK("CNBa");
      cn2_wu8.b("layer_763", cn2_wt8);
      wf cn2_wf2 = new wf("zho_CNB_", 104, 27, cn2_wu5, cn2_wu6, cn2_wu7, cn2_wu8);
      xj.g(cn2_wf2);
        
      wu cn3_wu5 = new wu(104, 27);
      wt cn3_wt5 = wb.bK("CNCs");
      cn3_wu5.b("layer_752", cn3_wt5);
      wu cn3_wu6 = new wu(104, 27);
      wt cn3_wt6 = wb.bK("CNCs");
      cn3_wu6.b("layer_753", cn3_wt6);
      wu cn3_wu7 = new wu(104, 27);
      wt cn3_wt7 = wb.bK("CNCa");
      cn3_wu7.b("layer_754", cn3_wt7);
      wu cn3_wu8 = new wu(104, 27);
      wt cn3_wt8 = wb.bK("CNCa");
      cn3_wu8.b("layer_763", cn3_wt8);
      wf cn3_wf2 = new wf("zho_CNC_", 104, 27, cn3_wu5, cn3_wu6, cn3_wu7, cn3_wu8);
      xj.g(cn3_wf2);  
      
      wu cn4_wu5 = new wu(104, 27);
      wt cn4_wt5 = wb.bK("CNDs");
      cn4_wu5.b("layer_752", cn4_wt5);
      wu cn4_wu6 = new wu(104, 27);
      wt cn4_wt6 = wb.bK("CNDs");
      cn4_wu6.b("layer_753", cn4_wt6);
      wu cn4_wu7 = new wu(104, 27);
      wt cn4_wt7 = wb.bK("CNDa");
      cn4_wu7.b("layer_754", cn4_wt7);
      wu cn4_wu8 = new wu(104, 27);
      wt cn4_wt8 = wb.bK("CNDa");
      cn4_wu8.b("layer_763", cn4_wt8);
      wf cn4_wf2 = new wf("zho_CND_", 104, 27, cn4_wu5, cn4_wu6, cn4_wu7, cn4_wu8);
      xj.g(cn4_wf2);  
        
      // 复制在OFF前面  
      
      wu wu81 = new wu(37, 23);
      wt wt81 = wb.bK("FoxTemplate_en_su_sub_off_s");
      wu81.b("layer_836", wt81);
      wu wu82 = new wu(37, 23);
      wt wt82 = wb.bK("FoxTemplate_en_su_sub_off_s");
      wu82.b("layer_837", wt82);
      wu wu83 = new wu(37, 23);
      wt wt83 = wb.bK("FoxTemplate_en_su_sub_off_a");
      wu83.b("layer_838", wt83);
      wu wu84 = new wu(37, 23);
      wt wt84 = wb.bK("FoxTemplate_en_su_sub_off_a");
      wu84.b("layer_839", wt84);
      wf wf21 = new wf("none", 37, 23, wu81, wu82, wu83, wu84);
      xj.g(wf21);
      g(xj);
      wt wt85 = wb.bK("FoxTemplate_arrow_left_s");
      wt wt86 = wb.bK("FoxTemplate_arrow_left_a");
      wf wf22 = new wf("left_Arrow_Subtitle", 39, 23, wt85, wt86);
      g(wf22);
      wt wt87 = wb.bK("FoxTemplate_arrow_right_s");
      wt wt88 = wb.bK("FoxTemplate_arrow_right_a");
      wf wf23 = new wf("right_Arrow_Subtitle", 39, 23, wt87, wt88);
      g(wf23);
      wt wt89 = wb.bK("FoxTemplate_ind");
      wl wl1 = new wl("leftIndicator", 8, 8, wt89);
      g(wl1);
      wt wt90 = wb.bK("FoxTemplate_ind");
      wl wl2 = new wl("rightIndicator", 8, 8, wt90);
      g(wl2);
    } catch (Exception exception) {
      exception.printStackTrace();
    } 
  }
  
  public String getId() {
    return ab.cx;
  }
}

/* Location:              F:\Ready or not\04001.jar!\fl.class
 * Java compiler version: 3 (47.0)
 * JD-Core Version:       1.1.3
 */
```



## ki.class

```java
public class ki extends yj {
  public void bH() {
    this.presentation.ax(0);
    xj xj = (xj)this.presentation.bV("subtitle_List");
    if (xj != null) {
      wf wf3 = (wf)this.presentation.bV("eng_SDLG_");
      if (wf3 != null)
        wf3.l(83, 22); 
      wf wf4 = (wf)this.presentation.bV("fra_TXT_");
      if (wf4 != null)
        wf4.l(156, 34); 
      // ... 
      wf wf22 = (wf)this.presentation.bV("swe_SCOM_");
      if (wf22 != null)
        wf22.l(93, 36);
      // 这里都新增在none之前，复制法语
      // CNA就是pv增加的轨道类型，zho其实无所谓，但是轨道类型之后都要加下划线
      wf wf24 = (wf)this.presentation.bV("zho_CNA_");
      if (wf24 != null)
        // 下面是坐标，复制的法语，到时候p图跟法语等宽等高就行，参数从none后延
        // 然后复制四个 ABCD
        wf24.l(156, 34);
        
      wf wf25 = (wf)this.presentation.bV("zho_CNB_");
      if (wf25 != null)
        wf25.l(156, 34);
        
      wf wf26 = (wf)this.presentation.bV("zho_CNC_");
      if (wf26 != null)
        wf26.l(156, 34);
        
      wf wf27 = (wf)this.presentation.bV("zho_CND_");
      if (wf27 != null)
        wf27.l(156, 34);

      wf wf23 = (wf)this.presentation.bV("none");
      if (wf23 != null)
        wf23.l(189, 36); 
      xj.ax(0);
      xj.aq(true);
      xj.aG(1);
      xj.l(625, 707);
      xj.cb("foxtemplate_su_bg2");
    } 
    wf wf1 = (wf)this.presentation.bV("left_Arrow_Subtitle");
    if (wf1 != null) {
      wf1.aG(5);
      wf1.l(638, 742);
    } 
    wf wf2 = (wf)this.presentation.bV("right_Arrow_Subtitle");
    if (wf2 != null) {
      wf2.aG(5);
      wf2.l(981, 742);
    } 
    wl wl1 = (wl)this.presentation.bV("leftIndicator");
    if (wl1 != null) {
      wl1.aG(2);
      wl1.l(685, 749);
    } 
    wl wl2 = (wl)this.presentation.bV("rightIndicator");
    if (wl2 != null) {
      wl2.aG(2);
      wl2.l(967, 749);
    } 
  }
}


/* Location:              F:\Ready or not\04001.jar!\ki.class
 * Java compiler version: 3 (47.0)
 * JD-Core Version:       1.1.3
 */
```

