function changeSelectItems() {
  var selectID = document.getElementById('select_tdoll')
  var str_items = ''
  if (set_guntype === 0) {
    str_items += '<option value=0 selected></option>'
  } else if (set_guntype === 1) { // HG
    if (num_star === 6) {
      str_items += '<option value=1097>No.97 [MOD] M950A</option>'
      str_items += '<option value=1114>No.114 [MOD] ' + lib_language.NAME_114 + '</option>'
    } else if (num_star === 5) {
      str_items += '<option value=4 selected>No.4 ' + lib_language.NAME_4 + '</option>'
      str_items += '<option value=96>No.96 ' + lib_language.NAME_96 + '</option>'
      str_items += '<option value=97>No.97 M950A</option>'
      str_items += '<option value=114>No.114 ' + lib_language.NAME_114 + '</option>'
      str_items += '<option value=126>No.126 NZ75</option>'
      str_items += '<option value=142>No.142 Five-seveN</option>'
      str_items += '<option value=166>No.166 CZ75</option>'
      str_items += '<option value=183>No.183 ' + lib_language.NAME_183 + '</option>'
      str_items += '<option value=233>No.233 ' + lib_language.NAME_233 + '</option>'
      str_items += '<option value=242>No.242 P22</option>'
      str_items += '<option value=250>No.250 HS2000</option>'
      str_items += '<option value=260>No.260 PA-15</option>'
      str_items += '<option value=272>No.272 ' + lib_language.NAME_272 + '</option>'
      str_items += '<option value=285>No.285 C-93</option>'
      str_items += '<option value=294>No.294 ' + lib_language.NAME_294 + '</option>'
      str_items += '<option value=303>No.303 HP-35</option>'
      str_items += '<option value=331>No.331 ' + lib_language.NAME_331 + '</option>'
      str_items += '<option value=1001>No.1 [MOD] ' + lib_language.NAME_1 + '</option>'
      str_items += '<option value=1007>No.7 [MOD] ' + lib_language.NAME_7 + '</option>'
      str_items += '<option value=2001>No.EX1 ' + lib_language.NAME_2001 + '</option>'
      str_items += '<option value=2003>No.EX3 ' + lib_language.NAME_2003 + '</option>'
      str_items += '<option value=2006>No.EX6 ' + lib_language.NAME_2006 + '</option>'
      str_items += '<option value=2009>No.EX9 ' + lib_language.NAME_2009 + '</option>'
      str_items += '<option value=2010>No.EX10 ' + lib_language.NAME_2010 + '</option>'
      str_items += '<option value=2011>No.EX11 ' + lib_language.NAME_2011 + '</option>'
      str_items += '<option value=2012>No.EX12 ' + lib_language.NAME_2012 + '</option>'
    } else if (num_star === 4) {
      str_items += '<option value=1 selected>No.1 ' + lib_language.NAME_1 + '</option>'
      str_items += '<option value=7>No.7 ' + lib_language.NAME_7 + '</option>'
      str_items += '<option value=98>No.98 SPP-1</option>'
      str_items += '<option value=99>No.99 MK23</option>'
      str_items += '<option value=100>No.100 P7</option>'
      str_items += '<option value=168>No.168 SpitFire</option>'
      str_items += '<option value=202>No.202 ' + lib_language.NAME_202 + '</option>'
      str_items += '<option value=212>No.212 K5</option>'
      str_items += '<option value=248>No.248 ' + lib_language.NAME_248 + '</option>'
      str_items += '<option value=269>No.269 P30</option>'
      str_items += '<option value=310>No.310 Rex Zero 1</option>'
      str_items += '<option value=1002>No.2 [MOD] M1911</option>'
      str_items += '<option value=1005>No.5 [MOD] ' + lib_language.NAME_5 + '</option>'
      str_items += '<option value=1012>No.12 [MOD] C96</option>'
      str_items += '<option value=1091>No.91 [MOD] MP-446</option>'
      str_items += '<option value=1221>No.221 [MOD] GSh-18</option>'
    } else if (num_star === 3) {
      str_items += '<option value=3 selected>No.3 M9</option>'
      str_items += '<option value=6>No.6 ' + lib_language.NAME_6 + '</option>'
      str_items += '<option value=8>No.8 ' + lib_language.NAME_8 + '</option>'
      str_items += '<option value=11>No.11 P08</option>'
      str_items += '<option value=12>No.12 C96</option>'
      str_items += '<option value=13>No.13 ' + lib_language.NAME_13 + '</option>'
      str_items += '<option value=14>No.14 ' + lib_language.NAME_14 + '</option>'
      str_items += '<option value=15>No.15 ' + lib_language.NAME_15 + '</option>'
      str_items += '<option value=113>No.113 ' + lib_language.NAME_113 + '</option>'
      str_items += '<option value=123>No.123 P99</option>'
      str_items += '<option value=132>No.132 ' + lib_language.NAME_132 + '</option>'
      str_items += '<option value=140>No.140 PSM</option>'
      str_items += '<option value=167>No.167 HK45</option>'
      str_items += '<option value=186>No.186 P226</option>'
      str_items += '<option value=210>No.210 CZ52</option>'
      str_items += '<option value=220>No.220 MP-443</option>'
      str_items += '<option value=221>No.221 GSh-18</option>'
      str_items += '<option value=232>No.232 MP-448</option>'
      str_items += '<option value=244>No.244 TEC-9</option>'
      str_items += '<option value=277>No.277 VP70</option>'
    } else if (num_star === 2) {
      str_items += '<option value=2 selected>No.2 M1911</option>'
      str_items += '<option value=5>No.5 ' + lib_language.NAME_5 + '</option>'
      str_items += '<option value=9>No.9 P38</option>'
      str_items += '<option value=10>No.10 PPK</option>'
      str_items += '<option value=90>No.90 FNP-9</option>'
      str_items += '<option value=91>No.91 MP-446</option>'
      str_items += '<option value=139>No.139 Bren Ten</option>'
      str_items += '<option value=141>No.141 USP Compact</option>'
    }
  } else if (set_guntype === 2) { // AR
    if (num_star === 6) {
      str_items += '<option value=1065>No.65 [MOD] HK416</option>'
      str_items += '<option value=1122>No.122 [MOD] G11</option>'
    } else if (num_star === 5) {
      str_items += '<option value=62 selected>No.62 G41</option>'
      str_items += '<option value=65>No.65 HK416</option>'
      str_items += '<option value=73>No.73 AUG</option>'
      str_items += '<option value=106>No.106 FAL</option>'
      str_items += '<option value=119>No.119 OTs-14</option>'
      str_items += '<option value=122>No.122 G11</option>'
      str_items += '<option value=129>No.129 ' + lib_language.NAME_129 + '</option>'
      str_items += '<option value=130>No.130 ' + lib_language.NAME_130 + '</option>'
      str_items += '<option value=172>No.172 RFB</option>'
      str_items += '<option value=175>No.175 ART556</option>'
      str_items += '<option value=181>No.181 T91</option>'
      str_items += '<option value=194>No.194 K2</option>'
      str_items += '<option value=196>No.196 Zas M21</option>'
      str_items += '<option value=205>No.205 AN-94</option>'
      str_items += '<option value=206>No.206 AK-12</option>'
      str_items += '<option value=214>No.214 ADS</option>'
      str_items += '<option value=215>No.215 MDR</option>'
      str_items += '<option value=236>No.236 K11</option>'
      str_items += '<option value=243>No.243 ' + lib_language.NAME_243 + '</option>'
      str_items += '<option value=274>No.274 ACR</option>'
      str_items += '<option value=287>No.287 SIG-556</option>'
      str_items += '<option value=289>No.289 R5</option>'
      str_items += '<option value=290>No.290 ' + lib_language.NAME_290 + '</option>'
      str_items += '<option value=293>No.293 AK-15</option>'
      str_items += '<option value=306>No.306 AK-Alfa</option>'
      str_items += '<option value=313>No.313 S-ACR</option>'
      str_items += '<option value=318>No.318 VHS</option>'
      str_items += '<option value=1055>No.55 [MOD] M4A1</option>'
      str_items += '<option value=1056>No.56 [MOD] M4 SOPMODⅡ</option>'
      str_items += '<option value=1057>No.57 [MOD] ST AR-15</option>'
      str_items += '<option value=1060>No.60 [MOD] As Val</option>'
      str_items += '<option value=1064>No.64 [MOD] G36</option>'
      str_items += '<option value=2007>No.EX7 ' + lib_language.NAME_2007 + '</option>'
      str_items += '<option value=2027>No.EX27 ' + lib_language.NAME_2027 + '</option>'
      str_items += '<option value=2029>No.EX29 ' + lib_language.NAME_2029 + '</option>'
      str_items += '<option value=2032>No.EX32 ' + lib_language.NAME_2032 + '</option>'
      str_items += '<option value=3054>No.54 [SF] M16A1</option>'
    } else if (num_star === 4) {
      str_items += '<option value=54 selected>No.54 M16A1</option>'
      str_items += '<option value=55>No.55 M4A1</option>'
      str_items += '<option value=56>No.56 M4 SOPMODⅡ</option>'
      str_items += '<option value=57>No.57 ST AR-15</option>'
      str_items += '<option value=60>No.60 As Val</option>'
      str_items += '<option value=64>No.64 G36</option>'
      str_items += '<option value=66>No.66 ' + lib_language.NAME_66 + '</option>'
      str_items += '<option value=69>No.69 FAMAS</option>'
      str_items += '<option value=72>No.72 TAR-21</option>'
      str_items += '<option value=118>No.118 9A-91</option>'
      str_items += '<option value=171>No.171 ' + lib_language.NAME_171 + '</option>'
      str_items += '<option value=187>No.187 AK 5</option>'
      str_items += '<option value=207>No.207 CZ2000</option>'
      str_items += '<option value=216>No.216 XM8</option>'
      str_items += '<option value=227>No.227 A-91</option>'
      str_items += '<option value=237>No.237 SAR-21</option>'
      str_items += '<option value=262>No.262 EM-2</option>'
      str_items += '<option value=288>No.288 CR-21</option>'
      str_items += '<option value=297>No.297 M82</option>'
      str_items += '<option value=330>No.330 FX-05</option>'
      str_items += '<option value=1061>No.61 [MOD] StG44</option>'
      str_items += '<option value=1063>No.63 [MOD] G3</option>'
      str_items += '<option value=1071>No.71 [MOD] ' + lib_language.NAME_71 + '</option>'
    } else if (num_star === 3) {
      str_items += '<option value=58 selected>No.58 AK-47</option>'
      str_items += '<option value=61>No.61 StG44</option>'
      str_items += '<option value=70>No.70 FNC</option>'
      str_items += '<option value=105>No.105 OTs-12</option>'
      str_items += '<option value=108>No.108 CZ-805</option>'
      str_items += '<option value=120>No.120 ARX-160</option>'
      str_items += '<option value=134>No.134 AR70</option>'
      str_items += '<option value=138>No.138 6P62</option>'
      str_items += '<option value=170>No.170 ASh-12.7</option>'
      str_items += '<option value=193>No.193 T65</option>'
      str_items += '<option value=223>No.223 Model L</option>'
      str_items += '<option value=239>No.239 ' + lib_language.NAME_239 + '</option>'
      str_items += '<option value=258>No.258 ' + lib_language.NAME_258 + '</option>'
      str_items += '<option value=265>No.265 HK33</option>'
      str_items += '<option value=279>No.279 INSAS</option>'
      str_items += '<option value=298>No.298 Vepr</option>'
    } else if (num_star === 2) {
      str_items += '<option value=63 selected>No.63 G3</option>'
      str_items += '<option value=68>No.68 L85A1</option>'
      str_items += '<option value=71>No.71 ' + lib_language.NAME_71 + '</option>'
      str_items += '<option value=74>No.74 SIG-510</option>'
      str_items += '<option value=107>No.107 F2000</option>'
      str_items += '<option value=133>No.133 ' + lib_language.NAME_133 + '</option>'
    }
  } else if (set_guntype === 3) { // SMG
    if (num_star === 6) {
      str_items += '<option value=1143>No.143 [MOD] RO635</option>'
    } else if (num_star === 5) {
      str_items += '<option value=16 selected>No.16 ' + lib_language.NAME_16 + '</option>'
      str_items += '<option value=20>No.20 Vector</option>'
      str_items += '<option value=28>No.28 MP7</option>'
      str_items += '<option value=59>No.59 AK-74U</option>'
      str_items += '<option value=104>No.104 G36C</option>'
      str_items += '<option value=115>No.115 ' + lib_language.NAME_115 + '</option>'
      str_items += '<option value=127>No.127 ' + lib_language.NAME_127 + '</option>'
      str_items += '<option value=135>No.135 SR-3MP</option>'
      str_items += '<option value=143>No.143 RO635</option>'
      str_items += '<option value=213>No.213 C-MS</option>'
      str_items += '<option value=224>No.224 PM-06</option>'
      str_items += '<option value=228>No.228 ' + lib_language.NAME_228 + '</option>'
      str_items += '<option value=234>No.234 JS 9</option>'
      str_items += '<option value=245>No.245 P90</option>'
      str_items += '<option value=251>No.251 X95</option>'
      str_items += '<option value=259>No.259 PM-9</option>'
      str_items += '<option value=311>No.311 Lusa</option>'
      str_items += '<option value=315>No.315 AUG Para</option>'
      str_items += '<option value=333>No.333 VP1915</option>'
      str_items += '<option value=1026>No.26 [MOD] MP5</option>'
      str_items += '<option value=1101>No.101 [MOD] UMP9</option>'
      str_items += '<option value=1103>No.103 [MOD] UMP45</option>'
      str_items += '<option value=1136>No.136 [MOD] PP-19</option>'
      str_items += '<option value=2013>No.EX13 ' + lib_language.NAME_2013 + '</option>'
      str_items += '<option value=2023>No.EX23 ' + lib_language.NAME_2023 + '</option>'
      str_items += '<option value=2030>No.EX30 ' + lib_language.NAME_2030 + '</option>'
    } else if (num_star === 4) {
      str_items += '<option value=23 selected>No.23 PP-90</option>'
      str_items += '<option value=26>No.26 MP5</option>'
      str_items += '<option value=101>No.101 UMP9</option>'
      str_items += '<option value=102>No.102 UMP40</option>'
      str_items += '<option value=103>No.103 UMP45</option>'
      str_items += '<option value=136>No.136 PP-19</option>'
      str_items += '<option value=137>No.137 PP-19-01</option>'
      str_items += '<option value=150>No.150 ' + lib_language.NAME_150 + '</option>'
      str_items += '<option value=177>No.177 KLIN</option>'
      str_items += '<option value=203>No.203 ' + lib_language.NAME_203 + '</option>'
      str_items += '<option value=225>No.225 ' + lib_language.NAME_225 + '</option>'
      str_items += '<option value=280>No.280 MAT-49</option>'
      str_items += '<option value=286>No.286 KAC-PDW</option>'
      str_items += '<option value=295>No.295 CF05</option>'
      str_items += '<option value=304>No.304 SAF</option>'
      str_items += '<option value=328>No.328 AR-57</option>'
      str_items += '<option value=1029>No.29 [MOD] ' + lib_language.NAME_29 + '</option>'
      str_items += '<option value=1031>No.31 [MOD] ' + lib_language.NAME_31 + '</option>'
      str_items += '<option value=1032>No.32 [MOD] ' + lib_language.NAME_32 + '</option>'
      str_items += '<option value=1093>No.93 [MOD] IDW</option>'
      str_items += '<option value=1094>No.94 [MOD] ' + lib_language.NAME_94 + '</option>'
    } else if (num_star === 3) {
      str_items += '<option value=18 selected>No.18 MAC-10</option>'
      str_items += '<option value=19>No.19 FMG-9</option > '
      str_items += '<option value=22>No.22 PPS-43</option>'
      str_items += '<option value=27>No.27 ' + lib_language.NAME_27 + '</option>'
      str_items += '<option value=29>No.29 ' + lib_language.NAME_29 + '</option>'
      str_items += '<option value=32>No.32 ' + lib_language.NAME_32 + '</option>'
      str_items += '<option value=116>No.116 Z-62</option>'
      str_items += '<option value=131>No.131 EVO-3</option>'
      str_items += '<option value=144>No.144 MT-9</option>'
      str_items += '<option value=169>No.169 SCW</option>'
      str_items += '<option value=176>No.176 TMP</option>'
      str_items += '<option value=178>No.178 F1</option>'
      str_items += '<option value=191>No.191 M12</option>'
      str_items += '<option value=209>No.209 OTs-39</option>'
      str_items += '<option value=218>No.218 T77</option>'
      str_items += '<option value=267>No.267 MP41</option>'
    } else if (num_star === 2) {
      str_items += '<option value=17 selected>No.17 M3</option>'
      str_items += '<option value=21>No.21 PPSh-41</option>'
      str_items += '<option value=24>No.24 PP-2000</option>'
      str_items += '<option value=25>No.25 MP40</option>'
      str_items += '<option value=31>No.31 ' + lib_language.NAME_31 + '</option>'
      str_items += '<option value=33>No.33 m45</option>'
      str_items += '<option value=92>No.92 Spectre M4</option>'
      str_items += '<option value=93>No.93 IDW</option>'
      str_items += '<option value=94>No.94 ' + lib_language.NAME_94 + '</option>'
    }
  } else if (set_guntype === 4) { // RF
    if (num_star === 6) {
      str_items += '<option value=1053>No.53 [MOD] NTW-20</option>'
    } else if (num_star === 5) {
      str_items += '<option value=46 selected>No.46 Kar98k</option>'
      str_items += '<option value=48>No.48 WA2000</option>'
      str_items += '<option value=50>No.50 ' + lib_language.NAME_50 + '</option>'
      str_items += '<option value=53>No.53 NTW-20</option>'
      str_items += '<option value=128>No.128 M99</option>'
      str_items += '<option value=148>No.148 IWS2000</option>'
      str_items += '<option value=179>No.179 DSR-50</option>'
      str_items += '<option value=192>No.192 JS05</option>'
      str_items += '<option value=197>No.197 ' + lib_language.NAME_197 + '</option>'
      str_items += '<option value=198>No.198 ' + lib_language.NAME_198 + '</option>'
      str_items += '<option value=204>No.204 ' + lib_language.NAME_204 + '</option>'
      str_items += '<option value=211>No.211 SRS</option>'
      str_items += '<option value=222>No.222 TAC-50</option>'
      str_items += '<option value=231>No.231 M82A1</option>'
      str_items += '<option value=257>No.257 M200</option>'
      str_items += '<option value=261>No.261 QBU-88</option>'
      str_items += '<option value=266>No.266 R93</option>'
      str_items += '<option value=296>No.296 SL8</option>'
      str_items += '<option value=312>No.312 VSK-94</option>'
      str_items += '<option value=316>No.316 ' + lib_language.NAME_316 + '</option>'
      str_items += '<option value=329>No.329 SVCh</option>'
      str_items += '<option value=1039>No.39 [MOD] ' + lib_language.NAME_39 + '</option>'
      str_items += '<option value=1200>No.200 [MOD] XM3</option>'
      str_items += '<option value=1252>No.252 [MOD] KSVK</option>'
      str_items += '<option value=2004>No.EX4 ' + lib_language.NAME_2004 + '</option>'
      str_items += '<option value=2005>No.EX5 ' + lib_language.NAME_2005 + '</option>'
      str_items += '<option value=2014>No.EX14 ' + lib_language.NAME_2014 + '</option>'
      str_items += '<option value=2024>No.EX24 ' + lib_language.NAME_2024 + '</option>'
      str_items += '<option value=2031>No.EX31 ' + lib_language.NAME_2031 + '</option>'
    } else if (num_star === 4) {
      str_items += '<option value=36 selected>No.36 ' + lib_language.NAME_36 + '</option>'
      str_items += '<option value=39>No.39 ' + lib_language.NAME_39 + '</option>'
      str_items += '<option value=42>No.42 PTRD</option>'
      str_items += '<option value=43>No.43 SVD</option>'
      str_items += '<option value=117>No.117 PSG-1</option>'
      str_items += '<option value=146>No.146 G28</option>'
      str_items += '<option value=180>No.180 PzB39</option>'
      str_items += '<option value=184>No.184 T-5000</option>'
      str_items += '<option value=200>No.200 XM3</option>'
      str_items += '<option value=226>No.226 Mk 12</option>'
      str_items += '<option value=235>No.235 SPR A3G</option>'
      str_items += '<option value=247>No.247 K31</option>'
      str_items += '<option value=252>No.252 KSVK</option>'
      str_items += '<option value=270>No.270 ' + lib_language.NAME_270 + '</option>'
      str_items += '<option value=273>No.273 SSG3000</option>'
      str_items += '<option value=305>No.305 ' + lib_language.NAME_305 + '</option>'
      str_items += '<option value=317>No.317 ' + lib_language.NAME_317 + '</option>'
      str_items += '<option value=1037>No.37 [MOD] M14</option>'
      str_items += '<option value=1044>No.44 [MOD] SV-98</option>'
      str_items += '<option value=1049>No.49 [MOD] ' + lib_language.NAME_49 + '</option>'
      str_items += '<option value=1051>No.51 [MOD] FN-49</option>'
      str_items += '<option value=1095>No.95 [MOD] ' + lib_language.NAME_95 + '</option>'
      str_items += '<option value=1124>No.124 [MOD] Super SASS</option>'
    } else if (num_star === 3) {
      str_items += '<option value=34 selected>No.34 ' + lib_language.NAME_34 + '</option>'
      str_items += '<option value=35>No.35 M1A1</option>'
      str_items += '<option value=37>No.37 M14</option>'
      str_items += '<option value=38>No.38 M21</option>'
      str_items += '<option value=44>No.44 SV-98</option>'
      str_items += '<option value=49>No.49 ' + lib_language.NAME_49 + '</option>'
      str_items += '<option value=95>No.95 ' + lib_language.NAME_95 + '</option>'
      str_items += '<option value=124>No.124 Super SASS</option>'
      str_items += '<option value=145>No.145 OTs-44</option>'
      str_items += '<option value=147>No.147 SSG 69</option>'
      str_items += '<option value=174>No.174 ' + lib_language.NAME_174 + '</option>'
      str_items += '<option value=182>No.182 wz.29</option>'
      str_items += '<option value=201>No.201 ' + lib_language.NAME_201 + '</option>'
      str_items += '<option value=217>No.217 SM-1</option>'
      str_items += '<option value=230>No.230 OBR</option>'
      str_items += '<option value=241>No.241 RT-20</option>'
      str_items += '<option value=255>No.255 ' + lib_language.NAME_255 + '</option>'
      str_items += '<option value=256>No.256 ' + lib_language.NAME_256 + '</option>'
      str_items += '<option value=268>No.268 T-CMS</option>'
      str_items += '<option value=284>No.284 Zas M76</option>'
      str_items += '<option value=308>No.308 C14</option>'
    } else if (num_star === 2) {
      str_items += '<option value=40 selected>No.40 SVT-38</option>'
      str_items += '<option value=41>No.41 ' + lib_language.NAME_41 + '</option>'
      str_items += '<option value=47>No.47 G43</option>'
      str_items += '<option value=51>No.51 FN-49</option>'
      str_items += '<option value=52>No.52 BM59</option>'
    }
  } else if (set_guntype === 5) { // MG
    if (num_star === 6) {
      str_items += '<option value=1125>No.125 [MOD] MG4</option>'
    } else if (num_star === 5) {
      str_items += '<option value=109 selected>No.109 MG5</option>'
      str_items += '<option value=112>No.112 ' + lib_language.NAME_112 + '</option>'
      str_items += '<option value=125>No.125 MG4</option>'
      str_items += '<option value=173>No.173 PKP</option>'
      str_items += '<option value=208>No.208 HK21</option>'
      str_items += '<option value=238>No.238 ' + lib_language.NAME_238 + '</option>'
      str_items += '<option value=253>No.253 ' + lib_language.NAME_253 + '</option>'
      str_items += '<option value=263>No.263 MG36</option>'
      str_items += '<option value=276>No.276 Kord</option>'
      str_items += '<option value=292>No.292 RPK-16</option>'
      str_items += '<option value=307>No.307 ZB-26</option>'
      str_items += '<option value=1075>No.75 [MOD] M1918</option>'
      str_items += '<option value=2015>No.EX15 ' + lib_language.NAME_2015 + '</option>'
      str_items += '<option value=2026>No.EX26 ' + lib_language.NAME_2026 + '</option>'
      str_items += '<option value=2033>No.EX33 ' + lib_language.NAME_2033 + '</option>'
    } else if (num_star === 4) {
      str_items += '<option value=75 selected>No.75 M1918</option>'
      str_items += '<option value=78>No.78 M60</option>'
      str_items += '<option value=85>No.85 PK</option>'
      str_items += '<option value=88>No.88 MG3</option>'
      str_items += '<option value=121>No.121 Mk48</option>'
      str_items += '<option value=149>No.149 AEK-999</option>'
      str_items += '<option value=185>No.185 ' + lib_language.NAME_185 + '</option>'
      str_items += '<option value=199>No.199 ' + lib_language.NAME_199 + '</option>'
      str_items += '<option value=240>No.240 Mk46</option>'
      str_items += '<option value=254>No.254 UKM-2000</option>'
      str_items += '<option value=264>No.264 ' + lib_language.NAME_264 + '</option>'
      str_items += '<option value=275>No.275 M1895 CB</option>'
      str_items += '<option value=319>No.319 PM1910</option>'
      str_items += '<option value=1081>No.81 [MOD] LWMMG</option>'
      str_items += '<option value=1089>No.89 [MOD] ' + lib_language.NAME_89 + '</option>'
    } else if (num_star === 3) {
      str_items += '<option value=77 selected>No.77 M2HB</option>'
      str_items += '<option value=79>No.79 M249 SAW</option>'
      str_items += '<option value=80>No.80 M1919A4</option>'
      str_items += '<option value=84>No.84 RPD</option>'
      str_items += '<option value=86>No.86 MG42</option>'
      str_items += '<option value=89>No.89 ' + lib_language.NAME_89 + '</option>'
      str_items += '<option value=195>No.195 HK23</option>'
      str_items += '<option value=249>No.249 ' + lib_language.NAME_249 + '</option>'
      str_items += '<option value=271>No.271 K3</option>'
    } else if (num_star === 2) {
      str_items += '<option value=81 selected>No.81 LWMMG</option>'
      str_items += '<option value=82>No.82 DP28</option>'
      str_items += '<option value=87>No.87 MG34</option>'
      str_items += '<option value=110>No.110 FG42</option>'
      str_items += '<option value=111>No.111 AAT-52</option>'
    }
  } else if (set_guntype === 6) { // SG
    if (num_star === 5) {
      str_items += '<option value=151 selected>No.151 M1887</option>'
      str_items += '<option value=157>No.157 KSG</option>'
      str_items += '<option value=160>No.160 Saiga-12</option>'
      str_items += '<option value=163>No.163 AA-12</option>'
      str_items += '<option value=164>No.164 FP-6</option>'
      str_items += '<option value=188>No.188 S.A.T.8</option>'
      str_items += '<option value=229>No.229 M870</option>'
      str_items += '<option value=281>No.281 CAWS</option>'
      str_items += '<option value=282>No.282 DP-12</option>'
      str_items += '<option value=323>No.323 LTLX7000</option>'
      str_items += '<option value=1161>No.161 [MOD] ' + lib_language.NAME_161 + '</option>'
      str_items += '<option value=2002>No.EX2 ' + lib_language.NAME_2002 + '</option>'
      str_items += '<option value=2008>No.EX8 ' + lib_language.NAME_2008 + '</option>'
      str_items += '<option value=2016>No.EX16 ' + lib_language.NAME_2016 + '</option>'
      str_items += '<option value=2025>No.EX25 ' + lib_language.NAME_2025 + '</option>'
      str_items += '<option value=2034>No.EX34 ' + lib_language.NAME_2034 + '</option>'
    } else if (num_star === 4) {
      str_items += '<option value=153 selected>No.153 M37</option>'
      str_items += '<option value=155>No.155 M590</option>'
      str_items += '<option value=156>No.156 Super-Shorty</option>'
      str_items += '<option value=161>No.161 ' + lib_language.NAME_161 + '</option>'
      str_items += '<option value=162>No.162 SPAS-12</option>'
      str_items += '<option value=165>No.165 M1014</option>'
      str_items += '<option value=189>No.189 USAS-12</option>'
      str_items += '<option value=283>No.283 ' + lib_language.NAME_283 + '</option>'
      str_items += '<option value=302>No.302 ' + lib_language.NAME_302 + '</option>'
    } else if (num_star === 3) {
      str_items += '<option value=152 selected>No.152 M897</option>'
      str_items += '<option value=154>No.154 M500</option>'
      str_items += '<option value=158>No.158 KS-23</option>'
      str_items += '<option value=159>No.159 RMB-93</option>'
      str_items += '<option value=190>No.190 NS2000</option>'
      str_items += '<option value=278>No.278 Six12</option>'
    }
  }
  if (switch_operate) {
    selectID.disabled = false
  } else {
    selectID.disabled = true
  }
  selectID.innerHTML = str_items
  changePreview(1)
}
function changeEquip() {
  var ID = parseInt(document.getElementById('select_tdoll').value)
  var selectID = document.getElementById('select_equip')
  var str_items = ''
  // ———————————————————— 第一格装备 ————————————————————
  if (num_pickequip === 1) {
    if (set_guntype === 1) { // HG
      str_items += '<option value=11>[' + lib_language.equipNAME_11 + '] AC4 ' + lib_language.equipNAME_11 + '</option>'
      str_items += '<option value=15>[' + lib_language.equipNAME_13 + '] RMR T4 ' + lib_language.equipNAME_13 + '</option>'
      str_items += '<option value=41>[' + lib_language.equipNAME_41 + '] PEQ-16A</option>'
      if (ID === 3) str_items += '<option value=19993>' + lib_language.equipNAME_19993 + '</option>' // M9
      if (ID === 7 || ID === 1007) str_items += '<option value=17>' + lib_language.equipNAME_17 + '</option>' // 斯捷奇金
      if (ID === 10) str_items += '<option value=110>' + lib_language.equipNAME_110 + '</option>' // ppk
      if (ID === 1001) str_items += '<option value=11001>' + lib_language.equipNAME_11001 + '</option>' // 柯尔特左轮
      if (ID === 1005) str_items += '<option value=11005>' + lib_language.equipNAME_11005 + '</option>' // 纳甘左轮
      if (ID === 1012) str_items += '<option value=11012>' + lib_language.equipNAME_11012 + '</option>' // C96
      if (ID === 1091) str_items += '<option value=11091>' + lib_language.equipNAME_11091 + '</option>' // MP446
      if (ID === 1097) str_items += '<option value=11097>WML&战术护木</option>' // M950A
      if (ID === 2009) str_items += '<option value=42009>' + lib_language.equipNAME_42009 + '</option>'
      if (ID === 2010) str_items += '<option value=42010>' + lib_language.equipNAME_42010 + '</option>'
      if (ID === 2011) { // Jill
        str_items += '<option value=120111>Adelhyde</option>'
        str_items += '<option value=120112>Flanergide</option>'
        str_items += '<option value=120113>Karmotrine</option>'
      }
    } else if (set_guntype === 2) { // AR
      if (ID != 54 && ID != 56 && ID != 57 && ID != 1056 && ID != 1057 && ID != 3054) { // 除AR小队特殊队员外
        str_items += '<option value=12>[' + lib_language.equipNAME_12 + '] VFL 6-24X56</option>'
        str_items += '<option value=14>[' + lib_language.equipNAME_14 + '] EOT 518</option>'
        str_items += '<option value=13>[' + lib_language.equipNAME_13 + '] ITI MARS</option>'
        str_items += '<option value=11>[' + lib_language.equipNAME_11 + '] AC4 ' + lib_language.equipNAME_11 + '</option>'
        str_items += '<option value=41>[' + lib_language.equipNAME_41 + '] PEQ-16A</option>'
        if (ID === 65 || ID === 1065) str_items += '<option value=165>EOT-XPS3</option>'
        if (ID === 58 || ID === 66) str_items += '<option value=166>KSTSP</option>'
        if (ID === 74) str_items += '<option value=174>' + lib_language.equipNAME_174 + '</option>'
        if (ID === 69) str_items += '<option value=169>' + lib_language.equipNAME_169 + '</option>'
        if (ID === 118) str_items += '<option value=4118>' + lib_language.equipNAME_4118 + '</option>'
        if (ID === 129 || ID === 130) str_items += '<option value=1129>' + lib_language.equipNAME_1129 + '</option>' // 先进单兵瞄具
        if (ID === 172) str_items += '<option value=1172>' + lib_language.equipNAME_1172 + '</option>' // RFB前导轨
        if (ID === 215) str_items += '<option value=1215>BPR4&SRM6</option>' // MDR装备：BPR4&SRM6
        if (ID === 1063) str_items += '<option value=11063>' + lib_language.equipNAME_11063 + '</option>'
        if (ID === 1064) str_items += '<option value=11064>' + lib_language.equipNAME_11064 + '</option>'
      } else if (ID === 54 || ID === 3054) { // M16A1
        if (set_equip[2] != 31 && set_equip[2] != 32) str_items += '<option value=32>IOP T4' + lib_language.equipNAME_31 + '</option>'
        if (set_equip[2] != 31 && set_equip[2] != 32) str_items += '<option value=31>IOP X4' + lib_language.equipNAME_31 + '</option>'
        if (set_equip[2] != 33 && set_equip[2] != 354) str_items += '<option value=33>Type3 ' + lib_language.equipNAME_33 + '</option>'
        if (set_equip[2] != 33 && set_equip[2] != 354) str_items += '<option value=354>' + lib_language.equipNAME_354 + '</option>'
      } else {
        if (set_equip[2] != 12) str_items += '<option value=12>[' + lib_language.equipNAME_12 + '] VFL 6-24X56</option>'
        if (set_equip[2] != 14) str_items += '<option value=14>[' + lib_language.equipNAME_14 + '] EOT 518</option>'
        if (set_equip[2] != 13) str_items += '<option value=13>[' + lib_language.equipNAME_13 + '] ITI MARS</option>'
        if (set_equip[2] != 11) str_items += '<option value=11>[' + lib_language.equipNAME_11 + '] AC4 ' + lib_language.equipNAME_11 + '</option>'
        if (set_equip[2] != 41) str_items += '<option value=41>[' + lib_language.equipNAME_41 + '] PEQ-16A</option>'
        if (ID === 1056) {
          if (set_equip[2] != 11056) str_items += '<option value=11056>' + lib_language.equipNAME_11056 + '</option>'
        }
        if (ID === 1057) {
          if (set_equip[2] != 11057) str_items += '<option value=11057>' + lib_language.equipNAME_11057 + '</option>'
        }
      }
    } else if (set_guntype === 3) { // SMG
      str_items += '<option value=32>IOP T4' + lib_language.equipNAME_31 + '</option>'
      str_items += '<option value=31>IOP X4' + lib_language.equipNAME_31 + '</option>'
      str_items += '<option value=36>' + lib_language.equipNAME_36 + '</option>'
      if (ID === 17) str_items += '<option value=117>' + lib_language.equipNAME_117 + '</option>' // m3
      if (ID === 26 || ID === 1026) str_items += '<option value=326>GSG UX' + lib_language.equipNAME_31 + '</option>' // MP5
      if (ID === 101 || ID === 102 || ID === 103 || ID === 1101 || ID === 1103) str_items += '<option value=3103>UMP UX' + lib_language.equipNAME_31 + '</option>' // UMP系列
      if (ID === 115) str_items += '<option value=3115>MK31多功能骨骼</option>' // suomi
      if (ID === 1093) str_items += '<option value=31093>' + lib_language.equipNAME_31093 + '</option>'
      if (ID === 1143) str_items += '<option value=31143>' + lib_language.equipNAME_31143 + '</option>'
    } else if (set_guntype === 4) { // RF
      str_items += '<option value=12>[' + lib_language.equipNAME_12 + '] VFL 6-24X56</option>'
      str_items += '<option value=14>[' + lib_language.equipNAME_14 + '] EOT 518</option>'
      str_items += '<option value=13>[' + lib_language.equipNAME_13 + '] ITI MARS</option>'
      str_items += '<option value=11>[' + lib_language.equipNAME_11 + '] AC4 ' + lib_language.equipNAME_11 + '</option>'
      if (ID === 46) str_items += '<option value=146>PM 5-25X65</option>' // Kar98k
      if (ID === 48) str_items += '<option value=148>SB 2.5-10X56</option>' // WA2000
      if (ID === 50) str_items += '<option value=150>No32 MLI</option>' // Lee'ENFIELD
      if (ID === 52) str_items += '<option value=152>' + lib_language.equipNAME_152 + '</option>' // bm59
      if (ID === 1039) str_items += '<option value=11039>K6-24X56</option>' // 莫辛纳甘-MOD
      if (ID === 1037) str_items += '<option value=11037>' + lib_language.equipNAME_11037 + '</option>' // M14 MOD
      if (ID === 1051) str_items += '<option value=11051>' + lib_language.equipNAME_11051 + '</option>' // FN49 MOD
      if (ID === 1095) str_items += '<option value=11095>' + lib_language.equipNAME_11095 + '</option>' // hanyang88 MOD
      if (ID === 1124) str_items += '<option value=11124> ACS-L</option>' // Super SASS MOD
    } else if (set_guntype === 5) { // MG
      str_items += '<option value=12>[' + lib_language.equipNAME_12 + '] VFL 6-24X56</option>'
      str_items += '<option value=14>[' + lib_language.equipNAME_14 + '] EOT 518</option>'
      str_items += '<option value=13>[' + lib_language.equipNAME_13 + '] ITI MARS</option>'
      str_items += '<option value=15>[' + lib_language.equipNAME_13 + '] RMR T4 ' + lib_language.equipNAME_13 + '</option>'
      if (ID === 110) str_items += '<option value=1110>ZFG42</option>'
      if (ID === 125 || ID === 1125) str_items += '<option value=1125>' + lib_language.equipNAME_1125 + '</option>'
      if (ID === 1075) str_items += '<option value=11075>CT 4X20</option>'
      if (ID === 1081) str_items += '<option value=11081>MGO 6x48</option>'
      if (ID === 1089) str_items += '<option value=11089>' + lib_language.equipNAME_11089 + '</option>'
      if (ID === 2026) {
        str_items += '<option value=120261>' + lib_language.equipNAME_120261 + '</option>'
        str_items += '<option value=120262>' + lib_language.equipNAME_120262 + '</option>'
        str_items += '<option value=120263>' + lib_language.equipNAME_120263 + '</option>'
      }
      if (ID === 2033) str_items += '<option value=12033>魔导书下卷</option>'
    } else if (set_guntype === 6) { // SG
      str_items += '<option value=33>Type3 ' + lib_language.equipNAME_33 + '</option>'
      if (ID === 1161) str_items += '<option value=31161>' + lib_language.equipNAME_31161 + '</option>'
      if (ID === 2016) str_items += '<option value=32016>' + lib_language.equipNAME_32016 + '</option>'
    }
    // ———————————————————— 第二格装备（AR小队双瞄具/人形放在第三） ————————————————————
  } else if (num_pickequip === 2) {
    if (set_guntype === 1) { // HG
      str_items += '<option value=21>' + lib_language.equipNAME_21 + '</option>'
      str_items += '<option value=291>' + lib_language.equipNAME_291 + '</option>'
      if (ID === 1002) str_items += '<option value=21002>' + lib_language.equipNAME_21002 + '</option>' // M1911
      if (ID === 183) str_items += '<option value=23>' + lib_language.equipNAME_23 + '</option>'
      if (ID === 1221) str_items += '<option value=21221>7N31</option>'
      if (ID === 2011) { // Jill
        str_items += '<option value=220111>Adelhyde</option>'
        str_items += '<option value=220112>Bronson Ext</option>'
        str_items += '<option value=220113>Karmotrine</option>'
      }
    } else if (set_guntype === 2) { // AR
      str_items += '<option value=22>' + lib_language.equipNAME_22 + '</option>'
      if (ID === 138) str_items += '<option value=23>' + lib_language.equipNAME_23 + '</option>' // 6P62
      if (ID === 1057 || ID === 57) str_items += '<option value=21057>' + lib_language.equipNAME_21057 + '</option>' // AR-15
      if (ID === 1060) str_items += '<option value=21060>' + lib_language.equipNAME_21060 + '</option>' // as val
      if (ID === 1061) str_items += '<option value=21061>7.92 KRUZ</option>' // StG44
      if (ID === 3054) str_items += '<option value=23054>皇帝的口粮</option>' // sf-m16a1
    } else if (set_guntype === 3) { // SMG
      str_items += '<option value=21>' + lib_language.equipNAME_21 + '</option>'
      if (ID === 213) str_items += '<option value=23>' + lib_language.equipNAME_23 + '</option>' // CMS
      if (ID === 2013) str_items += '<option value=22013>' + lib_language.equipNAME_22013 + '</option>' // Dorothy
    } else if (set_guntype === 4) { // RF
      str_items += '<option value=23>' + lib_language.equipNAME_23 + '</option>'
      str_items += '<option value=26>' + lib_language.equipNAME_26 + '</option>'
      if (ID === 36) str_items += '<option value=236>' + lib_language.equipNAME_236 + '</option>' // 春田
      if (ID === 1049) str_items += '<option value=21049>特制曳光弹</option>' // type56
      if (ID === 1053) str_items += '<option value=21053>20mm HEI</option>' // NTW-20
      if (ID === 1252) str_items += '<option value=21252>12.7mm 1SL</option>' // KSVK
    } else if (set_guntype === 5) { // MG
      str_items += '<option value=23>' + lib_language.equipNAME_23 + '</option>'
      str_items += '<option value=26>' + lib_language.equipNAME_26 + '</option>'
      str_items += '<option value=27>Mk1000SLAP</option>'
      if (ID === 1125) str_items += '<option value=21125>Mk4 SLAP</option>' // MG4
    } else if (set_guntype === 6) { // SG
      str_items += '<option value=24>' + lib_language.equipNAME_24 + '</option>'
      str_items += '<option value=25>' + lib_language.equipNAME_25 + '</option>'
      str_items += '<option value=28>' + lib_language.equipNAME_28 + '</option>'
      str_items += '<option value=29>' + lib_language.equipNAME_29 + '</option>'
      if (ID === 158) str_items += '<option value=2158>' + lib_language.equipNAME_2158 + '</option>'
      if (ID === 302) str_items += '<option value=2302>20G特制独头弹</option>'
      if (ID === 2025) str_items += '<option value=22025>' + lib_language.equipNAME_22025 + '</option>'
    }
    // ———————————————————— 第三格装备 ————————————————————
  } else if (num_pickequip === 3) {
    if (set_guntype === 1) { // HG
      str_items += '<option value=31>IOP X4' + lib_language.equipNAME_31 + '</option>'
      str_items += '<option value=32>IOP T4' + lib_language.equipNAME_31 + '</option>'
      if (ID === 2011) { // Jill
        str_items += '<option value=320111>Pwd delta</option>'
        str_items += '<option value=320112>Karmotrine</option>'
      }
      if (ID === 1007) str_items += '<option value=31007>' + lib_language.equipNAME_31007 + '</option>'
      if (ID === 2012) str_items += '<option value=32012>' + lib_language.equipNAME_32012 + '</option>'
    } else if (set_guntype === 2) { // AR
      if (ID != 54 && ID != 56 && ID != 57 && ID != 1056 && ID != 1057 && ID != 3054) {
        str_items += '<option value=31>IOP X4' + lib_language.equipNAME_31 + '</option>'
        str_items += '<option value=32>IOP T4' + lib_language.equipNAME_31 + '</option>'
        str_items += '<option value=36>' + lib_language.equipNAME_36 + '</option>'
        if (ID === 62) str_items += '<option value=362>' + lib_language.equipNAME_362 + '</option>' // G41
        if (ID === 72) str_items += '<option value=372>' + lib_language.equipNAME_372 + '</option>' // tar-21
        if (ID === 1055) str_items += '<option value=31055>' + lib_language.equipNAME_31055 + '</option>' // M4A1 mod
        if (ID === 1065) str_items += '<option value=31065>' + lib_language.equipNAME_31065 + '</option>' // HK16 MOD
        if (ID === 1071) str_items += '<option value=31071>加利尔专用护木</option>' // Gaili MOD
        if (ID === 1122) str_items += '<option value=31122>G-box</option>' // G11 MOD
        if (ID === 2027) str_items += '<option value=32027>' + lib_language.equipNAME_32027 + '</option>' // 安洁莉卡
        if (ID === 2032) str_items += '<option value=32032>纸袋头盔</option>' // 美杜莎
      } else if (ID === 54 || ID === 3054) { // M16A1
        if (set_equip[0] != 31 && set_equip[0] != 32) str_items += '<option value=32>IOP T4' + lib_language.equipNAME_31 + '</option>'
        if (set_equip[0] != 31 && set_equip[0] != 32) str_items += '<option value=31>IOP X4' + lib_language.equipNAME_31 + '</option>'
        if (set_equip[0] != 33 && set_equip[0] != 354) str_items += '<option value=33>Type3 ' + lib_language.equipNAME_33 + '</option>'
        if (set_equip[0] != 33 && set_equip[0] != 354) str_items += '<option value=354>' + lib_language.equipNAME_354 + '</option>'
      } else {
        if (set_equip[0] != 12) str_items += '<option value=12>[' + lib_language.equipNAME_12 + '] VFL 6-24X56</option>'
        if (set_equip[0] != 14) str_items += '<option value=14>[' + lib_language.equipNAME_14 + '] EOT 518</option>'
        if (set_equip[0] != 13) str_items += '<option value=13>[' + lib_language.equipNAME_13 + '] ITI MARS</option>'
        if (set_equip[0] != 11) str_items += '<option value=11>[' + lib_language.equipNAME_11 + '] AC4 ' + lib_language.equipNAME_11 + '</option>'
        if (set_equip[0] != 41) str_items += '<option value=41>[' + lib_language.equipNAME_41 + '] PEQ-16A</option>'
        if (ID === 1056) {
          if (set_equip[0] != 11056) str_items += '<option value=11056>' + lib_language.equipNAME_11056 + '</option>'
        }
        if (ID === 1057) {
          if (set_equip[0] != 11057) str_items += '<option value=11057>' + lib_language.equipNAME_11057 + '</option>'
        }
      }
    } else if (set_guntype === 3) { // SMG
      str_items += '<option value=11>[' + lib_language.equipNAME_11 + '] AC4 ' + lib_language.equipNAME_11 + '</option>'
      str_items += '<option value=14>[' + lib_language.equipNAME_14 + '] EOT 518</option>'
      str_items += '<option value=13>[' + lib_language.equipNAME_13 + '] ITI MARS</option>'
      str_items += '<option value=12>[' + lib_language.equipNAME_12 + '] VFL 6-24X56</option>'
      str_items += '<option value=41>[' + lib_language.equipNAME_41 + '] PEQ-16A</option>'
      if (ID === 17) str_items += '<option value=117>' + lib_language.equipNAME_117 + '</option>'
      if (ID === 18) str_items += '<option value=118>' + lib_language.equipNAME_118 + '</option>'
      if (ID === 228) str_items += '<option value=1228>' + lib_language.equipNAME_1228 + '</option>'
      if (ID === 1026) str_items += '<option value=11026>' + lib_language.equipNAME_11026 + '</option>'
      if (ID === 1029) str_items += '<option value=11029>' + lib_language.equipNAME_11029 + '</option>'
      if (ID === 1031) str_items += '<option value=11031>' + lib_language.equipNAME_11031 + '</option>' // beleta
      if (ID === 1032) str_items += '<option value=11032>MPL M21</option>'
      if (ID === 1094) str_items += '<option value=11094>' + lib_language.equipNAME_11094 + '</option>'
      if (ID === 1101) str_items += '<option value=11101>AMP COMPSP</option>'
      if (ID === 1103) str_items += '<option value=11103>' + lib_language.equipNAME_11103 + '</option>'
      if (ID === 1136) str_items += '<option value=11136>pt-3后托</option>'
      if (ID === 2023) str_items += '<option value=12023>' + lib_language.equipNAME_12023 + '</option>'
    } else if (set_guntype === 4) { // RF
      str_items += '<option value=34>' + lib_language.equipNAME_34 + '</option>'
      if (ID === 42) str_items += '<option value=342>' + lib_language.equipNAME_342 + '</option>' // PTRD
      if (ID === 39 || ID === 1039) str_items += '<option value=31039>' + lib_language.equipNAME_31039 + '</option>' // 莫辛纳甘
      if (ID === 1044) str_items += '<option value=31044>' + lib_language.equipNAME_31044 + '</option>' // SV-98 MOD
      if (ID === 2014) str_items += '<option value=32014>' + lib_language.equipNAME_32014 + '</option>'
      if (ID === 2024) str_items += '<option value=32024>' + lib_language.equipNAME_32024 + '</option>'
      if (ID === 2031) str_items += '<option value=32031>美梦多纳滋</option>'
    } else if (set_guntype === 5) { // MG
      str_items += '<option value=35>' + lib_language.equipNAME_35 + '</option>'
      if (ID === 84) str_items += '<option value=384>' + lib_language.equipNAME_384 + '</option>'
      if (ID === 88) str_items += '<option value=388>' + lib_language.equipNAME_388 + '</option>' // MG3
      if (ID === 185) str_items += '<option value=3185>' + lib_language.equipNAME_3185 + '</option>' // 阿梅利
      if (ID === 75 || ID === 1075) str_items += '<option value=31075>' + lib_language.equipNAME_31075 + '</option>'
      if (ID === 2015) str_items += '<option value=32015>' + lib_language.equipNAME_32015 + '</option>'
    } else if (set_guntype === 6) { // SG
      str_items += '<option value=13>[' + lib_language.equipNAME_13 + '] ITI MARS</option>'
      str_items += '<option value=12>[' + lib_language.equipNAME_12 + '] VFL 6-24X56</option>'
      str_items += '<option value=14>[' + lib_language.equipNAME_14 + '] EOT 518</option>'
      str_items += '<option value=41>[' + lib_language.equipNAME_41 + '] PEQ-16A</option>'
      if (ID === 2034) str_items += '<option value=12034>摇摆魔铃</option>'
    }
  }
  if (switch_operate && switch_equip) {
    selectID.disabled = false
    str_items += '<option value=0>' + lib_language.equipNAME_0 + '</option>'
  } else {
    selectID.disabled = true
    str_items += '<option value=-1></option>'
  }
  selectID.innerHTML = str_items
  selectID.value = set_equip[num_pickequip - 1]
  showEquip(parseInt(selectID.value))
}
