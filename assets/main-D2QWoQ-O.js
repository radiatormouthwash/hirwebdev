const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CMxZ0n6Q.js","assets/form_types-CheoqBaR.js","assets/index-InWLkXXw.js"])))=>i.map(i=>d[i]);
var pk=Object.defineProperty;var mk=(e,n,t)=>n in e?pk(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Ne=(e,n,t)=>mk(e,typeof n!="symbol"?n+"":n,t);import{b as uo,a as hk,f as Dw,c as Fw}from"./form_types-CheoqBaR.js";import{_ as Vt,r as Xt,s as vk,a as _k}from"./app_bootstrap-zzkL9M_D.js";const ir={lo:0,hi:1,loClosed:!0,hiClosed:!0};function Cr(e,n){return!(e.lo!==null&&(e.loClosed?n<e.lo:n<=e.lo)||e.hi!==null&&(e.hiClosed?n>e.hi:n>=e.hi))}function qw(e){return{lo:e.lo,hi:e.hi,loClosed:e.lo!==null,hiClosed:e.hi!==null}}function $a(e){const n=e.loClosed&&e.lo!==null?"[":"(",t=e.hiClosed&&e.hi!==null?"]":")";return`${n}${e.lo??"-inf"}, ${e.hi??"inf"}${t}`}const gk={closed_real_interval:[!0,!0],left_open_real_interval:[!1,!0],right_open_real_interval:[!0,!1],open_real_interval:[!1,!1]};function Lt(e){var i;const[n,t]=gk[e.type_mathlevel]??[!0,!0],r=((i=e.type_detail)==null?void 0:i.range)??[0,1];return{lo:r[0],hi:r[1],loClosed:n,hiClosed:t}}function Gr(e){return e.map(Lt)}function vu(e){return e.lo===0&&e.hi===1}function _u(e){return e.lo===null||e.hi===null?null:[e.lo,e.hi]}function bk(e){return e.lo!==null&&e.lo>=0}function xw(e){return Object.fromEntries(e.map(n=>[n.bareName,Lt(n.decl)]))}const yk=["aopt:","cparam:"];function ge(e){for(const n of yk)if(e.startsWith(n))return e.slice(n.length);return e}function Qt(e){return e.startsWith("cparam:")}const eg="MultiStringFromSet";function Bw(e,n,t){const r=e.allowed_values,i=Li(e)?e.input_type:void 0,o=u=>JSON.stringify(u),a=[];if(Li(e)&&i===eg){const u=`${e.id} has input_type '${eg}' but`;if(!Array.isArray(n)||!n.every(d=>typeof d=="string"))return[`${u} ${t} ${o(n)} is not a list of strings`];const s=n,l=[...new Set(s.filter((d,p)=>s.indexOf(d)!==p))].sort();if(l.length>0&&a.push(`${u} ${t} contains duplicate entries ${o(l)}`),r!==void 0){const d=[...new Set(s.filter(p=>!r.includes(p)))].sort();d.length>0&&a.push(`${u} ${t} entries ${o(d)} are not in allowed_values ${o(r)}`)}const c=(e.required_values??[]).filter(d=>!s.includes(d));return c.length>0&&a.push(`${u} ${t} ${o(s)} lacks required_values entries ${o(c)}`),a}return r!==void 0&&!r.some(u=>u===n)&&a.push(`${e.id} ${t} ${o(n)} not in allowed_values ${o(r)}`),i==="StringFromSet"&&typeof n!="string"?a.push(`${e.id} has input_type 'StringFromSet' but non-string ${t} ${o(n)}`):i==="Bool"&&typeof n!="boolean"?a.push(`${e.id} has input_type 'Bool' but non-bool ${t} ${o(n)}`):i==="Number"&&typeof n!="number"?a.push(`${e.id} has input_type 'Number' but non-numeric ${t} ${o(n)}`):i==="FreeString"&&typeof n!="string"&&a.push(`${e.id} has input_type 'FreeString' but non-string ${t} ${o(n)}`),a}function Li(e){return!Qt(e.id)}function Ta(e){return Qt(e.id)}function gu(e){const n=e[0];if(n===void 0)throw new Error("cparam allowed_values must be a non-empty list");if(typeof n=="boolean")throw new Error(`cparam allowed_values must not contain booleans (got ${n}); a two-valued qualitative switch is an aopt, not a cparam`);return typeof n=="string"?"string":"number"}const Ia="example:";function bu(e){return e.startsWith(Ia)?e.slice(Ia.length):e}const Ek="srcquote:",ng="bib:";function Sk(e){return e.startsWith(ng)?e.slice(ng.length):e}const jr=["pos","neg"],Yv={pos:"Satisfying",neg:"Falsifying"},La="tchoice:";function Ri(e){return e.startsWith(La)?e.slice(La.length):e}const wk="svargroup:";function Or(e){return e.response_kind==="enum"}function Hw(e){return e.response_kind==="real"}const Ci="svar:",Ak=["point","bounds","sample"],$k="elicited_svar_response_types",tg=[["point","bounds","sample"],["point","sample"],["sample"]];function Tk(e){const n=e.elicited_svar_response_types;if(n===void 0)return Ak;const t=tg.find(r=>r.length===n.length&&r.every((i,o)=>n[o]===i));if(t===void 0)throw new Error(`config.${$k} is ${JSON.stringify(n)}; expected one of ${JSON.stringify(tg)}`);return t}const qh="estimatorInstruct",Ik="flabels_enabled",rg="framing_POVs_enabled";function Lk(e){const n=new Set(e),t=[Ik,rg].filter(r=>n.has(r));if(t.length>1)throw new Error(`A jprob may declare only one of ${t.join(", ")}; '${rg}' is the deprecated spelling, kept only by jprobs with archived methodical trial results`);return t[0]??null}function Rk(e,n){if(!Array.isArray(e)||!e.every(t=>typeof t=="string"))throw new Error(`${n} must be a list of strings, got ${JSON.stringify(e)}`);return[...e]}function Uw(e,n){return!e.limit_reporting_to||e.limit_reporting_to.includes(n)}function Gw(e,n){if(!Array.isArray(n)||n.length!==3||n[0]!=="eq"||typeof n[1]!="string")throw new Error(`Formula ${e} must have an equality s-expression with a string LHS`);return n[1]}function jw(e){if(e.includes("{")||e.includes("}"))throw new Error(`Unexpected brace in sexpr reference leaf: ${e}`);if(e.startsWith(Ci))return`expr:${e.slice(Ci.length)}`;if(!e.startsWith("expr:"))throw new Error(`Unexpected expression reference ${JSON.stringify(e)}; expected expr:* or svar:*`);return e}function xh(e){return e.startsWith(Ci)?e.slice(Ci.length):e}const ig="ax:";function Oi(e){return e.startsWith(ig)?e.slice(ig.length):e}const Bh="framing:";function Ni(e){return e.startsWith(Bh)?e.slice(Bh.length):e}function Ck(e){if(e.simplifying&&e.derived)throw new Error(`Axiom "${e.id}" is flagged both simplifying and derived`);return e.simplifying?"simplifying":e.derived?"derived":"ordinary"}const Hh="form:",og="expr:";function yu(e){return e.startsWith(Hh)?e.slice(Hh.length):e}function Ok(e){const n=e.sexpr;if(!Array.isArray(n)||n.length!==3||n[0]!=="eq")throw new Error(`formula "${e.id}" is not an (eq LHS RHS) triple, so it produces no expression`);const t=n[1];if(typeof t!="string"||!t.startsWith(og))throw new Error(`formula "${e.id}" has LHS ${JSON.stringify(t)}, which is not an ${og} reference, so it produces no expression`);return t}const Vw="title",Nk="webonly",kk={boolrv:"BoolRV",real:"ℝ",prop:"Prop",set:"Set",fn:"Function"},ag="textchunk:",ug="textdefn:",Mk=[".","?","!"],Pk=": ";class Ww{constructor(n){Ne(this,"_data");Ne(this,"aid");Ne(this,"options");Ne(this,"cparam_combo_filter");Ne(this,"logical_consistency");Ne(this,"config");Ne(this,"layout");Ne(this,"svar_list");Ne(this,"svar");Ne(this,"tchoice");Ne(this,"textchunk");Ne(this,"display");Ne(this,"isym");Ne(this,"ax");Ne(this,"expr");Ne(this,"form");Ne(this,"definedSym");Ne(this,"textdefn");Ne(this,"framing");Ne(this,"srcquote");Ne(this,"bib");this._data=n,this.aid=n.aid,this.options=n.options,this.cparam_combo_filter=n.cparam_combo_filter,this.logical_consistency=n.logical_consistency??null,this.config=n.config,this.layout=n.layout,this.svar_list=n.svar_list,this.svar=n.svar,this.tchoice=n.tchoice??[],this.textchunk=n.textchunk,this.display=n.display,this.isym=n.isym,this.ax=n.ax,this.expr=n.expr,this.form=n.form,this.definedSym=n.definedSym,this.textdefn=n.textdefn,this.framing=n.framing??[],this.srcquote=n.srcquote??[],this.bib=n.bib??[]}_get_data(){return this._data}get_options(){return this.options}get_aopts(){return this.options.filter(Li)}get_cparams(){return this.options.filter(Ta)}has_cparams(){return this.options.some(Ta)}get_option(n){const t=this.options.find(r=>ge(r.id)===n);if(!t)throw new Error(`No option named "${n}"`);return t}get_aopt(n){const t=this.get_aopts().find(r=>ge(r.id)===n);if(!t)throw new Error(`No aopt named "${n}"`);return t}get_cparam(n){const t=this.find_cparam(n);if(!t)throw new Error(`No cparam named "${n}"`);return t}find_cparam(n){return this.get_cparams().find(t=>ge(t.id)===n)}cparam_value_kind(n){return gu(this.get_cparam(n).allowed_values)}get_option_bare_names(){return this.options.map(n=>ge(n.id))}get_aopt_bare_names(){return this.get_aopts().map(n=>ge(n.id))}get_cparam_bare_names(){return this.get_cparams().map(n=>ge(n.id))}get_option_ids(){return this.options.map(n=>n.id)}get_aopt_ids(){return this.get_aopts().map(n=>n.id)}get_cparam_ids(){return this.get_cparams().map(n=>n.id)}get_tchoice_decls(){return this.tchoice}get_tchoice_bare_names(){return new Set(this.tchoice.map(n=>Ri(n.id)))}get_tchoice(n){const t=n.startsWith(La)?n:`${La}${n}`,r=this.tchoice.find(i=>i.id===t);if(r===void 0)throw new Error(`No tchoice named "${n}"`);return r}get_tchoice_default(n){const t=this.get_tchoice(n);if(!Or(t))throw new Error(`tchoice "${n}" is not an enum kind; it has no default_value`);return t.default_value}get_enum_tchoice_defaults(){const n={};for(const t of this.tchoice)Or(t)&&(n[Ri(t.id)]=t.default_value);return n}get_textchunks(){return this.textchunk}find_textchunk(n){const t=this.strip_textchunk_prefix(n);return this.textchunk.find(r=>this.strip_textchunk_prefix(r.id)===t)}get_textchunk(n){const t=this.find_textchunk(n);if(!t)throw new Error(`No textchunk named "${n}"`);return t}find_textchunk_defn(n){var t;return(t=this.find_textchunk(n))==null?void 0:t.defn}get_textchunk_defn(n){return this.get_textchunk(n).defn}strip_textchunk_prefix(n){return n.startsWith(ag)?n.slice(ag.length):n}get_textdefn_entries(){return this.textdefn.map(n=>{const t=n.aliases??[];return{bareName:this.strip_textdefn_prefix(n.id),id:n.id,defn:n.defn,aliases:t,displayTerm:t[0]??n.id}})}find_textdefn(n){const t=this.strip_textdefn_prefix(n);return this.textdefn.find(r=>this.strip_textdefn_prefix(r.id)===t)}get_textdefn(n){const t=this.find_textdefn(n);if(!t)throw new Error(`No textdefn named "${n}"`);return t}get_textdefns(){return this.textdefn}strip_textdefn_prefix(n){return n.startsWith(ug)?n.slice(ug.length):n}get_svar_bare_names(){return this.svar_list}svar_decls(){return this.svar}get_svar(n){const t=n.startsWith("svar:")?n:`svar:${n}`,r=this.svar.find(i=>i.id===t);if(r===void 0)throw new Error(`No svar named "${n}"`);return r}get_svar_gloss_defn(n){return this.get_svar(n).defn}svar_entries(){const n=new Map;for(const t of this.svar)n.set(xh(t.id),t);return this.svar_list.map(t=>{const r=n.get(t);if(!r)throw new Error(`svar_list entry "${t}" has no matching svar decl`);return{bareName:t,decl:r}})}svar_card_runs(){const n=new Map(this.svar_list.map((o,a)=>[o,a])),t=[];let r=0;const i=o=>{o<=r||(t.push({group:null,svarIndices:Array.from({length:o-r},(a,u)=>r+u)}),r=o)};for(const o of this.layout.svar_groups??[]){const a=o.svars.map(s=>{const l=n.get(xh(s));if(l===void 0)throw new Error(`Svar group "${o.id}" names "${s}", which is not in svar_list`);return l}),u=a[0];if(u===void 0)throw new Error(`Svar group "${o.id}" has no svars`);if(u<r||a.some((s,l)=>s!==u+l))throw new Error(`Svar group "${o.id}" is not a contiguous run of svar_list in its order, after the groups before it`);i(u),t.push({group:o,svarIndices:a}),r=u+a.length}return i(this.svar_list.length),t}has_standard_rendering_framing_notes(){const n=this.standard_rendering_flabels();return this.framing.some(t=>n.has(t.flabel))}has_examples(){return this.isym.some(n=>{var t,r;return(((t=n.pos)==null?void 0:t.length)??0)>0||(((r=n.neg)==null?void 0:r.length)??0)>0})}isym_entries(){return this.isym}get_isym(n){const t=n.startsWith("isym:")?n:`isym:${n}`,r=this.isym.find(i=>i.id===t);if(r===void 0)throw new Error(`No isym named "${n}"`);return r}get_example(n){if(!n.startsWith(Ia))throw new Error(`Not an example id: "${n}"`);for(const t of this.isym){const r=[...t.pos??[],...t.neg??[]].find(i=>i.id===n);if(r!==void 0)return r}throw new Error(`No isym example "${n}"`)}has_srcquotes(){return this.srcquote.length>0}resolve_srcquotes(n){const t=new Map(this.srcquote.map(r=>[r.id,r]));return n.map(r=>{const i=t.get(r);if(!i)throw new Error(`Unknown srcquote id: ${r}`);return i})}bib_entries(){return this.bib}resolve_bib(n){const t=this.bib.find(r=>r.id===n);if(t===void 0)throw new Error(`Unknown bib id: ${n}`);return t}bib_inline_display_text(n){const t=this.resolve_bib(n);return t.inline_display??t.title}bib_full_text(n){const t=this.resolve_bib(n);return[t.author,t.date,t.title,t.venue,t.note].filter(i=>i!==void 0).map(i=>Mk.some(o=>i.endsWith(o))?i:`${i}.`).join(" ")}bib_reference_entry_text(n){const t=this.resolve_bib(n),r=this.bib_full_text(n);return t.inline_display===void 0||t.inline_display===t.title?r:`${t.inline_display}${Pk}${r}`}framing_static_anchor_ids(){const n=new Set;for(const t of this.framing)t.static_anchor!==null&&n.add(t.static_anchor);return n}get_axioms(){return this.ax}get_axioms_in_display_section(n){return this.ax.filter(t=>Ck(t)===n)}find_ax(n){const t=Oi(n);return this.ax.find(r=>Oi(r.id)===t)}get_ax(n){const t=this.find_ax(n);if(t===void 0)throw new Error(`No axiom named "${n}"`);return t}get_ax_sexpr(n){return this.get_ax(n).sexpr}get_ax_defn(n){return this.get_ax(n).defn}can_consolidate_isym_svar(n){var a,u;const t=n.slice(5),r=this.isym.find(s=>s.id===n);if(!r||r.kind!=="real"||(((a=r.pos)==null?void 0:a.length)??0)>0||(((u=r.neg)==null?void 0:u.length)??0)>0||!this.svar_list.includes(t))return!1;const i=this.svar.find(s=>s.id===`svar:${t}`);if(!i)return!1;const o=this.expr.find(s=>s.id===`expr:${t}`);return!o||o.sexpr!==n?!1:i.defn===""}get_display_ax(n){return this.display.ax[n]}get_display_ax_or_none(n){return this.display.ax[n]??null}get_display_expr(n){return this.display.expr[n]}get_display_form(n){return this.display.form[n]}get_display_form_or_none(n){return this.display.form[n]??null}get_display_definedSym(n){return this.display.definedSym[n]}get_display_definedSym_or_none(n){return this.display.definedSym[n]??null}get_display_expr_keys(){return Object.keys(this.display.expr)}get_display_form_keys(){return Object.keys(this.display.form)}logical_consistency_or_none(){return this.logical_consistency}conclusion_form_or_none(){return this.config.conclusion_form??null}conclusion_expr_or_none(){const n=this.conclusion_form_or_none();return n===null?null:this.form_produced_expr(n)}form_produced_expr(n){const t=this.form.find(r=>r.id===n);if(t===void 0)throw new Error(`${this.aid}: "${n}" names no registered formula`);try{return Ok(t)}catch(r){throw new Error(`${this.aid}: ${r.message}`)}}form_range(n){const t=this.form.find(r=>r.id===n);if(t===void 0)throw new Error(`${this.aid}: "${n}" names no registered formula`);return Lt(t)}conclusion_range_or_none(){const n=this.conclusion_form_or_none();return n===null?null:this.form_range(n)}elicited_svar_response_types(){return Tk(this.config)}get_fgroups(){const n=this.config.framing;if(n===void 0){if(this.framing.length>0)throw new Error(`${this.aid}: ${this.framing.length} framing note(s) but no config.framing declaring the fgroups their flabels belong to`);return{}}return n.fgroups}fgroup_of_flabel(n){const t=this.get_fgroups();for(const[r,i]of Object.entries(t))if(i.flabels.includes(n))return[r,i];throw new Error(`${this.aid}: framing flabel '${n}' belongs to no declared fgroup (declared: ${Object.keys(t).sort().join(", ")})`)}standard_fgroups_in_order(){return Object.entries(this.get_fgroups()).filter(([,n])=>n.standard_rendering)}standard_rendering_flabels(){const n=new Set;for(const[,t]of this.standard_fgroups_in_order())for(const r of t.flabels)n.add(r);return n}referenceable_framing_notes(){const n=this.standard_rendering_flabels();return this.framing.filter(t=>n.has(t.flabel))}nonstandard_notes(n,t){const r=this.get_fgroups(),i=r[n];if(i===void 0)throw new Error(`${this.aid}: no declared fgroup '${n}' (declared: ${Object.keys(r).sort().join(", ")})`);if(i.standard_rendering)throw new Error(`${this.aid}: fgroup '${n}' is standard-rendering; its notes are placed by get_framing_layout, not bespoke code`);const o=new Set(i.flabels),a=new Set(t);return this.framing.filter(u=>o.has(u.flabel)&&a.has(u.flabel))}placed_framing_note_ids(n){const t=this.get_framing_layout(n),r=new Set,i=o=>{for(const a of o)r.add(a.note.id),i(a.children)};i(t.root_section.layout_nodes);for(const o of t.nonroot_anchor_sections.values())i(o.layout_nodes);return r}get_framing_layout(n){const t=this.standard_rendering_flabels(),r=new Set([...n].filter(c=>t.has(c))),i=new Map(this.framing.map(c=>[c.id,c])),o=new Map,a=c=>{if(o.has(c))return o.get(c)??null;const d=i.get(c);if(!d)throw new Error(`Unknown framing note id: ${c}`);let p=null;if(r.has(d.flabel)){const m=d.framing_target;if(m!==null){const f=a(m);f!==null&&(p={anchor_id:f.anchor_id,depth:f.depth+1,visible_parent_id:m})}p===null&&d.static_anchor!==null&&(p={anchor_id:d.static_anchor,depth:1,visible_parent_id:null})}return o.set(c,p),p};for(const c of this.framing)a(c.id);const u=new Map,s=[],l=new Map;for(const c of this.framing){const d=o.get(c.id);d!=null&&u.set(c.id,{depth:d.depth,note:c,children:[]})}for(const c of this.framing){const d=o.get(c.id);if(d==null)continue;const p=u.get(c.id);if(d.visible_parent_id!==null)u.get(d.visible_parent_id).children.push(p);else if(d.anchor_id==="root")s.push(p);else{const m=l.get(d.anchor_id)??[];m.push(p),l.set(d.anchor_id,m)}}return{root_section:{static_anchor_id:"root",layout_nodes:s},nonroot_anchor_sections:new Map(Array.from(l.entries(),([c,d])=>[c,{static_anchor_id:c,layout_nodes:d}]))}}}function Jv(e){return e.get_textdefn_entries().map(n=>{const t=`def-${n.bareName.toLowerCase()}`;return{...n,anchorId:t,anchor:`#${t}`}})}const Dk=["options","config","layout","svar","textchunk","display","isym","ax","expr","form","definedSym","textdefn"];function Fk(e){if(typeof e!="object"||e===null)throw new Error("Jprob template data must be a non-null object");const n=e,t=Dk.filter(r=>!(r in n));if(t.length>0)throw new Error(`Jprob template data missing required keys: ${t.join(", ")}`);return new Ww(e)}function qk(e){return Fk(e)}const Ra="data-popover-target";function xk(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function sg(e,n){const t=Object.keys(e).sort(),r=[...n].sort();return t.length===r.length&&t.every((i,o)=>i===r[o])}function Kw(e){return encodeURIComponent(JSON.stringify(e))}function lg(e){let n;try{n=JSON.parse(decodeURIComponent(e))}catch(t){throw new Error("Malformed popover target encoding.",{cause:t})}if(!xk(n)||typeof n.kind!="string")throw new Error("Popover target must be an object with a recognized kind.");if(n.kind==="entity"){if(!sg(n,["kind","targetId"])||typeof n.targetId!="string"||n.targetId.length===0)throw new Error("Malformed entity popover target.");return{kind:"entity",targetId:n.targetId}}if(n.kind==="sourcequote"){if(!sg(n,["kind","sourcequoteIds"])||!Array.isArray(n.sourcequoteIds)||n.sourcequoteIds.length===0||!n.sourcequoteIds.every(t=>typeof t=="string"&&t.startsWith("srcquote:")&&t.length>9))throw new Error("Malformed source-quote popover target.");return{kind:"sourcequote",sourcequoteIds:n.sourcequoteIds}}throw new Error(`Unknown popover target kind: ${n.kind}`)}function x(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function X(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Uh="[",Gh="]",Bk="|",Xw="{",Yw="}",Hk=new RegExp("(?<!\\\\)\\{([^\\}]+)\\}","g"),ki=new RegExp("(?<!\\\\)\\{((?:expr|form):[^\\}]+)\\}","g"),Uk=new RegExp("(?<!\\\\)\\[([^\\]]+?)\\|([^\\]|]+)\\](?!\\((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)])))","g"),Gk=new RegExp("(?<!\\\\)\\[([^\\]|]+)\\](?!\\((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)])))","g"),Jw=new RegExp("(?<!\\\\)\\[([^\\]]+)\\]\\(((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)]))[^)\\s]*)\\)","g"),jh=/‹\+(.*?)\+›/g,jk=new RegExp("(?<!\\\\)\\[([^\\]|]*?)(?:\\|[^\\]]*?)?\\](?!\\((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)])))","g"),Vk=new RegExp("(?<!\\\\)\\{[^\\}]*\\}","g"),Wk=/\\([\{\}])/g,Kk=/\\([\[\]])/g,zw="symbol-ref-name",Xk="symbol-ref-repeat",zv="ax-",Qv="svar-",Eu="ex-",Su="framing-",Qw="bib-",Yk="bib-inline-link",Jk="↗";function wu(e){return`${Qw}${Sk(e)}`}function Zw(e,n){return n.url===void 0?e:`${e} [${n.url}](${n.url})`}function eA(e){return e.form.filter(n=>!n.hide&&e.get_display_form(n.id)).map(n=>n.id)}function Zv(e,n={}){const t=new Map,r=n.symbolMnames??!1,i=zk(e);for(const o of e.isym_entries()){const a=o.id.startsWith("isym:")?o.id:`isym:${o.id}`,u=a.startsWith("isym:")?a.slice(5):a,s=`#isym-${u}`,l={bareId:u,mname:i.get(a)??u},c=i.get(a);if(c){const d={anchor:s,displayText:c,symbolId:a};t.set(c,d),t.set(`${u}:long`,d),t.set(`isym:${u}:long`,d)}t.set(u,{anchor:s,displayText:zo(l,r),symbolName:l,symbolId:a}),t.set(a,{anchor:s,displayText:zo(l,r),symbolName:l,symbolId:a})}for(const o of Jv(e))for(const a of o.aliases)t.set(a,{anchor:o.anchor,displayText:a});for(const o of e.isym_entries())for(const a of jr)for(const u of o[a]??[]){const s=bu(u.id);t.set(u.id,{anchor:`#${Eu}${s}`,displayText:s})}for(const o of e.get_axioms()){if(!e.get_display_ax(o.id))continue;const u=Oi(o.id);t.set(o.id,{anchor:`#${zv}${u}`,displayText:u})}for(const o of eA(e)){if(t.has(o))continue;const a=yu(o);t.set(o,{anchor:`#form-${a}`,displayText:a})}for(const o of e.get_options()){const a=ge(o.id),u=`#opt-${a}`,s={bareId:a,mname:o.longname??a},l=zo(s,r),c={anchor:u,displayText:l,symbolName:s,symbolId:o.id};t.has(o.id)||t.set(o.id,c),t.has(a)||t.set(a,c);const d=`${a}:short`;t.has(d)||t.set(d,{anchor:u,displayText:a,symbolId:o.id})}for(const o of e.get_tchoice_decls()){const a=Ri(o.id),u=`#tchoice-${a}`,s={bareId:a,mname:o.longname??a};t.has(o.id)||t.set(o.id,{anchor:u,displayText:zo(s,r),symbolName:s,symbolId:o.id})}for(const o of e.get_svar_bare_names()){const a=`svar:${o}`;t.has(a)||t.set(a,{anchor:`#${Qv}${o}`,displayText:o})}for(const o of e.referenceable_framing_notes())t.has(o.id)||t.set(o.id,{anchor:`#${Su}${Ni(o.id)}`,displayText:Ni(o.id),alwaysPopover:!0});for(const o of e.bib_entries())t.has(o.id)||t.set(o.id,{anchor:`#${wu(o.id)}`,displayText:e.bib_inline_display_text(o.id),alwaysPopover:!0,...o.inline_link?{inlineLinkUrl:o.url}:{}});for(const o of e.definedSym){const a=o.id.startsWith("definedSym:")?o.id.slice(11):o.id,s={anchor:`#defsym-${a}`,displayText:a,symbolId:o.id};t.has(a)||t.set(a,s),t.has(o.id)||t.set(o.id,s)}return t}function zk(e){const n=new Map;for(const t of e.isym_entries()){if(!t.longname)continue;const r=t.id.startsWith("isym:")?t.id:`isym:${t.id}`;n.set(r,t.longname)}return n}function zo(e,n){return n?e.mname:e.bareId}const Qk={point:"=",sample:"~",bounds:"∈"};function nA(e){return Qk[e]}function so(e){return e.svar_entries().map(({bareName:n})=>`{expr:${n}}`)}function cg(e,n,t,r){const i=tA(t,r),o=X(Kw({kind:"entity",targetId:n}));return`<button type="button" class="${["ref-popover",...i.classes].join(" ")}" ${Ra}="${o}" aria-expanded="false"${i.dataAttrs}>${e}</button>`}function Qo(e){return e.inlineLinkUrl===void 0?"":`<a class="${Yk}" href="${X(e.inlineLinkUrl)}" target="_blank" rel="noopener">${Jk}</a>`}function dg(e,n,t,r){const i=tA(t,r),o=i.classes.length===0?"":` class="${i.classes.join(" ")}"`;return`<a href="${e}"${o}${i.dataAttrs}>${n}</a>`}function tA(e,n){const t=[];let r="";return e&&(t.push(zw),r=` data-bareid="${X(e.bareId)}" data-mname="${X(e.mname)}"`),n&&t.push(Xk),{classes:t,dataAttrs:r}}function fg(e,n){return n===void 0||e.symbolId===void 0?!1:n.has(e.symbolId)?!0:(n.add(e.symbolId),!1)}const Zk=new RegExp(`${Uk.source}|${Gk.source}`,"g");function eM(e,n,t,r,i){const o=(t==null?void 0:t.popoverAllRefs)??!1;return e.replace(Zk,(a,u,s,l)=>{if(l===void 0){if(u===void 0||s===void 0)throw new Error("resolveRefsHtmlBare: REF_PIPE_OR_BARE_RE matched neither form");const p=n.get(s);if(!p)return r==null||r.add(s),`${Uh}${u}${Bk}${s}${Gh}`;const m=fg(p,i);return o||p.alwaysPopover?cg(u,p.anchor,void 0,m)+Qo(p):dg(p.anchor,u,void 0,m)+Qo(p)}const c=n.get(l);if(!c)return r==null||r.add(l),`${Uh}${l}${Gh}`;const d=fg(c,i);return o||c.alwaysPopover?cg(c.displayText,c.anchor,c.symbolName,d)+Qo(c):dg(c.anchor,c.displayText,c.symbolName,d)+Qo(c)})}const nM=10;function tM(e,n,t,r,i){let o=e;for(let a=0;a<nM;a++){const u=eM(o,n,t,r,i);if(u===o)break;o=u}return o.replace(Kk,"$1")}const rM=/\*\*/g;function iM(e){return e.replace(Jw,"$1").replace(jk,"$1").replace(Vk,"").replace(rM,"")}function e2(e,n){if("input_type"in e&&e.input_type==="MultiStringFromSet"){if(!Array.isArray(n)||!n.every(r=>typeof r=="string"))throw new Error(`Invalid MultiStringFromSet value for ${e.id}: expected a string array`);if(!Array.isArray(e.allowed_values))throw new Error(`Invalid MultiStringFromSet declaration for ${e.id}: missing allowed_values`);const t=Bw(e,n,"value");if(t.length>0)throw new Error(`Invalid MultiStringFromSet value for ${e.id}: ${t.join("; ")}`);return[...n]}if(typeof n=="object")throw new Error(`Invalid scalar value for ${e.id}: expected string, number, or boolean`);if(Ta(e)){if(gu(e.allowed_values)==="string"){if(typeof n!="string")throw new Error(`Invalid string value for ${e.id}: ${n}`);return n}const t=Number(n);if(typeof n=="boolean"||!Number.isFinite(t))throw new Error(`Invalid numeric value for ${e.id}: ${n}`);return t}if(typeof e.default_value=="boolean"){if(typeof n=="boolean")return n;if(n==="true")return!0;if(n==="false")return!1;throw new Error(`Invalid boolean value for ${e.id}: ${n}`)}if(typeof e.default_value=="number"){if(typeof n=="boolean"||typeof n=="string"&&n.trim()==="")throw new Error(`Invalid numeric value for ${e.id}: ${n}`);const t=Number(n);if(!Number.isFinite(t))throw new Error(`Invalid numeric value for ${e.id}: ${n}`);return t}if(typeof e.default_value=="string"){if(typeof n!="string")throw new Error(`Invalid string value for ${e.id}: ${n}`);return n}throw new Error(`Option ${e.id} has no supported default value type`)}const n2=!0;function rA(e,n){return e!=="typical"||n}function oM(e,n){const t=e.map(a=>({name:ge(a.id),values:a.allowed_values.filter(u=>typeof u!="boolean")}));if(t.length===0)return{names:[],combinations:[{}]};const r=t.map(a=>a.name),i=t.map(a=>a.values);let o=[{}];for(let a=0;a<r.length;a++){const u=r[a],s=i[a],l=[];for(const c of o)for(const d of s)l.push({...c,[u]:d});o=l}return n!==void 0&&(o=o.filter(a=>n(a))),{names:r,combinations:o}}function iA(e,n,t){const r=new Set(e.get_cparam_bare_names()),i=t!=="plainnum",o={};for(const[a,u]of Object.entries(n))i&&r.has(a)||(o[a]=u);return o}function Wn(e){return e!=="plainnum"}class aM extends Ww{constructor(t,r,i){super(t);Ne(this,"cparam_overrides");Ne(this,"aopt_overrides");Ne(this,"query_mode");const o=new Set(this.get_option_bare_names()),a=this.get_tchoice_bare_names(),u=new Map,s=new Map;for(const[l,c]of Object.entries(r)){if(a.has(l))throw new Error(`Cannot override tchoice entity "${l}" for ${this.aid}: it is left free for the responder to choose.`);if(!o.has(l))throw new Error(`Unknown option key "${l}" for ${this.aid}. Valid keys: ${[...o].sort().join(", ")}`);const d=this.find_cparam(l);if(d){if(Wn(i))throw new Error(`Cannot fix cparam "${l}" for ${this.aid} in ${i} mode: cparams are free in plaincode/richcode (the responder covers all combinations).`);u.set(d.id,c)}else{const p=this.get_aopt(l),m=Bw(p,c,"bound value");if(m.length>0)throw new Error(`Illegal value for aopt "${l}" of ${this.aid}: ${m.join("; ")}`);s.set(p.id,c)}}this.cparam_overrides=u,this.aopt_overrides=s,this.query_mode=i}is_code_mode(){return Wn(this.query_mode)}option_value(t){const r=this.find_cparam(t);if(r)return this.cparam_overrides.get(r.id)??r.default_value;const i=this.get_aopt(t);return this.aopt_overrides.get(i.id)??i.default_value}option_value_or(t,r){return this.get_option_bare_names().includes(t)?this.option_value(t):r}enabled_flabels(){const t=Lk(this.get_option_bare_names());return t===null?[]:Rk(this.option_value(t),t)}cited_bib_ids(t){const r=this.enabled_flabels(),i=new Set(this.placed_framing_note_ids(r));for(const[u,s]of Object.entries(this.get_fgroups()))if(!s.standard_rendering)for(const l of this.nonstandard_notes(u,r))i.add(l.id);const o=!!this.option_value_or("show_typical_examples",n2),a=u=>{if(u.startsWith(Bh))return i.has(u);if(u.startsWith(Ia))return rA(this.get_example(u).classification,o);if(u.startsWith(Ek)){const[s]=this.resolve_srcquotes([u]);return t&&s.referenced_by.some(a)}return!0};return this.bib_entries().filter(u=>u.cited_by.some(a)).map(u=>u.id)}}function oA(e,n,t){return new aM(e._get_data(),n,t)}const Vh="dag-ref",uM="dag-lhs",Wh="dag-glyph",Ca="data-dag-id",sM="↖",lM="↘";function cM(e){const n=e.sexpr;if(!Array.isArray(n)||n[0]!=="eq")return null;const t=n[1];return typeof t!="string"||!t.startsWith("expr:")?null:t.slice(5)}function dM(e){ki.lastIndex=0;const n=[];for(const t of e.matchAll(ki)){const r=t[1];if(!r.startsWith("expr:"))continue;const i=r.slice(5);i.includes(":")||n.push(i)}return n}function fM(e,n){const t=new Map(e.form.map(s=>[s.id,s])),r=n.map(s=>e.get_display_form(s)),i=new Map,o=n.map((s,l)=>{const c=t.get(s),d=c?cM(c):null;return d!==null&&!i.has(d)&&i.set(d,l),d}),a=new Set;r.forEach((s,l)=>{for(const c of dM(s)){const d=i.get(c);d!==void 0&&d<l&&a.add(c)}});const u=new Map;return n.forEach((s,l)=>{const c=r[l].replace(ki,(d,p)=>{if(!p.startsWith("expr:"))return d;const m=p.slice(5);if(m.includes(":"))return d;if(m===o[l])return a.has(m)?`<span class="${Vh} ${uM}" ${Ca}="${X(m)}"><span class="${Wh}">${lM}</span>${d}</span>`:d;const f=i.get(m);if(f===void 0||f>=l)return d;const h=yu(n[f]);return`<span class="${Vh}" ${Ca}="${X(m)}"><a class="${Wh}" href="#form-${X(h)}">${sM}</a>${d}</span>`});u.set(s,c)}),u}const pM=["expr:","form:"],mM=["textchunk:","aopt:","cparam:"],hM=10;function vM(e){const n=new Map;for(const t of e.get_options()){if(Li(t)&&t.variant_producing)continue;const r=aA(t.id);if(e.is_code_mode()&&Qt(t.id)){n.set(r,`${Uh}${r}:short${Gh}`);continue}n.set(r,String(e.option_value(r)))}for(const t of e.get_textchunks()){const r=t.id.startsWith("textchunk:")?t.id.slice(10):t.id;n.set(r,t.defn)}return n}function aA(e){for(const n of mM)if(e.startsWith(n))return e.slice(n.length);return e}function t2(e,n){const t=vM(n);let r=e;for(let i=0;i<hM;i++){const o=r.replace(Hk,(a,u)=>{for(const c of pM)if(u.startsWith(c))return a;const s=aA(u),l=t.get(s);if(l===void 0)throw new Error(`Template variable ${Xw}${u}${Yw} not found in non-variant-producing options or textchunks`);return l});if(o===r)break;r=o}return r.replace(Wk,"$1")}const _M=10;function gM(e){const n=new Map;for(const r of e.get_display_expr_keys())n.set(r,e.get_display_expr(r));const t=new Set(e.form.filter(r=>!r.hide).map(r=>r.id));for(const r of e.get_display_form_keys())t.has(r)&&n.set(r,e.get_display_form(r));return n}function bM(e,n){let t=e;for(let r=0;r<_M;r++){const i=t.replace(ki,(o,a)=>{const u=n.get(a);if(u===void 0)throw new Error(`Display ref ${Xw}${a}${Yw} not found in display.expr or display.form`);return u});if(i===t)break;t=i}return t}const pg={};function yM(e){let n=pg[e];if(n)return n;n=pg[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);n.push(r)}for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);n[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2)}return n}function Nr(e,n){typeof n!="string"&&(n=Nr.defaultChars);const t=yM(n);return e.replace(/(%[a-f0-9]{2})+/gi,function(r){let i="";for(let o=0,a=r.length;o<a;o+=3){const u=parseInt(r.slice(o+1,o+3),16);if(u<128){i+=t[u];continue}if((u&224)===192&&o+3<a){const s=parseInt(r.slice(o+4,o+6),16);if((s&192)===128){const l=u<<6&1984|s&63;l<128?i+="��":i+=String.fromCharCode(l),o+=3;continue}}if((u&240)===224&&o+6<a){const s=parseInt(r.slice(o+4,o+6),16),l=parseInt(r.slice(o+7,o+9),16);if((s&192)===128&&(l&192)===128){const c=u<<12&61440|s<<6&4032|l&63;c<2048||c>=55296&&c<=57343?i+="���":i+=String.fromCharCode(c),o+=6;continue}}if((u&248)===240&&o+9<a){const s=parseInt(r.slice(o+4,o+6),16),l=parseInt(r.slice(o+7,o+9),16),c=parseInt(r.slice(o+10,o+12),16);if((s&192)===128&&(l&192)===128&&(c&192)===128){let d=u<<18&1835008|s<<12&258048|l<<6&4032|c&63;d<65536||d>1114111?i+="����":(d-=65536,i+=String.fromCharCode(55296+(d>>10),56320+(d&1023))),o+=9;continue}}i+="�"}return i})}Nr.defaultChars=";/?:@&=+$,#";Nr.componentChars="";const mg={};function EM(e){let n=mg[e];if(n)return n;n=mg[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);/^[0-9a-z]$/i.test(r)?n.push(r):n.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<e.length;t++)n[e.charCodeAt(t)]=e[t];return n}function lo(e,n,t){typeof n!="string"&&(t=n,n=lo.defaultChars),typeof t>"u"&&(t=!0);const r=EM(n);let i="";for(let o=0,a=e.length;o<a;o++){const u=e.charCodeAt(o);if(t&&u===37&&o+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3))){i+=e.slice(o,o+3),o+=2;continue}if(u<128){i+=r[u];continue}if(u>=55296&&u<=57343){if(u>=55296&&u<=56319&&o+1<a){const s=e.charCodeAt(o+1);if(s>=56320&&s<=57343){i+=encodeURIComponent(e[o]+e[o+1]),o++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(e[o])}return i}lo.defaultChars=";/?:@&=+$,-_.!~*'()#";lo.componentChars="-_.!~*'()";function r2(e){let n="";return n+=e.protocol||"",n+=e.slashes?"//":"",n+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?n+="["+e.hostname+"]":n+=e.hostname||"",n+=e.port?":"+e.port:"",n+=e.pathname||"",n+=e.search||"",n+=e.hash||"",n}function Oa(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const SM=/^([a-z0-9.+-]+:)/i,wM=/:[0-9]*$/,AM=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,$M=["<",">",'"',"`"," ","\r",`
`,"	"],TM=["{","}","|","\\","^","`"].concat($M),IM=["'"].concat(TM),hg=["%","/","?",";","#"].concat(IM),vg=["/","?","#"],LM=255,_g=/^[+a-z0-9A-Z_-]{0,63}$/,RM=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,gg={javascript:!0,"javascript:":!0},bg={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function i2(e,n){if(e&&e instanceof Oa)return e;const t=new Oa;return t.parse(e,n),t}Oa.prototype.parse=function(e,n){let t,r,i,o=e;if(o=o.trim(),!n&&e.split("#").length===1){const l=AM.exec(o);if(l)return this.pathname=l[1],l[2]&&(this.search=l[2]),this}let a=SM.exec(o);if(a&&(a=a[0],t=a.toLowerCase(),this.protocol=a,o=o.substr(a.length)),(n||a||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=o.substr(0,2)==="//",i&&!(a&&gg[a])&&(o=o.substr(2),this.slashes=!0)),!gg[a]&&(i||a&&!bg[a])){let l=-1;for(let f=0;f<vg.length;f++)r=o.indexOf(vg[f]),r!==-1&&(l===-1||r<l)&&(l=r);let c,d;l===-1?d=o.lastIndexOf("@"):d=o.lastIndexOf("@",l),d!==-1&&(c=o.slice(0,d),o=o.slice(d+1),this.auth=c),l=-1;for(let f=0;f<hg.length;f++)r=o.indexOf(hg[f]),r!==-1&&(l===-1||r<l)&&(l=r);l===-1&&(l=o.length),o[l-1]===":"&&l--;const p=o.slice(0,l);o=o.slice(l),this.parseHost(p),this.hostname=this.hostname||"";const m=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!m){const f=this.hostname.split(/\./);for(let h=0,v=f.length;h<v;h++){const _=f[h];if(_&&!_.match(_g)){let g="";for(let b=0,y=_.length;b<y;b++)_.charCodeAt(b)>127?g+="x":g+=_[b];if(!g.match(_g)){const b=f.slice(0,h),y=f.slice(h+1),E=_.match(RM);E&&(b.push(E[1]),y.unshift(E[2])),y.length&&(o=y.join(".")+o),this.hostname=b.join(".");break}}}}this.hostname.length>LM&&(this.hostname=""),m&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const u=o.indexOf("#");u!==-1&&(this.hash=o.substr(u),o=o.slice(0,u));const s=o.indexOf("?");return s!==-1&&(this.search=o.substr(s),o=o.slice(0,s)),o&&(this.pathname=o),bg[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Oa.prototype.parseHost=function(e){let n=wM.exec(e);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),e=e.substr(0,e.length-n.length)),e&&(this.hostname=e)};const CM=Object.freeze(Object.defineProperty({__proto__:null,decode:Nr,encode:lo,format:r2,parse:i2},Symbol.toStringTag,{value:"Module"})),uA=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,sA=/[\0-\x1F\x7F-\x9F]/,OM=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,o2=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,lA=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,cA=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,NM=Object.freeze(Object.defineProperty({__proto__:null,Any:uA,Cc:sA,Cf:OM,P:o2,S:lA,Z:cA},Symbol.toStringTag,{value:"Module"})),kM=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),MM=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var Gs;const PM=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),DM=(Gs=String.fromCodePoint)!==null&&Gs!==void 0?Gs:function(e){let n="";return e>65535&&(e-=65536,n+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),n+=String.fromCharCode(e),n};function FM(e){var n;return e>=55296&&e<=57343||e>1114111?65533:(n=PM.get(e))!==null&&n!==void 0?n:e}var Xe;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(Xe||(Xe={}));const qM=32;var Tt;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Tt||(Tt={}));function Kh(e){return e>=Xe.ZERO&&e<=Xe.NINE}function xM(e){return e>=Xe.UPPER_A&&e<=Xe.UPPER_F||e>=Xe.LOWER_A&&e<=Xe.LOWER_F}function BM(e){return e>=Xe.UPPER_A&&e<=Xe.UPPER_Z||e>=Xe.LOWER_A&&e<=Xe.LOWER_Z||Kh(e)}function HM(e){return e===Xe.EQUALS||BM(e)}var Ke;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(Ke||(Ke={}));var pt;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(pt||(pt={}));class UM{constructor(n,t,r){this.decodeTree=n,this.emitCodePoint=t,this.errors=r,this.state=Ke.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=pt.Strict}startEntity(n){this.decodeMode=n,this.state=Ke.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(n,t){switch(this.state){case Ke.EntityStart:return n.charCodeAt(t)===Xe.NUM?(this.state=Ke.NumericStart,this.consumed+=1,this.stateNumericStart(n,t+1)):(this.state=Ke.NamedEntity,this.stateNamedEntity(n,t));case Ke.NumericStart:return this.stateNumericStart(n,t);case Ke.NumericDecimal:return this.stateNumericDecimal(n,t);case Ke.NumericHex:return this.stateNumericHex(n,t);case Ke.NamedEntity:return this.stateNamedEntity(n,t)}}stateNumericStart(n,t){return t>=n.length?-1:(n.charCodeAt(t)|qM)===Xe.LOWER_X?(this.state=Ke.NumericHex,this.consumed+=1,this.stateNumericHex(n,t+1)):(this.state=Ke.NumericDecimal,this.stateNumericDecimal(n,t))}addToNumericResult(n,t,r,i){if(t!==r){const o=r-t;this.result=this.result*Math.pow(i,o)+parseInt(n.substr(t,o),i),this.consumed+=o}}stateNumericHex(n,t){const r=t;for(;t<n.length;){const i=n.charCodeAt(t);if(Kh(i)||xM(i))t+=1;else return this.addToNumericResult(n,r,t,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(n,r,t,16),-1}stateNumericDecimal(n,t){const r=t;for(;t<n.length;){const i=n.charCodeAt(t);if(Kh(i))t+=1;else return this.addToNumericResult(n,r,t,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(n,r,t,10),-1}emitNumericEntity(n,t){var r;if(this.consumed<=t)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(n===Xe.SEMI)this.consumed+=1;else if(this.decodeMode===pt.Strict)return 0;return this.emitCodePoint(FM(this.result),this.consumed),this.errors&&(n!==Xe.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(n,t){const{decodeTree:r}=this;let i=r[this.treeIndex],o=(i&Tt.VALUE_LENGTH)>>14;for(;t<n.length;t++,this.excess++){const a=n.charCodeAt(t);if(this.treeIndex=GM(r,i,this.treeIndex+Math.max(1,o),a),this.treeIndex<0)return this.result===0||this.decodeMode===pt.Attribute&&(o===0||HM(a))?0:this.emitNotTerminatedNamedEntity();if(i=r[this.treeIndex],o=(i&Tt.VALUE_LENGTH)>>14,o!==0){if(a===Xe.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==pt.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var n;const{result:t,decodeTree:r}=this,i=(r[t]&Tt.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,i,this.consumed),(n=this.errors)===null||n===void 0||n.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(n,t,r){const{decodeTree:i}=this;return this.emitCodePoint(t===1?i[n]&~Tt.VALUE_LENGTH:i[n+1],r),t===3&&this.emitCodePoint(i[n+2],r),r}end(){var n;switch(this.state){case Ke.NamedEntity:return this.result!==0&&(this.decodeMode!==pt.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Ke.NumericDecimal:return this.emitNumericEntity(0,2);case Ke.NumericHex:return this.emitNumericEntity(0,3);case Ke.NumericStart:return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Ke.EntityStart:return 0}}}function dA(e){let n="";const t=new UM(e,r=>n+=DM(r));return function(i,o){let a=0,u=0;for(;(u=i.indexOf("&",u))>=0;){n+=i.slice(a,u),t.startEntity(o);const l=t.write(i,u+1);if(l<0){a=u+t.end();break}a=u+l,u=l===0?a+1:a}const s=n+i.slice(a);return n="",s}}function GM(e,n,t,r){const i=(n&Tt.BRANCH_LENGTH)>>7,o=n&Tt.JUMP_TABLE;if(i===0)return o!==0&&r===o?t:-1;if(o){const s=r-o;return s<0||s>=i?-1:e[t+s]-1}let a=t,u=a+i-1;for(;a<=u;){const s=a+u>>>1,l=e[s];if(l<r)a=s+1;else if(l>r)u=s-1;else return e[s+i]}return-1}const fA=dA(kM);dA(MM);function jM(e,n=pt.Legacy){return fA(e,n)}function VM(e){return fA(e,pt.Strict)}function WM(e){return Object.prototype.toString.call(e)}function a2(e){return WM(e)==="[object String]"}const KM=Object.prototype.hasOwnProperty;function XM(e,n){return KM.call(e,n)}function Au(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(r){e[r]=t[r]})}}),e}function YM(e,n,t){return[].concat(e.slice(0,n),t,e.slice(n+1))}function u2(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Mi(e){if(e>65535){e-=65536;const n=55296+(e>>10),t=56320+(e&1023);return String.fromCharCode(n,t)}return String.fromCharCode(e)}const pA=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,JM=/&([a-z#][a-z0-9]{1,31});/gi,zM=new RegExp(pA.source+"|"+JM.source,"gi"),QM=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function ZM(e,n){if(n.charCodeAt(0)===35&&QM.test(n)){const r=n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10);return u2(r)?Mi(r):e}const t=jM(e);return t!==e?t:e}function eP(e){return e.indexOf("\\")<0?e:e.replace(pA,"$1")}function kr(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(zM,function(n,t,r){return t||ZM(n,r)})}const nP=/[&<>"]/,tP=/[&<>"]/g,rP={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function iP(e){return rP[e]}function Rt(e){return nP.test(e)?e.replace(tP,iP):e}const oP=/[.?*+^$[\]\\(){}|-]/g;function aP(e){return e.replace(oP,"\\$&")}function Le(e){switch(e){case 9:case 32:return!0}return!1}function Pi(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function mA(e){return o2.test(e)||lA.test(e)}function Di(e){return mA(Mi(e))}function Fi(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function $u(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}function yg(e){return e===32||e===9||e===10||e===13}function Tu(e){let n=0;for(;n<e.length&&yg(e.charCodeAt(n));n++);let t=e.length-1;for(;t>=n&&yg(e.charCodeAt(t));t--);return e.slice(n,t+1)}const uP={mdurl:CM,ucmicro:NM},sP=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:YM,asciiTrim:Tu,assign:Au,escapeHtml:Rt,escapeRE:aP,fromCodePoint:Mi,has:XM,isMdAsciiPunct:Fi,isPunctChar:mA,isPunctCharCode:Di,isSpace:Le,isString:a2,isValidEntityCode:u2,isWhiteSpace:Pi,lib:uP,normalizeReference:$u,unescapeAll:kr,unescapeMd:eP},Symbol.toStringTag,{value:"Module"}));function lP(e,n,t){let r,i,o,a;const u=e.posMax,s=e.pos;for(e.pos=n+1,r=1;e.pos<u;){if(o=e.src.charCodeAt(e.pos),o===93&&(r--,r===0)){i=!0;break}if(a=e.pos,e.md.inline.skipToken(e),o===91){if(a===e.pos-1)r++;else if(t)return e.pos=s,-1}}let l=-1;return i&&(l=e.pos),e.pos=s,l}function cP(e,n,t){let r,i=n;const o={ok:!1,pos:0,str:""};if(e.charCodeAt(i)===60){for(i++;i<t;){if(r=e.charCodeAt(i),r===10||r===60)return o;if(r===62)return o.pos=i+1,o.str=kr(e.slice(n+1,i)),o.ok=!0,o;if(r===92&&i+1<t){i+=2;continue}i++}return o}let a=0;for(;i<t&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<t){if(e.charCodeAt(i+1)===32){i++;continue}i+=2;continue}if(r===40&&(a++,a>32))return o;if(r===41){if(a===0)break;a--}i++}return n===i||a!==0||(o.str=kr(e.slice(n,i)),o.pos=i,o.ok=!0),o}function dP(e,n,t,r){let i,o=n;const a={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(r)a.str=r.str,a.marker=r.marker;else{if(o>=t)return a;let u=e.charCodeAt(o);if(u!==34&&u!==39&&u!==40)return a;n++,o++,u===40&&(u=41),a.marker=u}for(;o<t;){if(i=e.charCodeAt(o),i===a.marker)return a.pos=o+1,a.str+=kr(e.slice(n,o)),a.ok=!0,a;if(i===40&&a.marker===41)return a;i===92&&o+1<t&&o++,o++}return a.can_continue=!0,a.str+=kr(e.slice(n,o)),a}const fP=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:cP,parseLinkLabel:lP,parseLinkTitle:dP},Symbol.toStringTag,{value:"Module"})),Zn={};Zn.code_inline=function(e,n,t,r,i){const o=e[n];return"<code"+i.renderAttrs(o)+">"+Rt(o.content)+"</code>"};Zn.code_block=function(e,n,t,r,i){const o=e[n];return"<pre"+i.renderAttrs(o)+"><code>"+Rt(e[n].content)+`</code></pre>
`};Zn.fence=function(e,n,t,r,i){const o=e[n],a=o.info?kr(o.info).trim():"";let u="",s="";if(a){const c=a.split(/(\s+)/g);u=c[0],s=c.slice(2).join("")}let l;if(t.highlight?l=t.highlight(o.content,u,s)||Rt(o.content):l=Rt(o.content),l.indexOf("<pre")===0)return l+`
`;if(a){const c=o.attrIndex("class"),d=o.attrs?o.attrs.slice():[];c<0?d.push(["class",t.langPrefix+u]):(d[c]=d[c].slice(),d[c][1]+=" "+t.langPrefix+u);const p={attrs:d};return`<pre><code${i.renderAttrs(p)}>${l}</code></pre>
`}return`<pre><code${i.renderAttrs(o)}>${l}</code></pre>
`};Zn.image=function(e,n,t,r,i){const o=e[n];return o.attrs[o.attrIndex("alt")][1]=i.renderInlineAsText(o.children,t,r),i.renderToken(e,n,t)};Zn.hardbreak=function(e,n,t){return t.xhtmlOut?`<br />
`:`<br>
`};Zn.softbreak=function(e,n,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};Zn.text=function(e,n){return Rt(e[n].content)};Zn.html_block=function(e,n){return e[n].content};Zn.html_inline=function(e,n){return e[n].content};function Vr(){this.rules=Au({},Zn)}Vr.prototype.renderAttrs=function(n){let t,r,i;if(!n.attrs)return"";for(i="",t=0,r=n.attrs.length;t<r;t++)i+=" "+Rt(n.attrs[t][0])+'="'+Rt(n.attrs[t][1])+'"';return i};Vr.prototype.renderToken=function(n,t,r){const i=n[t];let o="";if(i.hidden)return"";i.block&&i.nesting!==-1&&t&&n[t-1].hidden&&(o+=`
`),o+=(i.nesting===-1?"</":"<")+i.tag,o+=this.renderAttrs(i),i.nesting===0&&r.xhtmlOut&&(o+=" /");let a=!1;if(i.block&&(a=!0,i.nesting===1&&t+1<n.length)){const u=n[t+1];(u.type==="inline"||u.hidden||u.nesting===-1&&u.tag===i.tag)&&(a=!1)}return o+=a?`>
`:">",o};Vr.prototype.renderInline=function(e,n,t){let r="";const i=this.rules;for(let o=0,a=e.length;o<a;o++){const u=e[o].type;typeof i[u]<"u"?r+=i[u](e,o,n,t,this):r+=this.renderToken(e,o,n)}return r};Vr.prototype.renderInlineAsText=function(e,n,t){let r="";for(let i=0,o=e.length;i<o;i++)switch(e[i].type){case"text":r+=e[i].content;break;case"image":r+=this.renderInlineAsText(e[i].children,n,t);break;case"html_inline":case"html_block":r+=e[i].content;break;case"softbreak":case"hardbreak":r+=`
`;break}return r};Vr.prototype.render=function(e,n,t){let r="";const i=this.rules;for(let o=0,a=e.length;o<a;o++){const u=e[o].type;u==="inline"?r+=this.renderInline(e[o].children,n,t):typeof i[u]<"u"?r+=i[u](e,o,n,t,this):r+=this.renderToken(e,o,n,t)}return r};function ln(){this.__rules__=[],this.__cache__=null}ln.prototype.__find__=function(e){for(let n=0;n<this.__rules__.length;n++)if(this.__rules__[n].name===e)return n;return-1};ln.prototype.__compile__=function(){const e=this,n=[""];e.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(r){n.indexOf(r)<0&&n.push(r)})}),e.__cache__={},n.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(r){r.enabled&&(t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn))})})};ln.prototype.at=function(e,n,t){const r=this.__find__(e),i=t||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=n,this.__rules__[r].alt=i.alt||[],this.__cache__=null};ln.prototype.before=function(e,n,t,r){const i=this.__find__(e),o=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i,0,{name:n,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};ln.prototype.after=function(e,n,t,r){const i=this.__find__(e),o=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i+1,0,{name:n,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};ln.prototype.push=function(e,n,t){const r=t||{};this.__rules__.push({name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};ln.prototype.enable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const i=this.__find__(r);if(i<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!0,t.push(r)},this),this.__cache__=null,t};ln.prototype.enableOnly=function(e,n){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,n)};ln.prototype.disable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const i=this.__find__(r);if(i<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!1,t.push(r)},this),this.__cache__=null,t};ln.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Mn(e,n,t){this.type=e,this.tag=n,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Mn.prototype.attrIndex=function(n){if(!this.attrs)return-1;const t=this.attrs;for(let r=0,i=t.length;r<i;r++)if(t[r][0]===n)return r;return-1};Mn.prototype.attrPush=function(n){this.attrs?this.attrs.push(n):this.attrs=[n]};Mn.prototype.attrSet=function(n,t){const r=this.attrIndex(n),i=[n,t];r<0?this.attrPush(i):this.attrs[r]=i};Mn.prototype.attrGet=function(n){const t=this.attrIndex(n);let r=null;return t>=0&&(r=this.attrs[t][1]),r};Mn.prototype.attrJoin=function(n,t){const r=this.attrIndex(n);r<0?this.attrPush([n,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};function hA(e,n,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=n}hA.prototype.Token=Mn;const pP=/\r\n?|\n/g,mP=/\0/g;function hP(e){let n;n=e.src.replace(pP,`
`),n=n.replace(mP,"�"),e.src=n}function vP(e){let n;e.inlineMode?(n=new e.Token("inline","",0),n.content=e.src,n.map=[0,1],n.children=[],e.tokens.push(n)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function _P(e){const n=e.tokens;for(let t=0,r=n.length;t<r;t++){const i=n[t];i.type==="inline"&&e.md.inline.parse(i.content,e.md,e.env,i.children)}}function gP(e){return/^<a[>\s]/i.test(e)}function bP(e){return/^<\/a\s*>/i.test(e)}function yP(e){const n=e.tokens;if(e.md.options.linkify)for(let t=0,r=n.length;t<r;t++){if(n[t].type!=="inline"||!e.md.linkify.pretest(n[t].content))continue;const i=n[t].children,o=[];let a=0;for(let u=i.length-1;u>=0;u--){const s=i[u];if(s.type==="link_close"){for(u--;i[u].level!==s.level&&i[u].type!=="link_open";)u--;continue}if(s.type==="html_inline"&&(gP(s.content)&&a>0&&a--,bP(s.content)&&a++),!(a>0)&&s.type==="text"&&e.md.linkify.test(s.content)){const l=s.content;let c=e.md.linkify.match(l);const d=[];let p=s.level,m=0;c.length>0&&c[0].index===0&&u>0&&i[u-1].type==="text_special"&&(c=c.slice(1));for(let f=0;f<c.length;f++){const h=c[f].url,v=e.md.normalizeLink(h);if(!e.md.validateLink(v))continue;let _=c[f].text;c[f].schema?c[f].schema==="mailto:"&&!/^mailto:/i.test(_)?_=e.md.normalizeLinkText("mailto:"+_).replace(/^mailto:/,""):_=e.md.normalizeLinkText(_):_=e.md.normalizeLinkText("http://"+_).replace(/^http:\/\//,"");const g=c[f].index;if(g>m){const A=new e.Token("text","",0);A.content=l.slice(m,g),A.level=p,d.push(A)}const b=new e.Token("link_open","a",1);b.attrs=[["href",v]],b.level=p++,b.markup="linkify",b.info="auto",d.push(b);const y=new e.Token("text","",0);y.content=_,y.level=p,d.push(y);const E=new e.Token("link_close","a",-1);E.level=--p,E.markup="linkify",E.info="auto",d.push(E),m=c[f].lastIndex}if(m<l.length){const f=new e.Token("text","",0);f.content=l.slice(m),f.level=p,d.push(f)}o.push({index:u,nodes:d})}}if(o.length>0){let u=i.length;for(const d of o)u+=d.nodes.length-1;const s=new Array(u);let l=0,c=0;o.reverse();for(let d=0;d<i.length;d++){const p=o[l];if((p==null?void 0:p.index)===d){for(const m of p.nodes)s[c++]=m;l++}else s[c++]=i[d]}n[t].children=s}}}const vA=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,EP=/\((c|tm|r)\)/i,SP=/\((c|tm|r)\)/ig,wP={c:"©",r:"®",tm:"™"};function AP(e,n){return wP[n.toLowerCase()]}function $P(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&(r.content=r.content.replace(SP,AP)),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function TP(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&vA.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function IP(e){let n;if(e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type==="inline"&&(EP.test(e.tokens[n].content)&&$P(e.tokens[n].children),vA.test(e.tokens[n].content)&&TP(e.tokens[n].children))}const LP=/['"]/,Eg=/['"]/g,Sg="’",RP=1e3;function wg(e,n,t){for(;e.length>t;){const r=e.pop();r.isSingleQuote?n.single=r.prevSameQuoteIdx:n.double=r.prevSameQuoteIdx}}function Zo(e,n,t,r){e[n]||(e[n]=[]),e[n].push({pos:t,ch:r})}function CP(e,n){let t="",r=0;n.sort((i,o)=>i.pos-o.pos);for(let i=0;i<n.length;i++){const o=n[i];t+=e.slice(r,o.pos)+o.ch,r=o.pos+1}return t+e.slice(r)}function OP(e,n){let t;const r=[],i={single:-1,double:-1},o={};for(let a=0;a<e.length;a++){const u=e[a],s=e[a].level;for(t=r.length-1;t>=0&&!(r[t].level<=s);t--);if(wg(r,i,t+1),u.type!=="text")continue;const l=u.content;let c=0;const d=l.length;e:for(;c<d;){Eg.lastIndex=c;const p=Eg.exec(l);if(!p)break;let m=!0,f=!0;c=p.index+1;const h=p[0]==="'";let v=32;if(p.index-1>=0)v=l.charCodeAt(p.index-1);else for(t=a-1;t>=0&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t--)if(e[t].content){v=e[t].content.charCodeAt(e[t].content.length-1);break}let _=32;if(c<d)_=l.charCodeAt(c);else for(t=a+1;t<e.length&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t++)if(e[t].content){_=e[t].content.charCodeAt(0);break}const g=Fi(v)||Di(v),b=Fi(_)||Di(_),y=Pi(v),E=Pi(_);if(E?m=!1:b&&(y||g||(m=!1)),y?f=!1:g&&(E||b||(f=!1)),_===34&&p[0]==='"'&&v>=48&&v<=57&&(f=m=!1),m&&f&&(m=g,f=b),!m&&!f){h&&Zo(o,a,p.index,Sg);continue}if(f&&(t=h?i.single:i.double,t>=0&&r[t].level===s)){const A=r[t];let T,C;h?(T=n.md.options.quotes[2],C=n.md.options.quotes[3]):(T=n.md.options.quotes[0],C=n.md.options.quotes[1]),Zo(o,a,p.index,C),Zo(o,A.tokenIdx,A.contentPos,T),wg(r,i,t);continue e}if(m){if(r.length>=RP)return;r.push({tokenIdx:a,contentPos:p.index,isSingleQuote:h,level:s,prevSameQuoteIdx:h?i.single:i.double}),h?i.single=r.length-1:i.double=r.length-1}else f&&h&&Zo(o,a,p.index,Sg)}}Object.keys(o).forEach(function(a){e[a].content=CP(e[a].content,o[a])})}function NP(e){if(e.md.options.typographer)for(let n=e.tokens.length-1;n>=0;n--)e.tokens[n].type!=="inline"||!LP.test(e.tokens[n].content)||OP(e.tokens[n].children,e)}function kP(e){let n,t;const r=e.tokens,i=r.length;for(let o=0;o<i;o++){if(r[o].type!=="inline")continue;const a=r[o].children,u=a.length;for(n=0;n<u;n++)a[n].type==="text_special"&&(a[n].type="text");for(n=t=0;n<u;n++)a[n].type==="text"&&n+1<u&&a[n+1].type==="text"?a[n+1].content=a[n].content+a[n+1].content:(n!==t&&(a[t]=a[n]),t++);n!==t&&(a.length=t)}}const js=[["normalize",hP],["block",vP],["inline",_P],["linkify",yP],["replacements",IP],["smartquotes",NP],["text_join",kP]];function s2(){this.ruler=new ln;for(let e=0;e<js.length;e++)this.ruler.push(js[e][0],js[e][1])}s2.prototype.process=function(e){const n=this.ruler.getRules("");for(let t=0,r=n.length;t<r;t++)n[t](e)};s2.prototype.State=hA;function et(e,n,t,r){this.src=e,this.md=n,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let o=0,a=0,u=0,s=0,l=i.length,c=!1;a<l;a++){const d=i.charCodeAt(a);if(!c)if(Le(d)){u++,d===9?s+=4-s%4:s++;continue}else c=!0;(d===10||a===l-1)&&(d!==10&&a++,this.bMarks.push(o),this.eMarks.push(a),this.tShift.push(u),this.sCount.push(s),this.bsCount.push(0),c=!1,u=0,s=0,o=a+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}et.prototype.push=function(e,n,t){const r=new Mn(e,n,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};et.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]};et.prototype.skipEmptyLines=function(n){for(let t=this.lineMax;n<t&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n};et.prototype.skipSpaces=function(n){for(let t=this.src.length;n<t;n++){const r=this.src.charCodeAt(n);if(!Le(r))break}return n};et.prototype.skipSpacesBack=function(n,t){if(n<=t)return n;for(;n>t;)if(!Le(this.src.charCodeAt(--n)))return n+1;return n};et.prototype.skipChars=function(n,t){for(let r=this.src.length;n<r&&this.src.charCodeAt(n)===t;n++);return n};et.prototype.skipCharsBack=function(n,t,r){if(n<=r)return n;for(;n>r;)if(t!==this.src.charCodeAt(--n))return n+1;return n};et.prototype.getLines=function(n,t,r,i){if(n>=t)return"";const o=new Array(t-n);for(let a=0,u=n;u<t;u++,a++){let s=0;const l=this.bMarks[u];let c=l,d;for(u+1<t||i?d=this.eMarks[u]+1:d=this.eMarks[u];c<d&&s<r;){const p=this.src.charCodeAt(c);if(Le(p))p===9?s+=4-(s+this.bsCount[u])%4:s++;else if(c-l<this.tShift[u])s++;else break;c++}s>r?o[a]=new Array(s-r+1).join(" ")+this.src.slice(c,d):o[a]=this.src.slice(c,d)}return o.join("")};et.prototype.Token=Mn;const MP=65536;function Vs(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];return e.src.slice(t,r)}function Ag(e){const n=[],t=e.length;let r=0,i=e.charCodeAt(r),o=!1,a=0,u="";for(;r<t;)i===124&&(o?(u+=e.substring(a,r-1),a=r):(n.push(u+e.substring(a,r)),u="",a=r+1)),o=i===92,r++,i=e.charCodeAt(r);return n.push(u+e.substring(a)),n}function PP(e,n,t,r){if(n+2>t)return!1;let i=n+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let o=e.bMarks[i]+e.tShift[i];if(o>=e.eMarks[i])return!1;const a=e.src.charCodeAt(o++);if(a!==124&&a!==45&&a!==58||o>=e.eMarks[i])return!1;const u=e.src.charCodeAt(o++);if(u!==124&&u!==45&&u!==58&&!Le(u)||a===45&&Le(u))return!1;for(;o<e.eMarks[i];){const y=e.src.charCodeAt(o);if(y!==124&&y!==45&&y!==58&&!Le(y))return!1;o++}let s=Vs(e,n+1),l=s.split("|");const c=[];for(let y=0;y<l.length;y++){const E=l[y].trim();if(!E){if(y===0||y===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(E))return!1;E.charCodeAt(E.length-1)===58?c.push(E.charCodeAt(0)===58?"center":"right"):E.charCodeAt(0)===58?c.push("left"):c.push("")}if(s=Vs(e,n).trim(),s.indexOf("|")===-1||e.sCount[n]-e.blkIndent>=4)return!1;l=Ag(s),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop();const d=l.length;if(d===0||d!==c.length)return!1;if(r)return!0;const p=e.parentType;e.parentType="table";const m=e.md.block.ruler.getRules("blockquote"),f=e.push("table_open","table",1),h=[n,0];f.map=h;const v=e.push("thead_open","thead",1);v.map=[n,n+1];const _=e.push("tr_open","tr",1);_.map=[n,n+1];for(let y=0;y<l.length;y++){const E=e.push("th_open","th",1);c[y]&&(E.attrs=[["style","text-align:"+c[y]]]);const A=e.push("inline","",0);A.content=l[y].trim(),A.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let g,b=0;for(i=n+2;i<t&&!(e.sCount[i]<e.blkIndent);i++){let y=!1;for(let A=0,T=m.length;A<T;A++)if(m[A](e,i,t,!0)){y=!0;break}if(y||(s=Vs(e,i).trim(),!s)||e.sCount[i]-e.blkIndent>=4||(l=Ag(s),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop(),b+=d-l.length,b>MP))break;if(i===n+2){const A=e.push("tbody_open","tbody",1);A.map=g=[n+2,0]}const E=e.push("tr_open","tr",1);E.map=[i,i+1];for(let A=0;A<d;A++){const T=e.push("td_open","td",1);c[A]&&(T.attrs=[["style","text-align:"+c[A]]]);const C=e.push("inline","",0);C.content=l[A]?l[A].trim():"",C.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return g&&(e.push("tbody_close","tbody",-1),g[1]=i),e.push("table_close","table",-1),h[1]=i,e.parentType=p,e.line=i,!0}function DP(e,n,t){if(e.sCount[n]-e.blkIndent<4)return!1;let r=n+1,i=r;for(;r<t;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;const o=e.push("code_block","code",0);return o.content=e.getLines(n,i,4+e.blkIndent,!1)+`
`,o.map=[n,e.line],!0}function FP(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||i+3>o)return!1;const a=e.src.charCodeAt(i);if(a!==126&&a!==96)return!1;let u=i;i=e.skipChars(i,a);let s=i-u;if(s<3)return!1;const l=e.src.slice(u,i),c=e.src.slice(i,o);if(a===96&&c.indexOf(String.fromCharCode(a))>=0)return!1;if(r)return!0;let d=n,p=!1;for(;d++,!(d>=t||(i=u=e.bMarks[d]+e.tShift[d],o=e.eMarks[d],i<o&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(i)===a&&!(e.sCount[d]-e.blkIndent>=4)&&(i=e.skipChars(i,a),!(i-u<s)&&(i=e.skipSpaces(i),!(i<o)))){p=!0;break}s=e.sCount[n],e.line=d+(p?1:0);const m=e.push("fence","code",0);return m.info=c,m.content=e.getLines(n+1,d,s,!0),m.markup=l,m.map=[n,e.line],!0}function qP(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];const a=e.lineMax;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;const u=[],s=[],l=[],c=[],d=e.md.block.ruler.getRules("blockquote"),p=e.parentType;e.parentType="blockquote";let m=!1,f;for(f=n;f<t;f++){const b=e.sCount[f]<e.blkIndent;if(i=e.bMarks[f]+e.tShift[f],o=e.eMarks[f],i>=o)break;if(e.src.charCodeAt(i++)===62&&!b){let E=e.sCount[f]+1,A,T;e.src.charCodeAt(i)===32?(i++,E++,T=!1,A=!0):e.src.charCodeAt(i)===9?(A=!0,(e.bsCount[f]+E)%4===3?(i++,E++,T=!1):T=!0):A=!1;let C=E;for(u.push(e.bMarks[f]),e.bMarks[f]=i;i<o;){const L=e.src.charCodeAt(i);if(Le(L))L===9?C+=4-(C+e.bsCount[f]+(T?1:0))%4:C++;else break;i++}m=i>=o,s.push(e.bsCount[f]),e.bsCount[f]=e.sCount[f]+1+(A?1:0),l.push(e.sCount[f]),e.sCount[f]=C-E,c.push(e.tShift[f]),e.tShift[f]=i-e.bMarks[f];continue}if(m)break;let y=!1;for(let E=0,A=d.length;E<A;E++)if(d[E](e,f,t,!0)){y=!0;break}if(y){e.lineMax=f,e.blkIndent!==0&&(u.push(e.bMarks[f]),s.push(e.bsCount[f]),c.push(e.tShift[f]),l.push(e.sCount[f]),e.sCount[f]-=e.blkIndent);break}u.push(e.bMarks[f]),s.push(e.bsCount[f]),c.push(e.tShift[f]),l.push(e.sCount[f]),e.sCount[f]=-1}const h=e.blkIndent;e.blkIndent=0;const v=e.push("blockquote_open","blockquote",1);v.markup=">";const _=[n,0];v.map=_,e.md.block.tokenize(e,n,f);const g=e.push("blockquote_close","blockquote",-1);g.markup=">",e.lineMax=a,e.parentType=p,_[1]=e.line;for(let b=0;b<c.length;b++)e.bMarks[b+n]=u[b],e.tShift[b+n]=c[b],e.sCount[b+n]=l[b],e.bsCount[b+n]=s[b];return e.blkIndent=h,!0}function xP(e,n,t,r){const i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let o=e.bMarks[n]+e.tShift[n];const a=e.src.charCodeAt(o++);if(a!==42&&a!==45&&a!==95)return!1;let u=1;for(;o<i;){const l=e.src.charCodeAt(o++);if(l!==a&&!Le(l))return!1;l===a&&u++}if(u<3)return!1;if(r)return!0;e.line=n+1;const s=e.push("hr","hr",0);return s.map=[n,e.line],s.markup=Array(u+1).join(String.fromCharCode(a)),!0}function $g(e,n){const t=e.eMarks[n];let r=e.bMarks[n]+e.tShift[n];const i=e.src.charCodeAt(r++);if(i!==42&&i!==45&&i!==43)return-1;if(r<t){const o=e.src.charCodeAt(r);if(!Le(o))return-1}return r}function Tg(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];let i=t;if(i+1>=r)return-1;let o=e.src.charCodeAt(i++);if(o<48||o>57)return-1;for(;;){if(i>=r)return-1;if(o=e.src.charCodeAt(i++),o>=48&&o<=57){if(i-t>=10)return-1;continue}if(o===41||o===46)break;return-1}return i<r&&(o=e.src.charCodeAt(i),!Le(o))?-1:i}function BP(e,n){const t=e.level+2;for(let r=n+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===t&&e.tokens[r].type==="paragraph_open"&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function HP(e,n,t,r){let i,o,a,u,s=n,l=!0;if(e.sCount[s]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[s]-e.listIndent>=4&&e.sCount[s]<e.blkIndent)return!1;let c=!1;r&&e.parentType==="paragraph"&&e.sCount[s]>=e.blkIndent&&(c=!0);let d,p,m;if((m=Tg(e,s))>=0){if(d=!0,a=e.bMarks[s]+e.tShift[s],p=Number(e.src.slice(a,m-1)),c&&p!==1)return!1}else if((m=$g(e,s))>=0)d=!1;else return!1;if(c&&e.skipSpaces(m)>=e.eMarks[s])return!1;if(r)return!0;const f=e.src.charCodeAt(m-1),h=e.tokens.length;d?(u=e.push("ordered_list_open","ol",1),p!==1&&(u.attrs=[["start",p]])):u=e.push("bullet_list_open","ul",1);const v=[s,0];u.map=v,u.markup=String.fromCharCode(f);let _=!1;const g=e.md.block.ruler.getRules("list"),b=e.parentType;for(e.parentType="list";s<t;){o=m,i=e.eMarks[s];const y=e.sCount[s]+m-(e.bMarks[s]+e.tShift[s]);let E=y;for(;o<i;){const P=e.src.charCodeAt(o);if(P===9)E+=4-(E+e.bsCount[s])%4;else if(P===32)E++;else break;o++}const A=o;let T;A>=i?T=1:T=E-y,T>4&&(T=1);const C=y+T;u=e.push("list_item_open","li",1),u.markup=String.fromCharCode(f);const L=[s,0];u.map=L,d&&(u.info=e.src.slice(a,m-1));const $=e.tight,w=e.tShift[s],S=e.sCount[s],I=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=C,e.tight=!0,e.tShift[s]=A-e.bMarks[s],e.sCount[s]=E,A>=i&&e.isEmpty(s+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,s,t,!0),(!e.tight||_)&&(l=!1),_=e.line-s>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=I,e.tShift[s]=w,e.sCount[s]=S,e.tight=$,u=e.push("list_item_close","li",-1),u.markup=String.fromCharCode(f),s=e.line,L[1]=s,s>=t||e.sCount[s]<e.blkIndent||e.sCount[s]-e.blkIndent>=4)break;let R=!1;for(let P=0,k=g.length;P<k;P++)if(g[P](e,s,t,!0)){R=!0;break}if(R)break;if(d){if(m=Tg(e,s),m<0)break;a=e.bMarks[s]+e.tShift[s]}else if(m=$g(e,s),m<0)break;if(f!==e.src.charCodeAt(m-1))break}return d?u=e.push("ordered_list_close","ol",-1):u=e.push("bullet_list_close","ul",-1),u.markup=String.fromCharCode(f),v[1]=s,e.line=s,e.parentType=b,l&&BP(e,h),!0}function UP(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n],a=n+1;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function u(g){const b=e.lineMax;if(g>=b||e.isEmpty(g))return null;let y=!1;if(e.sCount[g]-e.blkIndent>3&&(y=!0),e.sCount[g]<0&&(y=!0),!y){const T=e.md.block.ruler.getRules("reference"),C=e.parentType;e.parentType="reference";let L=!1;for(let $=0,w=T.length;$<w;$++)if(T[$](e,g,b,!0)){L=!0;break}if(e.parentType=C,L)return null}const E=e.bMarks[g]+e.tShift[g],A=e.eMarks[g];return e.src.slice(E,A+1)}let s=e.src.slice(i,o+1);o=s.length;let l=-1;for(i=1;i<o;i++){const g=s.charCodeAt(i);if(g===91)return!1;if(g===93){l=i;break}else if(g===10){const b=u(a);b!==null&&(s+=b,o=s.length,a++)}else if(g===92&&(i++,i<o&&s.charCodeAt(i)===10)){const b=u(a);b!==null&&(s+=b,o=s.length,a++)}}if(l<0||s.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<o;i++){const g=s.charCodeAt(i);if(g===10){const b=u(a);b!==null&&(s+=b,o=s.length,a++)}else if(!Le(g))break}const c=e.md.helpers.parseLinkDestination(s,i,o);if(!c.ok)return!1;const d=e.md.normalizeLink(c.str);if(!e.md.validateLink(d))return!1;i=c.pos;const p=i,m=a,f=i;for(;i<o;i++){const g=s.charCodeAt(i);if(g===10){const b=u(a);b!==null&&(s+=b,o=s.length,a++)}else if(!Le(g))break}let h=e.md.helpers.parseLinkTitle(s,i,o);for(;h.can_continue;){const g=u(a);if(g===null)break;s+=g,i=o,o=s.length,a++,h=e.md.helpers.parseLinkTitle(s,i,o,h)}let v;for(i<o&&f!==i&&h.ok?(v=h.str,i=h.pos):(v="",i=p,a=m);i<o;){const g=s.charCodeAt(i);if(!Le(g))break;i++}if(i<o&&s.charCodeAt(i)!==10&&v)for(v="",i=p,a=m;i<o;){const g=s.charCodeAt(i);if(!Le(g))break;i++}if(i<o&&s.charCodeAt(i)!==10)return!1;const _=$u(s.slice(1,l));return _?(r||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[_]>"u"&&(e.env.references[_]={title:v,href:d}),e.line=a),!0):!1}const GP=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],jP="[a-zA-Z_:][a-zA-Z0-9:._-]*",VP="[^\"'=<>`\\x00-\\x20]+",WP="'[^']*'",KP='"[^"]*"',XP="(?:"+VP+"|"+WP+"|"+KP+")",YP="(?:\\s+"+jP+"(?:\\s*=\\s*"+XP+")?)",_A="<[A-Za-z][A-Za-z0-9\\-]*"+YP+"*\\s*\\/?>",gA="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",JP="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",zP="<[?][\\s\\S]*?[?]>",QP="<![A-Za-z][^>]*>",ZP="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",eD=new RegExp("^(?:"+_A+"|"+gA+"|"+JP+"|"+zP+"|"+QP+"|"+ZP+")"),nD=new RegExp("^(?:"+_A+"|"+gA+")"),Wt=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Za-z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+GP.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(nD.source+"\\s*$"),/^$/,!1]];function tD(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let a=e.src.slice(i,o),u=0;for(;u<Wt.length&&!Wt[u][0].test(a);u++);if(u===Wt.length)return!1;if(r)return Wt[u][2];let s=n+1;const l=Wt[u][1].test("");if(!Wt[u][1].test(a)){for(;s<t&&!(e.sCount[s]<e.blkIndent&&(l||!e.isEmpty(s)));s++)if(i=e.bMarks[s]+e.tShift[s],o=e.eMarks[s],a=e.src.slice(i,o),Wt[u][1].test(a)){a.length!==0&&s++;break}}e.line=s;const c=e.push("html_block","",0);return c.map=[n,s],c.content=e.getLines(n,s,e.blkIndent,!0),!0}function rD(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let a=e.src.charCodeAt(i);if(a!==35||i>=o)return!1;let u=1;for(a=e.src.charCodeAt(++i);a===35&&i<o&&u<=6;)u++,a=e.src.charCodeAt(++i);if(u>6||i<o&&!Le(a))return!1;if(r)return!0;o=e.skipSpacesBack(o,i);const s=e.skipCharsBack(o,35,i);s>i&&Le(e.src.charCodeAt(s-1))&&(o=s),e.line=n+1;const l=e.push("heading_open","h"+String(u),1);l.markup="########".slice(0,u),l.map=[n,e.line];const c=e.push("inline","",0);c.content=Tu(e.src.slice(i,o)),c.map=[n,e.line],c.children=[];const d=e.push("heading_close","h"+String(u),-1);return d.markup="########".slice(0,u),!0}function iD(e,n,t){const r=e.md.block.ruler.getRules("paragraph");if(e.sCount[n]-e.blkIndent>=4)return!1;const i=e.parentType;e.parentType="paragraph";let o=0,a,u=n+1;for(;u<t&&!e.isEmpty(u);u++){if(e.sCount[u]-e.blkIndent>3)continue;if(e.sCount[u]>=e.blkIndent){let m=e.bMarks[u]+e.tShift[u];const f=e.eMarks[u];if(m<f&&(a=e.src.charCodeAt(m),(a===45||a===61)&&(m=e.skipChars(m,a),m=e.skipSpaces(m),m>=f))){o=a===61?1:2;break}}if(e.sCount[u]<0)continue;let p=!1;for(let m=0,f=r.length;m<f;m++)if(r[m](e,u,t,!0)){p=!0;break}if(p)break}if(!o)return e.parentType=i,!1;const s=Tu(e.getLines(n,u,e.blkIndent,!1));e.line=u+1;const l=e.push("heading_open","h"+String(o),1);l.markup=String.fromCharCode(a),l.map=[n,e.line];const c=e.push("inline","",0);c.content=s,c.map=[n,e.line-1],c.children=[];const d=e.push("heading_close","h"+String(o),-1);return d.markup=String.fromCharCode(a),e.parentType=i,!0}function oD(e,n,t){const r=e.md.block.ruler.getRules("paragraph"),i=e.parentType;let o=n+1;for(e.parentType="paragraph";o<t&&!e.isEmpty(o);o++){if(e.sCount[o]-e.blkIndent>3||e.sCount[o]<0)continue;let l=!1;for(let c=0,d=r.length;c<d;c++)if(r[c](e,o,t,!0)){l=!0;break}if(l)break}const a=Tu(e.getLines(n,o,e.blkIndent,!1));e.line=o;const u=e.push("paragraph_open","p",1);u.map=[n,e.line];const s=e.push("inline","",0);return s.content=a,s.map=[n,e.line],s.children=[],e.push("paragraph_close","p",-1),e.parentType=i,!0}const ea=[["table",PP,["paragraph","reference"]],["code",DP],["fence",FP,["paragraph","reference","blockquote","list"]],["blockquote",qP,["paragraph","reference","blockquote","list"]],["hr",xP,["paragraph","reference","blockquote","list"]],["list",HP,["paragraph","reference","blockquote"]],["reference",UP],["html_block",tD,["paragraph","reference","blockquote"]],["heading",rD,["paragraph","reference","blockquote"]],["lheading",iD],["paragraph",oD]];function Iu(){this.ruler=new ln;for(let e=0;e<ea.length;e++)this.ruler.push(ea[e][0],ea[e][1],{alt:(ea[e][2]||[]).slice()})}Iu.prototype.tokenize=function(e,n,t){const r=this.ruler.getRules(""),i=r.length,o=e.md.options.maxNesting;let a=n,u=!1;for(;a<t&&(e.line=a=e.skipEmptyLines(a),!(a>=t||e.sCount[a]<e.blkIndent));){if(e.level>=o){e.line=t;break}const s=e.line;let l=!1;for(let c=0;c<i;c++)if(l=r[c](e,a,t,!1),l){if(s>=e.line)throw new Error("block rule didn't increment state.line");break}if(!l)throw new Error("none of the block rules matched");e.tight=!u,e.isEmpty(e.line-1)&&(u=!0),a=e.line,a<t&&e.isEmpty(a)&&(u=!0,a++,e.line=a)}};Iu.prototype.parse=function(e,n,t,r){if(!e)return;const i=new this.State(e,n,t,r);this.tokenize(i,i.line,i.lineMax)};Iu.prototype.State=et;function co(e,n,t,r){this.src=e,this.env=t,this.md=n,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}co.prototype.pushPending=function(){const e=new Mn("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};co.prototype.push=function(e,n,t){this.pending&&this.pushPending();const r=new Mn(e,n,t);let i=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r};co.prototype.scanDelims=function(e,n){const t=this.posMax,r=this.src.charCodeAt(e);let i;if(e===0)i=32;else if(e===1)i=this.src.charCodeAt(0),(i&63488)===55296&&(i=65533);else if(i=this.src.charCodeAt(e-1),(i&64512)===56320){const v=this.src.charCodeAt(e-2);i=(v&64512)===55296?65536+(v-55296<<10)+(i-56320):65533}else(i&64512)===55296&&(i=65533);let o=e;for(;o<t&&this.src.charCodeAt(o)===r;)o++;const a=o-e;let u=o<t?this.src.charCodeAt(o):32;if((u&64512)===55296){const v=this.src.charCodeAt(o+1);u=(v&64512)===56320?65536+(u-55296<<10)+(v-56320):65533}else(u&64512)===56320&&(u=65533);const s=Fi(i)||Di(i),l=Fi(u)||Di(u),c=Pi(i),d=Pi(u),p=!d&&(!l||c||s),m=!c&&(!s||d||l);return{can_open:p&&(n||!m||s),can_close:m&&(n||!p||l),length:a}};co.prototype.Token=Mn;function aD(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function uD(e,n){let t=e.pos;for(;t<e.posMax&&!aD(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(n||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}function sD(e){return e>=65&&e<=90||e>=97&&e<=122}function lD(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===45||e===46}function cD(e,n){if(!e.md.options.linkify||e.linkLevel>0)return!1;const t=e.pos,r=e.posMax;if(t+3>r||e.src.charCodeAt(t)!==58||e.src.charCodeAt(t+1)!==47||e.src.charCodeAt(t+2)!==47)return!1;const i=t-Math.min(10,e.pending.length,t);let o=t;for(;o>i&&lD(e.src.charCodeAt(o-1));)o--;if(o===t||!sD(e.src.charCodeAt(o)))return!1;const a=t-o,u=e.md.linkify.matchAtStart(e.src.slice(o));if(!u)return!1;let s=u.url;if(s.length<=a)return!1;let l=s.length;for(;l>0&&s.charCodeAt(l-1)===42;)l--;l!==s.length&&(s=s.slice(0,l));const c=e.md.normalizeLink(s);if(!e.md.validateLink(c))return!1;if(!n){e.pending=e.pending.slice(0,-a);const d=e.push("link_open","a",1);d.attrs=[["href",c]],d.markup="linkify",d.info="auto";const p=e.push("text","",0);p.content=e.md.normalizeLinkText(s);const m=e.push("link_close","a",-1);m.markup="linkify",m.info="auto"}return e.pos+=s.length-a,!0}function dD(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==10)return!1;const r=e.pending.length-1,i=e.posMax;if(!n)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let o=r-1;for(;o>=1&&e.pending.charCodeAt(o-1)===32;)o--;e.pending=e.pending.slice(0,o),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(t++;t<i&&Le(e.src.charCodeAt(t));)t++;return e.pos=t,!0}const l2=[];for(let e=0;e<256;e++)l2.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){l2[e.charCodeAt(0)]=1});function fD(e,n){let t=e.pos;const r=e.posMax;if(e.src.charCodeAt(t)!==92||(t++,t>=r))return!1;let i=e.src.charCodeAt(t);if(i===10){for(n||e.push("hardbreak","br",0),t++;t<r&&(i=e.src.charCodeAt(t),!!Le(i));)t++;return e.pos=t,!0}if(i===32){if(!n){const u=e.push("text_special","",0);u.content="\\",u.markup="\\",u.info="escape"}return e.pos=t,!0}let o=e.src[t];if(i>=55296&&i<=56319&&t+1<r){const u=e.src.charCodeAt(t+1);u>=56320&&u<=57343&&(o+=e.src[t+1],t++)}const a="\\"+o;if(!n){const u=e.push("text_special","",0);i<256&&l2[i]!==0?u.content=o:u.content=a,u.markup=a,u.info="escape"}return e.pos=t+1,!0}function pD(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==96)return!1;const i=t;t++;const o=e.posMax;for(;t<o&&e.src.charCodeAt(t)===96;)t++;const a=e.src.slice(i,t),u=a.length;if(e.backticksScanned&&(e.backticks[u]||0)<=i)return n||(e.pending+=a),e.pos+=u,!0;let s=t,l;for(;(l=e.src.indexOf("`",s))!==-1;){for(s=l+1;s<o&&e.src.charCodeAt(s)===96;)s++;const c=s-l;if(c===u){if(!n){const d=e.push("code_inline","code",0);d.markup=a,d.content=e.src.slice(t,l).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=s,!0}e.backticks[c]=l}return e.backticksScanned=!0,n||(e.pending+=a),e.pos+=u,!0}function mD(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==126)return!1;const i=e.scanDelims(e.pos,!0);let o=i.length;const a=String.fromCharCode(r);if(o<2)return!1;let u;o%2&&(u=e.push("text","",0),u.content=a,o--);for(let s=0;s<o;s+=2)u=e.push("text","",0),u.content=a+a,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function Ig(e,n){let t;const r=[],i=n.length;for(let o=0;o<i;o++){const a=n[o];if(a.marker!==126||a.end===-1)continue;const u=n[a.end];t=e.tokens[a.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=e.tokens[u.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",e.tokens[u.token-1].type==="text"&&e.tokens[u.token-1].content==="~"&&r.push(u.token-1)}for(;r.length;){const o=r.pop();let a=o+1;for(;a<e.tokens.length&&e.tokens[a].type==="s_close";)a++;a--,o!==a&&(t=e.tokens[a],e.tokens[a]=e.tokens[o],e.tokens[o]=t)}}function hD(e){const n=e.tokens_meta,t=e.tokens_meta.length;Ig(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&Ig(e,n[r].delimiters)}const bA={tokenize:mD,postProcess:hD};function vD(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==95&&r!==42)return!1;const i=e.scanDelims(e.pos,r===42);for(let o=0;o<i.length;o++){const a=e.push("text","",0);a.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function Lg(e,n){const t=n.length;for(let r=t-1;r>=0;r--){const i=n[r];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const o=n[i.end],a=r>0&&n[r-1].end===i.end+1&&n[r-1].marker===i.marker&&n[r-1].token===i.token-1&&n[i.end+1].token===o.token+1,u=String.fromCharCode(i.marker),s=e.tokens[i.token];s.type=a?"strong_open":"em_open",s.tag=a?"strong":"em",s.nesting=1,s.markup=a?u+u:u,s.content="";const l=e.tokens[o.token];l.type=a?"strong_close":"em_close",l.tag=a?"strong":"em",l.nesting=-1,l.markup=a?u+u:u,l.content="",a&&(e.tokens[n[r-1].token].content="",e.tokens[n[i.end+1].token].content="",r--)}}function _D(e){const n=e.tokens_meta,t=e.tokens_meta.length;Lg(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&Lg(e,n[r].delimiters)}const yA={tokenize:vD,postProcess:_D};function gD(e,n){let t,r,i,o,a="",u="",s=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const c=e.pos,d=e.posMax,p=e.pos+1,m=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(m<0)return!1;let f=m+1;if(f<d&&e.src.charCodeAt(f)===40){for(l=!1,f++;f<d&&(t=e.src.charCodeAt(f),!(!Le(t)&&t!==10));f++);if(f>=d)return!1;if(s=f,i=e.md.helpers.parseLinkDestination(e.src,f,e.posMax),i.ok){for(a=e.md.normalizeLink(i.str),e.md.validateLink(a)?f=i.pos:a="",s=f;f<d&&(t=e.src.charCodeAt(f),!(!Le(t)&&t!==10));f++);if(i=e.md.helpers.parseLinkTitle(e.src,f,e.posMax),f<d&&s!==f&&i.ok)for(u=i.str,f=i.pos;f<d&&(t=e.src.charCodeAt(f),!(!Le(t)&&t!==10));f++);}(f>=d||e.src.charCodeAt(f)!==41)&&(l=!0),f++}if(l){if(typeof e.env.references>"u")return!1;if(f<d&&e.src.charCodeAt(f)===91?(s=f+1,f=e.md.helpers.parseLinkLabel(e,f),f>=0?r=e.src.slice(s,f++):f=m+1):f=m+1,r||(r=e.src.slice(p,m)),o=e.env.references[$u(r)],!o)return e.pos=c,!1;a=o.href,u=o.title}if(!n){e.pos=p,e.posMax=m;const h=e.push("link_open","a",1),v=[["href",a]];h.attrs=v,u&&v.push(["title",u]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=f,e.posMax=d,!0}function bD(e,n){let t,r,i,o,a,u,s,l,c="";const d=e.pos,p=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const m=e.pos+2,f=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(f<0)return!1;if(o=f+1,o<p&&e.src.charCodeAt(o)===40){for(o++;o<p&&(t=e.src.charCodeAt(o),!(!Le(t)&&t!==10));o++);if(o>=p)return!1;for(l=o,u=e.md.helpers.parseLinkDestination(e.src,o,e.posMax),u.ok&&(c=e.md.normalizeLink(u.str),e.md.validateLink(c)?o=u.pos:c=""),l=o;o<p&&(t=e.src.charCodeAt(o),!(!Le(t)&&t!==10));o++);if(u=e.md.helpers.parseLinkTitle(e.src,o,e.posMax),o<p&&l!==o&&u.ok)for(s=u.str,o=u.pos;o<p&&(t=e.src.charCodeAt(o),!(!Le(t)&&t!==10));o++);else s="";if(o>=p||e.src.charCodeAt(o)!==41)return e.pos=d,!1;o++}else{if(typeof e.env.references>"u")return!1;if(o<p&&e.src.charCodeAt(o)===91?(l=o+1,o=e.md.helpers.parseLinkLabel(e,o),o>=0?i=e.src.slice(l,o++):o=f+1):o=f+1,i||(i=e.src.slice(m,f)),a=e.env.references[$u(i)],!a)return e.pos=d,!1;c=a.href,s=a.title}if(!n){r=e.src.slice(m,f);const h=[];e.md.inline.parse(r,e.md,e.env,h);const v=e.push("image","img",0),_=[["src",c],["alt",""]];v.attrs=_,v.children=h,v.content=r,s&&_.push(["title",s])}return e.pos=o,e.posMax=p,!0}const yD=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,ED=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function SD(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==60)return!1;const r=e.pos,i=e.posMax;for(;;){if(++t>=i)return!1;const a=e.src.charCodeAt(t);if(a===60)return!1;if(a===62)break}const o=e.src.slice(r+1,t);if(ED.test(o)){const a=e.md.normalizeLink(o);if(!e.md.validateLink(a))return!1;if(!n){const u=e.push("link_open","a",1);u.attrs=[["href",a]],u.markup="autolink",u.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(o);const l=e.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return e.pos+=o.length+2,!0}if(yD.test(o)){const a=e.md.normalizeLink("mailto:"+o);if(!e.md.validateLink(a))return!1;if(!n){const u=e.push("link_open","a",1);u.attrs=[["href",a]],u.markup="autolink",u.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(o);const l=e.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return e.pos+=o.length+2,!0}return!1}function wD(e){return/^<a[>\s]/i.test(e)}function AD(e){return/^<\/a\s*>/i.test(e)}function $D(e){const n=e|32;return n>=97&&n<=122}function TD(e,n){if(!e.md.options.html)return!1;const t=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=t)return!1;const i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!$D(i))return!1;const o=e.src.slice(r).match(eD);if(!o)return!1;if(!n){const a=e.push("html_inline","",0);a.content=o[0],wD(a.content)&&e.linkLevel++,AD(a.content)&&e.linkLevel--}return e.pos+=o[0].length,!0}const ID=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,LD=/^&([a-z][a-z0-9]{1,31});/i;function RD(e,n){const t=e.pos,r=e.posMax;if(e.src.charCodeAt(t)!==38||t+1>=r)return!1;if(e.src.charCodeAt(t+1)===35){const o=e.src.slice(t).match(ID);if(o){if(!n){const a=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),u=e.push("text_special","",0);u.content=u2(a)?Mi(a):Mi(65533),u.markup=o[0],u.info="entity"}return e.pos+=o[0].length,!0}}else{const o=e.src.slice(t).match(LD);if(o){const a=VM(o[0]);if(a!==o[0]){if(!n){const u=e.push("text_special","",0);u.content=a,u.markup=o[0],u.info="entity"}return e.pos+=o[0].length,!0}}}return!1}function Rg(e){const n={},t=e.length;if(!t)return;let r=0,i=-2;const o=[];for(let a=0;a<t;a++){const u=e[a];if(o.push(0),(e[r].marker!==u.marker||i!==u.token-1)&&(r=a),i=u.token,u.length=u.length||0,!u.close)continue;n.hasOwnProperty(u.marker)||(n[u.marker]=[-1,-1,-1,-1,-1,-1]);const s=n[u.marker][(u.open?3:0)+u.length%3];let l=r-o[r]-1,c=l;for(;l>s;l-=o[l]+1){const d=e[l];if(d.marker===u.marker&&d.open&&d.end<0){let p=!1;if((d.close||u.open)&&(d.length+u.length)%3===0&&(d.length%3!==0||u.length%3!==0)&&(p=!0),!p){const m=l>0&&!e[l-1].open?o[l-1]+1:0;o[a]=a-l+m,o[l]=m,u.open=!1,d.end=a,d.close=!1,c=-1,i=-2;break}}}c!==-1&&(n[u.marker][(u.open?3:0)+(u.length||0)%3]=c)}}function CD(e){const n=e.tokens_meta,t=e.tokens_meta.length;Rg(e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&Rg(n[r].delimiters)}function OD(e){let n,t,r=0;const i=e.tokens,o=e.tokens.length;for(n=t=0;n<o;n++)i[n].nesting<0&&r--,i[n].level=r,i[n].nesting>0&&r++,i[n].type==="text"&&n+1<o&&i[n+1].type==="text"?i[n+1].content=i[n].content+i[n+1].content:(n!==t&&(i[t]=i[n]),t++);n!==t&&(i.length=t)}const Ws=[["text",uD],["linkify",cD],["newline",dD],["escape",fD],["backticks",pD],["strikethrough",bA.tokenize],["emphasis",yA.tokenize],["link",gD],["image",bD],["autolink",SD],["html_inline",TD],["entity",RD]],Ks=[["balance_pairs",CD],["strikethrough",bA.postProcess],["emphasis",yA.postProcess],["fragments_join",OD]];function fo(){this.ruler=new ln;for(let e=0;e<Ws.length;e++)this.ruler.push(Ws[e][0],Ws[e][1]);this.ruler2=new ln;for(let e=0;e<Ks.length;e++)this.ruler2.push(Ks[e][0],Ks[e][1])}fo.prototype.skipToken=function(e){const n=e.pos,t=this.ruler.getRules(""),r=t.length,i=e.md.options.maxNesting,o=e.cache;if(typeof o[n]<"u"){e.pos=o[n];return}let a=!1;if(e.level<i){for(let u=0;u<r;u++)if(e.level++,a=t[u](e,!0),e.level--,a){if(n>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;a||e.pos++,o[n]=e.pos};fo.prototype.tokenize=function(e){const n=this.ruler.getRules(""),t=n.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){const o=e.pos;let a=!1;if(e.level<i){for(let u=0;u<t;u++)if(a=n[u](e,!1),a){if(o>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(a){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};fo.prototype.parse=function(e,n,t,r){const i=new this.State(e,n,t,r);this.tokenize(i);const o=this.ruler2.getRules(""),a=o.length;for(let u=0;u<a;u++)o[u](i)};fo.prototype.State=co;function ND(e){const n={};e=e||{},n.src_Any=uA.source,n.src_Cc=sA.source,n.src_Z=cA.source,n.src_P=o2.source,n.src_ZPCc=[n.src_Z,n.src_P,n.src_Cc].join("|"),n.src_ZCc=[n.src_Z,n.src_Cc].join("|");const t="[><｜]";return n.src_pseudo_letter=`(?:(?!${t}|${n.src_ZPCc})${n.src_Any})`,n.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",n.src_auth=`(?:(?:(?!${n.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,n.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",n.src_host_terminator=`(?=$|${t}|${n.src_ZPCc})(?!${e["---"]?"-(?!--)|":"-|"}_|:\\d|\\.-|\\.(?!$|${n.src_ZPCc}))`,n.src_path=`(?:[/?#](?:(?!${n.src_ZCc}|${t}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${n.src_ZCc}|\\]).)*\\]|\\((?:(?!${n.src_ZCc}|[)]).)*\\)|\\{(?:(?!${n.src_ZCc}|[}]).)*\\}|\\"(?:(?!${n.src_ZCc}|["]).)+\\"|\\'(?:(?!${n.src_ZCc}|[']).)+\\'|\\'(?=${n.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${n.src_ZCc}|[.]|$)|`+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+`,(?!${n.src_ZCc}|$)|;(?!${n.src_ZCc}|$)|\\!+(?!${n.src_ZCc}|[!]|$)|\\?(?!${n.src_ZCc}|[?]|$))+|\\/)?`,n.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}',n.src_xn="xn--[a-z0-9\\-]{1,59}",n.src_domain_root="(?:"+n.src_xn+`|${n.src_pseudo_letter}{1,63})`,n.src_domain="(?:"+n.src_xn+`|(?:${n.src_pseudo_letter})|(?:${n.src_pseudo_letter}(?:-|${n.src_pseudo_letter}){0,61}${n.src_pseudo_letter}))`,n.src_host=`(?:(?:(?:(?:${n.src_domain})\\.)*${n.src_domain}))`,n.tpl_host_fuzzy="(?:"+n.src_ip4+`|(?:(?:(?:${n.src_domain})\\.)+(?:%TLDS%)))`,n.tpl_host_no_ip_fuzzy=`(?:(?:(?:${n.src_domain})\\.)+(?:%TLDS%))`,n.src_host_strict=n.src_host+n.src_host_terminator,n.tpl_host_fuzzy_strict=n.tpl_host_fuzzy+n.src_host_terminator,n.src_host_port_strict=n.src_host+n.src_port+n.src_host_terminator,n.tpl_host_port_fuzzy_strict=n.tpl_host_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_port_no_ip_fuzzy_strict=n.tpl_host_no_ip_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${n.src_ZPCc}|>|$))`,n.tpl_email_fuzzy=`(^|${t}|"|\\(|${n.src_ZCc})(${n.src_email_name}@${n.tpl_host_fuzzy_strict})`,n.tpl_link_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|｜]|${n.src_ZPCc}))((?![$+<=>^\`|｜])${n.tpl_host_port_fuzzy_strict}${n.src_path})`,n.tpl_link_no_ip_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|｜]|${n.src_ZPCc}))((?![$+<=>^\`|｜])${n.tpl_host_port_no_ip_fuzzy_strict}${n.src_path})`,n}function Xh(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(r){e[r]=t[r]})}),e}function Lu(e){return Object.prototype.toString.call(e)}function kD(e){return Lu(e)==="[object String]"}function MD(e){return Lu(e)==="[object Object]"}function PD(e){return Lu(e)==="[object RegExp]"}function Cg(e){return Lu(e)==="[object Function]"}function DD(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const EA={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function FD(e){return Object.keys(e||{}).reduce(function(n,t){return n||EA.hasOwnProperty(t)},!1)}const qD={"http:":{validate:function(e,n,t){const r=e.slice(n);return t.re.http||(t.re.http=new RegExp(`^\\/\\/${t.re.src_auth}${t.re.src_host_port_strict}${t.re.src_path}`,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,n,t){const r=e.slice(n);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+`(?:localhost|(?:(?:${t.re.src_domain})\\.)+${t.re.src_domain_root})`+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?n>=3&&e[n-3]===":"||n>=3&&e[n-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,n,t){const r=e.slice(n);return t.re.mailto||(t.re.mailto=new RegExp(`^${t.re.src_email_name}@${t.re.src_host_strict}`,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},xD="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",BD="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function HD(e){return function(n,t){const r=n.slice(t);return e.test(r)?r.match(e)[0].length:0}}function Og(){return function(e,n){n.normalize(e)}}function Na(e){const n=e.re=ND(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(xD),t.push(n.src_xn),n.src_tlds=t.join("|");function r(u){return u.replace("%TLDS%",n.src_tlds)}n.email_fuzzy=RegExp(r(n.tpl_email_fuzzy),"i"),n.email_fuzzy_global=RegExp(r(n.tpl_email_fuzzy),"ig"),n.link_fuzzy=RegExp(r(n.tpl_link_fuzzy),"i"),n.link_fuzzy_global=RegExp(r(n.tpl_link_fuzzy),"ig"),n.link_no_ip_fuzzy=RegExp(r(n.tpl_link_no_ip_fuzzy),"i"),n.link_no_ip_fuzzy_global=RegExp(r(n.tpl_link_no_ip_fuzzy),"ig"),n.host_fuzzy_test=RegExp(r(n.tpl_host_fuzzy_test),"i");const i=[];e.__compiled__={};function o(u,s){throw new Error(`(LinkifyIt) Invalid schema "${u}": ${s}`)}Object.keys(e.__schemas__).forEach(function(u){const s=e.__schemas__[u];if(s===null)return;const l={validate:null,link:null};if(e.__compiled__[u]=l,MD(s)){PD(s.validate)?l.validate=HD(s.validate):Cg(s.validate)?l.validate=s.validate:o(u,s),Cg(s.normalize)?l.normalize=s.normalize:s.normalize?o(u,s):l.normalize=Og();return}if(kD(s)){i.push(u);return}o(u,s)}),i.forEach(function(u){e.__compiled__[e.__schemas__[u]]&&(e.__compiled__[u].validate=e.__compiled__[e.__schemas__[u]].validate,e.__compiled__[u].normalize=e.__compiled__[e.__schemas__[u]].normalize)}),e.__compiled__[""]={validate:null,normalize:Og()};const a=Object.keys(e.__compiled__).filter(function(u){return u.length>0&&e.__compiled__[u]}).map(DD).join("|");e.re.schema_test=RegExp(`(^|(?!_)(?:[><｜]|${n.src_ZPCc}))(${a})`,"i"),e.re.schema_search=RegExp(`(^|(?!_)(?:[><｜]|${n.src_ZPCc}))(${a})`,"ig"),e.re.schema_at_start=RegExp(`^${e.re.schema_search.source}`,"i"),e.re.pretest=RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`,"i")}function SA(e,n,t,r){const i=e.slice(t,r);this.schema=n.toLowerCase(),this.index=t,this.lastIndex=r,this.raw=i,this.text=i,this.url=i}function pn(e,n){if(!(this instanceof pn))return new pn(e,n);n||FD(e)&&(n=e,e={}),this.__opts__=Xh({},EA,n),this.__schemas__=Xh({},qD,e),this.__compiled__={},this.__tlds__=BD,this.__tlds_replaced__=!1,this.re={},Na(this)}pn.prototype.add=function(n,t){return this.__schemas__[n]=t,Na(this),this};pn.prototype.set=function(n){return this.__opts__=Xh(this.__opts__,n),this};pn.prototype.test=function(n){if(!n.length)return!1;let t,r;if(this.re.schema_test.test(n)){for(r=this.re.schema_search,r.lastIndex=0;(t=r.exec(n))!==null;)if(this.testSchemaAt(n,t[2],r.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&n.search(this.re.host_fuzzy_test)>=0&&n.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&n.indexOf("@")>=0&&n.match(this.re.email_fuzzy)!==null)};pn.prototype.pretest=function(n){return this.re.pretest.test(n)};pn.prototype.testSchemaAt=function(n,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(n,r,this):0};pn.prototype.match=function(n){const t=[],r=[],i=[],o=[];let a,u,s;function l(p,m){return p?m?p.index!==m.index?p.index<m.index?p:m:p.lastIndex>=m.lastIndex?p:m:p:m}if(!n.length)return null;if(this.re.schema_test.test(n))for(s=this.re.schema_search,s.lastIndex=0;(a=s.exec(n))!==null;)u=this.testSchemaAt(n,a[2],s.lastIndex),u&&r.push({schema:a[2],index:a.index+a[1].length,lastIndex:a.index+a[0].length+u});if(this.__opts__.fuzzyLink&&this.__compiled__["http:"])for(s=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,s.lastIndex=0;(a=s.exec(n))!==null;)i.push({schema:"",index:a.index+a[1].length,lastIndex:a.index+a[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"])for(s=this.re.email_fuzzy_global,s.lastIndex=0;(a=s.exec(n))!==null;)o.push({schema:"mailto:",index:a.index+a[1].length,lastIndex:a.index+a[0].length});const c=[0,0,0];let d=0;for(;;){const p=[r[c[0]],o[c[1]],i[c[2]]],m=l(l(p[0],p[1]),p[2]);if(!m)break;if(m===p[0]?c[0]++:m===p[1]?c[1]++:c[2]++,m.index<d)continue;const f=new SA(n,m.schema,m.index,m.lastIndex);this.__compiled__[f.schema].normalize(f,this),t.push(f),d=m.lastIndex}return t.length?t:null};pn.prototype.matchAtStart=function(n){if(!n.length)return null;const t=this.re.schema_at_start.exec(n);if(!t)return null;const r=this.testSchemaAt(n,t[2],t[0].length);if(!r)return null;const i=new SA(n,t[2],t.index+t[1].length,t.index+t[0].length+r);return this.__compiled__[i.schema].normalize(i,this),i};pn.prototype.tlds=function(n,t){return n=Array.isArray(n)?n:[n],t?(this.__tlds__=this.__tlds__.concat(n).sort().filter(function(r,i,o){return r!==o[i-1]}).reverse(),Na(this),this):(this.__tlds__=n.slice(),this.__tlds_replaced__=!0,Na(this),this)};pn.prototype.normalize=function(n){n.schema||(n.url=`http://${n.url}`),n.schema==="mailto:"&&!/^mailto:/i.test(n.url)&&(n.url=`mailto:${n.url}`)};pn.prototype.onCompile=function(){};const Sr=2147483647,Un=36,c2=1,qi=26,UD=38,GD=700,wA=72,AA=128,$A="-",jD=/^xn--/,VD=/[^\0-\x7F]/,WD=/[\x2E\u3002\uFF0E\uFF61]/g,KD={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Xs=Un-c2,Gn=Math.floor,Ys=String.fromCharCode;function $t(e){throw new RangeError(KD[e])}function XD(e,n){const t=[];let r=e.length;for(;r--;)t[r]=n(e[r]);return t}function TA(e,n){const t=e.split("@");let r="";t.length>1&&(r=t[0]+"@",e=t[1]),e=e.replace(WD,".");const i=e.split("."),o=XD(i,n).join(".");return r+o}function IA(e){const n=[];let t=0;const r=e.length;for(;t<r;){const i=e.charCodeAt(t++);if(i>=55296&&i<=56319&&t<r){const o=e.charCodeAt(t++);(o&64512)==56320?n.push(((i&1023)<<10)+(o&1023)+65536):(n.push(i),t--)}else n.push(i)}return n}const YD=e=>String.fromCodePoint(...e),JD=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Un},Ng=function(e,n){return e+22+75*(e<26)-((n!=0)<<5)},LA=function(e,n,t){let r=0;for(e=t?Gn(e/GD):e>>1,e+=Gn(e/n);e>Xs*qi>>1;r+=Un)e=Gn(e/Xs);return Gn(r+(Xs+1)*e/(e+UD))},RA=function(e){const n=[],t=e.length;let r=0,i=AA,o=wA,a=e.lastIndexOf($A);a<0&&(a=0);for(let u=0;u<a;++u)e.charCodeAt(u)>=128&&$t("not-basic"),n.push(e.charCodeAt(u));for(let u=a>0?a+1:0;u<t;){const s=r;for(let c=1,d=Un;;d+=Un){u>=t&&$t("invalid-input");const p=JD(e.charCodeAt(u++));p>=Un&&$t("invalid-input"),p>Gn((Sr-r)/c)&&$t("overflow"),r+=p*c;const m=d<=o?c2:d>=o+qi?qi:d-o;if(p<m)break;const f=Un-m;c>Gn(Sr/f)&&$t("overflow"),c*=f}const l=n.length+1;o=LA(r-s,l,s==0),Gn(r/l)>Sr-i&&$t("overflow"),i+=Gn(r/l),r%=l,n.splice(r++,0,i)}return String.fromCodePoint(...n)},CA=function(e){const n=[];e=IA(e);const t=e.length;let r=AA,i=0,o=wA;for(const s of e)s<128&&n.push(Ys(s));const a=n.length;let u=a;for(a&&n.push($A);u<t;){let s=Sr;for(const c of e)c>=r&&c<s&&(s=c);const l=u+1;s-r>Gn((Sr-i)/l)&&$t("overflow"),i+=(s-r)*l,r=s;for(const c of e)if(c<r&&++i>Sr&&$t("overflow"),c===r){let d=i;for(let p=Un;;p+=Un){const m=p<=o?c2:p>=o+qi?qi:p-o;if(d<m)break;const f=d-m,h=Un-m;n.push(Ys(Ng(m+f%h,0))),d=Gn(f/h)}n.push(Ys(Ng(d,0))),o=LA(i,l,u===a),i=0,++u}++i,++r}return n.join("")},zD=function(e){return TA(e,function(n){return jD.test(n)?RA(n.slice(4).toLowerCase()):n})},QD=function(e){return TA(e,function(n){return VD.test(n)?"xn--"+CA(n):n})},OA={version:"2.3.1",ucs2:{decode:IA,encode:YD},decode:RA,encode:CA,toASCII:QD,toUnicode:zD},ZD={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},eF={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},nF={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},tF={default:ZD,zero:eF,commonmark:nF},rF=/^(vbscript|javascript|file|data):/,iF=/^data:image\/(gif|png|jpeg|webp);/;function oF(e){const n=e.trim().toLowerCase();return rF.test(n)?iF.test(n):!0}const NA=["http:","https:","mailto:"];function aF(e){const n=i2(e,!0);if(n.hostname&&(!n.protocol||NA.indexOf(n.protocol)>=0))try{n.hostname=OA.toASCII(n.hostname)}catch{}return lo(r2(n))}function uF(e){const n=i2(e,!0);if(n.hostname&&(!n.protocol||NA.indexOf(n.protocol)>=0))try{n.hostname=OA.toUnicode(n.hostname)}catch{}return Nr(r2(n),Nr.defaultChars+"%")}function mn(e,n){if(!(this instanceof mn))return new mn(e,n);n||a2(e)||(n=e||{},e="default"),this.inline=new fo,this.block=new Iu,this.core=new s2,this.renderer=new Vr,this.linkify=new pn,this.validateLink=oF,this.normalizeLink=aF,this.normalizeLinkText=uF,this.utils=sP,this.helpers=Au({},fP),this.options={},this.configure(e),n&&this.set(n)}mn.prototype.set=function(e){return Au(this.options,e),this};mn.prototype.configure=function(e){const n=this;if(a2(e)){const t=e;if(e=tF[t],!e)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(t){e.components[t].rules&&n[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&n[t].ruler2.enableOnly(e.components[t].rules2)}),this};mn.prototype.enable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){t=t.concat(this[i].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));const r=e.filter(function(i){return t.indexOf(i)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};mn.prototype.disable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){t=t.concat(this[i].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));const r=e.filter(function(i){return t.indexOf(i)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};mn.prototype.use=function(e){const n=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,n),this};mn.prototype.parse=function(e,n){if(typeof e!="string")throw new Error("Input data should be a String");const t=new this.core.State(e,this,n);return this.core.process(t),t.tokens};mn.prototype.render=function(e,n){return n=n||{},this.renderer.render(this.parse(e,n),this.options,n)};mn.prototype.parseInline=function(e,n){const t=new this.core.State(e,this,n);return t.inlineMode=!0,this.core.process(t),t.tokens};mn.prototype.renderInline=function(e,n){return n=n||{},this.renderer.render(this.parseInline(e,n),this.options,n)};const gt="hir-persistent-fold",d2="text-paragraph",f2="text-blockquote",p2="text-list",kA="text-ordered-list",m2="text-list-item",sF="prose-link",xi="text-section",MA="text-heading",PA="text-section-body",DA="text-table-scroll",lF="text-table",cF="text-code",dF="-h-",kg=2,Yh=!0;function FA(e,n,t){return(e==null?void 0:e[n])??t}const fF=["paragraph","list","blockquote","heading","table","newline","emphasis","backticks","html_inline","text","balance_pairs","fragments_join","text_join"],pF="prose_link",Mg=new RegExp(Jw.source,"y");function mF(e,n){if(e.src.charCodeAt(e.pos)!==91)return!1;Mg.lastIndex=e.pos;const t=Mg.exec(e.src);if(t===null)return!1;const[r,i,o]=t;if(i===void 0||o===void 0)throw new Error("prose markdown: MD_LINK_RE lost a capture group");if(!n){const a=e.push("link_open","a",1);a.attrs=[["href",o]];const u=e.push("text","",0);u.content=i,e.push("link_close","a",-1)}return e.pos+=r.length,!0}const hF="prose_escape",vF=new Set("!\"#$%&'()*+,-./:;<=>?@^_`|~"),_F={"<":"&lt;",">":"&gt;","&":"&amp;"};function gF(e,n){if(e.src.charCodeAt(e.pos)!==92)return!1;const t=e.src[e.pos+1];if(t===void 0||!vF.has(t))return!1;if(!n){const r=e.push("text_special","",0);r.content=_F[t]??t,r.markup=`\\${t}`,r.info="escape"}return e.pos+=2,!0}const Ru=new mn("zero",{html:!0,breaks:!0,linkify:!1}).enable([...fF]);Ru.inline.ruler.push(pF,mF);Ru.inline.ruler.after("newline",hF,gF);function bF(e,n){return`${e}${dF}${n}`}function yF(e,n,t={}){const r=Ru.parse(e,{});return SF(r,n,t)}function EF(e,n){const t=Ru.parseInline(e,{});return qA(t,n),t.map(Ei).join("")}function SF(e,n,t={}){qA(e,n);const r={options:t,headingCount:0};return sa(e,0,e.length,!0,r)}function qA(e,n){let t=0;for(const r of e)if(r.type==="inline"&&r.children){for(const i of r.children)i.type==="text"&&(i.type="html_inline",i.content=i.content===""?"":n(i.content,t));t+=1}}function vn(e,n){const t=e[n];if(t===void 0)throw new Error(`prose markdown: token index ${n} out of range`);return t}function _r(e,n,t){let r=0;for(let i=n;i<t;i++)if(r+=vn(e,i).nesting,r===0)return i;throw new Error(`prose markdown: unclosed ${vn(e,n).type} at token ${n}`)}function wF(e,n,t){return t-n===3&&vn(e,n).type==="paragraph_open"&&vn(e,n+1).type==="inline"&&vn(e,n+2).type==="paragraph_close"}function sa(e,n,t,r,i){if(r&&wF(e,n,t))return Ei(vn(e,n+1));let o="";const a=[];let u=n;for(;u<t;){const s=vn(e,u);switch(s.type){case"paragraph_open":{const l=_r(e,u,t),c=vn(e,u+1);if(l!==u+2||c.type!=="inline")throw new Error("prose markdown: paragraph without a single inline child");const d=Ei(c);o+=s.hidden?d:`<p class="${d2}">${d}</p>`,u=l+1;break}case"blockquote_open":{const l=_r(e,u,t);o+=`<blockquote class="${f2}">`+sa(e,u+1,l,!0,i)+"</blockquote>",u=l+1;break}case"bullet_list_open":case"ordered_list_open":{const l=_r(e,u,t);o+=$F(s)+sa(e,u+1,l,!1,i)+`</${s.tag}>`,u=l+1;break}case"list_item_open":{const l=_r(e,u,t);o+=`<li class="${m2}">`+sa(e,u+1,l,!1,i)+"</li>",u=l+1;break}case"heading_open":{const l=_r(e,u,t),c=vn(e,u+1);if(l!==u+2||c.type!=="inline")throw new Error("prose markdown: heading without a single inline child");const d=s.markup.length;if(d<kg)throw new Error(`prose markdown: level-${d} heading '${c.content}'; prose headings start at level ${kg}`);for(;a.length>0&&a[a.length-1]>=d;)o+=Pg,a.pop();i.headingCount+=1,o+=AF(d,Ei(c),i),a.push(d),u=l+1;break}case"table_open":{const l=_r(e,u,t);o+=`<div class="${DA}"><table class="${lF}">`+IF(e,u+1,l)+"</table></div>",u=l+1;break}default:throw new Error(`prose markdown: unsupported block token '${s.type}'`)}}return o+=Pg.repeat(a.length),o}const Pg="</div></details>";function AF(e,n,t){const{headingIdPrefix:r,sectionFoldState:i,sectionFoldsDefaultOpen:o}=t.options,a=r===void 0?null:bF(r,t.headingCount),u=a===null?Yh:FA(i,a,o??Yh);return`<details${a===null?` class="${xi}"`:` id="${X(a)}" class="${xi} ${gt}"`}${u?" open":""}><summary><h${e} class="${MA}">${n}</h${e}></summary><div class="${PA}">`}function $F(e){if(e.type==="bullet_list_open")return`<ul class="${p2}">`;const n=e.attrGet("start"),t=n===null?"":` start="${Number(n)}"`;return`<ol class="${kA}"${t}>`}const TF=new Set(["thead_open","thead_close","tbody_open","tbody_close","tr_open","tr_close"]),Dg="style";function IF(e,n,t){let r="",i=n;for(;i<t;){const o=vn(e,i);if(TF.has(o.type)){r+=o.nesting===1?`<${o.tag}>`:`</${o.tag}>`,i+=1;continue}if(o.type!=="th_open"&&o.type!=="td_open")throw new Error(`prose markdown: unsupported table token '${o.type}'`);const a=vn(e,i+1),u=vn(e,i+2);if(a.type!=="inline"||u.type!==`${o.tag}_close`)throw new Error("prose markdown: table cell without a single inline child");let s="";for(const[l,c]of o.attrs??[]){if(l!==Dg)throw new Error(`prose markdown: unexpected table cell attribute '${l}'`);s=` ${Dg}="${X(c)}"`}r+=`<${o.tag}${s}>${Ei(a)}</${o.tag}>`,i+=3}return r}function Ei(e){let n="";for(const t of e.children??[])switch(t.type){case"html_inline":n+=t.content;break;case"softbreak":case"hardbreak":n+="<br>";break;case"strong_open":n+="<strong>";break;case"strong_close":n+="</strong>";break;case"em_open":case"em_close":n+=t.markup;break;case"link_open":{const r=t.attrGet("href")??"";n+=`<a class="${sF}" href="${X(r)}" target="_blank" rel="noopener">`;break}case"link_close":n+="</a>";break;case"code_inline":n+=`<code class="${cF}">${x(t.content)}</code>`;break;default:throw new Error(`prose markdown: unsupported inline token '${t.type}'`)}return n}const LF="inline-note-ref",xA="inline-note-popover-trigger",BA="data-popover-inline-body";function RF(e){return encodeURIComponent(e)}function CF(e){return decodeURIComponent(e)}function OF(e){return jh.lastIndex=0,e.replace(jh,(n,t)=>HA(t))}function HA(e){const n=X(RF(e));return`<span class="${LF}"><button type="button" class="${xA}" ${BA}="${n}" aria-label="Show note" aria-expanded="false"></button></span>`}const NF=2,kF="&nbsp;".repeat(NF),UA="framing-slot",GA="data-framing-anchor";function po(e,n){return e.jprobInstance.framing_static_anchor_ids().has(n)?`<div class="${UA}" ${GA}="${X(n)}"></div>`:""}const jA="bare-id-label";function VA(e,n){return e.showBareIds??!1?WA(n):""}function WA(e){return`<span class="${jA}">${x(e)}</span>`}function MF(e,n){return`<span class="${jA}" id="${X(n)}">${x(e)}</span>`}const PF="❝",gi="srcquote-widget",la="srcquote-glyph",DF="srcquote-popover",FF="srcquote-attribution",qF="srcquotes-inline",xF={atStart:"",atEnd:""},BF=", ";function HF(e,n){if(e.bibref===void 0){if(e.attribution===void 0)throw new Error(`${e.id} has neither attribution nor bibref`);return x(e.attribution)}const t=`[${e.bibref}]`;return Mr(e.locator===void 0?t:`${t}${BF}${e.locator}`,n)}function KA(e,n){return je(e.defn,n)+`<span class="${FF}">— ${HF(e,n)}</span>`}function UF(e){const n=X(Kw({kind:"sourcequote",sourcequoteIds:e}));return`<span class="${gi}"><button class="${la}" type="button" aria-expanded="false" ${Ra}="${n}" aria-label="Source quotes">${PF}</button></span>`}function GF(e,n){return e.map(t=>KA(t,n)).join("")}function jF(e,n){const t=e.map(r=>KA(r,n));return`<div class="${qF}">${t.join("")}</div>`}function Kn(e,n){var t;if(!e||e.length===0)return xF;for(const r of e)(t=n.renderedSrcquoteIds)==null||t.add(r);if(n.srcquotesInlined??!1){const r=n.jprobInstance.resolve_srcquotes(e);return{atStart:"",atEnd:jF(r,n)}}return{atStart:UF(e),atEnd:""}}const h2="isym-card",v2="examples",Cu="ex-btn",Zt="visible",Ou="active",XA=!0;function Bi(e,n,t,r){var i;return((i=e==null?void 0:e[n])==null?void 0:i[t])??r}function je(e,n,t){const r={sectionFoldState:n.proseSectionFoldState,sectionFoldsDefaultOpen:n.proseSectionFoldsDefaultOpen};return t!==void 0&&(r.headingIdPrefix=t),yF(t2(e,n.jprobInstance),_2(n).resolveProseLeaf,r)}function Mr(e,n){return EF(t2(e,n.jprobInstance),_2(n).resolveProseLeaf)}function nt(e,n){return _2(n).resolveDisplay(t2(e,n.jprobInstance))}function _2(e){const n=gM(e.jprobInstance),t=e.popoverAllRefs?{popoverAllRefs:!0}:void 0,r=(l,c)=>tM(l,e.refLookup,t,e.unresolvedRefs,c),i=l=>OF(r(bM(l,n))),o=(l,c)=>Fg(l,ki,d=>i(d[0]),d=>r(d,c));let a,u=new Set;return{resolveDisplay:i,resolveProseLeaf:(l,c)=>(c!==a&&(a=c,u=new Set),Fg(l,jh,d=>{const p=d[1];if(p===void 0)throw new Error("INLINE_HIDDEN_NOTE_RE matched without its body group");return HA(o(p,new Set))},d=>o(d,u)))}}function Fg(e,n,t,r){let i="",o=0;for(const a of e.matchAll(n)){const u=a.index;if(u===void 0)throw new Error("mapMatchesAndGaps: match without an index");u>o&&(i+=r(e.slice(o,u))),i+=t(a),o=u+a[0].length}return o<e.length&&(i+=r(e.slice(o))),i}const VF="bib-references",WF="bib-reference";function KF(e){const n=e.jprobInstance,t=n.cited_bib_ids(e.srcquotesInlined??!1);if(t.length===0)return"";const r=t.map(i=>{const o=Zw(n.bib_reference_entry_text(i),n.resolve_bib(i));return`<li id="${wu(i)}" class="${WF}">${Mr(o,e)}</li>`});return`<ul class="${VF}">${r.join("")}</ul>`}function XF(e,n){return e.get_isym(n).longname??n}function YF(e){return e.startsWith("isym:")?e.slice(5):e}function JF(e,n){return e.get_isym(n).kind}function zF(e,n){const t=kk[JF(e,n)];let r=`${n} : ${t}`;const i=XF(e,n);return i&&n!==i&&(r+=`${kF}(aka ${i})`),r}function QF(e){if(!e.args||e.args.length===0)return e.id.slice(11);const n=e.id.slice(11),t=e.args.map(r=>`<i>${typeof r=="string"?r:r.name}</i>`);return`${n}(${t.join(", ")})`}function ZF(e){const n=[];for(const t of e.jprobInstance.definedSym){if(t.always_inline)continue;const r=e.jprobInstance.get_display_definedSym_or_none(t.id);if(!r)continue;const o=`defsym-${t.id.slice(11)}`,a=QF(t),u=nt(r,e),l=[`<h3>${`${a} ≔ ${u}`}</h3>`],c=Kn(t.srcquotes,e);t.defn?l.push(`<div class="definition">${c.atStart}${je(t.defn,e,o)}${c.atEnd}</div>`):(c.atStart||c.atEnd)&&l.push(`<div class="definition">${c.atStart}${c.atEnd}</div>`),l.push(po(e,t.id)),n.push(`<div class="defsym-card" id="${o}">${l.join("")}</div>`)}return n.join("")}function eq(e){const n=Jv(e.jprobInstance);if(!n.length)return"";const t=[];for(const r of n){const i=Kn(e.jprobInstance.get_textdefn(r.id).srcquotes,e);t.push(`<dt id="${r.anchorId}">${r.displayTerm}</dt><dd>${i.atStart}${je(r.defn,e,r.anchorId)}${i.atEnd}${po(e,`textdefn:${r.bareName}`)}</dd>`)}return`<dl class="definitions">${t.join("")}</dl>`}function Jh(e,n,t){return(n[t]??[]).filter(r=>rA(r.classification,e.showTypical))}function nq(e,n){return e.jprobInstance.isym_entries().some(t=>!e.jprobInstance.can_consolidate_isym_svar(t.id)&&jr.some(r=>Jh(e,t,r).some(i=>bu(i.id)===n)))}function tq(e){const n=e.jprobInstance.isym_entries();if(!n.length)return"";const t=[];for(const r of n){const i=YF(r.id);if(e.jprobInstance.can_consolidate_isym_svar(`isym:${i}`))continue;const o=`isym-${i}`,a=[];a.push(`<h3>${zF(e.jprobInstance,i)}</h3>`);const u=Kn(r.srcquotes,e);a.push(`<div class="definition">${u.atStart}${je(r.defn,e,o)}${u.atEnd}</div>`);const s=Jh(e,r,"pos"),l=Jh(e,r,"neg"),c=e.exampleFoldsDefaultOpen??XA,d=Bi(e.exampleFoldState,i,"pos",c),p=Bi(e.exampleFoldState,i,"neg",c);if(s.length>0||l.length>0){const h=[];s.length>0&&h.push(qg(i,"pos",d,"+")),l.length>0&&h.push(qg(i,"neg",p,"&minus;")),a.push(`<div class="example-controls">${h.join("")}</div>`)}const m={pos:s,neg:l},f={pos:d,neg:p};for(const h of jr){if(m[h].length===0)continue;const v=m[h].map(_=>{const g=bu(_.id),b=e.showExampleClassification?`<span class="classification">${_.classification.charAt(0).toUpperCase()+_.classification.slice(1)}:</span> `:"",y=Kn(_.srcquotes,e),E=`${Eu}${g}`;return`<li id="${E}">`+WA(g)+`${b}${y.atStart}${je(_.defn,e,E)}${y.atEnd}</li>`});a.push(`<div class="${v2} ${h}${f[h]?` ${Zt}`:""}"><p>${Yv[h]} examples:</p><ul>${v.join("")}</ul></div>`)}a.push(po(e,`isym:${i}`)),t.push(`<div class="${h2}" id="${o}">${a.join("")}</div>`)}return t.join("")}function qg(e,n,t,r){return`<button class="${Cu} ${n}${t?` ${Ou}`:""}" data-isym="${e}" data-type="${n}" title="${Yv[n]} examples">${r}</button>`}function Js(e,{classification:n}){const t=[];for(const r of e.jprobInstance.get_axioms_in_display_section(n)){const i=e.jprobInstance.get_display_ax(r.id);if(!i)continue;const o=Oi(r.id),a=`${zv}${o}`,u=r.defn?`<div class="ax-defn">${je(r.defn,e,a)}</div>`:"",s=po(e,r.id),l=Kn(r.srcquotes,e);t.push(`<div class="ax-card" id="${a}">`+VA(e,o)+`<div class="ax-expr">${l.atStart}${nt(i,e)}</div>${u}${l.atEnd}${s}</div>`)}return t.length===0?"":`<div class="axioms">${t.join("")}</div>`}function rq(e){const n=[],t=eA(e.jprobInstance),r=fM(e.jprobInstance,t);for(const i of t){const o=r.get(i),a=yu(i);n.push(`<div class="formula" id="form-${a}">`+VA(e,a)+nt(o,e)+po(e,i)+"</div>")}return n.join("")}const iq="global_options",oq=[{id:"symbolMnames",description:"Long symbol names",type:"boolean",default:!1},{id:"popoverAllRefs",description:"Popovers for all refs",type:"boolean",default:!0},{id:"persistentPopovers",description:"Persistent popovers (Esc closes)",type:"boolean",default:!0},{id:"inputMode",description:"Response type",type:"enum",values:["point","bounds","sample"],default:"sample"},{id:"probAsOdds",description:"Stats display",type:"enum",values:["probability","odds"],default:"probability"},{id:"densityScale",description:"Density plot scale",type:"enum",values:["raw","log"],default:"raw"},{id:"showExampleClassification",description:"Show example classifications",type:"boolean",default:!0},{id:"showFramingNotes",description:"Show framing notes",type:"boolean",default:!0},{id:"showGlobalProseFoldControls",description:"Global prose folding controls",type:"boolean",default:!0},{id:"longTextAbbrev",description:"Abbreviate long text",type:"boolean",default:!0},{id:"longTextAbbrevThreshold",description:"Abbreviation soft threshold",type:"integer",default:800,min:25,step:25},{id:"mcItersInitialPerPlot",description:"MC iters per plot (initial)",type:"integer",default:1e4,min:1e3,step:1e3},{id:"mcItersPerClickPerPlot",description:"MC iters per plot (+ click)",type:"integer",default:5e3,min:1e3,step:1e3},{id:"plaincodeEvalTimeoutMs",description:"Code eval timeout (ms)",type:"integer",default:5e3,min:1e3,step:1e3},{id:"refLinkColor",description:"Link color",type:"enum",values:["green","light-blue","dark-blue","black"],default:"light-blue"},{id:"estimatorTextColor",description:"Estimator text color",type:"enum",values:["blue","black","page-text"],default:"blue"}],YA={localStorage_key:iq,options:oq};function xg(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Bg(e){return Object.keys(e).filter(n=>e[n]!==void 0)}function Xn(e,n){if(e===n)return!0;if(Array.isArray(e)&&Array.isArray(n))return e.length===n.length&&e.every((t,r)=>Xn(t,n[r]));if(xg(e)&&xg(n)){const t=Bg(e);return t.length===Bg(n).length&&t.every(r=>Xn(e[r],n[r]))}return!1}const Nu=YA.options,aq=new Map(Nu.map(e=>[e.id,e.description]));function Hi(e){return aq.get(e)??e}const mo=Object.freeze(Nu.reduce((e,n)=>(e[n.id]=n.default,e),{})),JA=YA.localStorage_key;function g2(){try{const e=localStorage.getItem(JA);return e===null?{}:JSON.parse(e)}catch{return{}}}function Ye(){return{...mo,...g2()}}function uq(){const e=mo;return Object.fromEntries(Object.entries(g2()).filter(([n,t])=>!Xn(t,e[n])))}function Ui(e,n){const t={...g2(),[e]:n},r=mo,i=Object.fromEntries(Object.entries(t).filter(([o,a])=>!Xn(a,r[o])));localStorage.setItem(JA,JSON.stringify(i))}const sq=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),lq=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);function Fn(e,n){return e>>>n|e<<32-n}function zA(e){const n=new TextEncoder().encode(e),t=n.length<<3>>>0,r=Math.floor(n.length/536870912),i=n.length+9+63&-64,o=new Uint8Array(i);o.set(n),o[n.length]=128;const a=new DataView(o.buffer);a.setUint32(i-8,r),a.setUint32(i-4,t);const u=new Uint32Array(lq),s=new Uint32Array(64);for(let c=0;c<i;c+=64){for(let b=0;b<16;b++)s[b]=a.getUint32(c+b*4);for(let b=16;b<64;b++){const y=s[b-15],E=s[b-2],A=Fn(y,7)^Fn(y,18)^y>>>3,T=Fn(E,17)^Fn(E,19)^E>>>10;s[b]=s[b-16]+A+s[b-7]+T|0}let d=u[0],p=u[1],m=u[2],f=u[3],h=u[4],v=u[5],_=u[6],g=u[7];for(let b=0;b<64;b++){const y=Fn(h,6)^Fn(h,11)^Fn(h,25),E=h&v^~h&_,A=g+y+E+sq[b]+s[b]|0,T=Fn(d,2)^Fn(d,13)^Fn(d,22),C=d&p^d&m^p&m,L=T+C|0;g=_,_=v,v=h,h=f+A|0,f=m,m=p,p=d,d=A+L|0}u[0]=u[0]+d|0,u[1]=u[1]+p|0,u[2]=u[2]+m|0,u[3]=u[3]+f|0,u[4]=u[4]+h|0,u[5]=u[5]+v|0,u[6]=u[6]+_|0,u[7]=u[7]+g|0}let l="";for(let c=0;c<8;c++)l+=(u[c]>>>0).toString(16).padStart(8,"0");return l}const QA=5;function Hg(e){const n={};for(const t of Object.keys(e).sort())n[t]=e[t];return n}function cq(e){return zA(JSON.stringify(e)).slice(0,QA)}function ZA(e,n,t,r){const i=[n,Hg(t)];return e==="plainnum"&&i.push(Hg(r??{})),zA(JSON.stringify(i)).slice(0,QA)}const Fe={VISIBLE_AOPTS:"visible-aopts",TCHOICE:"tchoice",CPARAMS_SECTION:"cparams",TEXT_DEFINITIONS:"text-definitions",INTERPRETED_SYMBOL_SEMANTICS:"interpreted-symbols",DEFINED_SYMBOLS:"defined-symbols",AXIOMS:"axioms",SIMPLIFYING_ASSUMPTIONS:"simplifying-assumptions",DERIVED_AXIOMS:"derived-axioms",ESTIMATION:"estimation",RESPONSE_NOTES:"response-notes",COMPUTED_FORMULAS:"formulas",FRAMING_ROOT:"framing-notes-root",FRAMING_EXPLAINER:"framing-notes-explainer",SRCQUOTE_EXPLAINER:"srcquote-explainer",CALCULATOR:"calculator",REFERENCES:"references"};function wt(e,n){return`${Fe[e]}-${ka(n)}`}const e$="estimator-instructions",zh="estimator-instructions-fold",dq="Estimator Instructions",fq="hir-section-fold",pq=!0;function b2(e,n,t){var r;return((r=t.foldOpenById)==null?void 0:r[e])??n?" open":""}function zs(e,n,t,r){const i=b2(e,pq,r);return`<details id="${e}" class="${fq} ${gt}"${i}><summary>${n}</summary>`+t+"</details>"}const mq={TEXT_DEFINITIONS:e=>eq(e),INTERPRETED_SYMBOL_SEMANTICS:e=>tq(e),DEFINED_SYMBOLS:e=>ZF(e),AXIOMS:e=>Js(e,{classification:"ordinary"}),SIMPLIFYING_ASSUMPTIONS:e=>Js(e,{classification:"simplifying"}),DERIVED_AXIOMS:e=>Js(e,{classification:"derived"}),COMPUTED_FORMULAS:e=>rq(e),REFERENCES:e=>KF(e)},hq=`<div class="dag-legend">Each formula computes its left-hand side. <span class="dag-glyph">↖</span> marks a value computed by an earlier formula (click to jump to it); <span class="dag-glyph">↘</span> marks a left-hand side used by a later formula; hovering either highlights every occurrence of the value. Undecorated leaf names are estimated directly — each names a card in <a href="#${Fe.ESTIMATION}-section">Estimation</a> (click to jump to it).</div>`,vq="DERIVED_FORMS",Pr="derived-forms-fold",n$=!1,_q="Computed auxiliary formulas",gq="CALCULATOR_RESULTS",t$="stats-display-control";function bq(e){const n=new Set;for(const t of e.layout.sections.html)if("subentries"in t)for(const r of t.subentries)typeof r=="object"&&"formid"in r&&n.add(r.formid);return n}function r$(e){const n=e.conclusion_form_or_none(),t=bq(e);return e.form.filter(r=>r.id!==n&&!t.has(r.id)).map(r=>r.id)}function yq(e,n,t){let r;if(t)r={...t,unresolvedRefs:t.unresolvedRefs??new Set};else{const o=Zv(e),a=oA(e,iA(e,{},"plainnum"),"plainnum"),u=a.option_value_or("show_typical_examples",n2),s=a.option_value_or("srcquotes_inlined",!1),l={};for(const c of a.get_option_bare_names())l[c]=a.option_value(c);r={jprobInstance:a,showTypical:u,srcquotesInlined:s,refLookup:o,displayOptionValues:l,unresolvedRefs:new Set}}const i=[];qh in e.get_fgroups()&&i.push(`<details id="${zh}" class="hir-fold ${gt} estimator-instructions-fold"${b2(zh,!1,r)} hidden><summary>${dq}</summary><div id="${e$}" class="hir-fold-body"></div></details>`);for(const o of e.layout.sections.html)i.push(Eq(o,e,r));return{html:i.join(""),unresolvedRefs:[...r.unresolvedRefs].sort()}}function Eq(e,n,t){if("chunkid"in e)return i$(e.chunkid,n,t,e.style)??"";if("subentries"in e){const u=Fe[e.delegation_id],s=e.subentries.map(l=>Sq(l,n,t,e.delegation_id));return zs(`${u}-section`,`<h2 id="${u}-section-header">${e.header}</h2>`,s.join(""),t)}const{delegation_id:r,header:i}=e,o=Fe[r];if(!o)throw new Error("Expected `delegation_id` field here to be an element of DelegatedLayoutEntryId.");if((r==="FRAMING_ROOT"||r==="FRAMING_EXPLAINER")&&!n.has_standard_rendering_framing_notes()||r==="SRCQUOTE_EXPLAINER"&&!n.has_srcquotes())return"";const a=mq[r];if(a){const u=a(t);if(!u.trim())return"";const s=r==="COMPUTED_FORMULAS"?hq:"";return i==null?s+u:zs(`${o}-section`,`<h2 id="${o}-section-header">${i}</h2>`,s+u,t)}return r==="FRAMING_EXPLAINER"||r==="SRCQUOTE_EXPLAINER"?`<div id="${o}-section"><div id="${o}-content"></div></div>`:zs(`${o}-section`,`<h2 id="${o}-section-header">${i??""}</h2>`,`<div id="${o}-content"></div>`,t)}function Sq(e,n,t,r){if(typeof e=="string"){if(e===vq){const u=r$(n).map(s=>`<div id="derived-${ka(s)}" class="derived-form" data-form-id="${s}"></div>`).join("");return u===""?"":`<details id="${Pr}" class="hir-fold ${gt} derived-forms-fold"${b2(Pr,n$,t)}><summary>${_q}</summary><div class="hir-fold-body derived-forms-fold-body">${u}</div></details>`}const a=wt(r,e);return e===gq?`<div id="${t$}"></div><div id="${a}"></div>`:`<div id="${a}"></div>`}if("chunkid"in e)return i$(e.chunkid,n,t,e.style)??"";const i=e.formid;return`<div id="${`derived-${ka(i)}`}" class="derived-form" data-form-id="${i}"></div>`}function i$(e,n,t,r){const i=n.find_textchunk_defn(e);if(i===void 0)throw new Error(`Layout references textchunk "${e}", which the jprob template does not declare`);if(!i)return null;if(r===Vw)return`<h1 class="arg-title">${Mr(i,t)}</h1>`;const o=je(i,t,ka(e));switch(r){case"subtitle":return`<div class="arg-subtitle">${o}</div>`;case"note":return`<div class="hir-loud-note">${o}</div>`;case"warning":return`<div class="arg-warning">${o}</div>`;case Nk:return`<div class="hir-webonly-note">${o}</div>`;default:return`<div class="textchunk">${o}</div>`}}function ka(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/,"").replace(/^-/,"")}const wq="root",y2="framingnote",E2="framing-fold-btn",Aq={containerClass:y2,ownContentSelector:":scope > .framing-note-summary > .framing-note-content"};function o$(e){return`framing-fgroup-${e}`}const $q=14;function Tq(e,n,t,r){return`<strong>${x(e)}${n}${x(r)}:</strong><div class="framing-note-content">${t}</div>`}function Iq(e){return e.referenced?` (${Ni(e.id)})`:""}const Lq=!0;function S2(e){return e.jprobInstance.enabled_flabels()}function w2(e){return e.showFramingNotes!==!1}function A2(e,n){const t=S2(n);return!w2(n)||!t.length?null:e.get_framing_layout(t)}function a$(e,n,t){var r;return((r=e.framingFoldState[n])==null?void 0:r[t])??e.framingFoldsDefaultOpen}function u$(e,n,t,r){const i=a$(t,r,e.note.id),o=e.children.map(_=>u$(_,n,t,r)).join(""),a=i?` ${Zt}`:"",u=i?` ${Ou}`:"",s=$q*(e.depth-1),l=x(e.note.flabel),c=Kn(e.note.srcquotes,n),d=Su+Ni(e.note.id),p=c.atStart+je(e.note.defn,n,d)+c.atEnd,[m,f]=n.jprobInstance.fgroup_of_flabel(e.note.flabel),h=Tq(f.label_prefix,l,p,Iq(e.note)),v=X(o$(m));return`<div class="${y2}${a} ${v}" id="${X(d)}" style="margin-left: ${s}px" data-framing-anchor="${X(r)}" data-framing-id="${X(e.note.id)}"><div class="framing-note-summary"><button class="${E2}${u}" data-framing-anchor="${X(r)}" data-framing-id="${X(e.note.id)}" title="Toggle framing note">&plusmn;</button>`+h+"</div>"+o+"</div>"}function $2(e,n,t,r){return e.layout_nodes.map(i=>u$(i,n,t,r)).join("")}function Rq(e,n,t,r){return e===void 0||e.layout_nodes.length===0?"":"<div>"+$2(e,n,t,r)+"</div>"}function Cq(e,n,t){const r=A2(e,n),i=document.querySelectorAll(`.${UA}`);for(const o of i){const a=o.getAttribute(GA);if(!a)continue;const u=r==null?void 0:r.nonroot_anchor_sections.get(a);o.innerHTML=r&&u?$2(u,n,t,a):""}}function Oq(e,n,t,r){const i=document.getElementById("framing-notes-root-section"),o=A2(n,t),a=o===null?"":$2(o.root_section,t,r,wq);if(!a){e.innerHTML="",i&&(i.hidden=!0);return}i&&(i.hidden=!1),e.innerHTML=a}function Nq(e,n){const t=n.jprobInstance,r=qh in t.get_fgroups()?t.nonstandard_notes(qh,S2(n)):[];e.innerHTML=r.map(o=>`<div class="estimator-instruction">${je(o.defn,n)}</div>`).join("");const i=document.getElementById(zh);i&&(i.hidden=r.length===0)}function kq(e,n){const t=document.getElementById("framing-notes-explainer-section"),r=new Set(S2(n));if(!w2(n)||!r.size){e.innerHTML="",t&&(t.hidden=!0);return}const i=[];for(const[o,a]of n.jprobInstance.standard_fgroups_in_order())a.defn&&a.flabels.some(u=>r.has(u))&&i.push(`<div class="framing-explainer ${X(o$(o))}">`+je(a.defn,n)+"</div>");t&&(t.hidden=i.length===0),e.innerHTML=i.join("")}const Cn="0",jn="1",ku=["plaincode","plainnum"];function Wr(e,n){return n==="plainnum"?e.adhocPlainnumEntries:e.adhocPlaincodeEntries}function T2(e,n,t){return n==="plainnum"?e.plainnum[t.resultIndex]:e.plaincode[t.resultIndex]}function Mq(e){const n=Object.keys(e.reasoning_response).some(o=>e.reasoning_response[o]!==""),t=e.misc_response!=="",r=e.trial_choices!==void 0&&Object.keys(e.trial_choices).length>0;if(!n&&!t&&!r)return[];const i={};return n&&(i.reasoning=e.reasoning_response),t&&(i.misc=e.misc_response),r&&(i.trial_choices=e.trial_choices),[i]}function ho(e){return!!e.verified_code_input&&e.cparam_combos.length>0}function vo(e){if(e.count!==1)throw new Error(`Plaincode record "${e.label}" has count ${e.count}; a yours or adhoc plaincode record is always single-trial`);return{...e,cparam_combos:e.cparam_combos.map(n=>({...n,trials:n.trials.map(t=>({trial_index:0,...t}))})),model:"user",version:"",effort:null,jtask_group_id:"",prompt_file_basename:"yours-plaincode",trial_metadata:Mq(e)}}function Pq(e,n){const t=e.find(r=>r.mode==="richcode"&&r.name===n);return t?t.note:null}function Dq(e){const n=[],t=[];for(let r=0;r<e.length;r++){const i=e[r];for(let o=0;o<i.plainnum.length;o++)n.push({presetIndex:r,resultIndex:o});for(let o=0;o<i.plaincode.length;o++)t.push({presetIndex:r,resultIndex:o})}return{plainnum:n,plaincode:t}}function Fq(e,n,t){const r=e.name_or_pseudoname,o=e.plainnum.length>0&&e.plaincode.length>0?` [${n}]`:"",a=t.prompt_file_basename?` (${t.prompt_file_basename})`:"";return`${r}${o} ${t.label}${a}`}function qq(e){return e.filter(n=>n.prompt_file_basename.startsWith("richcode"))}const xq=/^[0-9a-f]{5}$/;function Bq(e){return!xq.test(e)}function I2(e){return new Set(e.filter(n=>n.rdev_prompt_suffix!==void 0).map(n=>n.jtask_group_id))}const Ug=0,Hq=1,Uq=2,Gq=3;function jq(e,n,t){const r=new Map;for(const o of n)o.mode==="richcode"&&o.declared_display_position!==null&&r.set(o.name,o.declared_display_position);const i=o=>t.has(o)?Gq:r.has(o)?Ug:Bq(o)?Hq:Uq;return[...new Set(e)].sort((o,a)=>{const u=i(o),s=i(a);return u!==s?u-s:u===Ug?r.get(o)-r.get(a):o<a?-1:o>a?1:0})}function L2(e,n){const t=`trial${n===1?"":"s"}`;switch(e){case"methodical":return`${n} agent ${t}`;case"adhoc":return`${n} adhoc ${t}`;case"yours":return`${n} ${t} of yours`}}function Vq(e,n){const t=Wr(n,e.queryMode)[e.entryIdx];if(!t)return null;const r=n.adhocPresets[t.presetIndex];if(e.queryMode==="plainnum")return(r==null?void 0:r.plainnum[t.resultIndex])??null;const i=r==null?void 0:r.plaincode[t.resultIndex];return i?vo(i):null}function Wq(e,n){var r;if(e.queryMode!=="plaincode")return null;const t=n.adhocPlaincodeEntries[e.entryIdx];return t?((r=n.adhocPresets[t.presetIndex])==null?void 0:r.plaincode[t.resultIndex])??null:null}function Kq(e,n){const t=Wr(n,e.queryMode)[e.entryIdx];return t?n.adhocPresets[t.presetIndex]??null:null}function s$(e){if(!e)return{point:!0,bounds:!0,sample:!0};_n(e)&&C2(e);const n=_n(e)?e.cparam_combos.flatMap(r=>r.trials):e.trials,t=r=>n.some(i=>Object.keys(i[r]).length>0);return{point:t("point"),bounds:(!_n(e)||R2(e))&&t("bounds"),sample:t("sample")}}const Xq=["sample","bounds","point"];function l$(e,n){return e[n]?n:Xq.find(t=>e[t])??n}function c$(e,n,t){return e==="yours"?t:l$(s$(n),t)}function R2(e){return e.count===1}function C2(e){for(const[t,r]of e.cparam_combos.entries()){if(r.trials.length===0||r.trials.length>e.count)throw new Error(`Code result cparam combo ${t} carries ${r.trials.length} trials; expected between 1 and the record trial count ${e.count}`);const i=new Set;for(const o of r.trials){const a=o.trial_index;if(a===void 0)throw new Error(`Code result cparam combo ${t} carries a trial with no trial_index; regenerate the result data (trial-dict schema >= 9)`);if(!Number.isInteger(a)||a<0||a>=e.count)throw new Error(`Code result cparam combo ${t} carries trial_index ${a}; expected an integer in [0, ${e.count})`);if(i.has(a))throw new Error(`Code result cparam combo ${t} carries record trial ${a} more than once`);i.add(a)}}const n=e.trial_metadata;if(n!==void 0&&n.length>0&&n.length!==e.count)throw new Error(`Code result carries ${n.length} trial_metadata entries; expected one per trial (record trial count ${e.count})`)}function or(e){if(e.trial_index===void 0)throw new Error("Code-mode combo trial carries no trial_index");return e.trial_index}function Pt(e){return _n(e)?e.count:e.trials.length}function d$(e,n){return e.find(t=>or(t)===n)}function f$(e,n){var t;return _n(e)?(t=e.trial_metadata)==null?void 0:t[n]:e.trials[n]}function Yq(e,n){return f$(e,n)}function Mu(e,n){var t;return _n(e)?(t=e.trial_metadata)==null?void 0:t[n]:void 0}function Jq(e,n){var t;return(t=f$(e,n))==null?void 0:t.trial_choices}function _n(e){return"cparam_combos"in e}function O2(e,n,t){if(n==="point"){const i=e.point[t];return i===void 0?"":String(i)}if(n==="bounds"){const i=e.bounds[t];return i?`${i[0]} ${i[1]}`:""}const r=e.sample[t];return r?typeof r=="string"?r:r.map(([i,o])=>`(${i} ${o})`).join(" "):""}function p$(e,n){return["point","bounds","sample"].filter(t=>n.length>0&&n.every(r=>O2(e,t,r)!==""))}function zq(e,n,t){return t.map(r=>O2(e,n,r)).join(`
`)}function Qq(e,n,t){return _n(e)?[]:e.trials.map(r=>t.map(i=>O2(r,n,i)))}function N2(e,n){const t=Wr(n,e.queryMode)[e.entryIdx];if(t===void 0)return null;const r=n.adhocPresets[t.presetIndex];if(r===void 0)return null;const i=T2(r,e.queryMode,t);return i===void 0?null:{nameOrPseudoname:r.name_or_pseudoname,queryMode:e.queryMode,label:i.label}}function m$(e,n){const t=Wr(n,e.queryMode);for(let r=0;r<t.length;r++){const i=t[r],o=n.adhocPresets[i.presetIndex];if(o===void 0||o.name_or_pseudoname!==e.nameOrPseudoname)continue;const a=T2(o,e.queryMode,i);if(a!==void 0&&a.label===e.label)return{queryMode:e.queryMode,entryIdx:r}}return null}function Zq(e){const n=[];for(const t of ku){const r=new Set,i=Wr(e,t).length;for(let o=0;o<i;o++){const a=N2({queryMode:t,entryIdx:o},e);if(a===null)continue;const u=Ma(a);r.has(u)?n.push(u):r.add(u)}}return n}function Ma(e){return`adhoc ${e.queryMode} ${JSON.stringify(e.nameOrPseudoname)} labelled ${JSON.stringify(e.label)}`}const k2=["plainnum","plaincode"];function On(e){return e.interactionMode==="Estimate"?e.estimateQueryMode:null}function Pa(e){if(e.interactionMode!=="Estimate")throw new Error(`No Yours record is being edited in ${e.interactionMode}`);return e.estimateQueryMode}function Pu(e,n){return n==="plaincode"?e.yoursCodeRecord:e.yoursRecord}const At=[{name:"low",abbreviation:"L"},{name:"medium",abbreviation:"M"},{name:"high",abbreviation:"H"},{name:"xhigh",abbreviation:"XH"},{name:"max",abbreviation:"MAX"}],Qh=[{model:"sonnet",abbreviation:"s",agentCli:"claudecode",efforts:At},{model:"opus",abbreviation:"o",agentCli:"claudecode",efforts:At},{model:"fable",abbreviation:"f",agentCli:"claudecode",efforts:At},{model:"luna",abbreviation:"gl",agentCli:"codex",efforts:At},{model:"terra",abbreviation:"gt",agentCli:"codex",efforts:At},{model:"sol",abbreviation:"gs",agentCli:"codex",efforts:At},{model:"astra",abbreviation:"ga",agentCli:"codex",efforts:At}],Du=":";function _o(e){const n=Qh.findIndex(t=>t.model===e);if(n<0)throw new Error(`unknown model ${JSON.stringify(e)}. Add it to MODEL_EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return{config:Qh[n],order:n}}function Gi(e){return _o(e).config.agentCli}function M2(e,n){const{config:t}=_o(e),r=t.efforts.findIndex(i=>i.name===n);if(r<0)throw new Error(`unknown effort ${JSON.stringify(n)} for model ${JSON.stringify(e)}. Add it to MODEL_EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return{config:t.efforts[r],order:r}}function ex(e,n){return e===n?0:e<n?-1:1}function nx(e,n,t){if(n.length===0)throw new Error(`makeModelVersionEffortKey: empty version not supported (model=${e}).`);if(t===null)throw new Error(`makeModelVersionEffortKey: null effort not supported (model=${e}, version=${n}). A null effort identifies a record of several model configurations — every published entry carries an explicit effort — which does not participate in the model/version/effort sweep.`);return[e,encodeURIComponent(n),t].join(Du)}function go(e){const n=e.split(Du);if(n.length!==3||n.some(a=>a.length===0))throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(e)}`);const[t,r,i]=n;let o;try{o=decodeURIComponent(r)}catch{throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(e)}`)}if(o.length===0)throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(e)}`);return{model:t,version:o,effort:i}}function P2(e){const{model:n,version:t,effort:r}=go(e);return`${n} ${t} ${r}`}function D2(e){const{model:n,version:t,effort:r}=go(e),{config:i}=_o(n),{config:o}=M2(n,r);return`${i.abbreviation}${t}${o.abbreviation}`}function tx(e){const{model:n,version:t}=go(e);return`${n} ${t}`}function rx(e){const{model:n,effort:t}=go(e);return M2(n,t).config.abbreviation}function ix(e){const n=Array.from(e,t=>{const r=go(t),i=_o(r.model).order,o=M2(r.model,r.effort).order;return{key:t,parsed:r,modelOrder:i,effortOrder:o}});return n.sort((t,r)=>t.modelOrder-r.modelOrder||ex(t.parsed.version,r.parsed.version)||t.effortOrder-r.effortOrder),n.map(({key:t})=>t)}function gn(e){return nx(e.model,e.version,e.effort)}function bo(e){const n=new Map(e.map(t=>[gn(t),t]));return ix(n.keys()).map(t=>n.get(t))}function Dr(e,n){if(n.length===0)throw new Error(`makeModelVersionKey: empty version not supported (model=${e}).`);return[e,encodeURIComponent(n)].join(Du)}function h$(e){const n=e.split(Du);if(n.length!==2||n.some(o=>o.length===0))throw new Error(`parseModelVersionKey: invalid key ${JSON.stringify(e)}`);const[t,r]=n;let i;try{i=decodeURIComponent(r)}catch{throw new Error(`parseModelVersionKey: invalid key ${JSON.stringify(e)}`)}return{model:t,version:i}}function F2(e){const{model:n,version:t}=h$(e);return`${_o(n).config.abbreviation}${t}`}function v$(e){const{model:n,version:t}=h$(e);return`${n} ${t}`}function _$(){return[...new Set(Qh.map(e=>e.agentCli))]}const Gg={claudecode:"Ant",codex:"OAI"};function g$(e){if(!Object.hasOwn(Gg,e))throw new Error(`unknown agent CLI ${JSON.stringify(e)}. Add it to AGENT_CLI_LABEL in model_version_effort_plot_support.ts.`);return Gg[e]}function b$(e){const n=t=>{const r=At.findIndex(i=>i.name===t);if(r<0)throw new Error(`unknown effort ${JSON.stringify(t)}. Add it to EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return r};return Array.from(e).sort((t,r)=>n(t)-n(r))}const ca=2e3,ox=ca/100,ax=[1,2,4,10];function ux(){const e=new Set;for(let n=0;n<=ca;n+=ox)e.add(n);for(const n of ax)e.add(n),e.add(ca-n);return[...e].sort((n,t)=>n-t).map(n=>n/ca)}const ht=ux(),sx=100,Qs=0,lx={logit:{inverse:e=>1/(1+Math.exp(-e)),lowerBound:0,upperBound:1},log:{inverse:e=>Math.exp(e),lowerBound:0,upperBound:null},identity:{inverse:e=>e,lowerBound:null,upperBound:null}};function jg(e,n,t){const r=e[n];if(!Number.isInteger(r)||r<0)throw new Error(`quantile table ${n} must be a nonnegative integer; got ${r}`);if(r>0&&t===null)throw new Error(`quantile table ${n} is ${r}, but transform ${JSON.stringify(e.transform)} has no ${n==="count_at_lower_bound"?"lower":"upper"} bound`);return r}function Vg(e,n){const t=e[n];if(t===null)return null;if(typeof t!="number"||!Number.isFinite(t))throw new Error(`quantile table ${n} must be a finite number or null; got ${t}`);return t}function cx(e){const n=lx[e.transform];if(n===void 0)throw new Error(`unknown quantile table transform ${JSON.stringify(e.transform)}`);const t=jg(e,"count_at_lower_bound",n.lowerBound),r=jg(e,"count_at_upper_bound",n.upperBound),i=Vg(e,"anchor"),o=Vg(e,"log_gap_min"),a=e.gap_codes_ln100;if(!Array.isArray(a))throw new Error("quantile table gap_codes_ln100 must be a list");let u=!1;for(const p of a){if(!Number.isInteger(p)||p<0)throw new Error(`quantile table gap codes must be nonnegative integers; got ${p}`);p!==Qs&&(u=!0)}if(i===null&&a.length>0)throw new Error(`quantile table anchor is null, but it has ${a.length} gap codes (a table with no coded levels has none)`);const s=i===null?0:a.length+1;if(s+t+r!==ht.length)throw new Error(`a quantile table has one value per level (${ht.length} levels); got ${s} coded levels (${a.length} gap codes) plus ${t} + ${r} values at the bounds`);if(u&&o===null)throw new Error("quantile table log_gap_min is null, but it has a positive gap code");if(!u&&o!==null)throw new Error("quantile table log_gap_min is given, but it has no positive gap code");const l=p=>p===Qs?0:Math.exp(o+(p-Qs-1)/sx),c=new Array(s);if(i!==null){const p=Math.floor((s-1)/2);c[p]=i;let m=i;for(let f=p;f<a.length;f++)m+=l(a[f]),c[f+1]=m;m=i;for(let f=p-1;f>=0;f--)m-=l(a[f]),c[f]=m}const d=new Array(t).fill(n.lowerBound);for(const p of c)d.push(n.inverse(p));for(let p=0;p<r;p++)d.push(n.upperBound);return d}function dx(e,n){if(e.length===0)throw new Error("a mixture needs at least one member");if(n.length!==e.length)throw new Error(`expected one weight per member (${e.length}); got ${n.length}`);let t=0;for(const a of n){if(!(a>0))throw new Error("every mixture weight must be positive");t+=a}const r=e[0].transform,i=[],o=[];return e.forEach((a,u)=>{if(a.transform!==r)throw new Error(`cannot mix quantile tables quantized in different transforms (${r}, ${a.transform})`);a.tables.forEach((s,l)=>{i.push(s),o.push(n[u]/t*a.weights[l])})}),{tables:i,weights:o,transform:r}}const wr=1e-12;function Wg(e,n,t){if(n===0)return 0;if(n===e.length)return 1;const r=e[n-1],i=e[n],o=ht[n-1],a=ht[n];return o+(a-o)*(t-r)/(i-r)}function y$(e,n){let t=0,r=e.length;for(;t<r;){const i=t+r>>>1;e[i]>=n?r=i:t=i+1}return t}function fx(e,n,t){if(e.length===0)throw new Error("a mixture needs at least one table");if(n.length!==e.length)throw new Error(`expected one weight per table (${e.length}); got ${n.length}`);let r=0;for(const u of n){if(!(u>0))throw new Error("every mixture weight must be positive");r+=u}for(const u of e)if(u.length!==ht.length)throw new Error(`a quantile table has one value per level (${ht.length} levels); got ${u.length}`);const i=Float64Array.from(new Set(e.flat())).sort(),o=new Float64Array(i.length),a=new Float64Array(i.length);return e.forEach((u,s)=>{const l=n[s]/r;let c=0,d=0;for(let p=0;p<i.length;p++){const m=i[p];for(;c<u.length&&u[c]<=m;)c++;for(;d<u.length&&u[d]<m;)d++;o[p]=o[p]+l*Wg(u,c,m),a[p]=a[p]+l*Wg(u,d,m)}}),t.map(u=>{const s=y$(o,u-wr);if(s===i.length)return i[i.length-1];let l;if(s===0||a[s]<u-wr)l=i[s];else{const c=a[s]-o[s-1],d=Math.min(Math.max((u-o[s-1])/c,0),1);l=i[s-1]+d*(i[s]-i[s-1])}return o[s]>u+wr?l:(l+px(i,o,a,u))/2})}function px(e,n,t,r){let i=y$(n,r+wr);for(;i<e.length&&n[i]<=r+wr;)i++;return i===e.length?e[e.length-1]:t[i]<=r+wr?e[i]:e[i-1]}function mx(e,n){const t=e.length;return e.map(()=>1/t)}const hx=[.05,.5,.95];function E$(e,n){let t=0;return e.forEach((r,i)=>{t+=n[i]*r.mean}),t}function vx(e,n){const t=[];for(const u of e){if(u.quantile_table_mixture===void 0)return null;t.push(u.quantile_table_mixture)}const r=dx(t,n),[i,o,a]=fx(r.tables,r.weights,hx);return{mean:E$(e,n),median:o,p5:i,p95:a,quantile_table_mixture:r}}function S$(e){if(e.length===0)throw new Error("a pool needs at least one member trial");let n=0;for(const t of e){if(!(t.weight>0))throw new Error("every pool member weight must be positive");n+=t.weight}return e.map(t=>t.weight/n)}function w$(e){var r;const n=[];for(const i of e){const o=(r=i.statsByStrengthKey)==null?void 0:r[Cn];if(o===void 0)return null;n.push(o)}const t={[Cn]:n};return e.some(i=>{var o;return((o=i.statsByStrengthKey)==null?void 0:o[jn])!==void 0})&&(t[jn]=e.map((i,o)=>{var a;return((a=i.statsByStrengthKey)==null?void 0:a[jn])??n[o]})),t}function A$(e){const n=S$(e),t=w$(e);if(t===null)return null;const r={};for(const[i,o]of Object.entries(t)){const a=vx(o,n);if(a===null)return null;r[i]=a}return r}function _x(e){const n=S$(e),t=w$(e);if(t===null)return null;const r={};for(const[i,o]of Object.entries(t))r[i]=E$(o,n);return r}function gx(e,n){try{return{tables:[cx(e)],weights:[1],transform:e.transform}}catch(t){console.warn(`omitting an undecodable quantile table: ${t.message}`);return}}function bx(e,n){const{quantile_table:t,...r}=e,i={...r};if(t!==void 0){const o=gx(t);o!==void 0&&(i.quantile_table_mixture=o)}return i}function yo(e,n){const t={};for(const[r,i]of Object.entries(e))t[r]=bx(i);return t}function Fu(e,n){const t={};for(const[r,i]of Object.entries(e))t[r]=yo(i);return t}function yx(e,n){const{precomputed:t,precomputed_aux_forms:r,...i}=e;return{...i,...t===void 0?{}:{precomputed:yo(t)},...r===void 0?{}:{precomputed_aux_forms:Fu(r)}}}function Ex(e,n){return{cparams:e.cparams,trials:e.trials.map(t=>yx(t)),precomputed:yo(e.precomputed),...e.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:Fu(e.precomputed_aux_forms)}}}function Sx(e,n){return{...e,cparam_combos:e.cparam_combos.map(t=>Ex(t))}}function wx(e,n){return{trial_index:e.trial_index,...e.precomputed===void 0?{}:{precomputed:yo(e.precomputed)},...e.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:Fu(e.precomputed_aux_forms)}}}function Ax(e,n){return e.map(t=>({name_or_pseudoname:t.name_or_pseudoname,query_mode:t.query_mode,label:t.label,cparam_combos:t.cparam_combos.map(r=>({cparams:r.cparams,precomputed:yo(r.precomputed),...r.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:Fu(r.precomputed_aux_forms)},trials:r.trials.map(i=>wx(i))}))}))}function Yt(e){return JSON.stringify(Object.keys(e).sort().map(n=>[n,e[n]]))}function $x(e,n){const t=[],r=new Set;for(const i of e){if(typeof i.entry_id!="string"){const o=`published richcode results carry an entry with no entry_id (${JSON.stringify(i.label)}), which no current producer writes: the file predates trial-dict schema 14 and needs regenerating`;console.warn(o);continue}if(r.has(i.entry_id)){const o=`published richcode results carry more than one entry with entry_id ${JSON.stringify(i.entry_id)}; its trials have no stable identity`;console.warn(o)}r.add(i.entry_id),t.push(Sx(i))}return t}const $$="equal_per_trial",Tx="record";function T$(e,n,t){return JSON.stringify([e??null,n??null,t??null])}function Ix(e){return(e==null?void 0:e.model)===void 0?null:T$(e.model,e.version,e.effort)}function Lx(e){const n=_n(e)?T$(e.model,e.version,e.effort):Tx;return Array.from({length:Pt(e)},(t,r)=>Ix(Mu(e,r))??n)}function er(e){return mx(Lx(e))}function vt(e,n){const t=er(e);return n.map(r=>{const i=or(r),o=t[i];if(o===void 0)throw new Error(`combo trial names record trial ${i}, past the record's ${t.length} trials`);return o})}const I$="mixture";function qu(e){return e.effort!==null}function q2(e){return{model:e.model,version:e.version,effort:e.effort}}function xu(e,n){return bo(e.filter(qu).filter(t=>t.jtask_group_id===n).map(q2))}function Rx(e,n,t){return bo(t).map(r=>{const i=gn(r),o=e.filter(u=>qu(u)&&u.jtask_group_id===n&&gn(q2(u))===i),a=`${P2(i)} in jtask group ${JSON.stringify(n)}`;if(o.length===0)throw new Error(`mixtureGroupRecord: no individual entry is published for ${a}`);if(o.length>1)throw new Error(`mixtureGroupRecord: more than one individual entry is published for ${a}`);return o[0]})}function Cx(e){return e.flatMap(({entry:n})=>Array.from({length:n.count},(t,r)=>{var i;return{...((i=n.trial_metadata)==null?void 0:i[r])??{},model:n.model,version:n.version,effort:n.effort}}))}function Ox(e){return e.flatMap(({entry:n})=>Array.from({length:n.count},(t,r)=>({entry_id:L$(n),entry_trial_index:r})))}function L$(e){if(e.entry_id===void 0)throw new Error(`mixtureGroupRecord: individual entry ${JSON.stringify(e.label)} carries no entry_id, so its trials have no stable identity`);return e.entry_id}function Nx(e){const n=new Map;for(const{entry:t,recordTrialIndexOffset:r}of e)for(const i of t.cparam_combos){const o=Yt(i.cparams);let a=n.get(o);a===void 0&&(a={cparams:i.cparams,trials:[]},n.set(o,a)),a.trials.push(...i.trials.map(u=>({...u,trial_index:r+or(u)})))}return[...n.values()]}function R$(e,n,t){return e.trials.map(r=>({statsByStrengthKey:t(r),weight:n[or(r)]}))}function kx(e,n){const t=[...new Set(e.trials.flatMap(o=>Object.keys(o.precomputed_aux_forms??{})))],r={},i={};for(const o of t){const a=R$(e,n,l=>{var c;return(c=l.precomputed_aux_forms)==null?void 0:c[o]}),u=A$(a);if(u!==null){r[o]=u;continue}const s=_x(a);s!==null&&(i[o]=s)}return{...Object.keys(r).length===0?{}:{precomputed_aux_forms:r},...Object.keys(i).length===0?{}:{aux_form_means:i}}}function Mx(e,n){const t=A$(R$(e,n,r=>r.precomputed));return{cparams:e.cparams,trials:e.trials,precomputed:t??{},...kx(e,n)}}function Px(e,n){const t=e[0];for(const s of e)if(JSON.stringify(s.cparam_names)!==JSON.stringify(t.cparam_names))throw new Error(`mixtureGroupRecord: members of jtask group ${JSON.stringify(n)} disagree on cparam_names: ${JSON.stringify(t.cparam_names)} vs ${JSON.stringify(s.cparam_names)}`);const r=[];let i=0;for(const s of e)r.push({entry:s,recordTrialIndexOffset:i}),i+=s.count;const o=e.map(s=>q2(s)),a={label:`${e.length} model configurations`,aid:t.aid,aopts:t.aopts,count:i,cparam_names:t.cparam_names,cparam_combos:[],model:I$,version:"",effort:null,jtask_group_id:n,jtask_group_content_hashes:[...new Set(e.flatMap(s=>s.jtask_group_content_hashes??[]))].sort(),prompt_file_basename:t.prompt_file_basename,trial_metadata:Cx(r),result_set:{member_configurations:o,trial_identities:Ox(r)}},u=er(a);return{...a,cparam_combos:Nx(r).map(s=>Mx(s,u))}}const Kg=new WeakMap;function C$(e){let n=Kg.get(e);return n===void 0&&(n=new Map,Kg.set(e,n)),n}function Dx(e){return JSON.stringify(["empty",e])}function O$(e,n){const t=C$(e),r=Dx(n),i=t.get(r);if(i!==void 0)return i;const o=e.filter(qu).filter(s=>s.jtask_group_id===n),a=o[0];if(a===void 0)throw new Error(`emptyMixtureGroupRecord: jtask group ${JSON.stringify(n)} publishes no individual entry`);const u={label:"no model configurations",aid:a.aid,aopts:a.aopts,count:0,cparam_names:a.cparam_names,cparam_combos:[],model:I$,version:"",effort:null,jtask_group_id:n,jtask_group_content_hashes:[...new Set(o.flatMap(s=>s.jtask_group_content_hashes??[]))].sort(),prompt_file_basename:a.prompt_file_basename,trial_metadata:[],result_set:{member_configurations:[],trial_identities:[]}};return t.set(r,u),u}function N$(e,n,t){if(t.length===0)throw new Error("mixtureGroupRecord: a mixture group record needs at least one member configuration");const r=Rx(e,n,t);if(r.length===1)return r[0];const i=C$(e),o=JSON.stringify([n,$$,r.map(u=>L$(u))]);let a=i.get(o);return a===void 0&&(a=Px(r,n),i.set(o,a)),a}function x2(e){const n=_n(e)?e.result_set:void 0;if(n===void 0||n.member_configurations.length<2)return[{configuration:null,trials:Array.from({length:Pt(e)},(r,i)=>({recordTrialIndex:i,trialNumber:i+1}))}];const t=new Map(n.member_configurations.map(r=>[gn(r),{configuration:r,trials:[]}]));return n.trial_identities.forEach((r,i)=>{var u;const o=(u=e.trial_metadata)==null?void 0:u[i],a=(o==null?void 0:o.model)===void 0||o.version===void 0||o.effort===void 0||o.effort===null?void 0:t.get(gn({model:o.model,version:o.version,effort:o.effort}));if(a===void 0)throw new Error(`recordTrialGroups: record trial ${i} is not stamped with one of the record's member configurations`);a.trials.push({recordTrialIndex:i,trialNumber:r.entry_trial_index+1})}),[...t.values()]}function B2(e,n){return e.result_set!==void 0?e.result_set.trial_identities[n]??null:e.entry_id===void 0||!Number.isInteger(n)||n<0||n>=e.count?null:{entry_id:e.entry_id,entry_trial_index:n}}function k$(e,n){for(let t=0;t<e.count;t++){const r=B2(e,t);if(r!==null&&r.entry_id===n.entry_id&&r.entry_trial_index===n.entry_trial_index)return t}return null}const Fx=["agentCli","modelVersion","effort"],qx={agentCli:"agentClis",modelVersion:"modelVersions",effort:"efforts"};function da(e){return Dr(e.model,e.version)}function xx(e){return{agentClis:P$(e),modelVersions:[],efforts:[]}}function M$(e){return{agentClis:[],modelVersions:[da(e)],efforts:[e.effort]}}function Bx(e,n,t){const r=qx[n],i=e[r];return{...e,[r]:i.includes(t)?i.filter(o=>o!==t):[...i,t]}}function P$(e){const n=new Set(e.map(t=>Gi(t.model)));return _$().filter(t=>n.has(t))}function Zh(e,n){try{return n(e)}catch{return e}}function Zs(e,n,t,r,i,o){const a=e.map(s=>({value:s,label:t(s),hoverText:r(s),state:i(s),disabled:o,unavailable:!1})),u=n.filter(s=>!e.includes(s)).map(s=>({value:s,label:Zh(s,t),hoverText:Zh(s,r),state:i(s),disabled:o,unavailable:!0}));return[...a,...u]}function Hx(e,n){const t=bo(n),r=e.agentClis.length>0,i=!r&&e.modelVersions.length===0&&e.efforts.length===0,o=h=>r?e.agentClis.includes(Gi(h.model)):i?!1:(e.modelVersions.length===0||e.modelVersions.includes(da(h)))&&(e.efforts.length===0||e.efforts.includes(h.effort)),a=t.filter(o),u=new Set(a.map(h=>Gi(h.model))),s=new Set(a.map(da)),l=new Set(a.map(h=>h.effort)),c=h=>e.agentClis.includes(h)?"checked":u.has(h)?"partial":"unchecked",d=(h,v)=>_=>(r?v.has(_):h.includes(_))?"checked":"unchecked",p=[...new Set(t.map(da))],m=b$(new Set(t.map(h=>h.effort))),f=h=>h;return{memberConfigurations:a,rows:{agentCli:Zs(P$(t),e.agentClis,h=>g$(h),f,c,!1),modelVersion:Zs(p,e.modelVersions,F2,v$,d(e.modelVersions,s),r),effort:Zs(m,e.efforts,f,f,d(e.efforts,l),r)}}}function el(e){return!Array.isArray(e)||!e.every(n=>typeof n=="string")?null:[...new Set(e)]}function Xg(e){if(typeof e!="object"||e===null)return null;const n=e,t=el(n.agentClis),r=el(n.modelVersions),i=el(n.efforts);return t===null||r===null||i===null?null:{agentClis:t,modelVersions:r,efforts:i}}const Ct=["Estimate","ReadTrials","Compare"],H2="Estimate",Ux={Estimate:"E",ReadTrials:"R",Compare:"C"},Gx={Estimate:"Explore the problem using your own subjective estimations, entered directly or copied in from ReadTrials.",ReadTrials:"Read one result set of methodical trials, or one adhoc response: as the mixture of its trials' belief distributions, or as one trial's estimates, reasoning and code.",Compare:"Compare results across model configurations, task groups and parameter values."};function jx(e){return e.adhocPlainnumEntries.length>0||e.adhocPlaincodeEntries.length>0}function Eo(e){const n=Kr(e).length>0;return Ct.filter(t=>t==="Estimate"||t==="ReadTrials"&&(n||jx(e))||t==="Compare"&&n)}function Vx(e){return Eo(e).includes("ReadTrials")?"ReadTrials":H2}const Yn={kind:"mix"},fa={jtaskGroupId:null,mixtureGroupSelection:null,adhoc:null,trial:Yn};function Wx(e){if(Kr(e).length>0)return fa;for(const n of ku){const t=N2({queryMode:n,entryIdx:0},e);if(t!==null)return{...fa,adhoc:t}}return fa}function Kr(e){return jq(e.richcodeResults.map(n=>n.jtask_group_id),e.jtaskHashGroups,I2(e.richcodeResults))}const Yg=10,Kx="…",D$="rdev ";function F$(e,n){const t=e.map(i=>i.length>Yg?i.slice(0,Yg)+Kx:i),r=new Map;for(const i of t)r.set(i,(r.get(i)??0)+1);return t.map((i,o)=>r.get(i)>1?e[o]:i).map((i,o)=>n.has(e[o])?D$+i:i)}function Xx(e,n){const t=Kr(n);return e.jtaskGroupId!==null&&t.includes(e.jtaskGroupId)?e.jtaskGroupId:t[0]??null}function Nn(e,n){let t=null;if(e.adhoc!==null){const l=m$(e.adhoc,n.presetData);if(l!==null)return{resultSet:{kind:"adhoc",entry:l},unavailableAdhoc:t};t=e.adhoc}const{presetData:r}=n,i=Xx(e,r);if(i===null)return{resultSet:{kind:"no-results"},unavailableAdhoc:t};const o=xu(r.richcodeResults,i),a=e.mixtureGroupSelection??xx(o),u=Hx(a,o),s=u.memberConfigurations.length===0?O$(r.richcodeResults,i):N$(r.richcodeResults,i,u.memberConfigurations);return{resultSet:{kind:"methodical",jtaskGroupId:i,mixtureGroupSelection:a,interpretation:u,record:s},unavailableAdhoc:t}}function Yx(e,n,t){return e.kind==="mix"?null:e.kind==="adhoc-trial"?n==="adhoc"&&e.entryTrialIndex<t.count?e.entryTrialIndex:null:n!=="methodical"?null:k$(t,e.identity)}function Jx(e,n,t){const r={...n,trial:Yn};if(e.trial.kind!=="methodical-trial")return r;const i=Nn(e,t).resultSet,o=Nn(n,t).resultSet;return i.kind!=="methodical"||o.kind!=="methodical"||i.jtaskGroupId!==o.jtaskGroupId||k$(o.record,e.trial.identity)===null?r:{...n,trial:e.trial}}const Jg={kind:"methodical"};function Xr(e,n){if(e.interactionMode==="Estimate")return{kind:"yours",queryMode:e.estimateQueryMode};if(e.interactionMode==="Compare")return Jg;const{resultSet:t}=Nn(e.readTrials,n);return t.kind==="adhoc"?{kind:"adhoc",entry:t.entry}:Jg}function tt(e){switch(e.kind){case"yours":return e.queryMode;case"adhoc":return e.entry.queryMode;case"methodical":return"richcode"}}function zx(e){if(typeof e!="object"||e===null)return null;const n=e;if(n.kind==="mix")return Yn;if(n.kind==="adhoc-trial")return Number.isInteger(n.entryTrialIndex)&&n.entryTrialIndex>=0?{kind:"adhoc-trial",entryTrialIndex:n.entryTrialIndex}:null;if(n.kind!=="methodical-trial")return null;const t=n.identity;if(typeof t!="object"||t===null)return null;const{entry_id:r,entry_trial_index:i}=t;return typeof r!="string"||!Number.isInteger(i)||i<0?null:{kind:"methodical-trial",identity:{entry_id:r,entry_trial_index:i}}}function zg(e){if(typeof e!="object"||e===null)return null;const n=e;return typeof n.nameOrPseudoname!="string"||typeof n.label!="string"||n.queryMode!=="plainnum"&&n.queryMode!=="plaincode"?null:{nameOrPseudoname:n.nameOrPseudoname,queryMode:n.queryMode,label:n.label}}function Qx(e){if(typeof e!="object"||e===null)return null;const n=e,{jtaskGroupId:t,mixtureGroupSelection:r,adhoc:i,trial:o}=n;if(t!==null&&typeof t!="string"||r!==null&&Xg(r)===null||i!==null&&zg(i)===null)return null;const a=zx(o);return a===null?null:{jtaskGroupId:t,mixtureGroupSelection:r===null?null:Xg(r),adhoc:i===null?null:zg(i),trial:a}}function Zx(e,n,t){return{jtaskGroupId:e,mixtureGroupSelection:M$(n),adhoc:null,trial:t===null?Yn:{kind:"methodical-trial",identity:t}}}function eB(e,n){return{...e,trial:n}}const nB={model_version_effort:"model × version × effort",effort:"effort",model_version:"model × version"};function tB(e){return e.length<2?"model_version_effort":new Set(e.map(r=>Dr(r.model,r.version))).size===1?"effort":new Set(e.map(r=>r.effort)).size===1?"model_version":"model_version_effort"}function rB(e,n){const t=gn(e);return n==="effort"?rx(t):n==="model_version"?F2(Dr(e.model,e.version)):D2(t)}function iB(e){const n=tB(e);return{title:nB[n],positions:bo(e).map(t=>{const r=gn(t);return{identity:t,tickLabel:rB(t,n),longLabel:P2(r),segmentKey:tx(r)}})}}const oB="task group";function aB(e){return{title:oB,positions:e.map(({jtaskGroupId:n,designator:t})=>({identity:n,tickLabel:t,longLabel:`${t}: ${n}`,segmentKey:n}))}}function uB(e,n,t){const r=n.positions.map(({identity:i})=>{const o=new Set(xu(e,i).map(gn));return t.positions.map(({identity:a})=>o.has(gn(a))?N$(e,i,[a]):null)});return{jtaskGroupAxis:n,configurationAxis:t,entries:r}}const Ot=["jtaskGroup","agentCli","modelVersion","effort"],sB=["agentCli","modelVersion","effort"],U2={jtaskGroup:{pinned:!0,value:null},agentCli:{pinned:!1,value:null},modelVersion:{pinned:!1,value:null},effort:{pinned:!1,value:null}};function lB(e,n){return e.jtaskGroup.value!==null||n===null?e:{...e,jtaskGroup:{...e.jtaskGroup,value:n}}}const nl=26;function q$(e){const n=String.fromCharCode(65+e%nl);return e<nl?n:q$(Math.floor(e/nl)-1)+n}function Qg(e,n,t){var o;const r=e.value??((o=n[0])==null?void 0:o.value)??null,i=n.find(a=>a.value===r);return{pinned:e.pinned,offered:n,value:r,valueLabel:r===null?null:(i==null?void 0:i.label)??t(r),unavailable:e.pinned&&r!==null&&i===void 0}}const pa=e=>e,cB={agentCli:{valueOf:e=>Gi(e.model),inDisplayOrder:e=>_$().filter(n=>e.has(n)),labelOf:e=>g$(e),hoverTextOf:pa},modelVersion:{valueOf:e=>Dr(e.model,e.version),inDisplayOrder:e=>[...e],labelOf:F2,hoverTextOf:v$},effort:{valueOf:e=>e.effort,inDisplayOrder:e=>b$(e),labelOf:pa,hoverTextOf:pa}};function dB(e,n){const t=new Map;for(const r of n)for(const i of xu(e.richcodeResults,r))t.set(gn(i),i);return bo([...t.values()])}function G2(e,n){const t=Kr(n),r=F$(t,I2(n.richcodeResults)),i=t.map((d,p)=>({jtaskGroupId:d,designator:q$(p),label:r[p]})),o=Qg(e.jtaskGroup,i.map(d=>({value:d.jtaskGroupId,label:d.label,hoverText:d.jtaskGroupId})),pa),a=o.pinned?i.filter(d=>d.jtaskGroupId===o.value):i;let u=dB(n,a.map(d=>d.jtaskGroupId));const s={};for(const d of sB){const p=cB[d],m=p.inDisplayOrder(new Set(u.map(p.valueOf))).map(h=>({value:h,label:p.labelOf(h),hoverText:p.hoverTextOf(h)})),f=Qg(e[d],m,h=>Zh(h,p.labelOf));s[d]=f,f.pinned&&(u=u.filter(h=>p.valueOf(h)===f.value))}const l=uB(n.richcodeResults,aB(a),iB(u)),c={jtaskGroup:o,...s};return{jtaskGroups:i,rows:c,grid:l,jtaskGroupAxisSwept:!o.pinned&&a.length>1,configurationAxisSwept:u.length>1,unavailable:Ot.some(d=>c[d].unavailable)}}function fB(e,n,t,r){const i=G2(e,n).rows[t],o=r?i.value:i.unavailable?null:e[t].value;return{...e,[t]:{pinned:r,value:o}}}function pB(e,n,t){return{...e,[n]:{...e[n],value:t}}}function mB(e,n){return n+(e.jtaskGroupAxisSwept?1:0)+(e.configurationAxisSwept?1:0)}function hB(e){if(typeof e!="object"||e===null)return null;const{pinned:n,value:t}=e;return typeof n!="boolean"||t!==null&&typeof t!="string"?null:{pinned:n,value:t}}function vB(e){if(typeof e!="object"||e===null)return null;const n=e,t=Ot.map(u=>hB(n[u]));if(t.some(u=>u===null))return null;const[r,i,o,a]=t;return{jtaskGroup:r,agentCli:i,modelVersion:o,effort:a}}function Fr(e,n,t){const r=[];for(const i of e){if(t==="code"&&Qt(i.id))continue;const o=ge(i.id);if(!Object.prototype.hasOwnProperty.call(n,o))throw new Error(`Cannot compute optionDictKey: missing value for ${i.id}`);r.push([i.id,n[o]])}return r.sort(([i],[o])=>i<o?-1:i>o?1:0),JSON.stringify(r)}const _B=.5;function x$(e){const n=e.viewportTopInsetPx;return n+(window.innerHeight-n)*_B}function ev(e){return e.getClientRects().length===0?!1:typeof e.checkVisibility=="function"?e.checkVisibility():!0}function Zg(e){return document.getElementById(e.id)===e}function gB(e){const n=window.scrollY,{root:t}=e;if(t===null)return{anchorChain:[],pageScrollY:n};const r=x$(e);let i=null,o=Number.NEGATIVE_INFINITY;for(const u of t.querySelectorAll("[id]")){if(!ev(u)||!Zg(u))continue;const{top:s}=u.getBoundingClientRect();s>r||s<o||(i=u,o=s)}if(i===null)return{anchorChain:[],pageScrollY:n};const a=[];for(let u=i;u!==null&&u!==t;u=u.parentElement)u.id===""||!ev(u)||!Zg(u)||a.push({elementId:u.id,referenceLineOffsetPx:r-u.getBoundingClientRect().top});return{anchorChain:a,pageScrollY:n}}function bB(e,n,t){if(e.anchorChain.length===0){window.scrollTo({top:e.pageScrollY});return}const r=x$(n);for(const[i,o]of e.anchorChain.entries()){const a=document.getElementById(o.elementId);if(a===null||!ev(a))continue;const u=e.anchorChain[i+1],s=u===void 0?null:document.getElementById(u.elementId);if(s!==null&&!s.contains(a))continue;const l=a.getBoundingClientRect(),d=i===0?o.referenceLineOffsetPx:Math.min(Math.max(o.referenceLineOffsetPx,0),l.height),p=l.top-(r-d);p!==0&&window.scrollBy(0,p);return}window.scrollTo({top:t==="recordedPageOffset"?e.pageScrollY:0})}function yB(e){if(typeof e!="object"||e===null)return!1;const n=e;return typeof n.elementId=="string"&&typeof n.referenceLineOffsetPx=="number"&&Number.isFinite(n.referenceLineOffsetPx)}function EB(e){if(typeof e!="object"||e===null)return null;const n=e;return!Array.isArray(n.anchorChain)||!n.anchorChain.every(yB)||typeof n.pageScrollY!="number"||!Number.isFinite(n.pageScrollY)?null:{anchorChain:[...n.anchorChain],pageScrollY:n.pageScrollY}}const SB="Always included";function nv(e,n,t){if(t==="Bool"&&n.type==="checkbox")return n.checked===!0;const r=e2(e,n.value);if(typeof r=="object")throw new Error(`Invalid scalar control parser use for ${e.id}`);return r}function wB(e,n){const t=n.map(r=>{if(r.type!=="checkbox")throw new Error(`Invalid MultiStringFromSet control for ${e.id}: expected checkbox`);return r.checked===!0?r.value:void 0}).filter(r=>r!==void 0);return e2(e,t)}function j2(e,n,t){return e!==void 0&&t.includes(e)?e:n!==void 0&&t.includes(n)?n:t[0]}const B$="declared-value-space",AB="One of:";function H$(e){const n=e.map(t=>x(String(t))).join(", ");return`<div class="${B$}">${AB} ${n}</div>`}function V2(e,n){let t=`<span class="cparam-or-aopt-name">${x(e)}</span>`;return n.longname&&(t+=` <span class="cparam-or-aopt-longname">(${x(n.longname)})</span>`),t}function Da(e,n,t,r,i){const o=`${r.dataAttribute}="${X(e)}"`;if(i==="StringFromSet"){if(!Array.isArray(n.allowed_values))throw new Error(`StringFromSet option ${n.id} is missing allowed_values`);const c=n.allowed_values.map(d=>{const p=String(d),m=p===String(t)?" selected":"";return`<option value="${X(p)}"${m}>${x(p)}</option>`}).join("");return`<select class="${r.selectClass}" ${o}>${c}</select>`}if(i==="Number")return`<input class="${r.inputClass}" type="number" ${o} value="${X(String(t))}">`;if(i==="Bool"){const c=t?" checked":"";return`<input class="${r.checkboxClass??r.inputClass}" type="checkbox" ${o}${c}>`}if(i==="FreeString")return`<input class="${[r.inputClass,r.textInputClass].filter(Boolean).join(" ")}" type="text" ${o} value="${X(String(t))}">`;if(!Array.isArray(n.allowed_values))throw new Error(`MultiStringFromSet option ${n.id} is missing allowed_values`);if(!Array.isArray(t))throw new Error(`MultiStringFromSet option ${n.id} has a non-array current value`);const a=new Set(t),u=new Set(n.required_values??[]),s=r.checkboxClass??r.inputClass,l=n.allowed_values.map(c=>{if(typeof c!="string")throw new Error(`MultiStringFromSet option ${n.id} has a non-string allowed value`);const d=a.has(c)?" checked":"",p=u.has(c)?` disabled title="${X(SB)}"`:"";return`<label><input class="${s}" type="checkbox" ${o} value="${X(c)}"${d}${p}> <span>${x(c)}</span></label>`}).join("");return`<span class="${r.checkboxGroupClass??""}">${l}</span>`}function So(e){return e.allowed_values.filter(n=>typeof n!="boolean")}function W2(e,n){return j2(n.ui.inspectedCparamValues[ge(e.id)],e.default_value,So(e))}function Bu(e,n){const t={};for(const r of e.get_cparams())t[ge(r.id)]=W2(r,n);return t}function $B(e,n,t){if(n===void 0)return{};if(typeof n!="object"||n===null||Array.isArray(n))return eb(`persisted inspected combination is not a value map: ${JSON.stringify(n)}`),{};const r={};for(const[i,o]of Object.entries(n)){if(!TB(o)){eb(`persisted inspected value for ${i} is not a scalar: ${JSON.stringify(o)}`);continue}const a=e.find_cparam(i);if(a===void 0){console.warn(`Ignoring inspected value for ${i}, which this jprob no longer declares`);continue}if(!So(a).includes(o)){console.warn(`Ignoring inspected value for ${a.id}, which its declaration no longer allows: ${JSON.stringify(o)}; falling back to the declared default`);continue}r[i]=o}return r}function TB(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function eb(e,n){console.warn(`${e}; falling back to the declared default`)}const wo=["exampleList","framingNote","proseSection"];function IB(e){return jr.includes(e??"")}function K2(e){var i;const n=e.dataset.isym,t=e.dataset.type;if(!n||!IB(t))return null;const r=((i=e.closest(`.${h2}`))==null?void 0:i.querySelector(`.${v2}.${t}`))??null;return r===null?null:{key:{kind:"exampleList",bareIsymId:n,polarity:t},isOpen:()=>r.classList.contains(Zt),setOpen:o=>{r.classList.toggle(Zt,o),e.classList.toggle(Ou,o)}}}function LB(e){var t;const n=jr.find(r=>e.classList.contains(r));return n===void 0?null:((t=e.closest(`.${h2}`))==null?void 0:t.querySelector(`.${Cu}.${n}`))??null}function U$(e){const n=e.dataset.framingAnchor,t=e.dataset.framingId;if(!n||!t)return null;const r=e.closest(`.${y2}`);return r===null?null:{key:{kind:"framingNote",anchorKey:n,framingId:t},isOpen:()=>r.classList.contains(Zt),setOpen:i=>{r.classList.toggle(Zt,i),e.classList.toggle(Ou,i)}}}function RB(e){return{key:{kind:"proseSection",foldId:e.id},isOpen:()=>e.open,setOpen:n=>{e.open=n}}}function CB(e){return e!==null}function Hu(e){const n=[...e.querySelectorAll(`.${Cu}`)].map(K2),t=[...e.querySelectorAll(`.${E2}`)].map(U$),r=[...e.querySelectorAll(`details.${xi}.${gt}`)].filter(i=>i.id!=="").map(RB);return[...n,...t].filter(CB).concat(r)}function X2(e){return Hu(e).length>0}function OB(e){return Hu(e).some(n=>n.key.kind==="exampleList")}function NB(e){const n=Hu(e),t=r=>{const i=new Set(n.filter(o=>o.key.kind===r).map(o=>o.isOpen()));return i.size!==1?null:i.has(!0)};return{exampleList:t("exampleList"),framingNote:t("framingNote"),proseSection:t("proseSection")}}function kB(e,n){switch(n.kind){case"exampleList":return Bi(e.exampleFoldState,n.bareIsymId,n.polarity,e.exampleFoldsDefaultOpen);case"framingNote":return a$(e,n.anchorKey,n.framingId);case"proseSection":return FA(e.proseSectionFoldState,n.foldId,e.proseSectionFoldsDefaultOpen)}}function G$(e,n,t){switch(n.kind){case"exampleList":e.exampleFoldState=MB(e.exampleFoldState,n.bareIsymId,n.polarity,t,e.exampleFoldsDefaultOpen);return;case"framingNote":e.framingFoldState[n.anchorKey]={...e.framingFoldState[n.anchorKey],[n.framingId]:t};return;case"proseSection":e.proseSectionFoldState[n.foldId]=t;return}}function MB(e,n,t,r,i){return{...e,[n]:{pos:Bi(e,n,"pos",i),neg:Bi(e,n,"neg",i),[t]:r}}}function tl(e,n){return Object.fromEntries(Object.entries(e).filter(([,t])=>n(t)))}function PB(e,n,t){switch(n){case"exampleList":e.exampleFoldsDefaultOpen=t,e.exampleFoldState=tl(e.exampleFoldState,r=>r.pos===t&&r.neg===t);return;case"framingNote":e.framingFoldsDefaultOpen=t,e.framingFoldState=tl(e.framingFoldState,r=>Object.values(r).every(i=>i===t));return;case"proseSection":e.proseSectionFoldsDefaultOpen=t,e.proseSectionFoldState=tl(e.proseSectionFoldState,r=>r===t);return}}const DB=["peek","unpeek","open","close"];function FB(e){return DB.includes(e??"")}function qB(e,n,t){for(const r of Hu(e))switch(n){case"open":case"close":{const i=n==="open";r.setOpen(i),G$(t,r.key,i);break}case"peek":r.setOpen(!0);break;case"unpeek":r.setOpen(kB(t,r.key));break}}function tv(e,n){if(n.inputMode!==void 0&&(e.inputMode=n.inputMode),n.probAsOdds!==void 0&&(e.probAsOdds=n.probAsOdds),n.densityScale!==void 0&&(e.densityScale=n.densityScale),n.showFramingNotes!==void 0&&(e.showFramingNotes=n.showFramingNotes),n.symbolMnames!==void 0&&(e.symbolMnames=n.symbolMnames),n.srcquotesInlinedOverride!==void 0&&(e.srcquotesInlinedOverride=n.srcquotesInlinedOverride),n.auxFormsFoldOpen!==void 0&&(e.foldOpenById[Pr]=n.auxFormsFoldOpen),n.proseFoldsOpenByKind!==void 0)for(const t of wo){const r=n.proseFoldsOpenByKind[t];r!==void 0&&PB(e,t,r)}n.cparamPinned!==void 0&&Object.assign(e.cparamPinned,n.cparamPinned),n.cparamValues!==void 0&&Object.assign(e.cparamValues,n.cparamValues),n.inspectedCparamValues!==void 0&&Object.assign(e.inspectedCparamValues,n.inspectedCparamValues),n.interactionMode!==void 0&&(e.interactionMode=n.interactionMode),n.estimateQueryMode!==void 0&&(e.estimateQueryMode=n.estimateQueryMode),n.readTrials!==void 0&&(e.readTrials=structuredClone(n.readTrials)),n.compare!==void 0&&(e.compare=structuredClone(n.compare))}const j$="yours_code";function Uu(e,n){return`${j$}_${e}_${n}`}function V$(e,n){const t={};for(const r of e.get_aopts()){const i=ge(r.id);i in n&&(t[i]=n[i])}return{aid:e.aid,label:"code",aopts:t,count:1,cparam_names:[],cparam_combos:[],raw_code_input:"",reasoning_response:{},misc_response:"",trial_choices:e.get_enum_tchoice_defaults()}}function xB(e,n,t){const r=HB(Uu(e.aid,n));return r||V$(e,t)}function Y2(e,n,t,r){r.timestamp||(r.timestamp=new Date().toISOString()),r.content_hash=ZA("code",n,r.aopts,void 0),UB(Uu(e.aid,t),r)}function J2(e){const n=`${j$}_${e}_`,t=[];for(let r=0;r<localStorage.length;r++){const i=localStorage.key(r);if(i===null||!i.startsWith(n))continue;const o=localStorage.getItem(i);if(o===null)continue;let a;try{a=JSON.parse(o)}catch{continue}t.push({codeOptionDictKey:i.slice(n.length),record:a})}return t.sort((r,i)=>{const o=r.record.timestamp??"";return(i.record.timestamp??"").localeCompare(o)}),t}function BB(e,n){localStorage.removeItem(Uu(e,n))}function HB(e){try{const n=localStorage.getItem(e);return n===null?null:JSON.parse(n)}catch{return null}}function UB(e,n){localStorage.setItem(e,JSON.stringify(n))}function Gu(e,n){const t={};for(const r of e){const i=ge(r.id),o=n[i]??r.default_value;t[i]=e2(r,o)}return t}function GB(e,n){const t={...n};for(const r of e){if(!("input_type"in r)||r.input_type!=="MultiStringFromSet")continue;const i=ge(r.id),o=n[i];if(!Array.isArray(o)||!o.every(s=>typeof s=="string")||!Array.isArray(r.allowed_values))continue;const a=new Set(r.allowed_values),u=o.filter(s=>!a.has(s));u.length!==0&&(console.warn(`Ignoring MultiStringFromSet values no longer allowed for ${r.id}: `+u.join(", ")),t[i]=o.filter(s=>a.has(s)))}return t}function z2(e,n){const t={...n};for(const r of e){if(!("input_type"in r)||r.input_type!=="MultiStringFromSet")continue;const i=ge(r.id),o=n[i];if(!Array.isArray(o)||!o.every(u=>typeof u=="string"))continue;const a=(r.required_values??[]).filter(u=>!o.includes(u));a.length!==0&&(console.warn(`Adding MultiStringFromSet values now required for ${r.id}: `+a.join(", ")),t[i]=[...o,...a])}return t}const Ao={inputMode:"whole",probAsOdds:"whole",densityScale:"whole",symbolMnames:"whole",popoverAllRefs:"whole",persistentPopovers:"whole",showExampleClassification:"whole",showGlobalProseFoldControls:"whole",interactionMode:"whole",estimateQueryMode:"whole",readTrials:"whole",compare:"whole",exampleFoldState:"entrywise",exampleFoldsDefaultOpen:"whole",framingFoldState:"entrywise",framingFoldsDefaultOpen:"whole",proseSectionFoldState:"entrywise",proseSectionFoldsDefaultOpen:"whole",srcquotesInlinedOverride:"whole",showFramingNotes:"whole",longTextAbbrev:"whole",jointDependenceEditorOpen:"whole",foldOpenById:"entrywise",sidePanelExpanded:"whole",cparamPinned:"entrywise",cparamValues:"entrywise",inspectedCparamValues:"entrywise",codeSweepMode:"whole",plotTargetKind:"whole",plotFormulaId:"whole",plotRawResponseName:"whole",scrollPositionByInteractionMode:"entrywise"},W$=Object.keys(Ao),K$="aopt",X$="ui",jB="yours";function Fa(e,n){return`${e}_${n}`}function ju(e,n){return`${jB}_${e}_${n}`}const VB=["inputMode","probAsOdds","densityScale","symbolMnames","popoverAllRefs","persistentPopovers","showExampleClassification","showGlobalProseFoldControls","showFramingNotes","longTextAbbrev"];function Y$(e){const n={};for(const t of VB)e[t]!==void 0&&(n[t]=e[t]);return n}const WB={interactionMode:H2,estimateQueryMode:"plainnum",readTrials:fa,compare:U2,exampleFoldState:{},exampleFoldsDefaultOpen:XA,framingFoldState:{},framingFoldsDefaultOpen:Lq,proseSectionFoldState:{},proseSectionFoldsDefaultOpen:Yh,jointDependenceEditorOpen:!0,foldOpenById:{},sidePanelExpanded:!0,srcquotesInlinedOverride:null,cparamPinned:{},cparamValues:{},inspectedCparamValues:{},codeSweepMode:"average",plotTargetKind:"formula",plotFormulaId:"",plotRawResponseName:"",scrollPositionByInteractionMode:{}};function J$(e){return{...structuredClone(WB),...Y$(e)}}function z$(e){const n={...J$(mo),interactionMode:Vx(e.presetData),readTrials:Wx(e.presetData)};return tv(n,e.defaultView),n}function Q$(e){return{...z$(e),...Y$(uq())}}function Z$(e,n){const t={},r={};for(const i of e){const o=ge(i.id);o in n&&(Qt(i.id)?r[o]=n[o]:t[o]=n[o])}return{aopts:t,cparam_values:r}}function eT(e,n){const{aopts:t,cparam_values:r}=Z$(e.get_options(),n);return{aid:e.aid,label:"",prompt_file_basename:"",aopts:t,cparam_values:r,count:1,trials:[{point:{},bounds:{},sample:{}}],raw_input:{},reasoning_response:{},misc_response:"",trial_choices:e.get_enum_tchoice_defaults()}}function nT(e){return{...e,reasoning_response:e.reasoning_response??{},misc_response:e.misc_response??""}}function tT(e){const n=qa(e);return n===null?null:nT(n)}function KB(e){const n=Gu(e.get_options(),{}),t=Fr(e.get_options(),n,"plainnum"),r=Fr(e.get_options(),n,"code");return{optionValues:n,plainnumOptionDictKey:t,codeOptionDictKey:r,ui:J$(Ye()),yoursRecord:eT(e,n),yoursCodeRecord:V$(e,n)}}function rT(e,n){return!n&&e==="plaincode"?"plainnum":e}function XB(e,n,t){const r=tT(ju(e.aid,n));return r||eT(e,t)}const YB="assumptionTrialIndex",JB="Remembered view",zB="This does not affect any estimates you have saved.";function QB(e,n,t){if(e===null)return{interactionMode:n.interactionMode,estimateQueryMode:n.estimateQueryMode,readTrials:n.readTrials,compare:n.compare};const r=Qx(e.readTrials),i=vB(e.compare);return r===null&&e.readTrials!==void 0&&(t.warnings.push(`persisted ReadTrials selection is not readable: ${JSON.stringify(e.readTrials)}`),t.needsRepair=!0),e.compareInterim!==void 0&&(t.needsRepair=!0),i===null&&e.compare!==void 0&&(t.warnings.push(`persisted Compare selection is not readable: ${JSON.stringify(e.compare)}`),t.needsRepair=!0),{interactionMode:Ct.find(o=>o===e.interactionMode)??n.interactionMode,estimateQueryMode:k2.find(o=>o===e.estimateQueryMode)??n.estimateQueryMode,readTrials:r??n.readTrials,compare:i??n.compare}}function ZB(e,n,t){const{unavailableAdhoc:r}=Nn(e,n);return r===null?e:(t.needsRepair=!0,t.warnings.push("persisted adhoc entry names nothing in the loaded data: "+Ma(r)),t.readerFacingMessages.push(`The adhoc result you were last viewing here is no longer available, so the page opened on the methodical results instead. ${zB} (It was: ${Ma(r)}.)`),{...e,adhoc:null})}function eH(e){if(typeof e!="object"||e===null)return{};const n={};for(const t of Ct){const r=EB(e[t]);r!==null&&(n[t]=r)}return n}function nH(e,n){const{state:t,report:r}=tH(e,n);if(r.needsRepair)try{iT(e.config,t.ui,n)}catch(i){console.warn("could not rewrite the stored selection",i)}return{state:t,readerFacingMessages:r.readerFacingMessages}}function tH(e,n){const t=e.config.localStorage_prefix,r=e.get_options(),i=KB(e),o=qa(Fa(t,K$)),a=o?Gu(r,z2(r,GB(r,o))):i.optionValues,u=Fr(r,a,"plainnum"),s=Fr(r,a,"code"),l=Q$(n),c=qa(Fa(t,X$)),{[YB]:d,interactionMode:p,estimateQueryMode:m,readTrials:f,compare:h,compareInterim:v,modelEffortPinned:_,selection:g,lastAdhocSelection:b,lastMethoSelection:y,selectedJtaskGroupId:E,whose:A,lastAdhocWhose:T,lastMethoWhose:C,lastYoursWhose:L,resultTrialSelection:$,modelEffortSweepScope:w,codePlotTargetKind:S,codePlotFormulaId:I,codePlotRawResponseName:R,...P}=c??{},k={readerFacingMessages:[],needsRepair:!1,warnings:[]},H=QB(c,l,k);for(const ae of k.warnings)console.warn(`${ae}; starting from the default view`);const q=Eo(n.presetData).includes(H.interactionMode)?H.interactionMode:H2,M={...H,interactionMode:q,estimateQueryMode:rT(H.estimateQueryMode,e.has_cparams()),readTrials:ZB(H.readTrials,n,k)},Z=oH(l,P),G={...Z,...M,inspectedCparamValues:{...structuredClone(l.inspectedCparamValues),...$B(e,Z.inspectedCparamValues)},scrollPositionByInteractionMode:eH(Z.scrollPositionByInteractionMode)},z=XB(e,u,a),te=xB(e,s,a);return{state:{optionValues:a,plainnumOptionDictKey:u,codeOptionDictKey:s,ui:G,yoursRecord:z,yoursCodeRecord:te},report:k}}function Q2(e,n){const t=e.localStorage_prefix;e_(Fa(t,K$),n)}function iT(e,n,t){const r=e.localStorage_prefix;e_(Fa(r,X$),iH(n,Q$(t)))}function rH(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function iH(e,n,t){const r={};for(const i of W$){if(Ao[i]==="whole"){Xn(e[i],n[i])||(r[i]=e[i]);continue}const o=e[i],a=n[i];for(const s of Object.keys(a)){if(o[s]!==void 0)continue;const l=`UI state ${i} lacks the entry ${JSON.stringify(s)} that its default supplies, which cannot be stored as a deviation`;console.warn(l)}const u=Object.fromEntries(Object.entries(o).filter(([s,l])=>!Xn(l,a[s])));Object.keys(u).length>0&&(r[i]=u)}return r}function oH(e,n){const t={};for(const r of W$){const i=n[r];i===void 0?t[r]=structuredClone(e[r]):Ao[r]==="entrywise"&&rH(i)?t[r]={...structuredClone(e[r]),...i}:t[r]=i}return t}function Z2(e,n,t,r){r.timestamp||(r.timestamp=new Date().toISOString()),r.content_hash=ZA("plainnum",n,r.aopts,r.cparam_values??{}),e_(ju(e.aid,t),r)}function aH(e,n,t){const{aopts:r,cparam_values:i}=Z$(n.get_options(),t);return{...e,aopts:r,cparam_values:i,raw_input:{...e.raw_input??{}},reasoning_response:{...e.reasoning_response},trial_choices:{...e.trial_choices??{}},lloads_draft:e.lloads_draft===void 0?void 0:structuredClone(e.lloads_draft),trials:e.trials.map(o=>({point:{...o.point},bounds:{...o.bounds},sample:{...o.sample},lloads:o.lloads===void 0?void 0:structuredClone(o.lloads)})),timestamp:void 0}}function uH(e,n,t){const r={};for(const i of n.get_aopts()){const o=ge(i.id);o in t&&(r[o]=t[o])}return{...e,aopts:r,reasoning_response:{...e.reasoning_response},trial_choices:{...e.trial_choices??{}},cparam_combos:[],cparam_names:[],verified_code_input:void 0,timestamp:void 0}}function nb(e,n,t,r){const i={...e.optionValues,[t]:r},o=Fr(n.get_options(),i,"plainnum"),a=Fr(n.get_options(),i,"code");let u=e.yoursRecord;o!==e.plainnumOptionDictKey&&(u=tT(ju(n.aid,o))??aH(e.yoursRecord,n,i));let s=e.yoursCodeRecord;return a!==e.codeOptionDictKey&&(s=qa(Uu(n.aid,a))??uH(e.yoursCodeRecord,n,i)),(o!==e.plainnumOptionDictKey||a!==e.codeOptionDictKey)&&Q2(n.config,i),{optionValues:i,plainnumOptionDictKey:o,codeOptionDictKey:a,ui:e.ui,yoursRecord:u,yoursCodeRecord:s}}function sH(){const e={};for(let n=0;n<localStorage.length;n++){const t=localStorage.key(n);e[t]=localStorage.getItem(t)}return e}function lH(e){localStorage.clear();for(const[n,t]of Object.entries(e))localStorage.setItem(n,String(t))}function cH(){const e=new URLSearchParams(window.location.search),n=e.get("_preload");if(!n)return;try{const r=atob(n),i=JSON.parse(r);for(const[o,a]of Object.entries(i))localStorage.setItem(o,String(a))}catch(r){alert(`Failed to load preload state: ${r}`)}e.delete("_preload");const t=e.toString()?`${window.location.pathname}?${e}`:window.location.pathname;history.replaceState(null,"",t)}function qa(e){try{const n=localStorage.getItem(e);return n===null?null:JSON.parse(n)}catch{return null}}function e_(e,n){localStorage.setItem(e,JSON.stringify(n))}function n_(){return{wholeFields:{},mapEntries:{}}}const oT=Object.keys(Ao);function ji(e,n){return e[n]}function xa(e,n){return e[n]===void 0?null:{value:e[n]}}function t_(e,n){return e===null||n===null?e===n:Xn(e.value,n.value)}function dH(e,n){const t=n_();for(const r of oT){if(Ao[r]==="whole"){if(Xn(e[r],n[r]))continue;t.wholeFields[r]={fromLink:structuredClone(n[r]),readersOwn:structuredClone(e[r])};continue}const i=ji(e,r),o=ji(n,r),a={};for(const u of new Set([...Object.keys(i),...Object.keys(o)])){const s=xa(i,u),l=xa(o,u);t_(s,l)||(a[u]=structuredClone({fromLink:l,readersOwn:s}))}Object.keys(a).length>0&&(t.mapEntries[r]=a)}return t}function fH(e,n){for(const[t,r]of Object.entries(e.wholeFields))if(!Xn(r.readersOwn,n[t]))return!0;for(const[t,r]of Object.entries(e.mapEntries)){const i=ji(n,t);for(const[o,a]of Object.entries(r))if(!t_(a.readersOwn,xa(i,o)))return!0}return!1}function pH(e,n){for(const t of oT){const r=e.wholeFields[t];r!==void 0&&!Xn(n[t],r.fromLink)&&delete e.wholeFields[t];const i=e.mapEntries[t];if(i!==void 0){for(const[o,a]of Object.entries(i))t_(xa(ji(n,t),o),a.fromLink)||delete i[o];Object.keys(i).length===0&&delete e.mapEntries[t]}}}function mH(e,n){const t={...e};for(const[r,i]of Object.entries(n.wholeFields))t[r]=structuredClone(i.readersOwn);for(const[r,i]of Object.entries(n.mapEntries)){const o={...ji(e,r)};for(const[a,u]of Object.entries(i))u.readersOwn===null?delete o[a]:o[a]=structuredClone(u.readersOwn.value);t[r]=o}return t}const nn={whose:"whose",jtaskGroup:"jtask_group",model:"model",version:"version",effort:"effort",aggregate:"aggregate",adhocName:"adhoc_name",adhocLabel:"adhoc_label"},r_=Object.values(nn),Vi="preset";function hH(e){return e.has(nn.whose)||e.has(Vi)}const aT={"yours-plainnum":{whoseKind:"yours",queryMode:"plainnum"},"yours-plaincode":{whoseKind:"yours",queryMode:"plaincode"},"adhoc-plainnum":{whoseKind:"adhoc",queryMode:"plainnum"},"adhoc-plaincode":{whoseKind:"adhoc",queryMode:"plaincode"},"metho-richcode":{whoseKind:"metho"}},rl=Object.keys(aT),tb=["model_size__version","model_size","all"];function vH(e){const n=e.get(Vi),t=_H(e);return n===null?t:{identity:t.identity,errors:[`${Vi}=${JSON.stringify(n)} is a retired list position, not a selection this deploy can resolve; the link's selection was dropped and the rest of it kept`]}}function _H(e){const n=[],t=e.get(nn.whose);if(t===null)return gH(e)&&n.push(`selection parameters were given without whose; expected whose=${rl.join("|")}`),{identity:null,errors:n};const r=rl.find(d=>d===t);if(r===void 0)return n.push(`whose=${JSON.stringify(t)} invalid; expected one of: ${rl.join(", ")}`),{identity:null,errors:n};const i=aT[r];if(i.whoseKind==="yours")return{identity:{whoseKind:"yours",queryMode:i.queryMode},errors:n};if(i.whoseKind==="adhoc"){const d=e.get(nn.adhocName),p=e.get(nn.adhocLabel),m=[d===null?nn.adhocName:null,p===null?nn.adhocLabel:null].filter(f=>f!==null);return d===null||p===null?(n.push(`whose=${r} requires ${m.join(" and ")}`),{identity:null,errors:n}):{identity:{whoseKind:"adhoc",nameOrPseudoname:d,queryMode:i.queryMode,label:p},errors:n}}const o=e.get(nn.jtaskGroup),a=e.get(nn.model),u=e.get(nn.version),s=[o===null?nn.jtaskGroup:null,a===null?nn.model:null,u===null?nn.version:null].filter(d=>d!==null);if(o===null||a===null||u===null)return n.push(`whose=${r} requires ${s.join(", ")}`),{identity:null,errors:n};const l=e.get(nn.aggregate),c=l===null?null:tb.find(d=>d===l)??null;return l!==null&&c===null?(n.push(`aggregate=${JSON.stringify(l)} invalid; expected one of: ${tb.join(", ")}`),{identity:null,errors:n}):{identity:{whoseKind:"metho",jtaskGroupId:o,model:a,version:u,effort:e.get(nn.effort),aggregate:c},errors:n}}function gH(e){return r_.some(n=>n!==nn.whose&&e.has(n))}function bH(e,n){if(e.aggregate==="all")return null;if(e.aggregate==="model_size__version")return{agentClis:[],modelVersions:[Dr(e.model,e.version)],efforts:[]};if(e.aggregate==="model_size"){const t=xu(n.richcodeResults,e.jtaskGroupId);return{agentClis:[],modelVersions:[...new Set(t.filter(r=>r.model===e.model).map(r=>Dr(r.model,r.version)))],efforts:[]}}if(e.effort===null)throw new Error("a methodical identity with no aggregate kind names a configuration, which has an effort");return M$({model:e.model,version:e.version,effort:e.effort})}function yH(e,n){const t=e.whoseKind==="metho"?e:null;return{mode:e.whoseKind==="yours"?"Estimate":"ReadTrials",estimateQueryMode:e.whoseKind==="yours"?e.queryMode:null,readTrials:{jtaskGroupId:(t==null?void 0:t.jtaskGroupId)??null,mixtureGroupSelection:t===null?null:bH(t,n),adhoc:e.whoseKind==="adhoc"?{nameOrPseudoname:e.nameOrPseudoname,queryMode:e.queryMode,label:e.label}:null,trial:Yn}}}const nr="mix",Ar={kind:"mix"};function Wi(e){return{kind:"trial",recordTrialIndex:e}}function uT(e){return e.kind==="mix"?nr:String(e.recordTrialIndex)}function sT(e){return e===nr?Ar:EH(e)?Wi(Number(e)):null}function EH(e){return/^\d+$/.test(e)}const lT=4,SH=3,wH=1e-4,AH=1e4,rb=3;function ib(e){const[n,t]=e.split("e"),r=n.includes(".")?n.replace(/0+$/,"").replace(/\.$/,""):n;return t===void 0?r:`${r}e${t}`}function $H(e){switch(e){case"deterministic":return lT;case"monte-carlo":return SH;default:{const n=e;throw new Error(`Unknown calculation precision: ${String(n)}`)}}}function Ba(e,n){if(Number.isNaN(e))return String(e);if(!Number.isFinite(e))return e>0?"∞":"-∞";if(e===0)return"0";const t=Number(e.toPrecision(n));if(t===0)return"0";const r=Math.abs(t);if(r<wH||r>=AH)return ib(t.toExponential(n-1));const i=Math.floor(Math.log10(r)),o=Math.max(0,n-1-i);return ib(t.toFixed(o))}function cT(e){return Number.isFinite(e)?e>=1?"∞:1":e<=0?"1:∞":e>=.5?`${Ba(e/(1-e),rb)}:1`:`1:${Ba((1-e)/e,rb)}`:"—"}function Ki(e,n){if(!Number.isFinite(e)||e===0)return e;const t=lT,r=Number(e.toPrecision(t));if(n==="floor"?r<=e:r>=e)return r;const i=Math.floor(Math.log10(Math.abs(r))),o=Math.pow(10,i-t+1),a=n==="floor"?r-o:r+o;return Number(a.toPrecision(t))}function Pe(e,n,t,r="deterministic"){const i=$H(r);return vu(n)?t==="odds"?cT(e):Ba(e*100,i)+"%":Ba(e,i)}const TH=`<p>Joint dependence lets you say how your distributions move <em>together</em>, beyond what each one says on its own. You express it as <b>named latents</b>: each latent is one shared influence, described in your own words, with a signed <b>loading</b> on each quantity it touches.</p>
<ul>
<li>A latent&#39;s description must make its <b>positive direction</b> explicit — the loading signs are relative to it, and nothing else records what the latent means.</li>
<li><code>+0.7</code>: the quantity tends to be high when the latent is high. <code>−0.7</code>: it tends to be low. <code>0</code>: the latent does not touch it.</li>
<li><b>Your marginals are unchanged.</b> Whatever dependence you state, each quantity&#39;s own distribution stays exactly as you gave it. Dependence changes only how the quantities move together, never what any one of them looks like alone.</li>
<li>Per quantity, the squared loadings across all latents may sum to at most 1. Whatever is left over is that quantity&#39;s own independent variation; at a total of 1 the latents fully determine it.</li>
</ul>
<h4>Two legitimate stories, same math</h4>
<ul>
<li><b>Correlated error in your own estimates</b> — e.g. &quot;if one of my probabilities is too high, the others likely are too&quot;. The conclusion&#39;s spread then reflects distrust of your own estimation.</li>
<li><b>A shared, unresolved state of the world</b> the problem does not condition on — one mechanism, source, or scenario standing behind several quantities. Its loadings take their signs from that causal structure and are often mixed-sign. The conclusion&#39;s spread then reflects irreducible uncertainty given the evidence.</li>
</ul>
<p>Say which one you mean. And note that dependence does not only widen: loading a ratio&#39;s numerator and its denominator in the same direction makes them rise and fall together, which <em>narrows</em> that ratio. That is sometimes exactly the belief you hold — but check the independent-vs-joint comparison, rather than reasoning from the signs alone.</p>`,IH="On the point estimates:",LH="Logically-implied analogous invariants are also enforced on the bounds and on sample-distribution quantiles. Violations surface as consistency-failure warnings, and any that remain in your submitted response are recorded with it.",i_={joint_dependence:TH,"srcquote-explainer":"Text in this style is source material related to the entity above it.",logical_consistency_point_list_intro:IH,logical_consistency_other_response_types:LH},dT="logical-consistency-content",ob="logical-consistency-fold",RH="Logical consistency requirements",CH=!0,OH="logical-consistency-section-text",NH="logical-consistency-violations",kH="logical-consistency",MH="logical_consistency_point_list_intro",PH="logical_consistency_other_response_types",DH="- ";function ab(e){const n=i_[e];if(n===void 0)throw new Error(`shared_text.json is missing section '${e}' (regenerate via \`just gen\`)`);return n}function fT(e){return e.replace(/_/g," ")}const pT="must not depend on";function FH(e,n){return e==="constant"?`${pT} [${n}]`:`must be ${fT(e)} in [${n}]`}function Vu(e){return e.startsWith(Hh)}function mT(e,n){return Vu(n)?`{${e.form_produced_expr(n)}}`:`[${n}]`}function qH(e){const n=e.logical_consistency_or_none();if(n===null)return null;const t=[ab(MH)];for(const[r,i]of Object.entries(n.directions))for(const[o,a]of Object.entries(i))t.push(`${DH}${mT(e,o)} `+FH(a,r));return t.push("",ab(PH),"",n.defn),t.join(`
`)}const xH="Following are the instructions supplied to agents.",BH="This feature is not yet implemented for your estimations.",HH="All estimator agents for trials in the current mixture were given the following instructions, and had the described checks across parameters applied.",UH="Some but not all estimator agents for trials in the current mixture were given the following instructions, and had the described checks across parameters applied. You can see which used the feature by selecting individual trials in the sticky bar.",GH="None had violations.",jH="Some had violations. You can see the violations in the single trial views.",VH="For some, the checks could not be run on the submitted response; the single trial views say why.",ub="This trial's estimator agent was given the following instructions.",WH="It had no violations.",KH="It had violations, which you can view below.",XH="The checks could not be run on its submitted response:",YH={fewer_than_two_wellformed_combinations:"fewer than two parameter combinations got a well-formed response, so there was no pair to compare.",malformed_combination:"the response for at least one parameter combination was malformed.",policy_rejected:"the agent's code was rejected before it ran, so there was no response to check."},JH="Violations left in this trial's submitted response:";function zH(){return`<div class="arg-warning">${x(xH)} <b>${x(BH)}</b></div>`}function hT(e){return e.checked&&e.violations.length>0}function QH(e){const n=YH[e];return n!==void 0?n:e}function ZH(e){return e.checked?`${ub} `+(hT(e)?KH:WH):`${ub} ${XH} `+QH(e.reason)}function eU(e){const n=e.filter(r=>r!==void 0),t=[n.length===e.length?HH:UH,n.some(hT)?jH:GH];return n.some(r=>!r.checked)&&t.push(VH),t.join(" ")}function nU(e){return Vu(e.subject)?e.subject:`${Ci}${e.subject}`}function tU(e,n){if(!Vu(n))return Lt(e.get_svar(n));const t=e.form.find(r=>r.id===n);if(t===void 0)throw new Error(`${e.aid}: "${n}" names no registered formula`);return Lt(t)}const rU={lo:"floor",hi:"ceil"};function iU(e,n,t,r,i,o){if(Vu(t)){const a=o===void 0?e:Ki(e,rU[o]);return Pe(a,r,i)}return n.response_type==="sample"?Pe(e,r,i,"deterministic"):String(e)}function oU(e){return`q${String(Math.round(e*100)).padStart(2,"0")}`}function aU(e){return e==="decreasing"||e==="strictly_decreasing"}function sb(e){const n=e.response_type;switch(n){case"point":return"point";case"sample":if(e.quantile===void 0)throw new Error("Logical consistency: a sample violation names no quantile");return`sample ${oU(e.quantile)}`;case"bounds":if(e.bounds_endpoint===void 0)throw new Error("Logical consistency: a one-endpoint bounds violation names no endpoint");return`bounds ${e.bounds_endpoint}`;default:{const t=n;throw new Error(`Logical consistency: unknown response_type '${String(t)}'`)}}}function uU(e,n,t,r){const i=nU(e),o=tU(n,i),a=Mr(mT(n,i),t),u=Mr(`[cparam:${e.cparam_name}]`,t),s=(h,v)=>x(iU(h,e,i,o,r,v)),l=Object.entries(e.fixed_cparams),c=l.length===0?"":` [${l.map(([h,v])=>`${x(h)} = ${x(String(v))}`).join(", ")}]`,d=x(String(e.from_cparam_value)),p=x(String(e.to_cparam_value));if(e.direction==="constant"){const h=sb(e),v=e.response_type==="bounds"?e.bounds_endpoint:void 0;return`${a} ${h} ${pT} ${u}: ${u} = ${d} → ${p}: ${s(e.from_value,v)} → ${s(e.to_value,v)}${c}`}const m=x(fT(e.direction)),f=e.response_type;switch(f){case"bounds":{const h=aU(e.direction)?`hi(${d}) = ${s(e.from_value,"hi")}, lo(${p}) = ${s(e.to_value,"lo")}`:`hi(${p}) = ${s(e.to_value,"hi")}, lo(${d}) = ${s(e.from_value,"lo")}`;return`${a} bounds violate ${m} in ${u}: ${h}${c}`}case"point":case"sample":{const h=sb(e),v=e.to_value>e.from_value?"increases":e.to_value<e.from_value?"decreases":"stays constant";return`${a} ${h} ${v} (violates ${m}) in ${u}: ${u} = ${d} → ${p}: ${s(e.from_value)} → ${s(e.to_value)}${c}`}default:{const h=f;throw new Error(`Logical consistency: unknown response_type '${String(h)}'`)}}}function sU(e,n,t,r){const i=e.map(o=>{try{return uU(o,n,t,r)}catch{return x(JSON.stringify(o))}});return`<div class="${NH}"><p class="${d2}">${x(JH)}</p><ul class="${p2}">`+i.map(o=>`<li class="${m2}">${o}</li>`).join("")+"</ul></div>"}function lU(e){return e.logical_consistency_or_none()===null?"":`<div id="${dT}"></div>`}function cU(e,n,t,r,i){if(t.kind==="yours")return Wn(tt(t))?{introHtml:zH(),violationsHtml:""}:null;if(!r.some(a=>a!==void 0))return null;if(r.length>1)return{introHtml:`<div class="hir-loud-note">${x(eU(r))}</div>`,violationsHtml:""};const o=r[0];return{introHtml:`<div class="hir-loud-note">${x(ZH(o))}</div>`,violationsHtml:o.checked&&o.violations.length>0?sU(o.violations,e,n,i):""}}function dU(e,n,t,r,i){var s;const o=qH(e);if(o===null)return"";const a=cU(e,n,t,r,i);if(a===null)return"";const u=((s=n.foldOpenById)==null?void 0:s[ob])??CH;return`<details id="${ob}" class="hir-fold ${gt}"${u?" open":""}><summary>${x(RH)}</summary><div class="hir-fold-body">`+a.introHtml+`<div class="${OH}">`+je(o,n,kH)+"</div>"+a.violationsHtml+"</div></details>"}function fU(e,n,t,r,i,o){e.innerHTML=dU(n,t,r,i,o)}const o_="StringFromSet",pU="Parameters",mU="Fixed Parameters",hU="Free Parameters";function vU(e,n,t,r,i,o,a){const u=e.filter(Ta);if(u.length===0)return{headerText:"",bodyHtml:""};const s=Wn(tt(n)),l=n.kind==="yours",c=s?hU:l?pU:mU,d=r??x,p=s?"":vT(u,t,d,i,o),m=[];for(const f of u){const h=ge(f.id),v=d(f.defn),_=(a==null?void 0:a(f))??{atStart:"",atEnd:""},g=t[h]??f.default_value;if(typeof g=="object")throw new Error(`Cparam ${f.id} has a non-scalar current value`);let b=V2(h,f),y="";s?y=H$(f.allowed_values):l?b+=" = "+gU(h,f,g):b+=` <span class="cparam-or-aopt-value">= ${x(String(g))}</span>`,m.push(`<div class="cparam-or-aopt" id="opt-${h}"><div class="cparam-or-aopt-header">${b}</div><div class="cparam-or-aopt-defn">${_.atStart}${v}${_.atEnd}</div>`+y+"</div>")}return{headerText:c,bodyHtml:p+m.join("")}}function vT(e,n,t,r,i){if(!r||!i)return"";const o=_U(e,n);return o===null||r(o)?"":`<div class="arg-warning">${t(i)}</div>`}function _U(e,n){const t={};for(const r of e){const i=ge(r.id),o=n[i]??r.default_value;if(gu(r.allowed_values)==="string"){if(typeof o!="string")return null;t[i]=o;continue}const a=Number(o);if(!Number.isFinite(a))return null;t[i]=a}return t}function gU(e,n,t){return Da(e,n,t,{dataAttribute:"data-cparam-body",selectClass:"cparam-body-select",inputClass:"cparam-body-input"},o_)}function bU(e,n,t,r,i,o,a){const{headerText:u,bodyHtml:s}=vU(n.get_cparams(),i,t.displayOptionValues,d=>je(d,t),o,a,d=>Kn(d.srcquotes,t)),l=document.getElementById("cparams-section");if(!s){e.innerHTML="",l&&(l.hidden=!0);return}l&&(l.hidden=!1);const c=document.getElementById("cparams-section-header");c&&(c.textContent=u),e.innerHTML=s+lU(n)}function yU(e){const n=e.conclusion_expr_or_none();return n===null?null:e.get_display_expr(n)??n}function EU(e,n){const t=yU(e);return t===null?null:nt(t,n)}const _T="jtask-group-provenance-fold",SU="Provenance",wU="Prompt content hashes answered by these trials:",AU="(prompt hash)",$U="(rdev)",TU="rdev suffix:",IU="not recorded",LU="none";function gT(e){return Kr(e).map(n=>{var i;const t=O$(e.richcodeResults,n),r=(i=e.richcodeResults.find(o=>o.jtask_group_id===n))==null?void 0:i.rdev_prompt_suffix;return{jtaskGroupId:n,aopts:t.aopts,contentHashes:t.jtask_group_content_hashes??[],...r===void 0?{}:{rdevPromptSuffix:r}}})}function RU(e){return JSON.stringify(Array.isArray(e)?[...e].map(String).sort():e)}function CU(e,n){const t=new Set(e.flatMap(o=>Object.keys(o.aopts))),r=n.get_aopt_bare_names().filter(o=>t.has(o)),i=[...t].filter(o=>!r.includes(o)).sort();return[...r,...i].filter(o=>new Set(e.map(u=>o in u.aopts?RU(u.aopts[o]):void 0)).size>1)}function OU(e,n){const t=n.get_aopts().find(r=>ge(r.id)===e);return(t==null?void 0:t.longname)??e}function NU(e,n){if(!(n in e.aopts))return IU;const t=e.aopts[n];return Array.isArray(t)?t.length===0?LU:[...t].map(String).sort().join(", "):String(t)}function bT(e,n,t){const r=Pq(t.jtaskHashGroups,e.jtaskGroupId),i=r===null?` <span class="jtask-group-implicit-mark">${AU}</span>`:"",o=e.rdevPromptSuffix===void 0?"":` <span class="jtask-group-rdev-mark">${$U}</span>`,a=e.rdevPromptSuffix===void 0?"":`<div class="jtask-group-rdev-suffix">${TU} ${x(e.rdevPromptSuffix)}</div>`,u=CU(n,t.jprobTemplate),s=u.length===0?"":' <span class="jtask-group-differing-options">'+u.map(m=>`${x(OU(m,t.jprobTemplate))}: `+x(NU(e,m))).join("; ")+"</span>",l=r===null||r===""?"":`<div class="jtask-group-note">${x(r)}</div>`,c=[...e.contentHashes].sort().map(m=>`<code class="jtask-group-content-hash">${x(m)}</code>`).join(" "),d=t.provenanceFoldId??_T,p=t.foldOpenById[d]?" open":"";return`<div class="jtask-group-description"><div class="jtask-group-description-head">Task group <span class="jtask-group-name">${x(e.jtaskGroupId)}</span>${i}${o}${s}</div>`+l+a+`<details id="${x(d)}" class="hir-fold ${gt} jtask-group-provenance-fold"${p}><summary>${SU}</summary><div class="hir-fold-body">${wU} ${c}</div></details></div>`}const a_="calc-response-type-toggle",u_="calc-control-caption",kU="yours-fixfree-radio";function yT(e,n){return e==="Estimate"&&n.has_cparams()}const ET="data-estimate-query-mode",rv="mode-radio-btn",MU={plainnum:"fix",plaincode:"free"};function ST(e){const n=k2.map(t=>`<button class="${rv}${t===e?" active":""}" ${ET}="${t}">${MU[t]}</button>`);return`<div class="mode-radio ${kU}">${n.join("")}</div>`}function PU(e){const n=e.getAttribute(ET);return k2.find(t=>t===n)??null}function DU(e,n,t,r){const i=Xr(r.ui,{presetData:t}).kind==="methodical";let o="";yT(r.ui.interactionMode,n)&&(o+=`<div class="calculator-header-controls">${ST(r.ui.estimateQueryMode)}</div>`),o+=`<div id="${a_}"></div>`;const a=i?wn(r.ui,t):null;a!==null&&_n(a)&&(o+=FU(n,t,r,a)),e.innerHTML=o}function FU(e,n,t,r){const i=gT(n),o=i.find(a=>a.jtaskGroupId===r.jtask_group_id);return o===void 0?"":bT(o,i,{jprobTemplate:e,jtaskHashGroups:n.jtaskHashGroups,foldOpenById:t.ui.foldOpenById})}function qU(e,n,t,r){var p;if(r.ui.interactionMode==="Estimate")return e.innerHTML="",!1;const i=kn(r,t);if(!i)return e.innerHTML='<div style="color: #888; font-size: 13px;">No data.</div>',!1;const o=Qn(r,t),a=n.svar_entries().map(m=>m.bareName),u=a.length,s=Qq(i,o,a),l=s.length;if(l===0)return e.innerHTML='<div style="color: #888; font-size: 13px;">No data for this mode.</div>',!1;const c=l>1;let d='<div class="sample-grid">';for(let m=0;m<l;m++){d+='<div class="sample-col">',c&&(d+=`<div class="sample-col-header">Sample ${m+1}</div>`);for(let f=0;f<u;f++){const h=((p=s[m])==null?void 0:p[f])??"";d+=`<div class="sample-cell">${x(h)}</div>`}d+="</div>"}return d+="</div>",e.innerHTML=d,c}const wT="plot-target-controls",iv="plot-target-kind-radio",AT="plot-formula-select",$T="plot-raw-response-select",TT="Formula";function xU(e){return e.startsWith("form:")?e.slice(5):e}function Wu(e,n,t){return e.form.filter(r=>Uw(r,n)).map(r=>{const i=(t==null?void 0:t[r.id])??null;return{kind:"formula",id:r.id,bareId:xU(r.id),valueRange:(i==null?void 0:i.valueRange)??Lt(r),isConclusion:r.id===e.conclusion_form_or_none(),formEntry:i}})}function IT(e){return e.svar_entries().map(({bareName:n,decl:t})=>({kind:"raw_response",bareName:n,valueRange:Lt(t),isConclusion:!1}))}function s_(e,n,t,r){const i=Wu(e,t,r);if(i.length===0)return null;const o=e.conclusion_form_or_none(),a=n.ui.plotFormulaId||o;return i.find(u=>u.id===a)??i.find(u=>u.id===o)??i[0]}function LT(e,n,t,r){const i=IT(e);return n.ui.plotTargetKind==="raw_response"&&i.length>0?i.find(o=>o.bareName===n.ui.plotRawResponseName)??i[0]:s_(e,n,t,r)??i[0]??null}function RT(e,n){let t=`<select class="${AT}" aria-label="Plot formula">`;for(const r of e)t+=`<option value="${X(r.id)}"${r.id===n?" selected":""}>${x(r.bareId)}</option>`;return t+="</select>",t}function CT(e,n,t,r,i){var d;const o=Wu(e,t,i),a=IT(e);if(o.length===0&&a.length===0)return"";const u=(r==null?void 0:r.kind)??"formula",s=(r==null?void 0:r.kind)==="formula"?r.id:n.ui.plotFormulaId||e.conclusion_form_or_none(),l=(r==null?void 0:r.kind)==="raw_response"?r.bareName:n.ui.plotRawResponseName||(((d=a[0])==null?void 0:d.bareName)??"");let c=`<div class="${wT}">`;if(e.form.length>0&&(c+='<div class="plot-target-kind">',c+=`<label><input type="radio" name="plot-target-kind" class="${iv}" value="formula"${u==="formula"?" checked":""}${o.length===0?" disabled":""}> formulas</label>`,c+=`<label><input type="radio" name="plot-target-kind" class="${iv}" value="raw_response"${u==="raw_response"?" checked":""}${a.length===0?" disabled":""}> raw responses</label>`,c+="</div>"),u==="formula")o.length>1?c+=RT(o,s):o.length===1&&(c+=`<span class="plot-target-single">${x(o[0].bareId)}</span>`);else if(a.length>1){c+=`<select class="${$T}" aria-label="Plot raw response">`;for(const p of a)c+=`<option value="${X(p.bareName)}"${p.bareName===l?" selected":""}>${x(p.bareName)}</option>`;c+="</select>"}else a.length===1&&(c+=`<span class="plot-target-single">${x(a[0].bareName)}</span>`);return c+="</div>",c}function OT(e,n){return Wu(e,n).length>=2}function BU(e,n,t,r){if(!OT(e,n))return"";const i=Wu(e,n,r);return`<div class="${wT}"><label><span class="${u_}">${x(TT)}</span> `+RT(i,(t==null?void 0:t.id)??null)+"</label></div>"}function $o(e,n,t){if(e.kind==="formula"&&e.isConclusion){const a=EU(n,t);if(a!==null)return a}let r,i;if(e.kind==="raw_response")r=`svar:${e.bareName}`,i=e.bareName;else{const a=n.form.find(u=>u.id===e.id);if(!a)throw new Error(`Plot formula ${e.id} is not in the template`);r=Gw(e.id,a.sexpr),i=e.bareId}const o=jw(r);return nt(n.get_display_expr(o)??i,t)}function rt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var il,lb;function HU(){if(lb)return il;lb=1;var e=typeof Object.defineProperty=="function"?Object.defineProperty:null;return il=e,il}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ol,cb;function UU(){if(cb)return ol;cb=1;var e=HU();function n(){try{return e({},"x",{}),!0}catch{return!1}}return ol=n,ol}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var al,db;function GU(){if(db)return al;db=1;var e=Object.defineProperty;return al=e,al}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ul,fb;function NT(){if(fb)return ul;fb=1;function e(n){return typeof n=="number"}return ul=e,ul}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sl,pb;function kT(){if(pb)return sl;pb=1;function e(r){return r[0]==="-"}function n(r){var i="",o;for(o=0;o<r;o++)i+="0";return i}function t(r,i,o){var a=!1,u=i-r.length;return u<0||(e(r)&&(a=!0,r=r.substr(1)),r=o?r+n(u):n(u)+r,a&&(r="-"+r)),r}return sl=t,sl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ll,mb;function jU(){if(mb)return ll;mb=1;var e=NT(),n=kT(),t=String.prototype.toLowerCase,r=String.prototype.toUpperCase;function i(o){var a,u,s;switch(o.specifier){case"b":a=2;break;case"o":a=8;break;case"x":case"X":a=16;break;case"d":case"i":case"u":default:a=10;break}if(u=o.arg,s=parseInt(u,10),!isFinite(s)){if(!e(u))throw new Error("invalid integer. Value: "+u);s=0}return s<0&&(o.specifier==="u"||a!==10)&&(s=4294967295+s+1),s<0?(u=(-s).toString(a),o.precision&&(u=n(u,o.precision,o.padRight)),u="-"+u):(u=s.toString(a),!s&&!o.precision?u="":o.precision&&(u=n(u,o.precision,o.padRight)),o.sign&&(u=o.sign+u)),a===16&&(o.alternate&&(u="0x"+u),u=o.specifier===r.call(o.specifier)?r.call(u):t.call(u)),a===8&&o.alternate&&u.charAt(0)!=="0"&&(u="0"+u),u}return ll=i,ll}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cl,hb;function VU(){if(hb)return cl;hb=1;function e(n){return typeof n=="string"}return cl=e,cl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dl,vb;function WU(){if(vb)return dl;vb=1;var e=Math.abs,n=String.prototype.toLowerCase,t=String.prototype.toUpperCase,r=String.prototype.replace,i=/e\+(\d)$/,o=/e-(\d)$/,a=/^(\d+)$/,u=/^(\d+)e/,s=/\.0$/,l=/\.0*e/,c=/(\..*[^0])0*e/;function d(p,m){var f,h;switch(m.specifier){case"e":case"E":h=p.toExponential(m.precision);break;case"f":case"F":h=p.toFixed(m.precision);break;case"g":case"G":e(p)<1e-4?(f=m.precision,f>0&&(f-=1),h=p.toExponential(f)):h=p.toPrecision(m.precision),m.alternate||(h=r.call(h,c,"$1e"),h=r.call(h,l,"e"),h=r.call(h,s,""));break;default:throw new Error("invalid double notation. Value: "+m.specifier)}return h=r.call(h,i,"e+0$1"),h=r.call(h,o,"e-0$1"),m.alternate&&(h=r.call(h,a,"$1."),h=r.call(h,u,"$1.e")),p>=0&&m.sign&&(h=m.sign+h),h=m.specifier===t.call(m.specifier)?t.call(h):n.call(h),h}return dl=d,dl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fl,_b;function KU(){if(_b)return fl;_b=1;function e(t){var r="",i;for(i=0;i<t;i++)r+=" ";return r}function n(t,r,i){var o=r-t.length;return o<0||(t=i?t+e(o):e(o)+t),t}return fl=n,fl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pl,gb;function XU(){if(gb)return pl;gb=1;var e=jU(),n=VU(),t=NT(),r=WU(),i=KU(),o=kT(),a=String.fromCharCode,u=Array.isArray;function s(d){return d!==d}function l(d){var p={};return p.specifier=d.specifier,p.precision=d.precision===void 0?1:d.precision,p.width=d.width,p.flags=d.flags||"",p.mapping=d.mapping,p}function c(d){var p,m,f,h,v,_,g,b,y,E;if(!u(d))throw new TypeError("invalid argument. First argument must be an array. Value: `"+d+"`.");for(_="",g=1,y=0;y<d.length;y++)if(f=d[y],n(f))_+=f;else{if(p=f.precision!==void 0,f=l(f),!f.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+y+"`. Value: `"+f+"`.");for(f.mapping&&(g=f.mapping),m=f.flags,E=0;E<m.length;E++)switch(h=m.charAt(E),h){case" ":f.sign=" ";break;case"+":f.sign="+";break;case"-":f.padRight=!0,f.padZeros=!1;break;case"0":f.padZeros=m.indexOf("-")<0;break;case"#":f.alternate=!0;break;default:throw new Error("invalid flag: "+h)}if(f.width==="*"){if(f.width=parseInt(arguments[g],10),g+=1,s(f.width))throw new TypeError("the argument for * width at position "+g+" is not a number. Value: `"+f.width+"`.");f.width<0&&(f.padRight=!0,f.width=-f.width)}if(p&&f.precision==="*"){if(f.precision=parseInt(arguments[g],10),g+=1,s(f.precision))throw new TypeError("the argument for * precision at position "+g+" is not a number. Value: `"+f.precision+"`.");f.precision<0&&(f.precision=1,p=!1)}switch(f.arg=arguments[g],f.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":p&&(f.padZeros=!1),f.arg=e(f);break;case"s":f.maxWidth=p?f.precision:-1,f.arg=String(f.arg);break;case"c":if(!s(f.arg)){if(v=parseInt(f.arg,10),v<0||v>127)throw new Error("invalid character code. Value: "+f.arg);f.arg=s(v)?String(f.arg):a(v)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(p||(f.precision=6),b=parseFloat(f.arg),!isFinite(b)){if(!t(f.arg))throw new Error("invalid floating-point number. Value: "+_);b=f.arg,f.padZeros=!1}f.arg=r(b,f);break;default:throw new Error("invalid specifier: "+f.specifier)}f.maxWidth>=0&&f.arg.length>f.maxWidth&&(f.arg=f.arg.substring(0,f.maxWidth)),f.padZeros?f.arg=o(f.arg,f.width||f.precision,f.padRight):f.width&&(f.arg=i(f.arg,f.width,f.padRight)),_+=f.arg||"",g+=1}return _}return pl=c,pl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ml,bb;function YU(){if(bb)return ml;bb=1;var e=XU();return ml=e,ml}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hl,yb;function JU(){if(yb)return hl;yb=1;var e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function n(r){var i={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(i.precision="1"),i}function t(r){var i,o,a,u;for(o=[],u=0,a=e.exec(r);a;)i=r.slice(u,e.lastIndex-a[0].length),i.length&&o.push(i),a[6]==="%"?o.push("%"):o.push(n(a)),u=e.lastIndex,a=e.exec(r);return i=r.slice(u),i.length&&o.push(i),o}return hl=t,hl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vl,Eb;function zU(){if(Eb)return vl;Eb=1;var e=JU();return vl=e,vl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _l,Sb;function QU(){if(Sb)return _l;Sb=1;function e(n){return typeof n=="string"}return _l=e,_l}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gl,wb;function ZU(){if(wb)return gl;wb=1;var e=YU(),n=zU(),t=QU();function r(i){var o,a;if(!t(i))throw new TypeError(r("invalid argument. First argument must be a string. Value: `%s`.",i));for(o=[n(i)],a=1;a<arguments.length;a++)o.push(arguments[a]);return e.apply(null,o)}return gl=r,gl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bl,Ab;function eG(){if(Ab)return bl;Ab=1;var e=ZU();return bl=e,bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yl,$b;function nG(){if($b)return yl;$b=1;var e=eG(),n=Object.prototype,t=n.toString,r=n.__defineGetter__,i=n.__defineSetter__,o=n.__lookupGetter__,a=n.__lookupSetter__;function u(s,l,c){var d,p,m,f;if(typeof s!="object"||s===null||t.call(s)==="[object Array]")throw new TypeError(e("invalid argument. First argument must be an object. Value: `%s`.",s));if(typeof c!="object"||c===null||t.call(c)==="[object Array]")throw new TypeError(e("invalid argument. Property descriptor must be an object. Value: `%s`.",c));if(p="value"in c,p&&(o.call(s,l)||a.call(s,l)?(d=s.__proto__,s.__proto__=n,delete s[l],s[l]=c.value,s.__proto__=d):s[l]=c.value),m="get"in c,f="set"in c,p&&(m||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return m&&r&&r.call(s,l,c.get),f&&i&&i.call(s,l,c.set),s}return yl=u,yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var El,Tb;function tG(){if(Tb)return El;Tb=1;var e=UU(),n=GU(),t=nG(),r;return e()?r=n:r=t,El=r,El}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sl,Ib;function rG(){if(Ib)return Sl;Ib=1;var e=tG();function n(t,r,i){e(t,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}return Sl=n,Sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wl,Lb;function rn(){if(Lb)return wl;Lb=1;var e=rG();return wl=e,wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Al,Rb;function iG(){if(Rb)return Al;Rb=1;function e(n){return n!==n}return Al=e,Al}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $l,Cb;function ue(){if(Cb)return $l;Cb=1;var e=iG();return $l=e,$l}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tl,Ob;function oG(){if(Ob)return Tl;Ob=1;function e(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return Tl=e,Tl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Il,Nb;function aG(){if(Nb)return Il;Nb=1;var e=oG();return Il=e,Il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ll,kb;function uG(){if(kb)return Ll;kb=1;var e=aG(),n=e();function t(){return n&&typeof Symbol.toStringTag=="symbol"}return Ll=t,Ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rl,Mb;function sG(){if(Mb)return Rl;Mb=1;var e=uG();return Rl=e,Rl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cl,Pb;function MT(){if(Pb)return Cl;Pb=1;var e=Object.prototype.toString;return Cl=e,Cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ol,Db;function lG(){if(Db)return Ol;Db=1;var e=MT();function n(t){return e.call(t)}return Ol=n,Ol}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nl,Fb;function cG(){if(Fb)return Nl;Fb=1;var e=Object.prototype.hasOwnProperty;function n(t,r){return t==null?!1:e.call(t,r)}return Nl=n,Nl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kl,qb;function dG(){if(qb)return kl;qb=1;var e=cG();return kl=e,kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ml,xb;function fG(){if(xb)return Ml;xb=1;var e=typeof Symbol=="function"?Symbol:void 0;return Ml=e,Ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pl,Bb;function pG(){if(Bb)return Pl;Bb=1;var e=fG();return Pl=e,Pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dl,Hb;function mG(){if(Hb)return Dl;Hb=1;var e=pG(),n=typeof e=="function"?e.toStringTag:"";return Dl=n,Dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fl,Ub;function hG(){if(Ub)return Fl;Ub=1;var e=dG(),n=mG(),t=MT();function r(i){var o,a,u;if(i==null)return t.call(i);a=i[n],o=e(i,n);try{i[n]=void 0}catch{return t.call(i)}return u=t.call(i),o?i[n]=a:delete i[n],u}return Fl=r,Fl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ql,Gb;function Ku(){if(Gb)return ql;Gb=1;var e=sG(),n=lG(),t=hG(),r;return e()?r=t:r=n,ql=r,ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xl,jb;function vG(){if(jb)return xl;jb=1;var e=Ku(),n=typeof Uint32Array=="function";function t(r){return n&&r instanceof Uint32Array||e(r)==="[object Uint32Array]"}return xl=t,xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bl,Vb;function _G(){if(Vb)return Bl;Vb=1;var e=vG();return Bl=e,Bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hl,Wb;function gG(){if(Wb)return Hl;Wb=1;var e=4294967295;return Hl=e,Hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ul,Kb;function bG(){if(Kb)return Ul;Kb=1;var e=typeof Uint32Array=="function"?Uint32Array:null;return Ul=e,Ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gl,Xb;function yG(){if(Xb)return Gl;Xb=1;var e=_G(),n=gG(),t=bG();function r(){var i,o;if(typeof t!="function")return!1;try{o=[1,3.14,-3.14,n+1,n+2],o=new t(o),i=e(o)&&o[0]===1&&o[1]===3&&o[2]===n-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return Gl=r,Gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jl,Yb;function EG(){if(Yb)return jl;Yb=1;var e=yG();return jl=e,jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vl,Jb;function SG(){if(Jb)return Vl;Jb=1;var e=typeof Uint32Array=="function"?Uint32Array:void 0;return Vl=e,Vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wl,zb;function wG(){if(zb)return Wl;zb=1;function e(){throw new Error("not implemented")}return Wl=e,Wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kl,Qb;function Yr(){if(Qb)return Kl;Qb=1;var e=EG(),n=SG(),t=wG(),r;return e()?r=n:r=t,Kl=r,Kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xl,Zb;function AG(){if(Zb)return Xl;Zb=1;var e=Ku(),n=typeof Float64Array=="function";function t(r){return n&&r instanceof Float64Array||e(r)==="[object Float64Array]"}return Xl=t,Xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yl,e6;function $G(){if(e6)return Yl;e6=1;var e=AG();return Yl=e,Yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jl,n6;function TG(){if(n6)return Jl;n6=1;var e=typeof Float64Array=="function"?Float64Array:null;return Jl=e,Jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zl,t6;function IG(){if(t6)return zl;t6=1;var e=$G(),n=TG();function t(){var r,i;if(typeof n!="function")return!1;try{i=new n([1,3.14,-3.14,NaN]),r=e(i)&&i[0]===1&&i[1]===3.14&&i[2]===-3.14&&i[3]!==i[3]}catch{r=!1}return r}return zl=t,zl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ql,r6;function LG(){if(r6)return Ql;r6=1;var e=IG();return Ql=e,Ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zl,i6;function RG(){if(i6)return Zl;i6=1;var e=typeof Float64Array=="function"?Float64Array:void 0;return Zl=e,Zl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ec,o6;function CG(){if(o6)return ec;o6=1;function e(){throw new Error("not implemented")}return ec=e,ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nc,a6;function Jr(){if(a6)return nc;a6=1;var e=LG(),n=RG(),t=CG(),r;return e()?r=n:r=t,nc=r,nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tc,u6;function OG(){if(u6)return tc;u6=1;var e=Ku(),n=typeof Uint8Array=="function";function t(r){return n&&r instanceof Uint8Array||e(r)==="[object Uint8Array]"}return tc=t,tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rc,s6;function NG(){if(s6)return rc;s6=1;var e=OG();return rc=e,rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ic,l6;function kG(){if(l6)return ic;l6=1;var e=255;return ic=e,ic}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oc,c6;function MG(){if(c6)return oc;c6=1;var e=typeof Uint8Array=="function"?Uint8Array:null;return oc=e,oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ac,d6;function PG(){if(d6)return ac;d6=1;var e=NG(),n=kG(),t=MG();function r(){var i,o;if(typeof t!="function")return!1;try{o=[1,3.14,-3.14,n+1,n+2],o=new t(o),i=e(o)&&o[0]===1&&o[1]===3&&o[2]===n-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return ac=r,ac}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uc,f6;function DG(){if(f6)return uc;f6=1;var e=PG();return uc=e,uc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sc,p6;function FG(){if(p6)return sc;p6=1;var e=typeof Uint8Array=="function"?Uint8Array:void 0;return sc=e,sc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lc,m6;function qG(){if(m6)return lc;m6=1;function e(){throw new Error("not implemented")}return lc=e,lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cc,h6;function xG(){if(h6)return cc;h6=1;var e=DG(),n=FG(),t=qG(),r;return e()?r=n:r=t,cc=r,cc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dc,v6;function BG(){if(v6)return dc;v6=1;var e=Ku(),n=typeof Uint16Array=="function";function t(r){return n&&r instanceof Uint16Array||e(r)==="[object Uint16Array]"}return dc=t,dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fc,_6;function HG(){if(_6)return fc;_6=1;var e=BG();return fc=e,fc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pc,g6;function UG(){if(g6)return pc;g6=1;var e=65535;return pc=e,pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mc,b6;function GG(){if(b6)return mc;b6=1;var e=typeof Uint16Array=="function"?Uint16Array:null;return mc=e,mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hc,y6;function jG(){if(y6)return hc;y6=1;var e=HG(),n=UG(),t=GG();function r(){var i,o;if(typeof t!="function")return!1;try{o=[1,3.14,-3.14,n+1,n+2],o=new t(o),i=e(o)&&o[0]===1&&o[1]===3&&o[2]===n-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return hc=r,hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vc,E6;function VG(){if(E6)return vc;E6=1;var e=jG();return vc=e,vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _c,S6;function WG(){if(S6)return _c;S6=1;var e=typeof Uint16Array=="function"?Uint16Array:void 0;return _c=e,_c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gc,w6;function KG(){if(w6)return gc;w6=1;function e(){throw new Error("not implemented")}return gc=e,gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bc,A6;function XG(){if(A6)return bc;A6=1;var e=VG(),n=WG(),t=KG(),r;return e()?r=n:r=t,bc=r,bc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yc,$6;function YG(){if($6)return yc;$6=1;var e=xG(),n=XG(),t={uint16:n,uint8:e};return yc=t,yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ec,T6;function JG(){if(T6)return Ec;T6=1;var e=YG(),n;function t(){var r,i;return r=new e.uint16(1),r[0]=4660,i=new e.uint8(r.buffer),i[0]===52}return n=t(),Ec=n,Ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sc,I6;function zr(){if(I6)return Sc;I6=1;var e=JG();return Sc=e,Sc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wc,L6;function zG(){if(L6)return wc;L6=1;var e=zr(),n;return e===!0?n=1:n=0,wc=n,wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ac,R6;function QG(){if(R6)return Ac;R6=1;var e=Yr(),n=Jr(),t=zG(),r=new n(1),i=new e(r.buffer);function o(a){return r[0]=a,i[t]}return Ac=o,Ac}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $c,C6;function yn(){if(C6)return $c;C6=1;var e=QG();return $c=e,$c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tc,O6;function ZG(){if(O6)return Tc;O6=1;var e=zr(),n;return e===!0?n=1:n=0,Tc=n,Tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ic,N6;function ej(){if(N6)return Ic;N6=1;var e=Yr(),n=Jr(),t=ZG(),r=new n(1),i=new e(r.buffer);function o(a,u){return r[0]=a,i[t]=u>>>0,r[0]}return Ic=o,Ic}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lc,k6;function To(){if(k6)return Lc;k6=1;var e=ej();return Lc=e,Lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rc,M6;function nj(){if(M6)return Rc;M6=1;var e=zr(),n,t,r;return e===!0?(t=1,r=0):(t=0,r=1),n={HIGH:t,LOW:r},Rc=n,Rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cc,P6;function tj(){if(P6)return Cc;P6=1;var e=Yr(),n=Jr(),t=nj(),r=new n(1),i=new e(r.buffer),o=t.HIGH,a=t.LOW;function u(s,l){return i[o]=s,i[a]=l,r[0]}return Cc=u,Cc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oc,D6;function Xu(){if(D6)return Oc;D6=1;var e=tj();return Oc=e,Oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nc,F6;function Re(){if(F6)return Nc;F6=1;var e=Number.POSITIVE_INFINITY;return Nc=e,Nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kc,q6;function rj(){return q6||(q6=1,kc=Number),kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mc,x6;function ij(){if(x6)return Mc;x6=1;var e=rj();return Mc=e,Mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pc,B6;function on(){if(B6)return Pc;B6=1;var e=ij(),n=e.NEGATIVE_INFINITY;return Pc=n,Pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dc,H6;function ar(){if(H6)return Dc;H6=1;var e=1023;return Dc=e,Dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fc,U6;function oj(){if(U6)return Fc;U6=1;var e=.34657359027997264;return Fc=e,Fc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qc,G6;function aj(){if(G6)return qc;G6=1;function e(n){return n===0?-.03333333333333313:-.03333333333333313+n*(.0015873015872548146+n*(-793650757867488e-19+n*(4008217827329362e-21+n*-20109921818362437e-23)))}return qc=e,qc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_expm1.c} and [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_expm1.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var xc,j6;function uj(){if(j6)return xc;j6=1;var e=ue(),n=yn(),t=To(),r=Xu(),i=Re(),o=on(),a=ar(),u=oj(),s=aj(),l=709.782712893384,c=.6931471803691238,d=19082149292705877e-26,p=1.4426950408889634,m=38.816242111356935,f=1.0397207708399179;function h(v){var _,g,b,y,E,A,T,C,L,$,w,S,I;if(v===i||e(v))return v;if(v===o)return-1;if(v===0)return v;if(v<0?(b=!0,C=-v):(b=!1,C=v),C>=m){if(b)return-1;if(C>=l)return i}if(A=n(C)|0,C>u)C<f?b?(y=v+c,E=-d,I=-1):(y=v-c,E=d,I=1):(b?I=p*v-.5:I=p*v+.5,I|=0,w=I,y=v-w*c,E=w*d),v=y-E,$=y-v-E;else{if(A<1016070144)return v;I=0}return _=.5*v,L=v*_,T=1+L*s(L),w=3-T*_,S=L*((T-w)/(6-v*w)),I===0?v-(v*S-L):(g=r(a+I<<20,0),S=v*(S-$)-$,S-=L,I===-1?.5*(v-S)-.5:I===1?v<-.25?-2*(S-(v+.5)):1+2*(v-S):I<=-2||I>56?(C=1-(S-v),I===1024?(y=n(C)+(I<<20)|0,C=t(C,y)):C*=g,C-1):(w=1,I<20?(y=1072693248-(2097152>>I)|0,w=t(w,y),C=w-(S-v)):(y=a-I<<20|0,w=t(w,y),C=v-(S+w),C+=1),C*=g,C))}return xc=h,xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bc,V6;function Qr(){if(V6)return Bc;V6=1;var e=uj();return Bc=e,Bc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hc,W6;function sj(){if(W6)return Hc;W6=1;var e=Math.floor;return Hc=e,Hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uc,K6;function it(){if(K6)return Uc;K6=1;var e=sj();return Uc=e,Uc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gc,X6;function lj(){if(X6)return Gc;X6=1;function e(n){return n===0?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+n*.14798198605116586)))))}return Gc=e,Gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_log1p.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var jc,Y6;function cj(){if(Y6)return jc;Y6=1;var e=ue(),n=yn(),t=To(),r=Re(),i=on(),o=ar(),a=lj(),u=.6931471803691238,s=19082149292705877e-26,l=.41421356237309503,c=-.2928932188134525,d=1862645149230957e-24,p=5551115123125783e-32,m=9007199254740992,f=.6666666666666666;function h(v){var _,g,b,y,E,A,T,C,L,$;if(v<-1||e(v))return NaN;if(v===-1)return i;if(v===r||v===0)return v;if(v<0?b=-v:b=v,$=1,b<l){if(b<d)return b<p?v:v-v*v*.5;v>c&&($=0,y=v,g=1)}return $!==0&&(b<m?(L=1+v,g=n(L),$=(g>>20)-o,$>0?E=1-(L-v):E=v-(L-1),E/=L):(L=v,g=n(L),$=(g>>20)-o,E=0),g&=1048575,g<434334?L=t(L,g|1072693248):($+=1,L=t(L,g|1071644672),g=1048576-g>>2),y=L-1),_=.5*y*y,g===0?y===0?(E+=$*s,$*u+E):(C=_*(1-f*y),$*u-(C-($*s+E)-y)):(A=y/(2+y),T=A*A,C=T*a(T),$===0?y-(_-A*(_+C)):$*u-(_-(A*(_+C)+($*s+E))-y))}return jc=h,jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vc,J6;function En(){if(J6)return Vc;J6=1;var e=cj();return Vc=e,Vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wc,z6;function dj(){if(z6)return Wc;z6=1;var e=Math.sqrt;return Wc=e,Wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kc,Q6;function be(){if(Q6)return Kc;Q6=1;var e=dj();return Kc=e,Kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xc,Z6;function PT(){if(Z6)return Xc;Z6=1;var e=.7853981633974483;return Xc=e,Xc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yc,e4;function fj(){if(e4)return Yc;e4=1;function e(n){var t,r,i;return n===0?.16666666666666713:(n<0?t=-n:t=n,t<=1?(r=-8.198089802484825+n*(19.562619833175948+n*(-16.262479672107002+n*(5.444622390564711+n*(-.6019598008014124+n*.004253011369004428)))),i=-49.18853881490881+n*(139.51056146574857+n*(-147.1791292232726+n*(70.49610280856842+n*(-14.740913729888538+n*1))))):(n=1/n,r=.004253011369004428+n*(-.6019598008014124+n*(5.444622390564711+n*(-16.262479672107002+n*(19.562619833175948+n*-8.198089802484825)))),i=1+n*(-14.740913729888538+n*(70.49610280856842+n*(-147.1791292232726+n*(139.51056146574857+n*-49.18853881490881))))),r/i)}return Yc=e,Yc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jc,n4;function pj(){if(n4)return Jc;n4=1;function e(n){var t,r,i;return n===0?.08333333333333809:(n<0?t=-n:t=n,t<=1?(r=28.536655482610616+n*(-25.56901049652825+n*(6.968710824104713+n*(-.5634242780008963+n*.002967721961301243))),i=342.43986579130785+n*(-383.8770957603691+n*(147.0656354026815+n*(-21.947795316429207+n*1)))):(n=1/n,r=.002967721961301243+n*(-.5634242780008963+n*(6.968710824104713+n*(-25.56901049652825+n*28.536655482610616))),i=1+n*(-21.947795316429207+n*(147.0656354026815+n*(-383.8770957603691+n*342.43986579130785)))),r/i)}return Jc=e,Jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var zc,t4;function mj(){if(t4)return zc;t4=1;var e=ue(),n=be(),t=PT(),r=fj(),i=pj(),o=6123233995736766e-32;function a(u){var s,l,c,d,p;if(e(u))return NaN;if(u>0?c=u:(s=!0,c=-u),c>1)return NaN;if(c>.625)l=1-c,d=l*i(l),l=n(l+l),p=t-l,l=l*d-o,p-=l,p+=t;else{if(c<1e-8)return u;l=c*c,p=l*r(l),p=c*p+c}return s?-p:p}return zc=a,zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qc,r4;function l_(){if(r4)return Qc;r4=1;var e=mj();return Qc=e,Qc}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zc,i4;function hj(){if(i4)return Zc;i4=1;function e(n){return Math.abs(n)}return Zc=e,Zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e0,o4;function ye(){if(o4)return e0;o4=1;var e=hj();return e0=e,e0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n0,a4;function vj(){if(a4)return n0;a4=1;var e=Math.ceil;return n0=e,n0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t0,u4;function _j(){if(u4)return t0;u4=1;var e=vj();return t0=e,t0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r0,s4;function gj(){if(s4)return r0;s4=1;var e=it(),n=_j();function t(r){return r<0?n(r):e(r)}return r0=t,r0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i0,l4;function c_(){if(l4)return i0;l4=1;var e=gj();return i0=e,i0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o0,c4;function bj(){if(c4)return o0;c4=1;var e=1023;return o0=e,o0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a0,d4;function yj(){if(d4)return a0;d4=1;var e=-1023;return a0=e,a0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u0,f4;function Ej(){if(f4)return u0;f4=1;var e=-1074;return u0=e,u0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s0,p4;function Sj(){if(p4)return s0;p4=1;var e=Re(),n=on();function t(r){return r===e||r===n}return s0=t,s0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l0,m4;function Zr(){if(m4)return l0;m4=1;var e=Sj();return l0=e,l0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c0,h4;function wj(){if(h4)return c0;h4=1;var e=2147483648;return c0=e,c0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d0,v4;function ur(){if(v4)return d0;v4=1;var e=2147483647;return d0=e,d0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f0,_4;function Aj(){if(_4)return f0;_4=1;var e=zr(),n,t,r;return e===!0?(t=1,r=0):(t=0,r=1),n={HIGH:t,LOW:r},f0=n,f0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p0,g4;function DT(){if(g4)return p0;g4=1;var e=Yr(),n=Jr(),t=Aj(),r=new n(1),i=new e(r.buffer),o=t.HIGH,a=t.LOW;function u(s,l,c,d){return r[0]=s,l[d]=i[o],l[d+c]=i[a],l}return p0=u,p0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m0,b4;function $j(){if(b4)return m0;b4=1;var e=DT();function n(t){return e(t,[0,0],1,0)}return m0=n,m0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h0,y4;function d_(){if(y4)return h0;y4=1;var e=rn(),n=$j(),t=DT();return e(n,"assign",t),h0=n,h0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v0,E4;function Tj(){if(E4)return v0;E4=1;var e=wj(),n=ur(),t=d_(),r=yn(),i=Xu(),o=[0,0];function a(u,s){var l,c;return t.assign(u,o,1,0),l=o[0],l&=n,c=r(s),c&=e,l|=c,i(l,o[1])}return v0=a,v0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _0,S4;function f_(){if(S4)return _0;S4=1;var e=Tj();return _0=e,_0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g0,w4;function sr(){if(w4)return g0;w4=1;var e=22250738585072014e-324;return g0=e,g0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b0,A4;function FT(){if(A4)return b0;A4=1;var e=sr(),n=Zr(),t=ue(),r=ye(),i=4503599627370496;function o(a,u,s,l){return t(a)||n(a)?(u[l]=a,u[l+s]=0,u):a!==0&&r(a)<e?(u[l]=a*i,u[l+s]=-52,u):(u[l]=a,u[l+s]=0,u)}return b0=o,b0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y0,$4;function Ij(){if($4)return y0;$4=1;var e=FT();function n(t){return e(t,[0,0],1,0)}return y0=n,y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E0,T4;function Lj(){if(T4)return E0;T4=1;var e=rn(),n=Ij(),t=FT();return e(n,"assign",t),E0=n,E0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S0,I4;function Yu(){if(I4)return S0;I4=1;var e=2146435072;return S0=e,S0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w0,L4;function Rj(){if(L4)return w0;L4=1;var e=yn(),n=Yu(),t=ar();function r(i){var o=e(i);return o=(o&n)>>>20,o-t|0}return w0=r,w0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A0,R4;function Cj(){if(R4)return A0;R4=1;var e=Rj();return A0=e,A0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $0,C4;function Oj(){if(C4)return $0;C4=1;var e=Re(),n=on(),t=ar(),r=bj(),i=yj(),o=Ej(),a=ue(),u=Zr(),s=f_(),l=Lj().assign,c=Cj(),d=d_(),p=Xu(),m=2220446049250313e-31,f=2148532223,h=[0,0],v=[0,0];function _(g,b){var y,E;return b===0||g===0||a(g)||u(g)?g:(l(g,h,1,0),g=h[0],b+=h[1],b+=c(g),b<o?s(0,g):b>r?g<0?n:e:(b<=i?(b+=52,E=m):E=1,d.assign(g,v,1,0),y=v[0],y&=f,y|=b+t<<20,E*p(y,v[1])))}return $0=_,$0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T0,O4;function ei(){if(O4)return T0;O4=1;var e=Oj();return T0=e,T0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I0,N4;function Nj(){if(N4)return I0;N4=1;function e(n){return n===0?.16666666666666602:.16666666666666602+n*(-.0027777777777015593+n*(6613756321437934e-20+n*(-16533902205465252e-22+n*41381367970572385e-24)))}return I0=e,I0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var L0,k4;function kj(){if(k4)return L0;k4=1;var e=ei(),n=Nj();function t(r,i,o){var a,u,s,l;return a=r-i,u=a*a,s=a-u*n(u),l=1-(i-a*s/(2-s)-r),e(l,o)}return L0=t,L0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var R0,M4;function Mj(){if(M4)return R0;M4=1;var e=ue(),n=c_(),t=on(),r=Re(),i=kj(),o=.6931471803691238,a=19082149292705877e-26,u=1.4426950408889634,s=709.782712893384,l=-745.1332191019411,c=1/(1<<28),d=-c;function p(m){var f,h,v;return e(m)||m===r?m:m===t?0:m>s?r:m<l?0:m>d&&m<c?1+m:(m<0?v=n(u*m-.5):v=n(u*m+.5),f=m-v*o,h=v*a,i(f,h,v))}return R0=p,R0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C0,P4;function Ce(){if(P4)return C0;P4=1;var e=Mj();return C0=e,C0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O0,D4;function Pj(){if(D4)return O0;D4=1;var e=it();function n(t){return e(t)===t}return O0=n,O0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N0,F4;function ni(){if(F4)return N0;F4=1;var e=Pj();return N0=e,N0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k0,q4;function Dj(){if(q4)return k0;q4=1;var e=ni();function n(t){return e(t/2)}return k0=n,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M0,x4;function Fj(){if(x4)return M0;x4=1;var e=Dj();return M0=e,M0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P0,B4;function qj(){if(B4)return P0;B4=1;var e=Fj();function n(t){return t>0?e(t-1):e(t+1)}return P0=n,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D0,H4;function p_(){if(H4)return D0;H4=1;var e=qj();return D0=e,D0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F0,U4;function xj(){if(U4)return F0;U4=1;var e=zr(),n;return e===!0?n=0:n=1,F0=n,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q0,G4;function Bj(){if(G4)return q0;G4=1;var e=Yr(),n=Jr(),t=xj(),r=new n(1),i=new e(r.buffer);function o(a,u){return r[0]=a,i[t]=u>>>0,r[0]}return q0=o,q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x0,j4;function Io(){if(j4)return x0;j4=1;var e=Bj();return x0=e,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0,V4;function Hj(){if(V4)return B0;V4=1;function e(n){return n|0}return B0=e,B0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H0,W4;function qT(){if(W4)return H0;W4=1;var e=Hj();return H0=e,H0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var U0,K4;function Uj(){if(K4)return U0;K4=1;var e=p_(),n=f_(),t=on(),r=Re();function i(o,a){return a===t?r:a===r?0:a>0?e(a)?o:0:e(a)?n(r,o):r}return U0=i,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var G0,X4;function Gj(){if(X4)return G0;X4=1;var e=ur(),n=yn(),t=1072693247,r=1e300,i=1e-300;function o(a,u){var s,l;return l=n(a),s=l&e,s<=t?u<0?r*r:i*i:u>0?r*r:i*i}return G0=o,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,Y4;function jj(){if(Y4)return j0;Y4=1;var e=ye(),n=Re();function t(r,i){return r===-1?(r-r)/(r-r):r===1?1:e(r)<1==(i===n)?0:n}return j0=t,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0,J4;function xT(){if(J4)return V0;J4=1;var e=20;return V0=e,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,z4;function Vj(){if(z4)return W0;z4=1;function e(n){return n===0?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+n*.20697501780033842))))}return W0=e,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var K0,Q4;function Wj(){if(Q4)return K0;Q4=1;var e=yn(),n=Io(),t=To(),r=ar(),i=xT(),o=Vj(),a=1048575,u=1048576,s=1072693248,l=536870912,c=524288,d=9007199254740992,p=.9617966939259756,m=.9617967009544373,f=-7028461650952758e-24,h=[1,1.5],v=[0,.5849624872207642],_=[0,1350039202129749e-23];function g(b,y,E){var A,T,C,L,$,w,S,I,R,P,k,H,D,q,M,Z,G,z,te,ae,j,Y;return ae=0,E<u&&(y*=d,ae-=53,E=e(y)),ae+=(E>>i)-r|0,j=E&a|0,E=j|s|0,j<=235662?Y=0:j<767610?Y=1:(Y=0,ae+=1,E-=u),y=t(y,E),I=h[Y],z=y-I,te=1/(y+I),T=z*te,L=n(T,0),A=(E>>1|l)+c,A+=Y<<18,w=t(0,A),S=y-(w-I),$=te*(z-L*w-L*S),C=T*T,G=C*C*o(C),G+=$*(L+T),C=L*L,w=3+C+G,w=n(w,0),S=G-(w-3-C),z=L*w,te=$*w+S*T,P=z+te,P=n(P,0),k=te-(P-z),H=m*P,D=f*P+k*p+_[Y],R=v[Y],Z=ae,q=H+D+R+Z,q=n(q,0),M=D-(q-Z-R-H),b[0]=q,b[1]=M,b}return K0=g,K0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X0,Z4;function Kj(){if(Z4)return X0;Z4=1;function e(n){return n===0?.5:.5+n*(-.3333333333333333+n*.25)}return X0=e,X0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Y0,ey;function Xj(){if(ey)return Y0;ey=1;var e=Io(),n=Kj(),t=1.4426950408889634,r=1.4426950216293335,i=19259629911266175e-24;function o(a,u){var s,l,c,d,p,m;return c=u-1,d=c*c*n(c),p=r*c,m=c*i-d*t,l=p+m,l=e(l,0),s=m-(l-p),a[0]=l,a[1]=s,a}return Y0=o,Y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J0,ny;function Yj(){if(ny)return J0;ny=1;var e=.6931471805599453;return J0=e,J0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z0,ty;function BT(){if(ty)return z0;ty=1;var e=1048575;return z0=e,z0}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q0,ry;function Jj(){if(ry)return Q0;ry=1;function e(n){return n===0?.16666666666666602:.16666666666666602+n*(-.0027777777777015593+n*(6613756321437934e-20+n*(-16533902205465252e-22+n*41381367970572385e-24)))}return Q0=e,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Z0,iy;function zj(){if(iy)return Z0;iy=1;var e=yn(),n=To(),t=Io(),r=qT(),i=ei(),o=Yj(),a=ar(),u=ur(),s=BT(),l=xT(),c=Jj(),d=1048576,p=1071644672,m=.6931471824645996,f=-1904654299957768e-24;function h(v,_,g){var b,y,E,A,T,C,L,$,w,S,I;return S=v&u|0,I=(S>>l)-a|0,w=0,S>p&&(w=v+(d>>I+1)>>>0,I=((w&u)>>l)-a|0,b=(w&~(s>>I))>>>0,E=n(0,b),w=(w&s|d)>>l-I>>>0,v<0&&(w=-w),_-=E),E=g+_,E=t(E,0),T=E*m,C=(g-(E-_))*o+E*f,$=T+C,L=C-($-T),E=$*$,y=$-E*c(E),A=$*y/(y-2)-(L+$*L),$=1-(A-$),v=e($),v=r(v),v+=w<<l>>>0,v>>l<=0?$=i($,w):$=n($,v),$}return Z0=h,Z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var ed,oy;function Qj(){if(oy)return ed;oy=1;var e=ue(),n=p_(),t=Zr(),r=ni(),i=be(),o=ye(),a=d_(),u=Io(),s=qT(),l=on(),c=Re(),d=ur(),p=Uj(),m=Gj(),f=jj(),h=Wj(),v=Xj(),_=zj(),g=1072693247,b=1105199104,y=1139802112,E=1083179008,A=1072693248,T=1083231232,C=3230714880,L=31,$=1e300,w=1e-300,S=8008566259537294e-32,I=[0,0],R=[0,0];function P(k,H){var D,q,M,Z,G,z,te,ae,j,Y,V,Ee,me,ne,se,$e;if(e(k)||e(H))return NaN;if(a.assign(H,I,1,0),z=I[0],te=I[1],te===0){if(H===0)return 1;if(H===1)return k;if(H===-1)return 1/k;if(H===.5)return i(k);if(H===-.5)return 1/i(k);if(H===2)return k*k;if(H===3)return k*k*k;if(H===4)return k*=k,k*k;if(t(H))return f(k,H)}if(a.assign(k,I,1,0),Z=I[0],G=I[1],G===0){if(Z===0)return p(k,H);if(k===1)return 1;if(k===-1&&n(H))return-1;if(t(k))return k===l?P(-0,-H):H<0?0:c}if(k<0&&r(H)===!1)return(k-k)/(k-k);if(M=o(k),D=Z&d|0,q=z&d|0,ae=Z>>>L|0,j=z>>>L|0,ae&&n(H)?ae=-1:ae=1,q>b){if(q>y)return m(k,H);if(D<g)return j===1?ae*$*$:ae*w*w;if(D>A)return j===0?ae*$*$:ae*w*w;me=v(R,M)}else me=h(R,M,D);if(Y=u(H,0),Ee=(H-Y)*me[0]+H*me[1],V=Y*me[0],ne=Ee+V,a.assign(ne,I,1,0),se=s(I[0]),$e=s(I[1]),se>=E){if((se-E|$e)!==0||Ee+S>ne-V)return ae*$*$}else if((se&d)>=T&&((se-C|$e)!==0||Ee<=ne-V))return ae*w*w;return ne=_(se,V,Ee),ae*ne}return ed=P,ed}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nd,ay;function Oe(){if(ay)return nd;ay=1;var e=Qj();return nd=e,nd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var td,uy;function ti(){if(uy)return td;uy=1;var e=2.718281828459045;return td=e,td}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rd,sy;function ot(){if(sy)return rd;sy=1;var e=2220446049250313e-31;return rd=e,rd}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var id,ly;function Zj(){if(ly)return id;ly=1;function e(n){var t,r,i;return n===0?1/0:(n<0?t=-n:t=n,t<=1?(r=709811.662581658+n*(679979.8474157227+n*(293136.7857211597+n*(74887.54032914672+n*(12555.290582413863+n*(1443.4299244417066+n*(115.24194596137347+n*(6.309239205732627+n*(.22668404630224365+n*(.004826466289237662+n*4624429436045379e-20))))))))),i=0+n*(362880+n*(1026576+n*(1172700+n*(723680+n*(269325+n*(63273+n*(9450+n*(870+n*(45+n*1)))))))))):(n=1/n,r=4624429436045379e-20+n*(.004826466289237662+n*(.22668404630224365+n*(6.309239205732627+n*(115.24194596137347+n*(1443.4299244417066+n*(12555.290582413863+n*(74887.54032914672+n*(293136.7857211597+n*(679979.8474157227+n*709811.662581658))))))))),i=1+n*(45+n*(870+n*(9450+n*(63273+n*(269325+n*(723680+n*(1172700+n*(1026576+n*(362880+n*0)))))))))),r/i)}return id=e,id}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var od,cy;function eV(){if(cy)return od;cy=1;var e=ue(),n=En(),t=be(),r=ye(),i=Ce(),o=Oe(),a=ti(),u=ot(),s=Zj(),l=10.900511;function c(d,p){var m,f,h,v,_,g,b;return e(d)||e(p)?NaN:d<0||p<0?NaN:p===1?1/d:d===1?1/p:(b=d+p,b<u?(_=b/d,_/=p,_):b===d&&p<u?1/p:b===p&&d<u?1/d:(d<p&&(g=p,p=d,d=g),f=d+l-.5,h=p+l-.5,v=b+l-.5,_=s(d)*(s(p)/s(b)),m=d-.5-p,r(p*m)<v*100&&d>100?_*=i(m*n(-p/v)):_*=o(f/v,m),v>1e10?_*=o(f/v*(h/v),p):_*=o(f*h/(v*v),p),_*=t(a/h),_))}return od=c,od}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ad,dy;function Ju(){if(dy)return ad;dy=1;var e=eV();return ad=e,ad}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ud,fy;function nV(){if(fy)return ud;fy=1;var e=Re();function n(t){return t===0&&1/t===e}return ud=n,ud}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sd,py;function tV(){if(py)return sd;py=1;var e=nV();return sd=e,sd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ld,my;function rV(){if(my)return ld;my=1;var e=tV(),n=ue(),t=Re();function r(i,o){return n(i)||n(o)?NaN:i===t||o===t?t:i===o&&i===0?e(i)?i:o:i>o?i:o}return ld=r,ld}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cd,hy;function lr(){if(hy)return cd;hy=1;var e=rV();return cd=e,cd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dd,vy;function iV(){if(vy)return dd;vy=1;var e=on();function n(t){return t===0&&1/t===e}return dd=n,dd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fd,_y;function HT(){if(_y)return fd;_y=1;var e=iV();return fd=e,fd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pd,gy;function oV(){if(gy)return pd;gy=1;var e=HT(),n=ue(),t=on();function r(i,o){return n(i)||n(o)?NaN:i===t||o===t?t:i===o&&i===0?e(i)?i:o:i<o?i:o}return pd=r,pd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var md,by;function Dt(){if(by)return md;by=1;var e=oV();return md=e,md}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hd,yy;function cr(){if(yy)return hd;yy=1;var e=17976931348623157e292;return hd=e,hd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vd,Ey;function UT(){if(Ey)return vd;Ey=1;var e=2147483647;return vd=e,vd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _d,Sy;function m_(){if(Sy)return _d;Sy=1;var e=1.5707963267948966;return _d=e,_d}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gd,wy;function Ft(){if(wy)return gd;wy=1;var e=3.141592653589793;return gd=e,gd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bd,Ay;function aV(){if(Ay)return bd;Ay=1;function e(n){return n===0?.0416666666666666:.0416666666666666+n*(-.001388888888887411+n*2480158728947673e-20)}return bd=e,bd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yd,$y;function uV(){if($y)return yd;$y=1;function e(n){return n===0?-27557314351390663e-23:-27557314351390663e-23+n*(2087572321298175e-24+n*-11359647557788195e-27)}return yd=e,yd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Ed,Ty;function sV(){if(Ty)return Ed;Ty=1;var e=aV(),n=uV();function t(r,i){var o,a,u,s;return s=r*r,u=s*s,a=s*e(s),a+=u*u*n(s),o=.5*s,u=1-o,u+(1-u-o+(s*a-r*i))}return Ed=t,Ed}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sd,Iy;function GT(){if(Iy)return Sd;Iy=1;var e=sV();return Sd=e,Sd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var wd,Ly;function lV(){if(Ly)return wd;Ly=1;var e=-.16666666666666632,n=.00833333333332249,t=-.0001984126982985795,r=27557313707070068e-22,i=-25050760253406863e-24,o=158969099521155e-24;function a(u,s){var l,c,d,p;return p=u*u,d=p*p,l=n+p*(t+p*r)+p*d*(i+p*o),c=p*u,s===0?u+c*(e+p*l):u-(p*(.5*s-c*l)-s-c*e)}return wd=a,wd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ad,Ry;function jT(){if(Ry)return Ad;Ry=1;var e=lV();return Ad=e,Ad}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $d,Cy;function cV(){if(Cy)return $d;Cy=1;var e=zr(),n;return e===!0?n=0:n=1,$d=n,$d}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Td,Oy;function dV(){if(Oy)return Td;Oy=1;var e=Yr(),n=Jr(),t=cV(),r=new n(1),i=new e(r.buffer);function o(a){return r[0]=a,i[t]}return Td=o,Td}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Id,Ny;function fV(){if(Ny)return Id;Ny=1;var e=dV();return Id=e,Id}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ld,ky;function pV(){if(ky)return Ld;ky=1;function e(n,t){var r,i;for(r=[],i=0;i<t;i++)r.push(n);return r}return Ld=e,Ld}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rd,My;function mV(){if(My)return Rd;My=1;var e=pV();return Rd=e,Rd}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cd,Py;function hV(){if(Py)return Cd;Py=1;var e=mV();function n(t){return e(0,t)}return Cd=n,Cd}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Od,Dy;function vV(){if(Dy)return Od;Dy=1;var e=hV();return Od=e,Od}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Nd,Fy;function _V(){if(Fy)return Nd;Fy=1;var e=it(),n=ei(),t=vV(),r=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],i=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],o=16777216,a=5960464477539063e-23,u=t(20),s=t(20),l=t(20),c=t(20);function d(m,f,h,v,_,g,b,y,E){var A,T,C,L,$,w,S,I,R;for(L=g,R=v[h],I=h,$=0;I>0;$++)T=a*R|0,c[$]=R-o*T|0,R=v[I-1]+T,I-=1;if(R=n(R,_),R-=8*e(R*.125),S=R|0,R-=S,C=0,_>0?($=c[h-1]>>24-_,S+=$,c[h-1]-=$<<24-_,C=c[h-1]>>23-_):_===0?C=c[h-1]>>23:R>=.5&&(C=2),C>0){for(S+=1,A=0,$=0;$<h;$++)I=c[$],A===0?I!==0&&(A=1,c[$]=16777216-I):c[$]=16777215-I;if(_>0)switch(_){case 1:c[h-1]&=8388607;break;case 2:c[h-1]&=4194303;break}C===2&&(R=1-R,A!==0&&(R-=n(1,_)))}if(R===0){for(I=0,$=h-1;$>=g;$--)I|=c[$];if(I===0){for(w=1;c[g-w]===0;w++);for($=h+1;$<=h+w;$++){for(E[y+$]=r[b+$],T=0,I=0;I<=y;I++)T+=m[I]*E[y+($-I)];v[$]=T}return h+=w,d(m,f,h,v,_,g,b,y,E)}for(h-=1,_-=24;c[h]===0;)h-=1,_-=24}else R=n(R,-_),R>=o?(T=a*R|0,c[h]=R-o*T|0,h+=1,_+=24,c[h]=T):c[h]=R|0;for(T=n(1,_),$=h;$>=0;$--)v[$]=T*c[$],T*=a;for($=h;$>=0;$--){for(T=0,w=0;w<=L&&w<=h-$;w++)T+=i[w]*v[$+w];l[h-$]=T}for(T=0,$=h;$>=0;$--)T+=l[$];for(C===0?f[0]=T:f[0]=-T,T=l[0]-T,$=1;$<=h;$++)T+=l[$];return C===0?f[1]=T:f[1]=-T,S&7}function p(m,f,h,v){var _,g,b,y,E,A,T,C,L;for(g=4,y=v-1,b=(h-3)/24|0,b<0&&(b=0),A=h-24*(b+1),C=b-y,L=y+g,T=0;T<=L;T++)C<0?u[T]=0:u[T]=r[C],C+=1;for(T=0;T<=g;T++){for(_=0,C=0;C<=y;C++)_+=m[C]*u[y+(T-C)];s[T]=_}return E=g,d(m,f,E,s,A,g,b,y,u)}return Nd=p,Nd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kd,qy;function gV(){if(qy)return kd;qy=1;var e=Math.round;return kd=e,kd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Md,xy;function VT(){if(xy)return Md;xy=1;var e=gV();return Md=e,Md}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Pd,By;function bV(){if(By)return Pd;By=1;var e=VT(),n=yn(),t=.6366197723675814,r=1.5707963267341256,i=6077100506506192e-26,o=6077100506303966e-26,a=20222662487959506e-37,u=20222662487111665e-37,s=84784276603689e-45,l=2047;function c(d,p,m){var f,h,v,_,g,b,y;return h=e(d*t),_=d-h*r,g=h*i,y=p>>20|0,m[0]=_-g,f=n(m[0]),b=y-(f>>20&l),b>16&&(v=_,g=h*o,_=v-g,g=h*a-(v-_-g),m[0]=_-g,f=n(m[0]),b=y-(f>>20&l),b>49&&(v=_,g=h*u,_=v-g,g=h*s-(v-_-g),m[0]=_-g)),m[1]=_-m[0]-g,h}return Pd=c,Pd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
*
* Optimized by Bruce D. Evans.
* ```
*/var Dd,Hy;function yV(){if(Hy)return Dd;Hy=1;var e=ur(),n=Yu(),t=BT(),r=yn(),i=fV(),o=Xu(),a=_V(),u=bV(),s=0,l=16777216,c=1.5707963267341256,d=6077100506506192e-26,p=2*d,m=3*d,f=4*d,h=598523,v=1072243195,_=1073928572,g=1074752122,b=1074977148,y=1075183036,E=1075388923,A=1075594811,T=1094263291,C=[0,0,0],L=[0,0];function $(w,S){var I,R,P,k,H,D,q,M;if(P=r(w)|0,k=P&e|0,k<=v)return S[0]=w,S[1]=0,0;if(k<=g)return(k&t)===h?u(w,k,S):k<=_?P>0?(M=w-c,S[0]=M-d,S[1]=M-S[0]-d,1):(M=w+c,S[0]=M+d,S[1]=M-S[0]+d,-1):P>0?(M=w-2*c,S[0]=M-p,S[1]=M-S[0]-p,2):(M=w+2*c,S[0]=M+p,S[1]=M-S[0]+p,-2);if(k<=A)return k<=y?k===b?u(w,k,S):P>0?(M=w-3*c,S[0]=M-m,S[1]=M-S[0]-m,3):(M=w+3*c,S[0]=M+m,S[1]=M-S[0]+m,-3):k===E?u(w,k,S):P>0?(M=w-4*c,S[0]=M-f,S[1]=M-S[0]-f,4):(M=w+4*c,S[0]=M+f,S[1]=M-S[0]+f,-4);if(k<T)return u(w,k,S);if(k>=n)return S[0]=NaN,S[1]=NaN,0;for(I=i(w),R=(k>>20)-1046,M=o(k-(R<<20|0),I),D=0;D<2;D++)C[D]=M|0,M=(M-C[D])*l;for(C[2]=M,H=3;C[H-1]===s;)H-=1;return q=a(C,L,R,H,1),P<0?(S[0]=-L[0],S[1]=-L[1],-q):(S[0]=L[0],S[1]=L[1],q)}return Dd=$,Dd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fd,Uy;function WT(){if(Uy)return Fd;Uy=1;var e=yV();return Fd=e,Fd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var qd,Gy;function EV(){if(Gy)return qd;Gy=1;var e=ur(),n=Yu(),t=yn(),r=GT(),i=jT(),o=WT(),a=1072243195,u=1045430272,s=[0,0];function l(c){var d,p;if(d=t(c),d&=e,d<=a)return d<u?c:i(c,0);if(d>=n)return NaN;switch(p=o(c,s),p&3){case 0:return i(s[0],s[1]);case 1:return r(s[0],s[1]);case 2:return-i(s[0],s[1]);default:return-r(s[0],s[1])}}return qd=l,qd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xd,jy;function Lo(){if(jy)return xd;jy=1;var e=EV();return xd=e,xd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bd,Vy;function zu(){if(Vy)return Bd;Vy=1;var e=2.5066282746310007;return Bd=e,Bd}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hd,Wy;function SV(){if(Wy)return Hd;Wy=1;function e(n){return n===0?.08333333333334822:.08333333333334822+n*(.0034722222160545866+n*(-.0026813261780578124+n*(-.00022954996161337813+n*.0007873113957930937)))}return Hd=e,Hd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var Ud,Ky;function wV(){if(Ky)return Ud;Ky=1;var e=zu(),n=Oe(),t=Ce(),r=SV(),i=143.01608;function o(a){var u,s,l;return u=1/a,u=1+u*r(u),s=t(a),a>i?(l=n(a,.5*a-.25),s=l*(l/s)):s=n(a,a-.5)/s,e*s*u}return Ud=o,Ud}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gd,Xy;function AV(){if(Xy)return Gd;Xy=1;var e=.5772156649015329;return Gd=e,Gd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var jd,Yy;function $V(){if(Yy)return jd;Yy=1;var e=AV();function n(t,r){return r/((1+e*t)*t)}return jd=n,jd}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vd,Jy;function TV(){if(Jy)return Vd;Jy=1;function e(n){var t,r,i;return n===0?1:(n<0?t=-n:t=n,t<=1?(r=1+n*(.4942148268014971+n*(.20744822764843598+n*(.04763678004571372+n*(.010421379756176158+n*(.0011913514700658638+n*(.00016011952247675185+n*0)))))),i=1+n*(.0714304917030273+n*(-.23459179571824335+n*(.035823639860549865+n*(.011813978522206043+n*(-.004456419138517973+n*(.0005396055804933034+n*-23158187332412014e-21))))))):(n=1/n,r=0+n*(.00016011952247675185+n*(.0011913514700658638+n*(.010421379756176158+n*(.04763678004571372+n*(.20744822764843598+n*(.4942148268014971+n*1)))))),i=-23158187332412014e-21+n*(.0005396055804933034+n*(-.004456419138517973+n*(.011813978522206043+n*(.035823639860549865+n*(-.23459179571824335+n*(.0714304917030273+n*1))))))),r/i)}return Vd=e,Vd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var Wd,zy;function IV(){if(zy)return Wd;zy=1;var e=ue(),n=ni(),t=HT(),r=ye(),i=it(),o=Lo(),a=Re(),u=on(),s=Ft(),l=wV(),c=$V(),d=TV();function p(m){var f,h,v,_;if(n(m)&&m<0||m===u||e(m))return NaN;if(m===0)return t(m)?u:a;if(m>171.61447887182297)return a;if(m<-170.5674972726612)return 0;if(h=r(m),h>33)return m>=0?l(m):(v=i(h),(v&1)===0?f=-1:f=1,_=h-v,_>.5&&(v+=1,_=h-v),_=h*o(s*_),f*s/(r(_)*l(h)));for(_=1;m>=3;)m-=1,_*=m;for(;m<0;){if(m>-1e-9)return c(m,_);_/=m,m+=1}for(;m<2;){if(m<1e-9)return c(m,_);_/=m,m+=1}return m===2?_:(m-=2,_*d(m))}return Wd=p,Wd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kd,Qy;function at(){if(Qy)return Kd;Qy=1;var e=IV();return Kd=e,Kd}/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xd,Zy;function Qu(){if(Zy)return Xd;Zy=1;var e=170;return Xd=e,Xd}const LV=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yd,eE;function RV(){if(eE)return Yd;eE=1;var e=ue(),n=ni(),t=at(),r=Re(),i=Qu(),o=LV;function a(u){return e(u)?NaN:n(u)?u<0?NaN:u<=i?o[u]:r:t(u+1)}return Yd=a,Yd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jd,nE;function KT(){if(nE)return Jd;nE=1;var e=RV();return Jd=e,Jd}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zd,tE;function CV(){if(tE)return zd;tE=1;function e(n){var t,r,i;return n===0?1/0:(n<0?t=-n:t=n,t<=1?(r=3847467039331777e-5+n*(3685766504351951e-5+n*(1588920245372942e-5+n*(4059208354298835e-6+n*(6805476611834733e-7+n*(7823975500312005e-8+n*(6246580776401795e-9+n*(341986.3488721347+n*(12287.194511824551+n*(261.61404416416684+n*2.5066282746310007))))))))),i=0+n*(362880+n*(1026576+n*(1172700+n*(723680+n*(269325+n*(63273+n*(9450+n*(870+n*(45+n*1)))))))))):(n=1/n,r=2.5066282746310007+n*(261.61404416416684+n*(12287.194511824551+n*(341986.3488721347+n*(6246580776401795e-9+n*(7823975500312005e-8+n*(6805476611834733e-7+n*(4059208354298835e-6+n*(1588920245372942e-5+n*(3685766504351951e-5+n*3847467039331777e-5))))))))),i=1+n*(45+n*(870+n*(9450+n*(63273+n*(269325+n*(723680+n*(1172700+n*(1026576+n*(362880+n*0)))))))))),r/i)}return zd=e,zd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/lanczos.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Qd,rE;function OV(){if(rE)return Qd;rE=1;var e=CV();return Qd=e,Qd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zd,iE;function NV(){if(iE)return Zd;iE=1;var e=OV();return Zd=e,Zd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ef,oE;function Ro(){if(oE)return ef;oE=1;var e=10.900511;return ef=e,ef}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var nf,aE;function kV(){if(aE)return nf;aE=1;var e=NV(),n=at(),t=En(),r=ye(),i=Ce(),o=Oe(),a=ot(),u=ti(),s=Ro(),l=Qu(),c=4269068009004705e289;function d(p,m){var f,h,v;return p<a?m>=l?(h=d(m,l-m),h*=p,h*=c,1/h):1/(p*n(p+m)):(v=p+s-.5,p+m===p?r(m/v)<a?f=i(-m):f=1:(r(m)<10?f=i((.5-p)*t(m/v)):f=o(v/(v+m),p-.5),f*=e(p)/e(p+m)),f*=o(u/(v+m),m),f)}return nf=d,nf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var tf,uE;function MV(){if(uE)return tf;uE=1;var e=ye(),n=it(),t=at(),r=KT(),i=Qu(),o=kV();function a(u,s){var l,c,d;if(u<=0||u+s<=0)return t(u)/t(u+s);if(c=n(s),c===s){if(d=n(u),d===u&&u<=i&&u+s<=i)return r(d-1)/r(c+d-1);if(e(s)<20){if(s===0)return 1;if(s<0){for(u-=1,l=u,s+=1;s!==0;)u-=1,l*=u,s+=1;return l}for(l=1/u,s-=1;s!==0;)u+=1,l/=u,s-=1;return l}}return o(u,s)}return tf=a,tf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rf,sE;function h_(){if(sE)return rf;sE=1;var e=MV();return rf=e,rf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var of,lE;function PV(){if(lE)return of;lE=1;function e(n){return n===0?.3999999999940942:.3999999999940942+n*(.22222198432149784+n*.15313837699209373)}return of=e,of}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var af,cE;function DV(){if(cE)return af;cE=1;function e(n){return n===0?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+n*.14798198605116586))}return af=e,af}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var uf,dE;function FV(){if(dE)return uf;dE=1;var e=yn(),n=To(),t=ue(),r=ar(),i=on(),o=PV(),a=DV(),u=.6931471803691238,s=19082149292705877e-26,l=0x40000000000000,c=.3333333333333333,d=1048575,p=2146435072,m=1048576,f=1072693248;function h(v){var _,g,b,y,E,A,T,C,L,$,w,S;return v===0?i:t(v)||v<0?NaN:(g=e(v),E=0,g<m&&(E-=54,v*=l,g=e(v)),g>=p?v+v:(E+=(g>>20)-r|0,g&=d,C=g+614244&1048576|0,v=n(v,g|C^f),E+=C>>20|0,T=v-1,(d&2+g)<3?T===0?E===0?0:E*u+E*s:(A=T*T*(.5-c*T),E===0?T-A:E*u-(A-E*s-T)):($=T/(2+T),S=$*$,C=g-398458|0,w=S*S,L=440401-g|0,y=w*o(w),b=S*a(w),C|=L,A=b+y,C>0?(_=.5*T*T,E===0?T-(_-$*(_+A)):E*u-(_-($*(_+A)+E*s)-T)):E===0?T-$*(T-A):E*u-($*(T-A)-E*s-T))))}return uf=h,uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sf,fE;function we(){if(fE)return sf;fE=1;var e=FV();return sf=e,sf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var lf,pE;function qV(){if(pE)return lf;pE=1;var e=yn(),n=GT(),t=jT(),r=WT(),i=ur(),o=Yu(),a=[0,0],u=1072243195,s=1044381696;function l(c){var d,p;if(d=e(c),d&=i,d<=u)return d<s?1:n(c,0);if(d>=o)return NaN;switch(p=r(c,a),p&3){case 0:return n(a[0],a[1]);case 1:return-t(a[0],a[1]);case 2:return-n(a[0],a[1]);default:return t(a[0],a[1])}}return lf=l,lf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cf,mE;function v_(){if(mE)return cf;mE=1;var e=qV();return cf=e,cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var df,hE;function xV(){if(hE)return df;hE=1;var e=ue(),n=Zr(),t=v_(),r=Lo(),i=ye(),o=f_(),a=Ft();function u(s){var l,c;return e(s)?NaN:n(s)?NaN:(c=s%2,l=i(c),l===0||l===1?o(0,c):l<.25?r(a*c):l<.75?(l=.5-l,o(t(a*l),c)):l<1.25?(c=o(1,c)-c,r(a*c)):l<1.75?(l-=1.5,-o(t(a*l),c)):(c-=o(2,c),r(a*c)))}return df=u,df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ff,vE;function BV(){if(vE)return ff;vE=1;var e=xV();return ff=e,ff}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pf,_E;function HV(){if(_E)return pf;_E=1;function e(n){return n===0?.06735230105312927:.06735230105312927+n*(.007385550860814029+n*(.0011927076318336207+n*(.00022086279071390839+n*25214456545125733e-21)))}return pf=e,pf}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mf,gE;function UV(){if(gE)return mf;gE=1;function e(n){return n===0?.020580808432516733:.020580808432516733+n*(.0028905138367341563+n*(.0005100697921535113+n*(.00010801156724758394+n*44864094961891516e-21)))}return mf=e,mf}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hf,bE;function GV(){if(bE)return hf;bE=1;function e(n){return n===0?1.3920053346762105:1.3920053346762105+n*(.7219355475671381+n*(.17193386563280308+n*(.01864591917156529+n*(.0007779424963818936+n*7326684307446256e-21))))}return hf=e,hf}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vf,yE;function jV(){if(yE)return vf;yE=1;function e(n){return n===0?.21498241596060885:.21498241596060885+n*(.325778796408931+n*(.14635047265246445+n*(.02664227030336386+n*(.0018402845140733772+n*3194753265841009e-20))))}return vf=e,vf}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _f,EE;function VV(){if(EE)return _f;EE=1;function e(n){return n===0?-.032788541075985965:-.032788541075985965+n*(.006100538702462913+n*(-.0014034646998923284+n*.00031563207090362595))}return _f=e,_f}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gf,SE;function WV(){if(SE)return gf;SE=1;function e(n){return n===0?.01797067508118204:.01797067508118204+n*(-.0036845201678113826+n*(.000881081882437654+n*-.00031275416837512086))}return gf=e,gf}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bf,wE;function KV(){if(wE)return bf;wE=1;function e(n){return n===0?-.010314224129834144:-.010314224129834144+n*(.0022596478090061247+n*(-.0005385953053567405+n*.0003355291926355191))}return bf=e,bf}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yf,AE;function XV(){if(AE)return yf;AE=1;function e(n){return n===0?.6328270640250934:.6328270640250934+n*(1.4549225013723477+n*(.9777175279633727+n*(.22896372806469245+n*.013381091853678766)))}return yf=e,yf}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ef,$E;function YV(){if($E)return Ef;$E=1;function e(n){return n===0?2.4559779371304113:2.4559779371304113+n*(2.128489763798934+n*(.7692851504566728+n*(.10422264559336913+n*.003217092422824239)))}return Ef=e,Ef}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sf,TE;function JV(){if(TE)return Sf;TE=1;function e(n){return n===0?.08333333333333297:.08333333333333297+n*(-.0027777777772877554+n*(.0007936505586430196+n*(-.00059518755745034+n*(.0008363399189962821+n*-.0016309293409657527))))}return Sf=e,Sf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_lgamma_r.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var wf,IE;function zV(){if(IE)return wf;IE=1;var e=ue(),n=Zr(),t=ye(),r=we(),i=c_(),o=BV(),a=Ft(),u=Re(),s=HV(),l=UV(),c=GV(),d=jV(),p=VV(),m=WV(),f=KV(),h=XV(),v=YV(),_=JV(),g=.07721566490153287,b=.3224670334241136,y=1,E=-.07721566490153287,A=.48383612272381005,T=-.1475877229945939,C=.06462494023913339,L=-.07721566490153287,$=1,w=.4189385332046727,S=1.4616321449683622,I=4503599627370496,R=72057594037927940,P=13877787807814457e-33,k=1.4616321449683622,H=-.12148629053584961,D=-3638676997039505e-33;function q(M){var Z,G,z,te,ae,j,Y,V,Ee,me,ne,se,$e;if(e(M)||n(M))return M;if(M===0)return u;if(M<0?(Z=!0,M=-M):Z=!1,M<P)return-r(M);if(Z){if(M>=I||(Ee=o(M),Ee===0))return u;G=r(a/t(Ee*M))}if(M===1||M===2)return 0;if(M<2)switch(M<=.9?($e=-r(M),M>=S-1+.27?(ne=1-M,z=0):M>=S-1-.27?(ne=M-(k-1),z=1):(ne=M,z=2)):($e=0,M>=S+.27?(ne=2-M,z=0):M>=S-.27?(ne=M-k,z=1):(ne=M-1,z=2)),z){case 0:se=ne*ne,j=g+se*s(se),ae=se*(b+se*l(se)),Y=ne*j+ae,$e+=Y-.5*ne;break;case 1:se=ne*ne,me=se*ne,j=A+me*p(me),ae=T+me*m(me),te=C+me*f(me),Y=se*j-(D-me*(ae+ne*te)),$e+=H+Y;break;case 2:j=ne*(L+ne*h(ne)),ae=$+ne*v(ne),$e+=-.5*ne+j/ae;break}else if(M<8)switch(z=i(M),ne=M-z,Y=ne*(E+ne*d(ne)),V=y+ne*c(ne),$e=.5*ne+Y/V,se=1,z){case 7:se*=ne+6;case 6:se*=ne+5;case 5:se*=ne+4;case 4:se*=ne+3;case 3:se*=ne+2,$e+=r(se)}else M<R?(Ee=r(M),se=1/M,ne=se*se,me=w+se*_(ne),$e=(M-.5)*(Ee-1)+me):$e=M*(r(M)-1);return Z&&($e=G-$e),$e}return wf=q,wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Af,LE;function ri(){if(LE)return Af;LE=1;var e=zV();return Af=e,Af}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $f,RE;function qt(){if(RE)return $f;RE=1;var e=709.782712893384;return $f=e,$f}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tf,CE;function QV(){if(CE)return Tf;CE=1;var e=14901161193847656e-24;return Tf=e,Tf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var If,OE;function ZV(){if(OE)return If;OE=1;var e=eval;return If=e,If}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lf,NE;function eW(){if(NE)return Lf;NE=1;var e=ZV();function n(){var t;try{e('"use strict"; (function* () {})'),t=!0}catch{t=!1}return t}return Lf=n,Lf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rf,kE;function XT(){if(kE)return Rf;kE=1;var e=eW();return Rf=e,Rf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cf,ME;function nW(){if(ME)return Cf;ME=1;var e=ye(),n=ot(),t=1e6;function r(i,o){var a,u,s,l,c,d;if(d={},arguments.length>1&&(d=o),u=d.tolerance||n,l=d.maxTerms||t,c=d.initialValue||0,a=typeof i.next=="function",a===!0){for(s of i)if(c+=s,e(u*c)>=e(s)||--l===0)break}else do s=i(),c+=s;while(e(u*c)<e(s)&&--l);return c}return Cf=r,Cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Of,PE;function tW(){if(PE)return Of;PE=1;var e=ye(),n=ot(),t=1e6;function r(i,o){var a,u,s,l,c;c={},arguments.length>1&&(c=o),a=c.tolerance||n,s=c.maxTerms||t,l=c.initialValue||0;do u=i(),l+=u;while(e(a*l)<e(u)&&--s);return l}return Of=r,Of}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nf,DE;function Co(){if(DE)return Nf;DE=1;var e=XT(),n=nW(),t=tW(),r;return e()?r=n:r=t,Nf=r,Nf}/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var kf,FE;function rW(){if(FE)return kf;FE=1;function e(n,t){var r=1,i=n,o=t;return a;function a(){var u=r;return r*=i/o,i-=1,u}}return kf=e,kf}/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Mf,qE;function iW(){if(qE)return Mf;qE=1;var e=Co(),n=rW();function t(r,i){var o,a;return a=n(r,i),o=e(a),o}return Mf=t,Mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Pf,xE;function oW(){if(xE)return Pf;xE=1;var e=Ce();function n(t,r){var i,o,a,u;if(a=e(-r),o=a,o!==0)for(i=o,u=1;u<t;++u)i/=u,i*=r,o+=i;return o}return Pf=n,Pf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Df,BE;function aW(){if(BE)return Df;BE=1;function e(n){return n===0?-.3250421072470015:-.3250421072470015+n*(-.02848174957559851+n*(-.005770270296489442+n*-23763016656650163e-21))}return Df=e,Df}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ff,HE;function uW(){if(HE)return Ff;HE=1;function e(n){return n===0?.39791722395915535:.39791722395915535+n*(.0650222499887673+n*(.005081306281875766+n*(.00013249473800432164+n*-3960228278775368e-21)))}return Ff=e,Ff}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qf,UE;function sW(){if(UE)return qf;UE=1;function e(n){return n===0?.41485611868374833:.41485611868374833+n*(-.3722078760357013+n*(.31834661990116175+n*(-.11089469428239668+n*(.035478304325618236+n*-.002166375594868791))))}return qf=e,qf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xf,GE;function lW(){if(GE)return xf;GE=1;function e(n){return n===0?.10642088040084423:.10642088040084423+n*(.540397917702171+n*(.07182865441419627+n*(.12617121980876164+n*(.01363708391202905+n*.011984499846799107))))}return xf=e,xf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bf,jE;function cW(){if(jE)return Bf;jE=1;function e(n){return n===0?-.6938585727071818:-.6938585727071818+n*(-10.558626225323291+n*(-62.375332450326006+n*(-162.39666946257347+n*(-184.60509290671104+n*(-81.2874355063066+n*-9.814329344169145)))))}return Bf=e,Bf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hf,VE;function dW(){if(VE)return Hf;VE=1;function e(n){return n===0?19.651271667439257:19.651271667439257+n*(137.65775414351904+n*(434.56587747522923+n*(645.3872717332679+n*(429.00814002756783+n*(108.63500554177944+n*(6.570249770319282+n*-.0604244152148581))))))}return Hf=e,Hf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uf,WE;function fW(){if(WE)return Uf;WE=1;function e(n){return n===0?-.799283237680523:-.799283237680523+n*(-17.757954917754752+n*(-160.63638485582192+n*(-637.5664433683896+n*(-1025.0951316110772+n*-483.5191916086514))))}return Uf=e,Uf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gf,KE;function pW(){if(KE)return Gf;KE=1;function e(n){return n===0?30.33806074348246:30.33806074348246+n*(325.7925129965739+n*(1536.729586084437+n*(3199.8582195085955+n*(2553.0504064331644+n*(474.52854120695537+n*-22.44095244658582)))))}return Gf=e,Gf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_erf.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var jf,XE;function mW(){if(XE)return jf;XE=1;var e=ue(),n=Ce(),t=Io(),r=Re(),i=on(),o=aW(),a=uW(),u=sW(),s=lW(),l=cW(),c=dW(),d=fW(),p=pW(),m=1e-300,f=13877787807814457e-33,h=.8450629115104675,v=.12837916709551256,_=1,g=-.0023621185607526594,b=1,y=-.009864944034847148,E=1,A=-.0098649429247001,T=1;function C(L){var $,w,S,I,R,P,k,H;if(e(L))return NaN;if(L===r)return 0;if(L===i)return 2;if(L===0)return 1;if(L<0?($=!0,w=-L):($=!1,w=L),w<.84375)return w<f?1-L:(S=L*L,I=v+S*o(S),R=_+S*a(S),P=I/R,L<.25?1-(L+L*P):(I=L*P,I+=L-.5,.5-I));if(w<1.25)return R=w-1,k=g+R*u(R),H=b+R*s(R),$?1+h+k/H:1-h-k/H;if(w<28){if(R=1/(w*w),w<2.857142857142857)I=y+R*l(R),R=E+R*c(R);else{if(L<-6)return 2-m;I=A+R*d(R),R=T+R*p(R)}return S=t(w,0),I=n(-(S*S)-.5625)*n((S-w)*(S+w)+I/R),$?2-I/w:I/w}return $?2-m:m*m}return jf=C,jf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vf,YE;function Zu(){if(YE)return Vf;YE=1;var e=mW();return Vf=e,Vf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Wf,JE;function hW(){if(JE)return Wf;JE=1;var e=Zu(),n=be(),t=Ce(),r=Ft();function i(o,a){var u,s,l,c,d;if(c=e(n(a)),c!==0&&o>1){for(s=t(-a)/n(r*a),s*=a,u=.5,s/=u,l=s,d=2;d<o;++d)s/=d-u,s*=a,l+=s;c+=l}return c}return Wf=i,Wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kf,zE;function ii(){if(zE)return Kf;zE=1;var e=-708.3964185322641;return Kf=e,Kf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Xf,QE;function vW(){if(QE)return Xf;QE=1;var e=Ce(),n=Oe(),t=we(),r=qt(),i=ii();function o(a,u){var s,l;return l=a*t(u),u>=1?l<r&&-u>i?s=n(u,a)*e(-u):a>=1?s=n(u/e(u/a),a):s=e(l-u):l>i?s=n(u,a)*e(-u):u/a<r?s=n(u/e(u/a),a):s=e(l-u),s}return Xf=o,Xf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yf,ZE;function YT(){if(ZE)return Yf;ZE=1;function e(n,t){var r,i;if(i=n.length,i<2||t===0)return i===0?0:n[0];for(i-=1,r=n[i]*t+n[i-1],i-=2;i>=0;)r=r*t+n[i],i-=1;return r}return Yf=e,Yf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jf,e5;function _W(){if(e5)return Jf;e5=1;var e=Function;return Jf=e,Jf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zf,n5;function gW(){if(n5)return zf;n5=1;var e=_W();return zf=e,zf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qf,t5;function bW(){if(t5)return Qf;t5=1;var e=gW(),n=YT();function t(r){var i,o,a,u;if(r.length>500)return s;if(i="return function evalpoly(x){",o=r.length,o===0)i+="return 0.0;";else if(o===1)i+="return "+r[0]+";";else{for(i+="if(x===0.0){return "+r[0]+";}",i+="return "+r[0],a=o-1,u=1;u<o;u++)i+="+x*",u<a&&(i+="("),i+=r[u];for(u=0;u<a-1;u++)i+=")";i+=";"}return i+="}",i+="//# sourceURL=evalpoly.factory.js",new e(i)();function s(l){return n(r,l)}}return Qf=t,Qf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zf,r5;function xt(){if(r5)return Zf;r5=1;var e=rn(),n=YT(),t=bW();return e(n,"factory",t),Zf=n,Zf}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2005-2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
*/var e1,i5;function yW(){if(i5)return e1;i5=1;function e(n){var t=-n,r=-1,i=0;return o;function o(){return r*=t,i+=1,r/i}}return e1=e,e1}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2005-2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var n1,o5;function EW(){if(o5)return n1;o5=1;var e=ye(),n=we(),t=ot(),r=Co(),i=yW();function o(a){var u,s;return a<=-1?NaN:(s=e(a),s>.95?n(1+a)-a:s<t?-a*a/2:(u={initialValue:-a},r(i(a),u)))}return n1=o,n1}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t1,a5;function JT(){if(a5)return t1;a5=1;var e=EW();return t1=e,t1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r1,u5;function es(){if(u5)return r1;u5=1;var e=6.283185307179586;return r1=e,r1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i1,s5;function SW(){if(s5)return i1;s5=1;function e(n){return n===0?-.3333333333333333:-.3333333333333333+n*(.08333333333333333+n*(-.014814814814814815+n*(.0011574074074074073+n*(.0003527336860670194+n*(-.0001787551440329218+n*(3919263178522438e-20+n*(-21854485106799924e-22+n*(-185406221071516e-20+n*(8296711340953087e-22+n*(-17665952736826078e-23+n*(6707853543401498e-24+n*(10261809784240309e-24+n*(-4382036018453353e-24+n*914769958223679e-24)))))))))))))}return i1=e,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o1,l5;function wW(){if(l5)return o1;l5=1;function e(n){return n===0?-.001851851851851852:-.001851851851851852+n*(-.003472222222222222+n*(.0026455026455026454+n*(-.0009902263374485596+n*(.00020576131687242798+n*(-4018775720164609e-22+n*(-18098550334489977e-21+n*(764916091608111e-20+n*(-16120900894563446e-22+n*(4647127802807434e-24+n*(1378633446915721e-22+n*(-5752545603517705e-23+n*11951628599778148e-24)))))))))))}return o1=e,o1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a1,c5;function AW(){if(c5)return a1;c5=1;function e(n){return n===0?.004133597883597883:.004133597883597883+n*(-.0026813271604938273+n*(.0007716049382716049+n*(20093878600823047e-22+n*(-.00010736653226365161+n*(52923448829120125e-21+n*(-12760635188618728e-21+n*(3423578734096138e-23+n*(13721957309062932e-22+n*(-6298992138380055e-22+n*14280614206064242e-23)))))))))}return a1=e,a1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1,d5;function $W(){if(d5)return u1;d5=1;function e(n){return n===0?.0006494341563786008:.0006494341563786008+n*(.00022947209362139917+n*(-.0004691894943952557+n*(.00026772063206283885+n*(-7561801671883977e-20+n*(-2396505113867297e-22+n*(11082654115347302e-21+n*(-56749528269915965e-22+n*14230900732435883e-22)))))))}return u1=e,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s1,f5;function TW(){if(f5)return s1;f5=1;function e(n){return n===0?-.0008618882909167117:-.0008618882909167117+n*(.0007840392217200666+n*(-.0002990724803031902+n*(-14638452578843418e-22+n*(6641498215465122e-20+n*(-3968365047179435e-20+n*11375726970678419e-21)))))}return s1=e,s1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l1,p5;function IW(){if(p5)return l1;p5=1;function e(n){return n===0?-.00033679855336635813:-.00033679855336635813+n*(-6972813758365858e-20+n*(.0002772753244959392+n*(-.00019932570516188847+n*(6797780477937208e-20+n*(1419062920643967e-22+n*(-13594048189768693e-21+n*(8018470256334202e-21+n*-2291481176508095e-21)))))))}return l1=e,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c1,m5;function LW(){if(m5)return c1;m5=1;function e(n){return n===0?.0005313079364639922:.0005313079364639922+n*(-.0005921664373536939+n*(.0002708782096718045+n*(7902353232660328e-22+n*(-8153969367561969e-20+n*(561168275310625e-19+n*-18329116582843375e-21)))))}return c1=e,c1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d1,h5;function RW(){if(h5)return d1;h5=1;function e(n){return n===0?.00034436760689237765:.00034436760689237765+n*(5171790908260592e-20+n*(-.00033493161081142234+n*(.0002812695154763237+n*-.00010976582244684731)))}return d1=e,d1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f1,v5;function CW(){if(v5)return f1;v5=1;function e(n){return n===0?-.0006526239185953094:-.0006526239185953094+n*(.0008394987206720873+n*-.000438297098541721)}return f1=e,f1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var p1,_5;function OW(){if(_5)return p1;_5=1;var e=xt(),n=JT(),t=Zu(),r=be(),i=Ce(),o=es(),a=SW(),u=wW(),s=AW(),l=$W(),c=TW(),d=IW(),p=LW(),m=RW(),f=CW(),h=[0,0,0,0,0,0,0,0,0,0];function v(_,g){var b,y,E,A,T;return y=(g-_)/_,E=-n(y),A=_*E,T=r(2*E),g<_&&(T=-T),h[0]=a(T),h[1]=u(T),h[2]=s(T),h[3]=l(T),h[4]=c(T),h[5]=d(T),h[6]=p(T),h[7]=m(T),h[8]=f(T),h[9]=-.0005967612901927463,b=e(h,1/_),b*=i(-A)/r(o*_),g<_&&(b=-b),b+=t(r(A))/2,b}return p1=v,p1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var m1,g5;function NW(){if(g5)return m1;g5=1;function e(n,t){var r=1,i=n,o=t;return a;function a(){var u=r;return i+=1,r*=o/i,u}}return m1=e,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var h1,b5;function zT(){if(b5)return h1;b5=1;var e=Co(),n=NW();function t(r,i,o){var a,u;return o=o||0,u=n(r,i),a=e(u,{initialValue:o}),a}return h1=t,h1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v1,y5;function kW(){if(y5)return v1;y5=1;function e(n){var t,r,i;return n===0?1/0:(n<0?t=-n:t=n,t<=1?(r=709811.662581658+n*(679979.8474157227+n*(293136.7857211597+n*(74887.54032914672+n*(12555.290582413863+n*(1443.4299244417066+n*(115.24194596137347+n*(6.309239205732627+n*(.22668404630224365+n*(.004826466289237662+n*4624429436045379e-20))))))))),i=0+n*(362880+n*(1026576+n*(1172700+n*(723680+n*(269325+n*(63273+n*(9450+n*(870+n*(45+n*1)))))))))):(n=1/n,r=4624429436045379e-20+n*(.004826466289237662+n*(.22668404630224365+n*(6.309239205732627+n*(115.24194596137347+n*(1443.4299244417066+n*(12555.290582413863+n*(74887.54032914672+n*(293136.7857211597+n*(679979.8474157227+n*709811.662581658))))))))),i=1+n*(45+n*(870+n*(9450+n*(63273+n*(269325+n*(723680+n*(1172700+n*(1026576+n*(362880+n*0)))))))))),r/i)}return v1=e,v1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/lanczos.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var _1,E5;function MW(){if(E5)return _1;E5=1;var e=kW();return _1=e,_1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,S5;function ns(){if(S5)return g1;S5=1;var e=MW();return g1=e,g1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var b1,w5;function PW(){if(w5)return b1;w5=1;var e=ns(),n=ri(),t=at(),r=JT(),i=be(),o=ye(),a=Ce(),u=Oe(),s=lr(),l=Dt(),c=we(),d=cr(),p=qt(),m=ii(),f=Ro(),h=ti();function v(_,g){var b,y,E,A,T,C,L;return E=_+f-.5,L=(g-_-f+.5)/E,_<1?g<=m||_<1/d?a(_*c(g)-g-n(_)):u(g,_)*a(-g)/t(_):(o(L*L*_)<=100&&_>150?(b=_*r(L)+g*(.5-f)/E,b=a(b)):(A=_*c(g/E),T=_-g,l(A,T)<=m||s(A,T)>=p?(y=T/_,l(A,T)/2>m&&s(A,T)/2<p?(C=u(g/E,_/2)*a(T/2),b=C*C):l(A,T)/4>m&&s(A,T)/4<p&&g>_?(C=u(g/E,_/4)*a(T/4),b=C*C,b*=b):y>m&&y<p?b=u(g*a(y)/E,_):b=a(A+T)):b=u(g/E,_)*a(T)),b*=i(E/h)/e(_),b)}return b1=v,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/powm1.hpp}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var y1,A5;function DW(){if(A5)return y1;A5=1;var e=ue(),n=Zr(),t=ye(),r=Qr(),i=we(),o=Oe(),a=c_();function u(s,l){var c,d;if(e(s)||e(l))return NaN;if(l===0)return 0;if(s===0)return-1;if(s<0&&l%2===0&&(s=-s),s>0){if((t(l*(s-1))<.5||t(l)<.2)&&(d=i(s)*l,d<.5))return r(d)}else if(a(l)!==l)return NaN;return c=o(s,l)-1,n(c)||e(c)?NaN:c}return y1=u,y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E1,$5;function FW(){if($5)return E1;$5=1;var e=DW();return E1=e,E1}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S1,T5;function qW(){if(T5)return S1;T5=1;function e(n){var t,r,i;return n===0?-.01803556856784494:(n<0?t=-n:t=n,t<=1?(r=-.01803556856784494+n*(.02512664961998968+n*(.049410315156753225+n*(.0172491608709614+n*(-.0002594535632054381+n*(-.0005410098692152044+n*(-3245886498259485e-20+n*0)))))),i=1+n*(1.962029871977952+n*(1.4801966942423133+n*(.5413914320717209+n*(.09885042511280101+n*(.008213096746488934+n*(.00022493629192211576+n*-22335276320861708e-23))))))):(n=1/n,r=0+n*(-3245886498259485e-20+n*(-.0005410098692152044+n*(-.0002594535632054381+n*(.0172491608709614+n*(.049410315156753225+n*(.02512664961998968+n*-.01803556856784494)))))),i=-22335276320861708e-23+n*(.00022493629192211576+n*(.008213096746488934+n*(.09885042511280101+n*(.5413914320717209+n*(1.4801966942423133+n*(1.962029871977952+n*1))))))),r/i)}return S1=e,S1}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w1,I5;function xW(){if(I5)return w1;I5=1;function e(n){var t,r,i;return n===0?.04906224540690395:(n<0?t=-n:t=n,t<=1?(r=.04906224540690395+n*(-.09691175301595212+n*(-.4149833583594954+n*(-.4065671242119384+n*(-.1584135863906922+n*(-.024014982064857155+n*-.0010034668769627955))))),i=1+n*(3.0234982984646304+n*(3.4873958536072385+n*(1.9141558827442668+n*(.5071377386143635+n*(.05770397226904519+n*.001957681026011072)))))):(n=1/n,r=-.0010034668769627955+n*(-.024014982064857155+n*(-.1584135863906922+n*(-.4065671242119384+n*(-.4149833583594954+n*(-.09691175301595212+n*.04906224540690395))))),i=.001957681026011072+n*(.05770397226904519+n*(.5071377386143635+n*(1.9141558827442668+n*(3.4873958536072385+n*(3.0234982984646304+n*1)))))),r/i)}return w1=e,w1}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A1,L5;function BW(){if(L5)return A1;L5=1;function e(n){var t,r,i;return n===0?-.029232972183027003:(n<0?t=-n:t=n,t<=1?(r=-.029232972183027003+n*(.14421626775719232+n*(-.14244039073863127+n*(.05428096940550536+n*(-.008505359768683364+n*(.0004311713426792973+n*0))))),i=1+n*(-1.5016935605448505+n*(.846973248876495+n*(-.22009515181499575+n*(.02558279715597587+n*(-.0010066679553914337+n*-8271935218912905e-22)))))):(n=1/n,r=0+n*(.0004311713426792973+n*(-.008505359768683364+n*(.05428096940550536+n*(-.14244039073863127+n*(.14421626775719232+n*-.029232972183027003))))),i=-8271935218912905e-22+n*(-.0010066679553914337+n*(.02558279715597587+n*(-.22009515181499575+n*(.846973248876495+n*(-1.5016935605448505+n*1)))))),r/i)}return A1=e,A1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/detail/lgamma_small.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var $1,R5;function HW(){if(R5)return $1;R5=1;var e=we(),n=ot(),t=qW(),r=xW(),i=BW(),o=.15896368026733398,a=.5281534194946289,u=.45201730728149414;function s(l,c,d){var p,m,f,h;if(l<n)return-e(l);if(c===0||d===0)return 0;if(m=0,l>2){if(l>=3){do l-=1,d-=1,m+=e(l);while(l>=3);d=l-2}return f=d*(l+1),h=t(d),m+=f*o+f*h,m}return l<1&&(m+=-e(l),d=c,c=l,l+=1),l<=1.5?(f=r(c),p=c*d,m+=p*a+p*f,m):(f=d*c,h=i(-d),m+=f*u+f*h,m)}return $1=s,$1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var T1,C5;function UW(){if(C5)return T1;C5=1;var e=at(),n=Qr(),t=En(),r=ue(),i=HW();function o(a){return r(a)?NaN:a<0?a<-.5?e(1+a)-1:n(-t(a)+i(a+2,a+1,a)):a<2?n(i(a+1,a,a-1)):e(1+a)-1}return T1=o,T1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I1,O5;function GW(){if(O5)return I1;O5=1;var e=UW();return I1=e,I1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var L1,N5;function jW(){if(N5)return L1;N5=1;function e(n,t){var r,i,o,a;return r=-t,t=-t,i=n+1,o=1,u;function u(){return a=r/i,r*=t,o+=1,r/=o,i+=1,a}}return L1=e,L1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var R1,k5;function VW(){if(k5)return R1;k5=1;var e=FW(),n=Co(),t=GW(),r=jW();function i(o,a,u){var s,l,c,d,p;return l=t(o),c=(l+1)/o,d=e(a,o),l-=d,l/=o,p=r(o,a),d+=1,s=u?c:0,l=-d*n(p,{initialValue:(s-l)/d}),u&&(l=-l),[l,c]}return R1=i,R1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C1,M5;function ts(){if(M5)return C1;M5=1;var e=11754943508222875e-54;return C1=e,C1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O1,P5;function WW(){if(P5)return O1;P5=1;var e=ye(),n=ts(),t=ot(),r=1e6;function i(u,s,l){var c,d,p,m,f,h,v;if(c=typeof u.next=="function",v=c?u.next().value:u(),m=v[1],p=v[0],m===0&&(m=n),f=m,h=0,c===!0)do v=u.next().value,v&&(h=v[1]+v[0]*h,h===0&&(h=n),f=v[1]+v[0]/f,f===0&&(f=n),h=1/h,d=f*h,m*=d);while(e(d-1)>s&&--l);else do v=u(),v&&(h=v[1]+v[0]*h,h===0&&(h=n),f=v[1]+v[0]/f,f===0&&(f=n),h=1/h,d=f*h,m*=d);while(v&&e(d-1)>s&&--l);return p/m}function o(u,s,l){var c,d,p,m,f,h;if(c=typeof u.next=="function",h=c?u.next().value:u(),p=h[1],p===0&&(p=n),m=p,f=0,c===!0)do h=u.next().value,h&&(f=h[1]+h[0]*f,f===0&&(f=n),m=h[1]+h[0]/m,m===0&&(m=n),f=1/f,d=m*f,p*=d);while(h&&e(d-1)>s&&--l);else do h=u(),h&&(f=h[1]+h[0]*f,f===0&&(f=n),m=h[1]+h[0]/m,m===0&&(m=n),f=1/f,d=m*f,p*=d);while(h&&e(d-1)>s&&--l);return p}function a(u,s){var l,c,d;return c={},arguments.length>1&&(c=s),l=c.maxIter||r,d=c.tolerance||t,c.keep?o(u,d,l):i(u,d,l)}return O1=a,O1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N1,D5;function KW(){if(D5)return N1;D5=1;var e=ye(),n=ot(),t=ts(),r=1e6;function i(u,s,l){var c,d,p,m,f,h;h=u(),f=h[1],d=h[0],f===0&&(f=t),p=f,m=0;do h=u(),h&&(m=h[1]+h[0]*m,m===0&&(m=t),p=h[1]+h[0]/p,p===0&&(p=t),m=1/m,c=p*m,f*=c);while(h&&e(c-1)>s&&--l);return d/f}function o(u,s,l){var c,d,p,m,f;f=u(),m=f[1],m===0&&(m=t),d=m,p=0;do f=u(),f&&(p=f[1]+f[0]*p,p===0&&(p=t),d=f[1]+f[0]/d,d===0&&(d=t),p=1/p,c=d*p,m*=c);while(f&&e(c-1)>s&&--l);return m}function a(u,s){var l,c,d;return c={},arguments.length>1&&(c=s),d=c.tolerance||n,l=c.maxIter||r,c.keep?o(u,d,l):i(u,d,l)}return N1=a,N1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k1,F5;function QT(){if(F5)return k1;F5=1;var e=XT(),n=WW(),t=KW(),r;return e()?r=n:r=t,k1=r,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var M1,q5;function XW(){if(q5)return M1;q5=1;function e(n,t){var r=t-n+1,i=n,o=0;return a;function a(){return o+=1,r+=2,[o*(i-o),r]}}return M1=e,M1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var P1,x5;function ZT(){if(x5)return P1;x5=1;var e=QT(),n=XW();function t(r,i){var o=n(r,i);return 1/(i-r+1+e(o))}return P1=t,P1}/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var D1,B5;function YW(){if(B5)return D1;B5=1;var e=it(),n=at(),t=ye(),r=Oe(),i=we(),o=QV(),a=cr(),u=qt(),s=iW(),l=oW(),c=hW(),d=vW(),p=OW(),m=zT(),f=PW(),h=VW(),v=ZT();function _(g,b,y,E){var A,T,C,L,$,w,S,I,R,P,k,H,D,q;switch(S=0,I=E,w=b<30&&b<=g+1&&g<u,w?(D=e(b),R=D===b,C=R?!1:t(D-b)===.5):(R=!1,C=!1),R&&g>.6?(I=!I,T=0):C&&g>.2?(I=!I,T=1):g<o&&b>1?T=6:g>1e3&&(b<g||t(b-50)/g<1)?(I=!I,T=7):g<.5?-.4/i(g)<b?T=2:T=3:g<1.1?g*.75<b?T=2:T=3:($=!1,y&&b>20&&(P=t((g-b)/b),b>200?20/b>P*P&&($=!0):P<.4&&($=!0)),$?T=5:g-1/(3*g)<b?T=2:(T=4,I=!I)),T){case 0:S=l(b,g),y===!1&&(S*=n(b));break;case 1:S=c(b,g),y===!1&&(S*=n(b));break;case 2:S=y?f(b,g):d(b,g),S!==0&&(L=0,A=!1,I&&(L=y?1:n(b),y||S>=1||a*S>L?(L/=S,y||b<1||a/b>L?(L*=-b,A=!0):L=0):L=0),S*=m(b,g,L)/b,A&&(I=!1,S=-S));break;case 3:I=!I,k=h(b,g,I),S=k[0],q=k[1],I=!1,y&&(S/=q);break;case 4:S=y?f(b,g):d(b,g),S!==0&&(S*=v(b,g));break;case 5:S=p(b,g),g>=b&&(I=!I);break;case 6:S=y?r(g,b)/n(b+1):r(g,b)/b,S*=1-b*g/(b+1);break;case 7:S=y?f(b,g):d(b,g),S/=g,S!==0&&(S*=s(b,g));break}return y&&S>1&&(S=1),I&&(H=y?1:n(b),S=H-S),S}return D1=_,D1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var F1,H5;function JW(){if(H5)return F1;H5=1;var e=ri(),n=Ce(),t=we(),r=zu(),i=qt(),o=Re(),a=Qu(),u=YW(),s=zT(),l=ZT();function c(d,p,m,f){var h,v,_,g;return d<0||p<=0?NaN:(h=m===void 0?!0:m,_=f,p>=a&&!h?(_&&p*4<d?(g=p*t(d)-d,g+=t(l(p,d))):!_&&p>4*d?(g=p*t(d)-d,v=0,g+=t(s(p,d,v)/p)):(g=u(d,p,!0,_),g===0?_?(g=1+1/(12*p)+1/(288*p*p),g=t(g)-p+(p-.5)*t(p),g+=t(r)):(g=p*t(d)-d,v=0,g+=t(s(p,d,v)/p)):g=t(g)+e(p)),g>i?o:n(g)):u(d,p,h,_))}return F1=c,F1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q1,U5;function eI(){if(U5)return q1;U5=1;var e=JW();return q1=e,q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var x1,G5;function zW(){if(G5)return x1;G5=1;var e=Ce(),n=Oe(),t=we(),r=qt(),i=ii();function o(a,u){var s,l;return l=a*t(u),u>=1?l<r&&-u>i?s=n(u,a)*e(-u):a>=1?s=n(u/e(u/a),a):s=e(l-u):l>i?s=n(u,a)*e(-u):u/a<r?s=n(u/e(u/a),a):s=e(l-u),s}return x1=o,x1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var B1,j5;function QW(){if(j5)return B1;j5=1;var e=ns(),n=ri(),t=at(),r=En(),i=be(),o=ye(),a=Ce(),u=Oe(),s=lr(),l=Dt(),c=we(),d=qt(),p=ii(),m=Ro(),f=ti();function h(v,_){var g,b,y,E,A,T,C;return y=v+m-.5,C=(_-v-m+.5)/y,v<1?_<=p?a(v*c(_)-_-n(v)):u(_,v)*a(-_)/t(v):(o(C*C*v)<=100&&v>150?(g=v*(r(C)-C)+_*(.5-m)/y,g=a(g)):(E=v*c(_/y),A=v-_,l(E,A)<=p||s(E,A)>=d?(b=A/v,l(E,A)/2>p&&s(E,A)/2<d?(T=u(_/y,v/2)*a(A/2),g=T*T):l(E,A)/4>p&&s(E,A)/4<d&&_>v?(T=u(_/y,v/4)*a(A/4),g=T*T,g*=g):b>p&&b<d?g=u(_*a(b)/y,v):g=a(E+A)):g=u(_/y,v)*a(A)),g*=i(y/f)/e(v),g)}return B1=h,B1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var H1,V5;function ZW(){if(V5)return H1;V5=1;var e=h_(),n=KT(),t=eI(),r=En(),i=ye(),o=Oe(),a=we(),u=sr(),s=ot(),l=zW(),c=QW(),d=new Array(30);function p(m,f,h,v,_,g,b){var y,E,A,T,C,L,$,w,S,I,R,P,k,H,D,q,M,Z;if(L=f-1,M=m+L/2,v<.35?I=r(-v):I=a(h),Z=-M*I,P=c(f,Z),P<=u)return _;for(b?(y=P/e(m,f),y/=o(M,f)):y=l(f,Z)/o(M,f),y*=g,d[0]=1,k=t(Z,f,!0,!0),k/=P,T=_+y*k,A=1,$=I/2,$*=$,w=1,R=4*M*M,C=f,D=1;D<d.length;++D){for(A+=2,d[D]=0,S=f-D,E=3,H=1;H<D;++H)S=H*f-D,d[D]+=S*d[D-H]/n(E),E+=2;if(d[D]/=D,d[D]+=L/n(A),k=(C*(C+1)*k+(Z+C+1)*w)/R,w*=$,C+=2,q=y*d[D]*k,T+=q,q>1){if(i(q)<i(s*T))break}else if(i(q/s)<i(T))break}return T}return H1=p,H1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var U1,W5;function eK(){if(W5)return U1;W5=1;function e(n,t,r){var i,o;if(r===0)return 1;for(i=1,o=0;o<r;o++)i*=(n+o)/(t+o);return i}return U1=e,U1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G1,K5;function nK(){if(K5)return G1;K5=1;var e=ye(),n=lr();function t(r,i){return n(e(r),e(i))}return G1=t,G1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j1,X5;function tK(){if(X5)return j1;X5=1;var e=nK();return j1=e,j1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V1,Y5;function rK(){if(Y5)return V1;Y5=1;var e=ye(),n=Dt();function t(r,i){return n(e(r),e(i))}return V1=t,V1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W1,J5;function iK(){if(J5)return W1;J5=1;var e=rK();return W1=e,W1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var K1,z5;function __(){if(z5)return K1;z5=1;var e=ns(),n=tK(),t=iK(),r=Qr(),i=En(),o=be(),a=ye(),u=Ce(),s=Oe(),l=Dt(),c=we(),d=qt(),p=ii(),m=Ro(),f=ti();function h(v,_,g,b,y){var E,A,T,C,L,$,w,S,I,R,P,k,H,D;if(!y)return s(g,v)*s(b,_);if(H=v+_,C=v+m-.5,L=_+m-.5,$=H+m-.5,E=e(H),E/=e(v)*e(_),E*=o(L/f),E*=o(C/$),w=(g*_-b*C)/C,S=(b*v-g*L)/L,t(w,S)<.2)if(w*S>0||l(v,_)<1)a(w)<.1?E*=u(v*i(w)):E*=s(g*$/C,v),a(S)<.1?E*=u(_*i(S)):E*=s(b*$/L,_);else if(n(w,S)<.5)A=v<_,T=_/v,A&&T*S<.1||!A&&w/T>.1?(I=r(T*i(S)),I=w+I+I*w,I=v*i(I),E*=u(I)):(I=r(i(w)/T),I=S+I+I*S,I=_*i(I),E*=u(I));else if(a(w)<a(S))if(D=v*i(w)+_*c(b*$/L),D<=p||D>=d){if(D+=c(E),D>=d)return NaN;E=u(D)}else E*=u(D);else if(D=_*i(S)+v*c(g*$/C),D<=p||D>=d){if(D+=c(E),D>=d)return NaN;E=u(D)}else E*=u(D);else if(P=g*$/C,k=b*$/L,w=v*c(P),S=_*c(k),w>=d||w<=p||S>=d||S<=p)if(v<_)if(R=s(k,_/v),I=v*(c(P)+c(R)),I<d&&I>p)E*=s(R*P,v);else{if(S+=w+c(E),S>=d)return NaN;E=u(S)}else if(R=s(P,v/_),I=(c(R)+c(k))*_,I<d&&I>p)E*=s(R*k,_);else{if(S+=w+c(E),S>=d)return NaN;E=u(S)}else E*=s(P,v)*s(k,_);return E}return K1=h,K1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var X1,Q5;function oK(){if(Q5)return X1;Q5=1;var e=QT(),n=__(),t={keep:!0,maxIter:1e3};function r(o,a,u,s){var l=0;return c;function c(){var d,p,m;return p=(o+l-1)*(o+a+l-1)*l*(a-l)*u*u,d=o+2*l-1,p/=d*d,m=l,m+=l*(a-l)*u/(o+2*l-1),m+=(o+l)*(o*s-a*u+1+l*(2-u))/(o+2*l+1),l+=1,[p,m]}}function i(o,a,u,s,l,c){var d,p,m;return d=n(o,a,u,s,l),c&&(c[1]=d),d===0?d:(m=r(o,a,u,s),p=e(m,t),d/p)}return X1=i,X1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y1,Z5;function aK(){if(Z5)return Y1;Z5=1;var e=9007199254740991;return Y1=e,Y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J1,e8;function uK(){if(e8)return J1;e8=1;function e(n,t){var r=0,i;if(n===0)return t;if(t===0)return n;for(;(n&1)===0&&(t&1)===0;)n>>>=1,t>>>=1,r+=1;for(;(n&1)===0;)n>>>=1;for(;t;){for(;(t&1)===0;)t>>>=1;n>t&&(i=t,t=n,n=i),t-=n}return n<<r}return J1=e,J1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z1,n8;function sK(){if(n8)return z1;n8=1;function e(n,t){var r=1,i;if(n===0)return t;if(t===0)return n;for(;n%2===0&&t%2===0;)n/=2,t/=2,r*=2;for(;n%2===0;)n/=2;for(;t;){for(;t%2===0;)t/=2;n>t&&(i=t,t=n,n=i),t-=n}return r*n}return z1=e,z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q1,t8;function lK(){if(t8)return Q1;t8=1;var e=ue(),n=ni(),t=Re(),r=on(),i=UT(),o=uK(),a=sK();function u(s,l){return e(s)||e(l)?NaN:s===t||l===t||s===r||l===r?NaN:n(s)&&n(l)?(s<0&&(s=-s),l<0&&(l=-l),s<=i&&l<=i?o(s,l):a(s,l)):NaN}return Q1=u,Q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z1,r8;function cK(){if(r8)return Z1;r8=1;var e=lK();return Z1=e,Z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ep,i8;function dK(){if(i8)return ep;i8=1;var e=aK(),n=Re(),t=ni(),r=ue(),i=p_(),o=it(),a=cK();function u(s,l){var c,d,p,m,f,h,v;if(r(s)||r(l))return NaN;if(!t(s)||!t(l))return NaN;if(l<0||(d=1,s<0&&(s=-s+l-1,i(l)&&(d*=-1)),l>s))return 0;if(l===0||l===s)return d;if(l===1||l===s-1)return d*s;for(s-l<l&&(l=s-l),v=o(e/s),c=1,f=1;f<=l&&!(c>v);f++)c*=s,c/=f,s-=1;return f>l?d*c:(p=u(s,l-f+1),p===n?d*p:(m=u(l,l-f+1),h=a(p,m),p/=h,m/=h,c/=m,d*c*p))}return ep=u,ep}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var np,o8;function fK(){if(o8)return np;o8=1;var e=dK();return np=e,np}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var tp,a8;function pK(){if(a8)return tp;a8=1;var e=fK(),n=it(),t=Oe(),r=sr();function i(o,a,u,s){var l,c,d,p,m;if(c=t(u,o),c>r)for(p=c,m=n(o-1);m>a;m--)p*=(m+1)*s/((o-m)*u),c+=p;else if(d=n(o*u),d<=a+1&&(d=n(a+2)),c=t(u,d)*t(s,o-d),c*=e(n(o),n(d)),c===0)for(m=d-1;m>a;m--)c+=t(u,m)*t(s,o-m),c*=e(n(o),n(m));else{for(p=c,l=c,m=d-1;m>a;m--)p*=(m+1)*s/((o-m)*u),c+=p;for(p=l,m=d+1;m<=o;m++)p*=(o-m+1)*u/(m*s),c+=p}return c}return tp=i,tp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var rp,u8;function mK(){if(u8)return rp;u8=1;var e=__();function n(t,r,i,o,a,u,s){var l,c,d,p;if(l=e(t,r,i,o,u),s&&(s[1]=l),l/=t,l===0)return l;for(d=1,c=1,p=0;p<a-1;++p)c*=(t+r+p)*i/(t+p+1),d+=c;return l*=d,l}return rp=n,rp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var ip,s8;function hK(){if(s8)return ip;s8=1;var e=ns(),n=Co(),t=En(),r=be(),i=Ce(),o=Oe(),a=we(),u=sr(),s=qt(),l=ii(),c=Ro(),d=ti(),p={maxTerms:100};function m(h,v,_,g){var b=1-v,y=1;return E;function E(){var A=g/h;return h+=1,g*=b*_/y,y+=1,b+=1,A}}function f(h,v,_,g,b,y,E){var A,T,C,L,$,w,S,I;return b?(S=h+v,T=h+c-.5,C=v+c-.5,L=S+c-.5,A=e(S)/(e(h)*e(v)),$=a(L/C)*(v-.5),w=a(_*L/T)*h,$>l&&$<s&&w>l&&w<s?(h*v<C*10?A*=i((v-.5)*t(h/C)):A*=o(L/C,v-.5),A*=o(_*L/T,h),A*=r(T/d),y&&(y[1]=A*o(E,v))):(A=a(A)+$+w+(a(T)-1)/2,y&&(y[1]=i(A+v*a(E))),A=i(A))):A=o(_,h),A<u?g:(I=m(h,v,_,A),p.initialValue=g,n(I,p))}return ip=f,ip}var op,l8;function nI(){if(l8)return op;l8=1;var e=ue(),n=Qr(),t=it(),r=En(),i=l_(),o=Ju(),a=be(),u=Ce(),s=Oe(),l=lr(),c=Dt(),d=cr(),p=sr(),m=UT(),f=m_(),h=Ft(),v=ZW(),_=eK(),g=__(),b=oK(),y=pK(),E=mK(),A=hK(),T=1/h;function C(L,$,w,S,I,R,P,k){var H,D,q,M,Z,G,z,te,ae,j,Y,V;if(V=1-L,z=k,te=k+P,R[te]=-1,e(L)||L<0||L>1)return R[z]=NaN,R[te]=NaN,R;if(S){if($<0||w<0)return R[z]=NaN,R[te]=NaN,R;if($===0){if(w===0)return R[z]=NaN,R[te]=NaN,R;if(w>0)return R[z]=I?0:1,R}else if(w===0&&$>0)return R[z]=I?1:0,R}else if($<=0||w<=0)return R[z]=NaN,R[te]=NaN,R;return L===0?($===1?R[te]=1:R[te]=$<1?d/2:p*2,I?(R[z]=S?1:o($,w),R):(R[z]=0,R)):L===1?(w===1?R[te]=1:R[te]=w<1?d/2:p*2,I?R[z]=0:R[z]=S?1:o($,w),R):$===.5&&w===.5?(R[te]=T*a(V*L),Y=i(a(I?V:L)),Y/=f,S||(Y*=h),R[z]=Y,R):($===1&&(G=w,w=$,$=G,G=V,V=L,L=G,I=!I),w===1?$===1?(R[z]=I?V:L,R[te]=1,R):(R[te]=$*s(L,$-1),V<.5?Y=I?-n($*r(-V)):u($*r(-V)):Y=I?-(s(L,$)-1):s(L,$),S||(Y/=$),R[z]=Y,R):(c($,w)<=1?(L>.5&&(G=w,w=$,$=G,G=V,V=L,L=G,I=!I),l($,w)<=1?$>=c(.2,w)||s(L,$)<=.9?I?(q=-(S?1:o($,w)),I=!1,q=-A($,w,L,q,S,R,V)):q=A($,w,L,0,S,R,V):(G=w,w=$,$=G,G=V,V=L,L=G,I=!I,V>=.3?I?(q=-(S?1:o($,w)),I=!1,q=-A($,w,L,q,S,R,V)):q=A($,w,L,0,S,R,V):(S?D=1:D=_($+w,$,20),q=E($,w,L,V,20,S,R),I?(q-=S?1:o($,w),I=!1,q=-v($+20,w,L,V,q,D,S)):q=v($+20,w,L,V,q,D,S))):w<=1||L<.1&&s(w*L,$)<=.7?I?(q=-(S?1:o($,w)),I=!1,q=-A($,w,L,q,S,R,V)):q=A($,w,L,0,S,R,V):(G=w,w=$,$=G,G=V,V=L,L=G,I=!I,V>=.3?I?(q=-(S?1:o($,w)),I=!1,q=-A($,w,L,q,S,R,V)):q=A($,w,L,0,S,R,V):$>=15?I?(q=-(S?1:o($,w)),I=!1,q=-v($,w,L,V,q,1,S)):q=v($,w,L,V,0,1,S):(S?D=1:D=_($+w,$,20),q=E($,w,L,V,20,S,R),I?(q-=S?1:o($,w),I=!1,q=-v($+20,w,L,V,q,D,S)):q=v($+20,w,L,V,q,D,S)))):($<w?H=$-($+w)*L:H=($+w)*V-w,H<0&&(G=w,w=$,$=G,G=V,V=L,L=G,I=!I),w<40?t($)===$&&t(w)===w&&$<m-100?(ae=$-1,j=w+ae,q=y(j,ae,L,V),S||(q*=o($,w))):w*L<=.7?I?(q=-(S?1:o($,w)),I=!1,q=-A($,w,L,q,S,R,V)):q=A($,w,L,0,S,R,V):$>15?(j=t(w),j===w&&(j-=1),M=w-j,S?D=1:D=_($+M,M,j),q=E(M,$,V,L,j,S),q=v($,M,L,V,q,1,S),q/=D):S?(j=t(w),M=w-j,M<=0&&(j-=1,M+=1),q=E(M,$,V,L,j,S),q+=E($,M,L,V,20,S),I&&(q-=1),q=v($+20,M,L,V,q,1,S),I&&(q=-q,I=!1)):q=b($,w,L,V,S,R):q=b($,w,L,V,S,R)),R[te]<0&&(R[te]=g($,w,L,V,!0)),Z=V*L,R[te]!==0&&(d*Z<R[te]?R[te]=d/2:R[te]/=Z),R[z]=I?(S?1:o($,w))-q:q,R))}return op=C,op}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ap,c8;function vK(){if(c8)return ap;c8=1;var e=nI();function n(t,r,i,o,a){return e(t,r,i,o,a,[0,0],1,0)}return ap=n,ap}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var up,d8;function tI(){if(d8)return up;d8=1;var e=rn(),n=vK(),t=nI();return e(n,"assign",t),up=n,up}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sp,f8;function _K(){if(f8)return sp;f8=1;var e=tI().assign;function n(t,r,i,o,a){var u=[0,0];return o=o!==!1,a=a===!0,e(t,r,i,o,a,u,1,0),u[0]}return sp=n,sp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lp,p8;function Oo(){if(p8)return lp;p8=1;var e=_K();return lp=e,lp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cp,m8;function gK(){if(m8)return cp;m8=1;var e=Oo(),n=ue();function t(r,i,o){return n(r)||n(i)||n(o)||i<=0||o<=0?NaN:r<=0?0:r>=1?1:e(r,i,o)}return cp=t,cp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dp,h8;function bK(){if(h8)return dp;h8=1;function e(n){return t;function t(){return n}}return dp=e,dp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fp,v8;function Sn(){if(v8)return fp;v8=1;var e=bK();return fp=e,fp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pp,_8;function yK(){if(_8)return pp;_8=1;var e=Sn(),n=Oo(),t=ue();function r(i,o){if(t(i)||t(o)||i<=0||o<=0)return e(NaN);return a;function a(u){return t(u)?NaN:u<=0?0:u>=1?1:n(u,i,o)}}return pp=r,pp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mp,g8;function EK(){if(g8)return mp;g8=1;var e=rn(),n=gK(),t=yK();return e(n,"factory",t),mp=n,mp}var SK=EK();const ov=rt(SK);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hp,b8;function rI(){if(b8)return hp;b8=1;var e=.9189385332046728;return hp=e,hp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The code is adapted from the Fortran routine from the FNLIB library of the [SLATEC Common Mathematical Library]{@link https://netlib.org/slatec/fnlib/dcsevl.f}.
*
* The original code was developed by W. Fullerton of Los Alamos Scientific Laboratory, a governmental institution, and is therefore public domain.
*/var vp,y8;function wK(){if(y8)return vp;y8=1;var e=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],n=e.length;function t(r){var i,o,a,u,s;if(r<-1.1||r>1.1)return NaN;for(a=0,u=0,i=2*r,s=0;s<n;s++)o=a,a=u,u=i*a-o+e[s];return(u-o)*.5}return vp=t,vp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The code is adapted from the Fortran routine from the FNLIB library of the [SLATEC Common Mathematical Library]{@link https://netlib.org/fn/d9lgmc.f}.
*
* The original code was developed by W. Fullerton of Los Alamos Scientific Laboratory, a governmental institution, and is therefore public domain.
*/var _p,E8;function AK(){if(E8)return _p;E8=1;var e=Oe(),n=wK(),t=9490626562425156e-8,r=3745194030963158e291;function i(o){return o<10?NaN:o>=r?0:o<t?n(2*e(10/o,2)-1)/o:1/(o*12)}return _p=i,_p}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The code is adapted from the Fortran routine from the FNLIB library of the [SLATEC Common Mathematical Library]{@link https://www.netlib.org/slatec/fnlib/albeta.f}.
*
* The original code was developed by W. Fullerton of Los Alamos Scientific Laboratory, a governmental institution, and is therefore public domain.
*/var gp,S8;function $K(){if(S8)return gp;S8=1;var e=ri(),n=En(),t=at(),r=lr(),i=Dt(),o=we(),a=rI(),u=on(),s=Re(),l=AK();function c(d,p){var m,f,h;return f=i(d,p),h=r(d,p),f<0?NaN:f===0?s:h===s?u:f>=10?(m=l(f)+l(h)-l(f+h),-.5*o(h)+a+m+(f-.5)*o(f/(f+h))+h*n(-f/(f+h))):h>=10?(m=l(h)-l(f+h),e(f)+m+f-f*o(f+h)+(h-.5)*n(-f/(f+h))):o(t(f)*(t(h)/t(f+h)))}return gp=c,gp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bp,w8;function iI(){if(w8)return bp;w8=1;var e=$K();return bp=e,bp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yp,A8;function TK(){if(A8)return yp;A8=1;var e=iI(),n=ue(),t=En(),r=Ce(),i=we(),o=Re();function a(u,s,l){var c;return n(u)||n(s)||n(l)||s<=0||l<=0?NaN:u<0||u>1?0:u===0?s<1?o:s>1?0:l:u===1?l<1?o:l>1?0:s:(c=(s-1)*i(u),c+=(l-1)*t(-u),c-=e(s,l),r(c))}return yp=a,yp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ep,$8;function IK(){if($8)return Ep;$8=1;var e=Sn(),n=iI(),t=ue(),r=En(),i=Ce(),o=we(),a=Re();function u(s,l){var c;if(t(s)||t(l)||s<=0||l<=0)return e(NaN);return c=n(s,l),d;function d(p){var m;return t(p)?NaN:p<0||p>1?0:p===0?s<1?a:s>1?0:l:p===1?l<1?a:l>1?0:s:(m=-c,m+=(s-1)*o(p),m+=(l-1)*r(-p),i(m))}}return Ep=u,Ep}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sp,T8;function LK(){if(T8)return Sp;T8=1;var e=rn(),n=TK(),t=IK();return e(n,"factory",t),Sp=n,Sp}var RK=LK();const CK=rt(RK);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wp,I8;function OK(){if(I8)return wp;I8=1;function e(n){var t,r,i;return n===0?-.0005087819496582806:(n<0?t=-n:t=n,t<=1?(r=-.0005087819496582806+n*(-.008368748197417368+n*(.03348066254097446+n*(-.012692614766297404+n*(-.03656379714117627+n*(.02198786811111689+n*(.008226878746769157+n*(-.005387729650712429+n*(0+n*0)))))))),i=1+n*(-.9700050433032906+n*(-1.5657455823417585+n*(1.5622155839842302+n*(.662328840472003+n*(-.7122890234154284+n*(-.05273963823400997+n*(.07952836873415717+n*(-.0023339375937419+n*.0008862163904564247))))))))):(n=1/n,r=0+n*(0+n*(-.005387729650712429+n*(.008226878746769157+n*(.02198786811111689+n*(-.03656379714117627+n*(-.012692614766297404+n*(.03348066254097446+n*(-.008368748197417368+n*-.0005087819496582806)))))))),i=.0008862163904564247+n*(-.0023339375937419+n*(.07952836873415717+n*(-.05273963823400997+n*(-.7122890234154284+n*(.662328840472003+n*(1.5622155839842302+n*(-1.5657455823417585+n*(-.9700050433032906+n*1))))))))),r/i)}return wp=e,wp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ap,L8;function NK(){if(L8)return Ap;L8=1;function e(n){var t,r,i;return n===0?-.20243350835593876:(n<0?t=-n:t=n,t<=1?(r=-.20243350835593876+n*(.10526468069939171+n*(8.3705032834312+n*(17.644729840837403+n*(-18.851064805871424+n*(-44.6382324441787+n*(17.445385985570866+n*(21.12946554483405+n*-3.6719225470772936))))))),i=1+n*(6.242641248542475+n*(3.971343795334387+n*(-28.66081804998+n*(-20.14326346804852+n*(48.560921310873994+n*(10.826866735546016+n*(-22.643693341313973+n*1.7211476576120028)))))))):(n=1/n,r=-3.6719225470772936+n*(21.12946554483405+n*(17.445385985570866+n*(-44.6382324441787+n*(-18.851064805871424+n*(17.644729840837403+n*(8.3705032834312+n*(.10526468069939171+n*-.20243350835593876))))))),i=1.7211476576120028+n*(-22.643693341313973+n*(10.826866735546016+n*(48.560921310873994+n*(-20.14326346804852+n*(-28.66081804998+n*(3.971343795334387+n*(6.242641248542475+n*1)))))))),r/i)}return Ap=e,Ap}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $p,R8;function kK(){if(R8)return $p;R8=1;function e(n){var t,r,i;return n===0?-.1311027816799519:(n<0?t=-n:t=n,t<=1?(r=-.1311027816799519+n*(-.16379404719331705+n*(.11703015634199525+n*(.38707973897260434+n*(.3377855389120359+n*(.14286953440815717+n*(.029015791000532906+n*(.0021455899538880526+n*(-6794655751811263e-22+n*(28522533178221704e-24+n*-681149956853777e-24))))))))),i=1+n*(3.4662540724256723+n*(5.381683457070069+n*(4.778465929458438+n*(2.5930192162362027+n*(.848854343457902+n*(.15226433829533179+n*(.011059242293464892+n*(0+n*(0+n*0)))))))))):(n=1/n,r=-681149956853777e-24+n*(28522533178221704e-24+n*(-6794655751811263e-22+n*(.0021455899538880526+n*(.029015791000532906+n*(.14286953440815717+n*(.3377855389120359+n*(.38707973897260434+n*(.11703015634199525+n*(-.16379404719331705+n*-.1311027816799519))))))))),i=0+n*(0+n*(0+n*(.011059242293464892+n*(.15226433829533179+n*(.848854343457902+n*(2.5930192162362027+n*(4.778465929458438+n*(5.381683457070069+n*(3.4662540724256723+n*1)))))))))),r/i)}return $p=e,$p}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tp,C8;function MK(){if(C8)return Tp;C8=1;function e(n){var t,r,i;return n===0?-.0350353787183178:(n<0?t=-n:t=n,t<=1?(r=-.0350353787183178+n*(-.0022242652921344794+n*(.018557330651423107+n*(.009508047013259196+n*(.0018712349281955923+n*(.00015754461742496055+n*(460469890584318e-20+n*(-2304047769118826e-25+n*26633922742578204e-28))))))),i=1+n*(1.3653349817554064+n*(.7620591645536234+n*(.22009110576413124+n*(.03415891436709477+n*(.00263861676657016+n*(7646752923027944e-20+n*(0+n*0)))))))):(n=1/n,r=26633922742578204e-28+n*(-2304047769118826e-25+n*(460469890584318e-20+n*(.00015754461742496055+n*(.0018712349281955923+n*(.009508047013259196+n*(.018557330651423107+n*(-.0022242652921344794+n*-.0350353787183178))))))),i=0+n*(0+n*(7646752923027944e-20+n*(.00263861676657016+n*(.03415891436709477+n*(.22009110576413124+n*(.7620591645536234+n*(1.3653349817554064+n*1)))))))),r/i)}return Tp=e,Tp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ip,O8;function PK(){if(O8)return Ip;O8=1;function e(n){var t,r,i;return n===0?-.016743100507663373:(n<0?t=-n:t=n,t<=1?(r=-.016743100507663373+n*(-.0011295143874558028+n*(.001056288621524929+n*(.00020938631748758808+n*(14962478375834237e-21+n*(44969678992770644e-23+n*(4625961635228786e-24+n*(-2811287356288318e-29+n*9905570997331033e-32))))))),i=1+n*(.5914293448864175+n*(.1381518657490833+n*(.016074608709367652+n*(.0009640118070051656+n*(27533547476472603e-21+n*(282243172016108e-21+n*(0+n*0)))))))):(n=1/n,r=9905570997331033e-32+n*(-2811287356288318e-29+n*(4625961635228786e-24+n*(44969678992770644e-23+n*(14962478375834237e-21+n*(.00020938631748758808+n*(.001056288621524929+n*(-.0011295143874558028+n*-.016743100507663373))))))),i=0+n*(0+n*(282243172016108e-21+n*(27533547476472603e-21+n*(.0009640118070051656+n*(.016074608709367652+n*(.1381518657490833+n*(.5914293448864175+n*1)))))))),r/i)}return Ip=e,Ip}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_81_0/boost/math/special_functions/detail/erf_inv.hpp}. This implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Lp,N8;function DK(){if(N8)return Lp;N8=1;var e=ue(),n=be(),t=we(),r=Re(),i=on(),o=OK(),a=NK(),u=kK(),s=MK(),l=PK(),c=.08913147449493408,d=2.249481201171875,p=.807220458984375,m=.9399557113647461,f=.9836282730102539;function h(v){var _,g,b,y,E;return e(v)?NaN:v===0?r:v===2?i:v===1?0:v>2||v<0?NaN:(v>1?(_=-1,b=2-v):(_=1,b=v),v=1-b,v<=.5?(y=v*(v+10),E=o(v),_*(y*c+y*E)):b>=.25?(y=n(-2*t(b)),b-=.25,E=a(b),_*(y/(d+E))):(b=n(-t(b)),b<3?(g=b-1.125,E=u(g),_*(p*b+E*b)):b<6?(g=b-3,E=s(g),_*(m*b+E*b)):(g=b-6,E=l(g),_*(f*b+E*b))))}return Lp=h,Lp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rp,k8;function No(){if(k8)return Rp;k8=1;var e=DK();return Rp=e,Rp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var Cp,M8;function FK(){if(M8)return Cp;M8=1;var e=ue(),n=l_(),t=be(),r=PT(),i=6123233995736766e-32;function o(a){var u;return e(a)?NaN:a<-1||a>1?NaN:a>.5?2*n(t(.5-.5*a)):(u=r-n(a),u+=i,u+=r,u)}return Cp=o,Cp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Op,P8;function qK(){if(P8)return Op;P8=1;var e=FK();return Op=e,Op}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Np,D8;function g_(){if(D8)return Np;D8=1;var e=1.4142135623730951;return Np=e,Np}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kp,F8;function xK(){if(F8)return kp;F8=1;function e(n){return n===0?.16666666666666666:.16666666666666666+n*.16666666666666666}return kp=e,kp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mp,q8;function BK(){if(q8)return Mp;q8=1;function e(n){return n===0?.058333333333333334:.058333333333333334+n*(.06666666666666667+n*.008333333333333333)}return Mp=e,Mp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pp,x8;function HK(){if(x8)return Pp;x8=1;function e(n){return n===0?.0251984126984127:.0251984126984127+n*(.026785714285714284+n*(.0017857142857142857+n*.0001984126984126984))}return Pp=e,Pp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dp,B8;function UK(){if(B8)return Dp;B8=1;function e(n){return n===0?.012039792768959435:.012039792768959435+n*(.010559964726631394+n*(-.0011078042328042327+n*(.0003747795414462081+n*27557319223985893e-22)))}return Dp=e,Dp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fp,H8;function GK(){if(H8)return Fp;H8=1;function e(n){return n===0?.003837005972422639:.003837005972422639+n*(.00610392115600449+n*(-.0016095979637646305+n*(.0005945867404200738+n*(-6270542728876062e-20+n*2505210838544172e-23))))}return Fp=e,Fp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qp,U8;function jK(){if(U8)return qp;U8=1;function e(n){return n===0?.0032177478835464946:.0032177478835464946+n*(.0010898206731540065+n*(-.0012579159844784845+n*(.0006908420797309686+n*(-.00016376804137220805+n*(154012654012654e-19+n*16059043836821613e-26)))))}return qp=e,qp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xp,G8;function VK(){if(G8)return xp;G8=1;function e(n){return n===0?.001743826229834001:.001743826229834001+n*(3353097688001788e-20+n*(-.0007624513544032393+n*(.0006451304695145635+n*(-.000249472580470431+n*(49255746366361444e-21+n*(-39851014346715405e-22+n*7647163731819816e-28))))))}return xp=e,xp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bp,j8;function WK(){if(j8)return Bp;j8=1;function e(n){return n===0?.0009647274732138864:.0009647274732138864+n*(-.0003110108632631878+n*(-.00036307660358786886+n*(.0005140660578834113+n*(-.00029133414466938067+n*(9086710793521991e-20+n*(-15303004486655377e-21+n*(10914179173496788e-22+n*28114572543455206e-31)))))))}return Bp=e,Bp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hp,V8;function KK(){if(V8)return Hp;V8=1;function e(n){return n===0?.0005422926281312969:.0005422926281312969+n*(-.0003694266780000966+n*(-.00010230378073700413+n*(.00035764655430568635+n*(-.00028690924218514614+n*(.00012645437628698076+n*(-33202652391372056e-21+n*(4890304529197534e-21+n*(-3123956959982987e-22+n*822063524662433e-32))))))))}return Hp=e,Hp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Up,W8;function XK(){if(W8)return Up;W8=1;var e=h_(),n=xt(),t=be(),r=Ft(),i=xK(),o=BK(),a=HK(),u=UK(),s=GK(),l=jK(),c=VK(),d=WK(),p=KK(),m=0,f=[1,0,0,0,0,0,0,0,0,0];function h(v,_){var g,b;return b=e(v/2,.5)*t(v*r)*(_-.5),g=1/v,f[1]=i(g),f[2]=o(g),f[3]=a(g),f[4]=u(g),f[5]=s(g),f[6]=l(g),f[7]=c(g),f[8]=d(g),f[9]=p(g),m+b*n(f,b*b)}return Up=h,Up}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Gp,K8;function YK(){if(K8)return Gp;K8=1;var e=h_(),n=xt(),t=be(),r=Oe(),i=Ft(),o=[0,0,0,0,0,0,0];function a(u,s){var l,c,d,p,m,f,h,v;return v=e(u/2,.5)*t(u*i)*s,p=u+2,m=u+4,f=u+6,o[0]=1,o[1]=-(u+1)/(2*p),p*=u+2,o[2]=-u*(u+1)*(u+3)/(8*p*m),p*=u+2,o[3]=-u*(u+1)*(u+5)*((3*u+7)*u-2)/(48*p*m*f),p*=u+2,m*=u+4,o[4]=-u*(u+1)*(u+7)*(((((15*u+154)*u+465)*u+286)*u-336)*u+64)/(384*p*m*f*(u+8)),p*=u+2,o[5]=-u*(u+1)*(u+3)*(u+9)*((((((35*u+452)*u+1573)*u+600)*u-2020)*u+928)*u-128)/(1280*p*m*f*(u+8)*(u+10)),p*=u+2,m*=u+4,f*=u+6,o[6]=-u*(u+1)*(u+11)*(((((((((((945*u+31506)*u+425858)*u+2980236)*u+11266745)*u+20675018)*u+7747124)*u-22574632)*u-8565600)*u+18108416)*u-7099392)*u+884736)/(46080*p*m*f*(u+8)*(u+10)*(u+12)),h=t(u),d=r(h*v,1/u),c=d*d,l=n(o,c),l*=h,l/=d,-l}return Gp=a,Gp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var jp,X8;function JK(){if(X8)return jp;X8=1;var e=No(),n=Qr(),t=be(),r=Oe(),i=m_(),o=g_();function a(u,s){var l,c,d,p,m,f,h;return u>1e20?-e(2*s)*o:(l=1/(u-.5),c=48/(l*l),d=((20700*l/c-98)*l-16)*l+96.36,p=((94.5/(c+d)-3)/c+1)*t(l*i)*u,h=r(p*2*s,2/u),h>.05+l?(f=-e(2*s)*o,h=f*f,u<5&&(d+=.3*(u-4.5)*(f+.6)),d+=(((.05*p*f-5)*f-7)*f-2)*f+c,h=(((((.4*h+6.3)*h+36)*h+94.5)/d-h-3)/c+1)*f,h=n(l*h*h)):h=((1/(((u+6)/(u*h)-.089*p-.822)*(u+2)*3)+.5/(u+4))*h-1)*(u+1)/(u+2)+1/h,m=t(u*h),-m)}return jp=a,jp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Vp,Y8;function zK(){if(Y8)return Vp;Y8=1;var e=No(),n=it(),t=ei(),r=VT(),i=qK(),o=be(),a=ye(),u=v_(),s=Oe(),l=Lo(),c=g_(),d=Ft(),p=XK(),m=YK(),f=JK(),h=268435456,v=1/3,_=106/3,g=.8549879733383485;function b(y,E,A){var T,C,L,$,w,S,I,R,P,k,H,D,q,M,Z,G;if(w=0,E>A?(I=A,A=E,E=I,$=!0):$=!1,n(y)===y&&y<20)switch(C=t(1,_),n(y)){case 1:E===.5?w=0:w=-u(d*E)/l(d*E);break;case 2:w=(2*E-1)/o(2*E*A);break;case 4:S=4*E*A,L=o(S),q=4*u(i(L)/3)/L,M=o(q-4),w=E-.5<0?-M:M;break;case 6:if(E<1e-150)return($?-1:1)*f(y,E);Z=4*(E-E*E),G=s(Z,v),D=6*(1+g*(1/G-1));do P=D*D,k=P*P,H=D*k,R=D,D=2*(8*Z*H-270*P+2187)/(5*(4*Z*k-216*D-243));while(a((D-R)/D)>C);D=o(D-y),w=E-.5<0?-D:D;break;default:y>h?w=e(2*E)*c:y<3?(T=.2742-y*.0242143,E>T?w=p(y,E):w=m(y,E)):(T=t(1,r(y/-.654)),E>T?w=f(y,E):w=m(y,E))}else y>h?w=-e(2*E)*c:y<3?(T=.2742-y*.0242143,E>T?w=p(y,E):w=m(y,E)):(T=t(1,r(y/-.654)),E>T?w=f(y,E):w=m(y,E));return $?-w:w}return Vp=b,Vp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Wp,J8;function QK(){if(J8)return Wp;J8=1;var e=zK();function n(t,r,i){var o,a,u,s;return a=r/2,u=1-a,o=t*2,s=e(o,a,u),i&&(i.value=s*s/(o+s*s)),o/(o+s*s)}return Wp=n,Wp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Kp,z8;function ZK(){if(z8)return Kp;z8=1;var e=xt(),n=No(),t=be(),r=Ce(),i=g_(),o=[0,0,0,0,0,0,0],a=[0,0,0,0];function u(s,l,c){var d,p,m,f,h,v,_;return d=n(2*c),d/=-t(s/2),a[0]=d,v=l-s,f=v*v,h=f*v,o[0]=-v*i/2,o[1]=(1-2*v)/8,o[2]=-(v*i/48),o[3]=-1/192,o[4]=-v*i/3840,o[5]=0,o[6]=0,a[1]=e(o,d),o[0]=v*i*(3*v-2)/12,o[1]=(20*f-12*v+1)/128,o[2]=v*i*(20*v-1)/960,o[3]=(16*f+30*v-15)/4608,o[4]=v*i*(21*v+32)/53760,o[5]=(-(32*f)+63)/368640,o[6]=-v*i*(120*v+17)/25804480,a[2]=e(o,d),o[0]=v*i*(-75*f+80*v-16)/480,o[1]=(-1080*h+868*f-90*v-45)/9216,o[2]=v*i*(-1190*f+84*v+373)/53760,o[3]=(-2240*h-2508*f+2100*v-165)/368640,o[4]=0,o[5]=0,o[6]=0,a[3]=e(o,d),m=e(a,1/s),p=m*m,_=-r(-p/2),p===0?.5:(1+m*t((1+_)/p))/2}return Kp=u,Kp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Xp,Q8;function oI(){if(Q8)return Xp;Q8=1;var e=we(),n=cr(),t=n/4;function r(i,o){return a;function a(u){var s,l,c;return c=1-u,c===0?[-t,-t]:u===0?[-t,-t]:(l=e(u)+o*e(c)+i,s=1/u-o/c,[l,s])}}return Xp=r,Xp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yp,Z8;function eX(){if(Z8)return Yp;Z8=1;var e=ue();function n(t){return t===0||e(t)?t:t<0?-1:1}return Yp=n,Yp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jp,e9;function rs(){if(e9)return Jp;e9=1;var e=eX();return Jp=e,Jp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/tools/roots.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var zp,n9;function aI(){if(n9)return zp;n9=1;var e=rs(),n=ye(),t=ei(),r=cr();function i(o,a,u,s,l,c){var d,p,m,f,h,v,_,g,b,y;b=0,d=0,h=a,f=t(1,1-l),_=r,p=r,m=r,v=c;do{if(d=b,m=p,p=_,g=o(h),b=g[0],y=g[1],v-=1,b===0)break;if(y===0?(d===0&&(h===u?a=s:a=u,d=o(a),_=a-h),e(d)*e(b)<0?_<0?_=(h-u)/2:_=(h-s)/2:_<0?_=(h-s)/2:_=(h-u)/2):_=b/y,n(_*2)>n(m)&&(_=_>0?(h-u)/2:(h-s)/2),a=h,h-=_,h<=u){if(_=.5*(a-u),h=a-_,h===u||h===s)break}else if(h>=s&&(_=.5*(a-s),h=a-_,h===u||h===s))break;_>0?s=a:u=a}while(v&&n(h*f)<n(_));return h}return zp=i,zp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qp,t9;function nX(){if(t9)return Qp;t9=1;function e(n){return n===0?-1:-1+n*(-5+n*5)}return Qp=e,Qp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zp,r9;function tX(){if(r9)return Zp;r9=1;function e(n){return n===0?1:1+n*(21+n*(-69+n*46))}return Zp=e,Zp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var em,i9;function rX(){if(i9)return em;i9=1;function e(n){return n===0?7:7+n*(-2+n*(33+n*(-62+n*31)))}return em=e,em}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nm,o9;function iX(){if(o9)return nm;o9=1;function e(n){return n===0?25:25+n*(-52+n*(-17+n*(88+n*(-115+n*46))))}return nm=e,nm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tm,a9;function oX(){if(a9)return tm;a9=1;function e(n){return n===0?7:7+n*(12+n*(-78+n*52))}return tm=e,tm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rm,u9;function aX(){if(u9)return rm;u9=1;function e(n){return n===0?-7:-7+n*(2+n*(183+n*(-370+n*185)))}return rm=e,rm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var im,s9;function uX(){if(s9)return im;s9=1;function e(n){return n===0?-533:-533+n*(776+n*(-1835+n*(10240+n*(-13525+n*5410))))}return im=e,im}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var om,l9;function sX(){if(l9)return om;l9=1;function e(n){return n===0?-1579:-1579+n*(3747+n*(-3372+n*(-15821+n*(45588+n*(-45213+n*15071)))))}return om=e,om}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var am,c9;function lX(){if(c9)return am;c9=1;function e(n){return n===0?449:449+n*(-1259+n*(-769+n*(6686+n*(-9260+n*3704))))}return am=e,am}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var um,d9;function cX(){if(d9)return um;d9=1;function e(n){return n===0?63149:63149+n*(-151557+n*(140052+n*(-727469+n*(2239932+n*(-2251437+n*750479)))))}return um=e,um}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sm,f9;function dX(){if(f9)return sm;f9=1;function e(n){return n===0?29233:29233+n*(-78755+n*(105222+n*(146879+n*(-1602610+n*(3195183+n*(-2554139+n*729754))))))}return sm=e,sm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lm,p9;function fX(){if(p9)return lm;p9=1;function e(n){return n===0?1:1+n*(-13+n*13)}return lm=e,lm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cm,m9;function pX(){if(m9)return cm;m9=1;function e(n){return n===0?1:1+n*(21+n*(-69+n*46))}return cm=e,cm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var dm,h9;function mX(){if(h9)return dm;h9=1;var e=xt(),n=No(),t=ye(),r=Ce(),i=we(),o=be(),a=Lo(),u=v_(),s=oI(),l=aI(),c=nX(),d=tX(),p=rX(),m=iX(),f=oX(),h=aX(),v=uX(),_=sX(),g=lX(),b=cX(),y=dX(),E=fX(),A=pX(),T=[0,0,0,0,0,0],C=[0,0,0,0];function L($,w,S){var I,R,P,k,H,D,q,M,Z,G,z,te,ae,j,Y,V,Ee,me,ne,se;return H=n(2*$)/-o(w/2),me=a(S),Ee=u(S),C[0]=H,Y=me*me,V=Ee*Ee,ae=me*Ee,te=ae*ae,z=te*ae,G=te*te,Z=te*z,M=z*z,q=G*z,T[0]=(2*Y-1)/(3*ae),T[1]=-c(Y)/(36*te),T[2]=d(Y)/(1620*z),T[3]=p(Y)/(6480*G),T[4]=m(Y)/(90720*Z),T[5]=0,C[1]=e(T,H),T[0]=-f(Y)/(405*z),T[1]=h(Y)/(2592*G),T[2]=-v(Y)/(204120*Z),T[3]=-_(Y)/(2099520*M),T[4]=0,T[5]=0,C[2]=e(T,H),T[0]=g(Y)/(102060*Z),T[1]=-b(Y)/(20995200*M),T[2]=y(Y)/(36741600*q),T[3]=0,T[4]=0,T[5]=0,C[3]=e(T,H),D=e(C,1/w),P=Ee/me,P*=P,j=-(D*D)/(2*Y)+i(Y)+V*i(V)/Y,t(D)<.7?(T[0]=Y,T[1]=ae,T[2]=(1-2*Y)/3,T[3]=E(Y)/(36*ae),T[4]=A(Y)/(270*te),T[5]=0,se=e(T,D)):(ne=r(j),T[0]=ne,T[1]=P,T[2]=0,T[3]=3*P*(3*P+1)/6,T[4]=4*P*(4*P+1)*(4*P+2)/24,T[5]=5*P*(5*P+1)*(5*P+2)*(5*P+3)/120,se=e(T,ne),(se-Y)*D<0&&(se=1-se)),D<0?(R=0,I=Y):(R=Y,I=1),(se<R||se>I)&&(se=(R+I)/2),k=s(-j,P),se=l(k,se,R,I,32,100),se}return dm=L,dm}var na={exports:{}},ta={exports:{}},fm,v9;function hX(){if(v9)return fm;v9=1;var e=1e3,n=e*60,t=n*60,r=t*24,i=r*365.25;fm=function(l,c){c=c||{};var d=typeof l;if(d==="string"&&l.length>0)return o(l);if(d==="number"&&isNaN(l)===!1)return c.long?u(l):a(l);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(l))};function o(l){if(l=String(l),!(l.length>100)){var c=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(l);if(c){var d=parseFloat(c[1]),p=(c[2]||"ms").toLowerCase();switch(p){case"years":case"year":case"yrs":case"yr":case"y":return d*i;case"days":case"day":case"d":return d*r;case"hours":case"hour":case"hrs":case"hr":case"h":return d*t;case"minutes":case"minute":case"mins":case"min":case"m":return d*n;case"seconds":case"second":case"secs":case"sec":case"s":return d*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return d;default:return}}}}function a(l){return l>=r?Math.round(l/r)+"d":l>=t?Math.round(l/t)+"h":l>=n?Math.round(l/n)+"m":l>=e?Math.round(l/e)+"s":l+"ms"}function u(l){return s(l,r,"day")||s(l,t,"hour")||s(l,n,"minute")||s(l,e,"second")||l+" ms"}function s(l,c,d){if(!(l<c))return l<c*1.5?Math.floor(l/c)+" "+d:Math.ceil(l/c)+" "+d+"s"}return fm}var _9;function vX(){return _9||(_9=1,(function(e,n){n=e.exports=i.debug=i.default=i,n.coerce=s,n.disable=a,n.enable=o,n.enabled=u,n.humanize=hX(),n.names=[],n.skips=[],n.formatters={};var t;function r(l){var c=0,d;for(d in l)c=(c<<5)-c+l.charCodeAt(d),c|=0;return n.colors[Math.abs(c)%n.colors.length]}function i(l){function c(){if(c.enabled){var d=c,p=+new Date,m=p-(t||p);d.diff=m,d.prev=t,d.curr=p,t=p;for(var f=new Array(arguments.length),h=0;h<f.length;h++)f[h]=arguments[h];f[0]=n.coerce(f[0]),typeof f[0]!="string"&&f.unshift("%O");var v=0;f[0]=f[0].replace(/%([a-zA-Z%])/g,function(g,b){if(g==="%%")return g;v++;var y=n.formatters[b];if(typeof y=="function"){var E=f[v];g=y.call(d,E),f.splice(v,1),v--}return g}),n.formatArgs.call(d,f);var _=c.log||n.log||console.log.bind(console);_.apply(d,f)}}return c.namespace=l,c.enabled=n.enabled(l),c.useColors=n.useColors(),c.color=r(l),typeof n.init=="function"&&n.init(c),c}function o(l){n.save(l),n.names=[],n.skips=[];for(var c=(typeof l=="string"?l:"").split(/[\s,]+/),d=c.length,p=0;p<d;p++)c[p]&&(l=c[p].replace(/\*/g,".*?"),l[0]==="-"?n.skips.push(new RegExp("^"+l.substr(1)+"$")):n.names.push(new RegExp("^"+l+"$")))}function a(){n.enable("")}function u(l){var c,d;for(c=0,d=n.skips.length;c<d;c++)if(n.skips[c].test(l))return!1;for(c=0,d=n.names.length;c<d;c++)if(n.names[c].test(l))return!0;return!1}function s(l){return l instanceof Error?l.stack||l.message:l}})(ta,ta.exports)),ta.exports}var g9;function uI(){return g9||(g9=1,(function(e,n){var t={};n=e.exports=vX(),n.log=o,n.formatArgs=i,n.save=a,n.load=u,n.useColors=r,n.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:s(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function r(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}n.formatters.j=function(l){try{return JSON.stringify(l)}catch(c){return"[UnexpectedJSONParseError]: "+c.message}};function i(l){var c=this.useColors;if(l[0]=(c?"%c":"")+this.namespace+(c?" %c":" ")+l[0]+(c?"%c ":" ")+"+"+n.humanize(this.diff),!!c){var d="color: "+this.color;l.splice(1,0,d,"color: inherit");var p=0,m=0;l[0].replace(/%[a-zA-Z%]/g,function(f){f!=="%%"&&(p++,f==="%c"&&(m=p))}),l.splice(m,0,d)}}function o(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(l){try{l==null?n.storage.removeItem("debug"):n.storage.debug=l}catch{}}function u(){var l;try{l=n.storage.debug}catch{}return!l&&typeof process<"u"&&"env"in process&&(l=t.DEBUG),l}n.enable(u());function s(){try{return window.localStorage}catch{}}})(na,na.exports)),na.exports}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pm,b9;function is(){if(b9)return pm;b9=1;var e=34028234663852886e22;return pm=e,pm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mm,y9;function _X(){if(y9)return mm;y9=1;var e=uI(),n=eI(),t=ye(),r=Ce(),i=we(),o=is(),a=e("gammaincinv:higher_newton");function u(s,l,c,d,p,m,f,h){var v,_,g,b,y,E,A,T,C,L,$,w,S,I;I=s,$=1,w=1,E=l*l,_=s;do{if(I=s,A=I*I,c===0){if(v=(1-l)*i(I)+I+m,v>i(o))return a("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."),_;S=r(v)}else S=-f*I;h?(T=n(I,l,!0,!1),g=-S*(T-d)):(C=n(I,l,!0,!0),g=S*(C-p)),S=g,d>1e-120||w>1?(b=.5*(I-l+1)/I,y=(2*A-4*I*l+4*I+2*E-3*l+1)/A,y/=6,s=I+S*(1+S*(b+S*y))):s=I+S,$=t(I/s-1),w+=1,I=s,I<0&&(I=_,w=100)}while($>2e-14&&w<35);return($>2e-14||w>99)&&a("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."),L=I||0,L}return mm=u,mm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hm,E9;function gX(){if(E9)return hm;E9=1;function e(n){return n===0?0:0+n*(1+n*(1+n*(1.5+n*(2.6666666666666665+n*(5.208333333333333+n*10.8)))))}return hm=e,hm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vm,S9;function bX(){if(S9)return vm;S9=1;function e(n){return n===0?1:1+n*(1+n*(.3333333333333333+n*(.027777777777777776+n*(-.003703703703703704+n*(.0002314814814814815+n*5878894767783657e-20)))))}return vm=e,vm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _m,w9;function sI(){if(w9)return _m;w9=1;var e=ye(),n=Ce(),t=we(),r=xt(),i=gX(),o=bX(),a=1e-8,u=.08333333333333333,s=.008333333333333333,l=[1,0,0,0,0,0];function c(d){var p,m,f,h,v,_,g,b,y;if(y=d*d*.5,d===0?v=0:d<-1?(b=n(-1-y),v=i(b)):d<1?(b=d,v=o(b)):(b=11+y,_=t(b),v=b+_,b=1/b,p=_*_,m=p*_,f=m*_,h=f*_,l[1]=(2-_)*.5,l[2]=(-9*_+6+2*p)/6,l[3]=-(3*m+36*_-22*p-12)*u,l[4]=(60+350*p-300*_-125*m+12*f)/60,l[5]=-(-120-274*f+900*_-1700*p+1125*m+20*h)*s,v+=_*b*r(l,b)),b=1,d>-3.5&&d<-.03||d>.03&&d<40){b=1,g=v;do v=g*(y+t(g))/(g-1),b=e(g/v-1),g=v;while(b>a)}return v}return _m=c,_m}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gm,A9;function yX(){if(A9)return gm;A9=1;var e=[1.9963790515900766,-.0017971032528832887,13129285796384672e-21,-2340875228178749e-22,72291210671127e-22,-3280997607821e-22,19875070901e-21,-1509214183e-21,1375340084e-22,-145728923e-22,17532367e-22,-2351465e-22,346551e-22,-55471e-22,9548e-22,-1748e-22,332e-22,-58e-22];function n(t,r){var i,o,a,u,s;o=0,a=0,i=r+r,s=t;do u=a,a=o,o=i*a-u+e[s],s-=1;while(s>=0);return(o-u)/2}return gm=n,gm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bm,$9;function EX(){if($9)return bm;$9=1;function e(n){return n===0?.025721014990011306:.025721014990011306+n*(.08247596616699963+n*(-.0025328157302663564+n*(.0006099292666946337+n*(-.00033543297638406+n*.000250505279903))))}return bm=e,bm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ym,T9;function SX(){if(T9)return ym;T9=1;function e(n){return n===0?.08333333333333333:.08333333333333333+n*(-.002777777777777778+n*(.0007936507936507937+n*-.0005952380952380953))}return ym=e,ym}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Em,I9;function wX(){if(I9)return Em;I9=1;var e=ri(),n=we(),t=rI(),r=ts(),i=is(),o=yX(),a=EX(),u=SX(),s=.30865217988013566;function l(c){var d;return c<r?i:c<1?e(c+1)-(c+.5)*n(c)+c-t:c<2?e(c)-(c-.5)*n(c)+c-t:c<3?e(c-1)-(c-.5)*n(c)+c-t+n(c-1):c<12?(d=18/(c*c)-1,o(17,d)/(12*c)):(d=1/(c*c),c<1e3?a(d)/(s+d)/c:u(d)/c)}return Em=l,Em}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sm,L9;function AX(){if(L9)return Sm;L9=1;var e=Ce(),n=at(),t=we(),r=is(),i=zu(),o=wX();function a(u){return u>=3?e(o(u)):u>0?n(u)/(e(-u+(u-.5)*t(u))*i):r}return Sm=a,Sm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wm,R9;function $X(){if(R9)return wm;R9=1;function e(n){var t,r,i;return n===0?-.3333333333438:(n<0?t=-n:t=n,t<=1?(r=-.3333333333438+n*(-.2070740359969+n*(-.05041806657154+n*(-.004923635739372+n*-4293658292782e-17))),i=1+n*(.7045554412463+n*(.2118190062224+n*(.03048648397436+n*.001605037988091)))):(n=1/n,r=-4293658292782e-17+n*(-.004923635739372+n*(-.05041806657154+n*(-.2070740359969+n*-.3333333333438))),i=.001605037988091+n*(.03048648397436+n*(.2118190062224+n*(.7045554412463+n*1)))),r/i)}return wm=e,wm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Am,C9;function TX(){if(C9)return Am;C9=1;var e=ye(),n=we(),t=sI(),r=$X();function i(o){var a;return e(o)<1?r(o):(a=t(o),n(o/(a-1))/o)}return Am=i,Am}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $m,O9;function IX(){if(O9)return $m;O9=1;function e(n){var t,r,i;return n===0?-.0172847633523:(n<0?t=-n:t=n,t<=1?(r=-.0172847633523+n*(-.0159372646475+n*(-.00464910887221+n*(-.00060683488776+n*-614830384279e-17))),i=1+n*(.764050615669+n*(.297143406325+n*(.0579490176079+n*.00574558524851)))):(n=1/n,r=-614830384279e-17+n*(-.00060683488776+n*(-.00464910887221+n*(-.0159372646475+n*-.0172847633523))),i=.00574558524851+n*(.0579490176079+n*(.297143406325+n*(.764050615669+n*1)))),r/i)}return $m=e,$m}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tm,N9;function LX(){if(N9)return Tm;N9=1;function e(n){var t,r,i;return n===0?-.0172839517431:(n<0?t=-n:t=n,t<=1?(r=-.0172839517431+n*(-.0146362417966+n*(-.00357406772616+n*(-.000391032032692+n*249634036069e-17))),i=1+n*(.690560400696+n*(.249962384741+n*(.0443843438769+n*.00424073217211)))):(n=1/n,r=249634036069e-17+n*(-.000391032032692+n*(-.00357406772616+n*(-.0146362417966+n*-.0172839517431))),i=.00424073217211+n*(.0443843438769+n*(.249962384741+n*(.690560400696+n*1)))),r/i)}return Tm=e,Tm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Im,k9;function RX(){if(k9)return Im;k9=1;function e(n){var t,r,i;return n===0?.99994466948:(n<0?t=-n:t=n,t<=1?(r=.99994466948+n*(104.649839762+n*(857.204033806+n*(731.901559577+n*45.5174411671))),i=1+n*(104.526456943+n*(823.313447808+n*(3119.93802124+n*3970.03311219)))):(n=1/n,r=45.5174411671+n*(731.901559577+n*(857.204033806+n*(104.649839762+n*.99994466948))),i=3970.03311219+n*(3119.93802124+n*(823.313447808+n*(104.526456943+n*1)))),r/i)}return Im=e,Im}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lm,M9;function CX(){if(M9)return Lm;M9=1;var e=we(),n=IX(),t=LX(),r=RX();function i(o){var a,u;return o<-5?(u=o*o,a=e(-o),(12-u-6*(a*a))/(12*u*o)):o<-2?n(o):o<2?t(o):o<1e3?(u=1/o,r(o)/(-12*o)):-1/(12*o)}return Lm=i,Lm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rm,P9;function OX(){if(P9)return Rm;P9=1;function e(n){var t,r,i;return n===0?.0495346498136:(n<0?t=-n:t=n,t<=1?(r=.0495346498136+n*(.0299521337141+n*(.00688296911516+n*(.000512634846317+n*-201411722031e-16))),i=1+n*(.759803615283+n*(.261547111595+n*(.0464854522477+n*.00403751193496)))):(n=1/n,r=-201411722031e-16+n*(.000512634846317+n*(.00688296911516+n*(.0299521337141+n*.0495346498136))),i=.00403751193496+n*(.0464854522477+n*(.261547111595+n*(.759803615283+n*1)))),r/i)}return Rm=e,Rm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cm,D9;function NX(){if(D9)return Cm;D9=1;function e(n){var t,r,i;return n===0?.00452313583942:(n<0?t=-n:t=n,t<=1?(r=.00452313583942+n*(.00120744920113+n*(-789724156582e-16+n*(-504476066942e-16+n*-535770949796e-17))),i=1+n*(.912203410349+n*(.405368773071+n*(.0901638932349+n*.00948935714996)))):(n=1/n,r=-535770949796e-17+n*(-504476066942e-16+n*(-789724156582e-16+n*(.00120744920113+n*.00452313583942))),i=.00948935714996+n*(.0901638932349+n*(.405368773071+n*(.912203410349+n*1)))),r/i)}return Cm=e,Cm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Om,F9;function kX(){if(F9)return Om;F9=1;function e(n){var t,r,i;return n===0?.00439937562904:(n<0?t=-n:t=n,t<=1?(r=.00439937562904+n*(.000487225670639+n*(-.000128470657374+n*(529110969589e-17+n*15716677175e-17))),i=1+n*(.794435257415+n*(.333094721709+n*(.0703527806143+n*.00806110846078)))):(n=1/n,r=15716677175e-17+n*(529110969589e-17+n*(-.000128470657374+n*(.000487225670639+n*.00439937562904))),i=.00806110846078+n*(.0703527806143+n*(.333094721709+n*(.794435257415+n*1)))),r/i)}return Om=e,Om}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nm,q9;function MX(){if(q9)return Nm;q9=1;function e(n){var t,r,i;return n===0?-.0011481191232:(n<0?t=-n:t=n,t<=1?(r=-.0011481191232+n*(-.112850923276+n*(1.51623048511+n*(-.218472031183+n*.0730002451555))),i=1+n*(14.2482206905+n*(69.7360396285+n*(218.938950816+n*277.067027185)))):(n=1/n,r=.0730002451555+n*(-.218472031183+n*(1.51623048511+n*(-.112850923276+n*-.0011481191232))),i=277.067027185+n*(218.938950816+n*(69.7360396285+n*(14.2482206905+n*1)))),r/i)}return Nm=e,Nm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var km,x9;function PX(){if(x9)return km;x9=1;function e(n){var t,r,i;return n===0?-.000145727889667:(n<0?t=-n:t=n,t<=1?(r=-.000145727889667+n*(-.290806748131+n*(-13.308504545+n*(199.722374056+n*-11.4311378756))),i=1+n*(139.612587808+n*(2189.01116348+n*(7115.24019009+n*45574.6081453)))):(n=1/n,r=-11.4311378756+n*(199.722374056+n*(-13.308504545+n*(-.290806748131+n*-.000145727889667))),i=45574.6081453+n*(7115.24019009+n*(2189.01116348+n*(139.612587808+n*1)))),r/i)}return km=e,km}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mm,B9;function DX(){if(B9)return Mm;B9=1;var e=we(),n=OX(),t=NX(),r=kX(),i=MX(),o=PX();function a(u){var s,l;return u<-8?(s=u*u,l=e(-u)/u,(-30+u*l*(6*s*l*l-12+s))/(12*u*s*s)):u<-4?n(u)/(u*u):u<-2?t(u):u<2?r(u):u<10?(s=1/u,i(s)/(u*u)):u<100?(s=1/u,o(s)/(u*u)):-e(u)/(12*u*u*u)}return Mm=a,Mm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pm,H9;function FX(){if(H9)return Pm;H9=1;var e=uI(),n=xt(),t=ri(),r=No(),i=at(),o=be(),a=ye(),u=Ce(),s=Dt(),l=Oe(),c=we(),d=zu(),p=is(),m=es(),f=_X(),h=sI(),v=AX(),_=TX(),g=CX(),b=DX(),y=e("gammaincinv:compute"),E=.5,A=.3333333333333333,T=.25,C=.2,L=.16666666666666666,$=.08333333333333333,w=.041666666666666664,S=[0,0,0,0,0];function I(R,P,k){var H,D,q,M,Z,G,z,te,ae,j,Y,V,Ee,me,ne,se,$e,Se,bt,an,_e,$n,Je,Tn,Ut,Q,ve,In,pi,st,yt,fr,mi,hi,Vo,ze,De,pr,Qe,Ln,cn,Gt,mr,hr;if(P<E?(M=!0,Z=P,Gt=-1):(M=!1,Z=k,Gt=1),Qe=0,a(R-1)<1e-4&&(Ln=0,M?P<.001?(fr=P*P,In=fr*P,yt=In*P,an=yt*P,bt=an*P,_e=P+fr*E+In*A+yt*T+an*C+bt*L):_e=-c(1-P):_e=-c(k),R===1?(Qe=2,hi=_e):(q=t(R),Qe=1)),k<1e-30&&R<E&&(Ln=0,_e=-c(k*i(R))+(R-1)*c(-c(k*i(R))),Qe=1,q=t(R)),R>1&&R<500&&P<1e-80){for(Ln=0,G=1/R,H=1/(R+1),_e=(t(R+1)+c(P))*G,_e=u(_e),me=_e,pr=0;pr<10;pr++)_e=me*u(_e*G)*l(1-_e*H,G);Qe=1,q=t(R)}if(z=1/R*(c(P)+t(R+1)),z<c(C*(1+R))&&Qe===0&&(cn=u(z),Ln=0,$n=R*R,mi=$n*R,pi=mi*R,ne=R+1,Y=ne*ne,j=ne*Y,ae=Y*Y,se=R+2,te=se*se,$e=R+3,S[0]=1,S[1]=1/ne,S[2]=E*(3*R+5)/(Y*se),S[3]=A*(31+8*$n+33*R)/(j*se*$e),S[4]=w*(2888+1179*mi+125*pi+3971*$n+5661*R)/(ae*te*$e*(R+4)),_e=cn*n(S,cn),q=t(R),Qe=1),R<10&&Qe===0&&(V=o(R)/(v(R)*d),Ee=s(.02,V),k<Ee&&(Ln=0,ze=1-R,Q=ze*ze,ve=Q*ze,Se=o(-2/R*c(k/V)),_e=R*h(Se),De=c(_e),_e>5?(Je=De*De,Tn=Je*De,Ut=Tn*De,cn=1/_e,S[0]=De-1,S[1]=(3*ze-2*ze*De+Je-2*De+2)*E,S[2]=(24*ze*De-11*Q-24*ze-6*Je+12*De-12-9*ze*Je+6*Q*De+2*Tn)*L,S[3]=(-12*ve*De+8.04*ze*Je-114*Q*De+(72+36*Je)+(3*Ut-72*De+162)*(ze-168*ze*De)-(12*Tn+25*ve)-(22*ze*Tn+36*Q*Je+120*Q))*$,S[4]=0,_e=_e-De+ze*cn*n(S,cn)):(cn=1/_e,Je=De*De,Vo=De-1,mr=De-ze*cn*Vo,mr<_e&&(_e-=mr)),q=t(R),Qe=1)),a(Z-E)<1e-5&&Qe===0&&(Ln=0,G=1/R,_e=R-A+(.019753086419753086+.007211444248481286*G)*G,q=t(R),Qe=1),R<1&&Qe===0&&(Ln=0,M?_e=u(1/R*(c(Z)+t(R+1))):_e=u(1/R*(c(1-Z)+t(R+1))),q=t(R),Qe=1),Qe===0)if(Ln=1,G=1/R,cn=r(2*Z),Se=Gt*cn/o(R*E),cn<p)Se+=(_(Se)+(g(Se)+b(Se)*G)*G)*G,_e=R*h(Se),hr=Se,st=-o(R/m)*u(-E*R*hr*hr)/v(R),D=1/st;else return y("Warning: Overflow problems in one or more steps of the computation."),NaN;return Qe<2&&(hi=f(_e,R,Ln,P,k,q,D,M)),hi}return Pm=I,Pm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dm,U9;function qX(){if(U9)return Dm;U9=1;var e=ue(),n=ts(),t=Re(),r=FX();function i(o,a,u){return e(o)||e(a)?NaN:a<n?NaN:o>1||o<0?NaN:u===!0?o===0?t:o===1?0:r(a,1-o,o):o===0?0:o===1?t:r(a,o,1-o)}return Dm=i,Dm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fm,G9;function xX(){if(G9)return Fm;G9=1;var e=qX();return Fm=e,Fm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qm,j9;function BX(){if(j9)return qm;j9=1;var e=5e-324;return qm=e,qm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var xm,V9;function HX(){if(V9)return xm;V9=1;var e=xX(),n=we(),t=be(),r=BX(),i=oI(),o=aI();function a(u,s,l,c){var d,p,m,f,h,v,_,g,b,y,E,A,T,C,L,$,w,S,I,R,P,k,H,D,q,M,Z,G,z,te;return l<c?h=e(l,s,!0):h=e(c,s,!1),h/=u,C=s/u,G=t(1+C),S=G*G,I=S*G,R=S*S,P=I*S,k=I*I,H=R*I,D=R*R,q=P*R,_=P*P,Z=h-C,L=Z*Z,$=L*Z,w=L*L,M=G+1,g=M*M,b=M*g,y=g*g,E=(G+2)*(G-1)/(3*G),E+=(I+9*S+21*G+5)*Z/(36*S*M),E-=(R-13*I+69*S+167*G+46)*L/(1620*g*I),E-=(7*P+21*R+70*I+26*S-93*G-31)*$/(6480*b*R),E-=(75*k+202*P+188*R-888*I-1345*S+118*G+138)*w/(272160*y*P),A=(28*R+131*I+402*S+581*G+208)*(G-1)/(1620*M*I),A-=(35*k-154*P-623*R-1636*I-3983*S-3514*G-925)*Z/(12960*g*R),A-=(2132*H+7915*k+16821*P+35066*R+87490*I+141183*S+95993*G+21640)*L/(816480*P*b),A-=(11053*D+53308*H+117010*k+163924*P+116188*R-258428*I-677042*S-481940*G-105497)*$/(14696640*y*k),T=-((3592*H+8375*k-1323*P-29198*R-89578*I-154413*S-116063*G-29632)*(G-1))/(816480*P*g),T-=(442043*q+2054169*D+3803094*H+3470754*k+2141568*P-2393568*R-19904934*I-34714674*S-23128299*G-5253353)*Z/(146966400*k*b),T-=(116932*_+819281*q+2378172*D+4341330*H+6806004*k+10622748*P+18739500*R+30651894*I+30869976*S+15431867*G+2919016)*L/(146966400*y*H),v=h+E/u+A/(u*u)+T/(u*u*u),v<=0&&(v=r),z=v-C*n(v)+(1+C)*n(1+C)-C,d=1/(1+C),m=v<C?d:0,f=v<C?1:d,te=(m+f)/2,p=i(z,C),o(p,te,m,f,32,100)}return xm=a,xm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/tools/roots.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Bm,W9;function UX(){if(W9)return Bm;W9=1;var e=ye(),n=ei(),t=rs(),r=lr(),i=cr();function o(a,u,s,l,c,d){var p,m,f,h,v,_,g,b,y,E,A,T,C,L,$,w;L=0,m=!1,_=u,v=n(1,1-c),y=r(1e7*u,1e7),g=0,f=y,h=y,b=d;do{if(g=L,h=f,f=y,C=a(_),L=C[0],$=C[1],w=C[2],b-=1,L===0)break;if($===0?(g===0&&(_===s?u=l:u=s,g=a(u),y=u-_),t(g)*t(L)<0?y<0?y=(_-s)/2:y=(_-l)/2:y<0?y=(_-l)/2:y=(_-s)/2):w===0?y=L/$:(E=2*L,T=2*$-L*(w/$),e(T)<1&&e(E)>=e(T)*i?y=L/$:y=E/T,y*$/L<0&&(y=L/$,e(y)>2*e(u)&&(y=(y<0?-1:1)*2*e(u)))),p=e(y/h),p>.8&&p<2&&(y=y>0?(_-s)/2:(_-l)/2,e(y)>_&&(y=t(y)*_),h=y*3),u=_,_-=y,_<s){if(e(s)<1&&e(_)>1&&i/e(_)<e(s)?A=1e3:A=_/s,e(A)<1&&(A=1/A),!m&&A>0&&A<3)y=.99*(u-s),_=u-y,m=!0;else if(y=(u-s)/2,_=u-y,_===s||_===l)break}else if(_>l){if(e(l)<1&&e(_)>1&&i/e(_)<e(l)?A=1e3:A=_/l,e(A)<1&&(A=1/A),!m&&A>0&&A<3)y=.99*(u-l),_=u-y,m=!0;else if(y=(u-l)/2,_=u-y,_===s||_===l)break}y>0?l=u:s=u}while(b&&e(_*v)<e(y));return _}return Bm=o,Bm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Hm,K9;function GX(){if(K9)return Hm;K9=1;var e=tI().assign,n=ye(),t=cr(),r=sr();function i(o,a,u,s){return l;function l(c){var d,p,m,f,h;return h=1-c,d=[0,0],e(c,o,a,!0,s,d,1,0),f=d[0]-u,p=d[1],s&&(p=-p),h===0&&(h=r*64),c===0&&(c=r*64),m=p*(-(h*o)+(a-2)*c+1),n(m)<h*c*t&&(m/=h*c),s&&(m=-m),p===0&&(p=(s?-1:1)*r*64),[f,p,m]}}return Hm=i,Hm}var Um,X9;function jX(){if(X9)return Um;X9=1;var e=xt(),n=Oo(),t=Qr(),r=En(),i=l_(),o=Ju(),a=be(),u=ye(),s=Ce(),l=Oe(),c=Lo(),d=lr(),p=Dt(),m=we(),f=sr(),h=m_(),v=ot(),_=QK(),g=ZK(),b=mX(),y=HX(),E=UX(),A=GX(),T=32,C=1e3,L=[0,0,0,0,0];function $(w,S,I,R){var P,k,H,D,q,M,Z,G,z,te,ae,j,Y,V,Ee,me,ne,se,$e,Se,bt,an,_e,$n,Je,Tn,Ut,Q,ve;if(k=!1,R===0)return[1,0];if(I===0)return[0,1];if(w===1){if(S===1)return[I,1-I];j=S,S=w,w=j,j=R,R=I,I=j,k=!0}if(Q=0,D=0,M=1,w===.5){if(S===.5)return Q=c(I*h),Q*=Q,ve=c(R*h),ve*=ve,[Q,ve];S>.5&&(j=S,S=w,w=j,j=R,R=I,I=j,k=!k)}if(S===.5&&w>=.5&&I!==1)bt={},Q=_(w,I,bt),ve=bt.value;else{if(S===1)return I<R?w>1?(Q=l(I,1/w),ve=-t(m(I)/w)):(Q=l(I,1/w),ve=1-Q):(Q=s(r(-R)/w),ve=-t(r(-R)/w)),k&&(j=ve,ve=Q,Q=j),[Q,ve];if(w+S>5)I>.5&&(j=S,S=w,w=j,j=R,R=I,I=j,k=!k),z=p(w,S),G=d(w,S),a(z)>G-z&&z>5?(Q=g(w,S,I),ve=1-Q):(Je=w+S,q=i(a(w/Je)),H=z/Je,H>=.2&&H<=.8&&Je>=10?(ae=l(I,1/w),ae<.0025&&w+S<200?Q=ae*l(w*o(w,S),1/w):Q=b(I,Je,q),ve=1-Q):(w<S&&(j=S,S=w,w=j,j=R,R=I,I=j,k=!k),te=0,S<2&&(te=o(w,S)),te===0?ve=1:(ve=l(S*R*te,1/S),Q=1-ve)),ve>1e-5&&(Q=y(w,S,I,R),ve=1-Q));else if(w<1&&S<1){if(Se=(1-w)/(2-w-S),me=n(Se,w,S)-I,u(me)/I<v*3)return k?[1-Se,Se]:[Se,1-Se];me<0&&(j=S,S=w,w=j,j=R,R=I,I=j,k=!k,Se=1-Se),$e=l(w*I*o(w,S),1/w),Q=$e/(1+$e),ve=1/(1+$e),Q>Se&&(Q=Se),M=Se}else w>1&&S>1?(Se=(w-1)/(w+S-2),Y=(S-1)/(w+S-2),se=n(Se,w,S)-I,se<0&&(j=S,S=w,w=j,j=R,R=I,I=j,j=Y,Y=Se,Se=j,k=!k),ne=m(I*w*o(w,S))/w,Q=s(ne),ve=Q<.9?1-Q:-t(ne),S<w&&Q<.2&&(V=w-1,Ee=S-1,an=w*w,_e=w*an,$n=S*S,L[0]=0,L[1]=1,L[2]=Ee/V,V*=V,L[3]=Ee*(3*w*S+5*S+an-w-4)/(2*(w+2)*V),V*=w+1,L[4]=Ee*(33*w*$n+31*$n+8*an*$n-30*w*S-47*S+11*an*S+6*_e*S+18+4*w-_e+an*an-10*an),L[4]/=3*(w+3)*(w+2)*V,Q=e(L,Q)),Q>Se&&(Q=Se),M=Se):(S<w&&(j=S,S=w,w=j,j=R,R=I,I=j,k=!k),l(I,1/w)<.5?(Q=l(I*w*o(w,S),1/w),Q===0&&(Q=f),ve=1-Q):(ve=l(1-l(I,S*o(w,S)),1/S),ve===0&&(ve=f),Q=1-ve))}return Q>.5&&(j=S,S=w,w=j,j=R,R=I,I=j,j=ve,ve=Q,Q=j,k=!k,Tn=1-M,Ut=1-D,D=Tn,M=Ut),D===0&&(k?(D=v,Q<D&&(Q=D)):D=f,Q<D&&(Q=D)),P=T,Q<1e-50&&(w<1||S<1)&&(P*=3,P/=2),Z=A(w,S,I<R?I:R,I>=R),Q=E(Z,Q,D,M,P,C),Q===D&&(Q=0),k?[1-Q,Q]:[Q,1-Q]}return Um=$,Um}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gm,Y9;function b_(){if(Y9)return Gm;Y9=1;var e=jX();return Gm=e,Gm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jm,J9;function VX(){if(J9)return jm;J9=1;var e=ue(),n=b_();function t(r,i,o,a){return e(r)||e(i)||e(o)?NaN:i<=0||o<=0?NaN:r<0||r>1?NaN:a?n(i,o,1-r,r)[0]:n(i,o,r,1-r)[0]}return jm=t,jm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vm,z9;function lI(){if(z9)return Vm;z9=1;var e=VX();return Vm=e,Vm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wm,Q9;function WX(){if(Q9)return Wm;Q9=1;var e=lI(),n=ue();function t(r,i,o){return n(r)||n(i)||n(o)||i<=0||o<=0||r<0||r>1?NaN:e(r,i,o)}return Wm=t,Wm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Km,Z9;function KX(){if(Z9)return Km;Z9=1;var e=Sn(),n=lI(),t=ue();function r(i,o){if(t(i)||t(o)||i<=0||o<=0)return e(NaN);return a;function a(u){return t(u)||u<0||u>1?NaN:n(u,i,o)}}return Km=r,Km}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xm,e7;function XX(){if(e7)return Xm;e7=1;var e=rn(),n=WX(),t=KX();return e(n,"factory",t),Xm=n,Xm}var YX=XX();const JX=rt(YX);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ym,n7;function zX(){if(n7)return Ym;n7=1;var e=Zu(),n=be(),t=ue();function r(i,o,a){var u,s;return t(i)||t(o)||t(a)||a<0?NaN:a===0?i<o?0:1:(u=a*n(2),s=i-o,.5*e(-s/u))}return Ym=r,Ym}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jm,t7;function QX(){if(t7)return Jm;t7=1;var e=ue();function n(t,r){return e(t)||e(r)?NaN:t<r?0:1}return Jm=n,Jm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zm,r7;function ZX(){if(r7)return zm;r7=1;var e=Sn(),n=ue();function t(r){if(n(r))return e(NaN);return i;function i(o){return n(o)?NaN:o<r?0:1}}return zm=t,zm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qm,i7;function eY(){if(i7)return Qm;i7=1;var e=rn(),n=QX(),t=ZX();return e(n,"factory",t),Qm=n,Qm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zm,o7;function nY(){if(o7)return Zm;o7=1;var e=Sn(),n=eY().factory,t=ue(),r=be(),i=Zu();function o(a,u){var s;if(t(a)||t(u)||u<0)return e(NaN);if(u===0)return n(a);return s=u*r(2),l;function l(c){var d;return t(c)?NaN:(d=c-a,.5*i(-d/s))}}return Zm=o,Zm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eh,a7;function tY(){if(a7)return eh;a7=1;var e=rn(),n=zX(),t=nY();return e(n,"factory",t),eh=n,eh}var rY=tY();const cI=rt(rY);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nh,u7;function iY(){if(u7)return nh;u7=1;var e=Ce(),n=Oe(),t=be(),r=es(),i=Re(),o=ue();function a(u,s,l){var c,d,p;return o(u)||o(s)||o(l)||l<0?NaN:l===0?u===s?i:0:(c=n(l,2),d=1/t(c*r),p=-1/(2*c),d*e(p*n(u-s,2)))}return nh=a,nh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var th,s7;function oY(){if(s7)return th;s7=1;var e=Re(),n=ue();function t(r,i){return n(r)||n(i)?NaN:r===i?e:0}return th=t,th}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rh,l7;function aY(){if(l7)return rh;l7=1;var e=Sn(),n=Re(),t=ue();function r(i){if(t(i))return e(NaN);return o;function o(a){return t(a)?NaN:a===i?n:0}}return rh=r,rh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ih,c7;function uY(){if(c7)return ih;c7=1;var e=rn(),n=oY(),t=aY();return e(n,"factory",t),ih=n,ih}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oh,d7;function sY(){if(d7)return oh;d7=1;var e=Sn(),n=uY().factory,t=ue(),r=be(),i=Ce(),o=Oe(),a=es();function u(s,l){var c,d,p;if(t(s)||t(l)||l<0)return e(NaN);if(l===0)return n(s);return c=o(l,2),d=1/r(c*a),p=-1/(2*c),m;function m(f){return t(f)?NaN:d*i(p*o(f-s,2))}}return oh=u,oh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ah,f7;function lY(){if(f7)return ah;f7=1;var e=rn(),n=iY(),t=sY();return e(n,"factory",t),ah=n,ah}var cY=lY();const dI=rt(cY);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uh,p7;function dY(){if(p7)return uh;p7=1;function e(n){var t,r,i;return n===0?-.0005087819496582806:(n<0?t=-n:t=n,t<=1?(r=-.0005087819496582806+n*(-.008368748197417368+n*(.03348066254097446+n*(-.012692614766297404+n*(-.03656379714117627+n*(.02198786811111689+n*(.008226878746769157+n*(-.005387729650712429+n*(0+n*0)))))))),i=1+n*(-.9700050433032906+n*(-1.5657455823417585+n*(1.5622155839842302+n*(.662328840472003+n*(-.7122890234154284+n*(-.05273963823400997+n*(.07952836873415717+n*(-.0023339375937419+n*.0008862163904564247))))))))):(n=1/n,r=0+n*(0+n*(-.005387729650712429+n*(.008226878746769157+n*(.02198786811111689+n*(-.03656379714117627+n*(-.012692614766297404+n*(.03348066254097446+n*(-.008368748197417368+n*-.0005087819496582806)))))))),i=.0008862163904564247+n*(-.0023339375937419+n*(.07952836873415717+n*(-.05273963823400997+n*(-.7122890234154284+n*(.662328840472003+n*(1.5622155839842302+n*(-1.5657455823417585+n*(-.9700050433032906+n*1))))))))),r/i)}return uh=e,uh}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sh,m7;function fY(){if(m7)return sh;m7=1;function e(n){var t,r,i;return n===0?-.20243350835593876:(n<0?t=-n:t=n,t<=1?(r=-.20243350835593876+n*(.10526468069939171+n*(8.3705032834312+n*(17.644729840837403+n*(-18.851064805871424+n*(-44.6382324441787+n*(17.445385985570866+n*(21.12946554483405+n*-3.6719225470772936))))))),i=1+n*(6.242641248542475+n*(3.971343795334387+n*(-28.66081804998+n*(-20.14326346804852+n*(48.560921310873994+n*(10.826866735546016+n*(-22.643693341313973+n*1.7211476576120028)))))))):(n=1/n,r=-3.6719225470772936+n*(21.12946554483405+n*(17.445385985570866+n*(-44.6382324441787+n*(-18.851064805871424+n*(17.644729840837403+n*(8.3705032834312+n*(.10526468069939171+n*-.20243350835593876))))))),i=1.7211476576120028+n*(-22.643693341313973+n*(10.826866735546016+n*(48.560921310873994+n*(-20.14326346804852+n*(-28.66081804998+n*(3.971343795334387+n*(6.242641248542475+n*1)))))))),r/i)}return sh=e,sh}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lh,h7;function pY(){if(h7)return lh;h7=1;function e(n){var t,r,i;return n===0?-.1311027816799519:(n<0?t=-n:t=n,t<=1?(r=-.1311027816799519+n*(-.16379404719331705+n*(.11703015634199525+n*(.38707973897260434+n*(.3377855389120359+n*(.14286953440815717+n*(.029015791000532906+n*(.0021455899538880526+n*(-6794655751811263e-22+n*(28522533178221704e-24+n*-681149956853777e-24))))))))),i=1+n*(3.4662540724256723+n*(5.381683457070069+n*(4.778465929458438+n*(2.5930192162362027+n*(.848854343457902+n*(.15226433829533179+n*(.011059242293464892+n*(0+n*(0+n*0)))))))))):(n=1/n,r=-681149956853777e-24+n*(28522533178221704e-24+n*(-6794655751811263e-22+n*(.0021455899538880526+n*(.029015791000532906+n*(.14286953440815717+n*(.3377855389120359+n*(.38707973897260434+n*(.11703015634199525+n*(-.16379404719331705+n*-.1311027816799519))))))))),i=0+n*(0+n*(0+n*(.011059242293464892+n*(.15226433829533179+n*(.848854343457902+n*(2.5930192162362027+n*(4.778465929458438+n*(5.381683457070069+n*(3.4662540724256723+n*1)))))))))),r/i)}return lh=e,lh}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ch,v7;function mY(){if(v7)return ch;v7=1;function e(n){var t,r,i;return n===0?-.0350353787183178:(n<0?t=-n:t=n,t<=1?(r=-.0350353787183178+n*(-.0022242652921344794+n*(.018557330651423107+n*(.009508047013259196+n*(.0018712349281955923+n*(.00015754461742496055+n*(460469890584318e-20+n*(-2304047769118826e-25+n*26633922742578204e-28))))))),i=1+n*(1.3653349817554064+n*(.7620591645536234+n*(.22009110576413124+n*(.03415891436709477+n*(.00263861676657016+n*(7646752923027944e-20+n*(0+n*0)))))))):(n=1/n,r=26633922742578204e-28+n*(-2304047769118826e-25+n*(460469890584318e-20+n*(.00015754461742496055+n*(.0018712349281955923+n*(.009508047013259196+n*(.018557330651423107+n*(-.0022242652921344794+n*-.0350353787183178))))))),i=0+n*(0+n*(7646752923027944e-20+n*(.00263861676657016+n*(.03415891436709477+n*(.22009110576413124+n*(.7620591645536234+n*(1.3653349817554064+n*1)))))))),r/i)}return ch=e,ch}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dh,_7;function hY(){if(_7)return dh;_7=1;function e(n){var t,r,i;return n===0?-.016743100507663373:(n<0?t=-n:t=n,t<=1?(r=-.016743100507663373+n*(-.0011295143874558028+n*(.001056288621524929+n*(.00020938631748758808+n*(14962478375834237e-21+n*(44969678992770644e-23+n*(4625961635228786e-24+n*(-2811287356288318e-29+n*9905570997331033e-32))))))),i=1+n*(.5914293448864175+n*(.1381518657490833+n*(.016074608709367652+n*(.0009640118070051656+n*(27533547476472603e-21+n*(282243172016108e-21+n*(0+n*0)))))))):(n=1/n,r=9905570997331033e-32+n*(-2811287356288318e-29+n*(4625961635228786e-24+n*(44969678992770644e-23+n*(14962478375834237e-21+n*(.00020938631748758808+n*(.001056288621524929+n*(-.0011295143874558028+n*-.016743100507663373))))))),i=0+n*(0+n*(282243172016108e-21+n*(27533547476472603e-21+n*(.0009640118070051656+n*(.016074608709367652+n*(.1381518657490833+n*(.5914293448864175+n*1)))))))),r/i)}return dh=e,dh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_48_0/boost/math/special_functions/detail/erf_inv.hpp}. This implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var fh,g7;function vY(){if(g7)return fh;g7=1;var e=ue(),n=be(),t=we(),r=Re(),i=on(),o=dY(),a=fY(),u=pY(),s=mY(),l=hY(),c=.08913147449493408,d=2.249481201171875,p=.807220458984375,m=.9399557113647461,f=.9836282730102539;function h(v){var _,g,b,y,E,A;return e(v)?NaN:v===1?r:v===-1?i:v===0?v:v>1||v<-1?NaN:(v<0?(_=-1,g=-v):(_=1,g=v),y=1-g,g<=.5?(E=g*(g+10),A=o(g),_*(E*c+E*A)):y>=.25?(E=n(-2*t(y)),y-=.25,A=a(y),_*(E/(d+A))):(y=n(-t(y)),y<3?(b=y-1.125,A=u(b),_*(p*y+A*y)):y<6?(b=y-3,A=s(b),_*(m*y+A*y)):(b=y-6,A=l(b),_*(f*y+A*y))))}return fh=h,fh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ph,b7;function fI(){if(b7)return ph;b7=1;var e=vY();return ph=e,ph}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mh,y7;function _Y(){if(y7)return mh;y7=1;var e=fI(),n=ue(),t=be();function r(i,o,a){var u,s;return n(o)||n(a)||n(i)||a<0||i<0||i>1?NaN:a===0?o:(u=o,s=a*t(2),u+s*e(2*i-1))}return mh=r,mh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hh,E7;function gY(){if(E7)return hh;E7=1;var e=ue();function n(t,r){return e(t)||t<0||t>1?NaN:r}return hh=n,hh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vh,S7;function bY(){if(S7)return vh;S7=1;var e=Sn(),n=ue();function t(r){if(n(r))return e(NaN);return i;function i(o){return n(o)||o<0||o>1?NaN:r}}return vh=t,vh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _h,w7;function yY(){if(w7)return _h;w7=1;var e=rn(),n=gY(),t=bY();return e(n,"factory",t),_h=n,_h}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gh,A7;function EY(){if(A7)return gh;A7=1;var e=Sn(),n=yY().factory,t=fI(),r=ue(),i=be();function o(a,u){var s,l;if(r(a)||r(u)||u<0)return e(NaN);return u===0&&n(a),s=a,l=u*i(2),c;function c(d){return r(d)||d<0||d>1?NaN:s+l*t(2*d-1)}}return gh=o,gh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bh,$7;function SY(){if($7)return bh;$7=1;var e=rn(),n=_Y(),t=EY();return e(n,"factory",t),bh=n,bh}var wY=SY();const AY=rt(wY);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yh,T7;function $Y(){if(T7)return yh;T7=1;var e=Oo(),n=ue(),t=Oe();function r(i,o){var a,u,s;return n(i)||n(o)||o<=0?NaN:i===0?.5:(a=t(i,2),o>2*a?(s=a/(o+a),u=e(s,.5,o/2,!0,!0)/2):(s=o/(o+a),u=e(s,o/2,.5,!0,!1)/2),i>0?1-u:u)}return yh=r,yh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eh,I7;function TY(){if(I7)return Eh;I7=1;var e=Sn(),n=Oo(),t=ue(),r=Oe();function i(o){if(t(o)||o<=0)return e(NaN);return a;function a(u){var s,l,c;return t(u)?NaN:u===0?.5:(s=r(u,2),o>2*s?(c=s/(o+s),l=n(c,.5,o/2,!0,!0)/2):(c=o/(o+s),l=n(c,o/2,.5,!0,!1)/2),u>0?1-l:l)}}return Eh=i,Eh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sh,L7;function IY(){if(L7)return Sh;L7=1;var e=rn(),n=$Y(),t=TY();return e(n,"factory",t),Sh=n,Sh}var LY=IY();const pI=rt(LY);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wh,R7;function RY(){if(R7)return wh;R7=1;var e=ue(),n=Ju(),t=be(),r=Oe();function i(o,a){var u;return e(o)||e(a)||a<=0?NaN:(u=t(a)*n(a/2,.5),r(a/(a+r(o,2)),(1+a)/2)/u)}return wh=i,wh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ah,C7;function CY(){if(C7)return Ah;C7=1;var e=Sn(),n=ue(),t=Ju(),r=be(),i=Oe();function o(a){var u,s;if(n(a)||a<=0)return e(NaN);return s=r(a)*t(a/2,.5),u=(1+a)/2,l;function l(c){return n(c)?NaN:i(a/(a+i(c,2)),u)/s}}return Ah=o,Ah}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $h,O7;function OY(){if(O7)return $h;O7=1;var e=rn(),n=RY(),t=CY();return e(n,"factory",t),$h=n,$h}var NY=OY();const y_=rt(NY);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Th,N7;function kY(){if(N7)return Th;N7=1;var e=b_(),n=ue(),t=rs(),r=be();function i(o,a){var u,s;return n(a)||n(o)||a<=0||o<0||o>1?NaN:(u=o>.5?1-o:o,s=e(a/2,.5,2*u,1-2*u),t(o-.5)*r(a*s[1]/s[0]))}return Th=i,Th}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ih,k7;function MY(){if(k7)return Ih;k7=1;var e=Sn(),n=b_(),t=ue(),r=rs(),i=be();function o(a){if(t(a)||a<=0)return e(NaN);return u;function u(s){var l,c;return t(s)||s<0||s>1?NaN:(l=s>.5?1-s:s,c=n(a/2,.5,2*l,1-2*l),r(s-.5)*i(a*c[1]/c[0]))}}return Ih=o,Ih}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lh,M7;function PY(){if(M7)return Lh;M7=1;var e=rn(),n=kY(),t=MY();return e(n,"factory",t),Lh=n,Lh}var DY=PY();const FY=rt(DY),P7=1e-9,qY=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,mI=/^\s*([a-z][a-z-]*)\s*\((.*)\)\s*$/;function xY(e){const[n,t,r]=e;return n<r?n<=t&&t<=r?null:`requires lo <= peak <= hi, got lo=${n}, peak=${t}, hi=${r}`:`requires lo < hi, got lo=${n}, hi=${r}`}function BY(e){const[n,t]=e;return n<t?null:`requires lo < hi, got lo=${n}, hi=${t}`}function HY(e){const[n,t]=e;return n>0&&t>0?null:`requires a > 0 and b > 0, got a=${n}, b=${t}`}function D7(e){const n=e[1];return n>0?null:`requires sigma > 0, got sigma=${n}`}function UY(e){const[n,t]=e;return 0<n&&n<t?null:`requires 0 < lo < hi, got lo=${n}, hi=${t}`}function F7(e){const[,n,t]=e;return n<=0?`requires sigma > 0, got sigma=${n}`:t<=0?`requires df > 0, got df=${t}`:null}function q7(e,n){const t=n-e;return{cdf:r=>r<=e?0:r>=n?1:(r-e)/t,ppf:r=>e+r*t,pdf:r=>r>=e&&r<=n?1/t:0}}function GY(e,n,t){const r=t-e,i=(n-e)/r;return{cdf:o=>o<=e?0:o>=t?1:o<=n?(o-e)*(o-e)/(r*(n-e)):1-(t-o)*(t-o)/(r*(t-n)),ppf:o=>o<i?e+Math.sqrt(o*r*(n-e)):t-Math.sqrt((1-o)*r*(t-n)),pdf:o=>o<e||o>t?0:o===n?2/r:o<n?2*(o-e)/(r*(n-e)):2*(t-o)/(r*(t-n))}}function x7(e,n){return{cdf:t=>cI(t,e,n),ppf:t=>AY(t,e,n),pdf:t=>dI(t,e,n)}}function av(e,n,t){return{cdf:r=>pI((r-e)/n,t),ppf:r=>e+n*FY(r,t),pdf:r=>y_((r-e)/n,t)/n}}function jY(e,n){return{cdf:t=>ov(t,e,n),ppf:t=>JX(t,e,n),pdf:t=>CK(t,e,n)}}const VY=1e-10,WY=20,KY=1e-300,B7=24,XY=60,YY=.001;function uv(e,n,t,r,i){return(n-e)/6*(t+4*r+i)}function sv(e,n,t,r,i,o,a,u){const s=(n+t)/2,l=(n+s)/2,c=(s+t)/2,d=e(l),p=e(c),m=uv(n,s,r,d,i),f=uv(s,t,i,p,o),h=m+f,v=VY*Math.max(Math.abs(h),KY);return u>=WY||Math.abs(h-a)<=15*v?h+(h-a)/15:sv(e,n,s,r,d,i,m,u+1)+sv(e,s,t,i,p,o,f,u+1)}function JY(e,n,t){if(!(t>n))return 0;const r=(n+t)/2,i=e(n),o=e(r),a=e(t);return sv(e,n,t,i,o,a,uv(n,t,i,o,a),0)}const zY=(()=>{const e=[0];for(let n=B7;n>=1;n--)e.push(.5*2**-n);for(let n=B7;n>=0;n--)e.push(1-.5*2**-n);return e})();function QY(e){return hI(e,zY)}function hI(e,n){let t=0;for(let r=0;r<n.length-1;r++)t+=JY(e,n[r],n[r+1]);return t}function ZY(e,n,t,r){const i=[n];for(let o=r;o>=1;o--){const a=t*2**-o;a>n&&i.push(a)}return i.push(t),hI(e,i)}function eJ(e,n,t){const r=Xi(e,n),i=Xi(e,t)-r;return i>0?i*QY(o=>Math.min(Math.max(e.ppf(r+o*i),n),t)):0}function H7(e,n,t,r){return r>t?e*(r**3-t**3)/3+n*(r**2-t**2)/2:0}function nJ(e,n,t){const[r,i]=e,o=Math.max(r,n),a=Math.min(i,t);return a>o?(a*a-o*o)/(2*(i-r)):0}function tJ(e,n,t){const[r,i,o]=e,a=o-r,u=i-r,s=o-i;let l=0;if(u>0){const c=2/(a*u);l+=H7(c,-r*c,Math.max(r,n),Math.min(i,t))}if(s>0){const c=2/(a*s);l+=H7(-c,o*c,Math.max(i,n),Math.min(o,t))}return l}function rJ(e,n,t){const[r,i]=e,o=Math.min(Math.max(n,0),1),a=Math.min(Math.max(t,0),1);return a>o?r/(r+i)*(ov(a,r+1,i)-ov(o,r+1,i)):0}function U7(e){return Number.isFinite(e)?dI(e,0,1):0}function Ha(e){return e===-1/0?0:e===1/0?1:cI(e,0,1)}function iJ(e,n,t){const[r,i]=e,o=(n-r)/i,a=(t-r)/i;return r*(Ha(a)-Ha(o))-i*(U7(a)-U7(o))}function oJ(e,n,t){const[r,i]=e,o=a=>Number.isFinite(a)?(a-r)/i-i:a;return Math.exp(r+i*i/2)*(Ha(o(t))-Ha(o(n)))}function aJ(e,n,t){const[r,i]=e,o=Math.log(r),a=Math.log(i),u=Math.max(o,n),s=Math.min(a,t);return s>u?(Math.exp(s)-Math.exp(u))/(a-o):0}function Rh(e,n){return-(n+e*e)*y_(e,n)/(n-1)}function uJ(e,n,t){if(!Number.isFinite(e)||!Number.isFinite(n)){if(t<=1)return!Number.isFinite(e)&&!Number.isFinite(n)?NaN:Number.isFinite(e)?1/0:-1/0;const r=i=>Number.isFinite(i)?Rh(i,t):0;return r(n)-r(e)}return Math.abs(t-1)<YY?eJ(av(0,1,t),e,n):Rh(n,t)-Rh(e,t)}function sJ(e,n,t){const[r,i,o]=e,a=(n-r)/i,u=(t-r)/i,s=l=>l===-1/0?0:l===1/0?1:pI(l,o);return r*(s(u)-s(a))+i*uJ(a,u,o)}function lJ(e,n,t){const[r,i,o]=e;if(t===1/0)return 1/0;const a=y_(0,o)/i,u=l=>{const c=(l-r)/i;return a*(1+c*c/o)**(-(o+1)/2)},s=n===-1/0?0:Math.exp(n-t);return Math.exp(t)*ZY(l=>l<=0?0:u(t+Math.log(l)),s,1,XY)}const Nt={tri:{signature:"tri(lo, peak, hi)",note:"triangular",nParams:3,check:xY,build:e=>({latent:GY(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:tJ},uniform:{signature:"uniform(lo, hi)",note:"uniform",nParams:2,check:BY,build:e=>({latent:q7(e[0],e[1]),logX:!1}),partialFirstMoment:nJ},beta:{signature:"beta(a, b)",note:"Beta on [0, 1]; a, b > 0",nParams:2,check:HY,build:e=>({latent:jY(e[0],e[1]),logX:!1}),partialFirstMoment:rJ},normal:{signature:"normal(mu, sigma)",note:"normal; sigma > 0",nParams:2,check:D7,build:e=>({latent:x7(e[0],e[1]),logX:!1}),partialFirstMoment:iJ},lognormal:{signature:"lognormal(mu, sigma)",note:"mu/sigma are mean/sd of log(X); sigma > 0",nParams:2,check:D7,build:e=>({latent:x7(e[0],e[1]),logX:!0}),partialFirstMoment:oJ},loguniform:{signature:"loguniform(lo, hi)",note:"uniform in log space; 0 < lo < hi",nParams:2,check:UY,build:e=>({latent:q7(Math.log(e[0]),Math.log(e[1])),logX:!0}),partialFirstMoment:aJ},t:{signature:"t(mu, sigma, df)",note:"location-scale Student-t; sigma > 0, df > 0",nParams:3,check:F7,build:e=>({latent:av(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:sJ},logt:{signature:"logt(mu, sigma, df)",note:"exp of location-scale Student-t; log-space params like lognormal",nParams:3,check:F7,build:e=>({latent:av(e[0],e[1],e[2]),logX:!0}),partialFirstMoment:lJ}},cJ=["normal","lognormal","t","logt"];function dJ(e){const[n,t]=e;return n<t?null:`requires lo < hi in the truncation window, got lo=${n}, hi=${t}`}function fJ(e,n){const t=n.signature.split("(",2)[1].slice(0,-1);return{signature:`${e}-trunc(${t}, lo, hi)`,note:`${n.note}; explicitly truncated to [lo, hi]`,nParams:n.nParams+2,check:r=>n.check(r.slice(0,n.nParams))??dJ(r.slice(n.nParams)),build:r=>n.build(r),partialFirstMoment:n.partialFirstMoment,hasTruncWindow:!0}}for(const e of cJ)Nt[`${e}-trunc`]=fJ(e,Nt[e]);function pJ(e){return mI.test(e)}function vI(e){const n=mI.exec(e);if(!n)throw new Error(`malformed family spec ${JSON.stringify(e)}: expected "family(num, num, ...)"`);const t=n[1],r=n[2],i=Nt[t];if(i===void 0)throw new Error(`unknown distribution family ${JSON.stringify(t)}; available: `+Object.values(Nt).map(s=>s.signature).join(", "));const o=r.split(",").map(s=>s.trim());for(const s of o)if(!qY.test(s))throw new Error(`family spec ${JSON.stringify(e.trim())}: bad numeric argument ${JSON.stringify(s)}`);const a=o.map(Number);if(a.length!==i.nParams)throw new Error(`${t} takes ${i.nParams} arguments as ${i.signature}, got ${a.length}`);const u=i.check(a);if(u)throw new Error(`${e.trim()}: ${i.signature} ${u}`);return i.hasTruncWindow?{family:t,params:a.slice(0,-2),text:e.trim(),truncWindow:[a[a.length-2],a[a.length-1]]}:{family:t,params:a,text:e.trim(),truncWindow:null}}function Xi(e,n){return n===-1/0?0:n===1/0?1:e.cdf(n)}class E_{constructor(n,t,r,i,o,a,u,s,l){this.spec=n,this.latent=t,this.logX=r,this.cdfLo=i,this.mass=o,this.xLo=a,this.xHi=u,this.yLo=s,this.yHi=l}inverseCdf(n){const t=this.latent.ppf(this.cdfLo+n*this.mass),r=this.logX?Math.exp(t):t;return Math.min(Math.max(r,this.xLo),this.xHi)}cdf(n){if(n<=this.xLo)return 0;if(n>=this.xHi)return 1;if(this.logX&&n<=0)return 0;const t=this.logX?Math.log(n):n;return(Xi(this.latent,t)-this.cdfLo)/this.mass}mean(){const n=Nt[this.spec.family];if(n===void 0)throw new Error(`unknown distribution family ${JSON.stringify(this.spec.family)}`);const r=n.partialFirstMoment(this.spec.params,this.yLo,this.yHi)/this.mass;return Number.isFinite(r)?r:null}pdf(n){return n<this.xLo||n>this.xHi?0:this.logX?n<=0?0:this.latent.pdf(Math.log(n))/n/this.mass:this.latent.pdf(n)/this.mass}}function S_(e,n,t){const r=Nt[e.family];if(r===void 0)throw new Error(`unknown distribution family ${JSON.stringify(e.family)}`);const{latent:i,logX:o}=r.build(e.params);let a=n===null?-1/0:n,u=t===null?1/0:t;e.truncWindow!==null&&(a=Math.max(a,e.truncWindow[0]),u=Math.min(u,e.truncWindow[1]));let s,l;o?(s=a>0?Math.log(a):-1/0,l=u>0?Math.log(u):-1/0):(s=a,l=u);const c=Xi(i,s),p=Xi(i,l)-c;if(p<P7){let m=`the variable's range [${n}, ${t}]`;throw e.truncWindow!==null&&(m+=` ∩ the spec's truncation window [${e.truncWindow[0]}, ${e.truncWindow[1]}]`),new Error(`family spec ${JSON.stringify(e.text)}: essentially no probability mass in ${m} (mass ${p.toExponential(2)} < ${P7})`)}return new E_(e,i,o,c,p,a,u,s,l)}const Ua=20,_I=1e-9;function Ga(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function lv(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function mJ(e,n,t){const r=`lloads.latents[${n}]`;if(!lv(e))return`${r}: expected an object, got ${Ga(e)}`;for(const o of["name","description"]){const a=e[o];if(typeof a!="string"||a.trim()==="")return`${r}.${o}: expected a non-empty string, got ${JSON.stringify(a)}`}const i=e.loadings;if(!lv(i))return`${r}.loadings: expected an object, got ${Ga(i)}`;if(Object.keys(i).length===0)return`${r}.loadings: empty — name the subjective variables this latent applies to, with 0 for any you considered and declined`;for(const[o,a]of Object.entries(i)){if(!t.has(o))return`${r}.loadings: '${o}' is not one of the subjective variables this jprob samples (${[...t].sort().join(", ")}), so a loading on it would have no effect`;if(typeof a!="number")return`${r}.loadings['${o}']: expected a number, got ${JSON.stringify(a)}`;if(!Number.isFinite(a))return`${r}.loadings['${o}']: ${a} is not finite`;if(a<-1||a>1)return`${r}.loadings['${o}']: ${a} not in [-1, 1]`}return null}function ko(e,n,t=[]){if(e==null)return null;if(!lv(e))return`lloads: expected an object, got ${Ga(e)}`;const r=Object.keys(e).filter(l=>l!=="latents").sort();if(r.length>0)return`lloads: unexpected key(s) ${JSON.stringify(r)}`;const i=e.latents;if(!Array.isArray(i))return`lloads.latents: expected a list, got ${Ga(i)}`;if(i.length>Ua)return`lloads.latents: ${i.length} latents exceeds the cap of ${Ua}`;const o=new Set(n);for(const[l,c]of i.entries()){const d=mJ(c,l,o);if(d!==null)return d}const a=new Map;for(const l of i)for(const[c,d]of Object.entries(l.loadings))a.set(c,(a.get(c)??0)+d**2);for(const[l,c]of[...a.entries()].sort((d,p)=>d[0]<p[0]?-1:1))if(c>1+_I)return`lloads: loading budget exceeded for '${l}' — the sum of squared loadings across latents is ${G7(c)}, over the limit of 1 by ${G7(c-1)}; no residual variance is left for it`;const u=new Set(t),s=[...a.entries()].filter(([l,c])=>c>0&&u.has(l)).map(([l])=>l).sort();return s.length>0?`lloads: ${s.map(l=>`'${l}'`).join(", ")} ${s.length===1?"has":"have"} a point-mass distribution in this response, so a loading on it has no effect; remove the loading or give it a non-degenerate distribution`:null}function G7(e){return String(Number(e.toPrecision(6)))}function os(e){return e==null?!1:e.latents.some(n=>Object.values(n.loadings).some(t=>t!==0))}function hJ(e,n,t=1){if(!(t>=0&&t<=1))throw new Error(`lloads dependence strength ${t} not in [0, 1]`);const r=ko(e,n);if(r!==null)throw new Error(r);const i=(e==null?void 0:e.latents)??[],o=Math.sqrt(t),a=new Map(n.map((l,c)=>[l,c])),u=n.map(()=>i.map(()=>0));for(const[l,c]of i.entries())for(const[d,p]of Object.entries(c.loadings))u[a.get(d)][l]=p*o;const s=u.map(l=>Math.sqrt(Math.max(0,1-l.reduce((c,d)=>c+d*d,0))));return{loadingMatrix:u,residualSds:s}}const ja="pointmass",vJ="[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?",_J=new RegExp(`^\\s*${ja}\\s*\\(\\s*(${vJ})\\s*\\)\\s*$`),gJ=new RegExp(`^\\s*${ja}\\b`);function gI(e){const n=_J.exec(e);if(n===null)throw new Error(`malformed ${ja} spec ${JSON.stringify(e)}: expected "${ja}(num)"`);return Number(n[1])}function w_(e){return gJ.test(e)?gI(e):null}function bI(e){const n=gI(e);return[[n,1],[n,1]]}function yI(e,n,t){if(n===0)throw new Error(`${t}: need at least one component to mix`);if(e.length!==n)throw new Error(`${t}: expected one weight per component (${n}); got ${e.length}`);let r=0;for(const i of e){if(!(i>0))throw new Error(`${t}: every mixture weight must be positive`);r+=i}return e.map(i=>i/r)}function as(e,n){const t=yI(n,e.length,"weightedMean");let r=0;return e.forEach((i,o)=>{r+=t[o]*i}),r}function bJ(e,n){let t=1/0,r=-1/0;for(const i of e){const{lo:o,hi:a}=n(i);t=Math.min(t,o),r=Math.max(r,a)}return{lo:t,hi:r}}function cv(e){const n=.254829592,t=-.284496736,r=1.421413741,i=-1.453152027,o=1.061405429,a=.3275911,u=e<0?-1:1,s=Math.abs(e)/Math.SQRT2,l=1/(1+a*s),c=1-((((o*l+i)*l+r)*l+t)*l+n)*l*Math.exp(-s*s);return .5*(1+u*c)}function Va(){const e=Math.random(),n=Math.random(),t=Math.sqrt(-2*Math.log(e)),r=2*Math.PI*n;return[t*Math.cos(r),t*Math.sin(r)]}const Mo=1e-15;function yJ(e,n){const t=e.length;if(t<2)throw new Error(`buildFromXsHs: need at least 2 breakpoints, got ${t}`);let r=0;for(let a=0;a<t-1;a++)r+=(e[a+1]-e[a])*(n[a]+n[a+1])/2;if(r<=0)throw new Error("buildPieceLinear: distribution has zero or negative area");const i=new Float64Array(t);for(let a=0;a<t;a++)i[a]=n[a]/r;const o=new Float64Array(t);o[0]=0;for(let a=0;a<t-1;a++)o[a+1]=o[a]+(e[a+1]-e[a])*(i[a]+i[a+1])/2;return o[t-1]=1,{xs:new Float64Array(e),fs:i,Fs:o}}function EI(e){const{pairs:n}=e,t=n[0][0];if(n[n.length-1][0]-t<Mo)return{xs:new Float64Array([t,t]),fs:new Float64Array([1,1]),Fs:new Float64Array([0,1])};const i=n.map(a=>a[0]),o=n.map(a=>a[1]);return yJ(i,o)}function Yi(e,n){if(e.kind==="family"){if(n===void 0)throw new Error(`family spec ${JSON.stringify(e.spec.text)} needs the svar's declared range for implicit truncation, but no paramRange was provided (thread paramRanges through the caller)`);return S_(e.spec,n.lo,n.hi)}return EI(e)}function $r(e,n){return n instanceof E_?n.inverseCdf(e):SJ(e,n)}const EJ=1e-12;function SJ(e,n){const{xs:t,fs:r,Fs:i}=n,o=t.length-1;if(o<=0||e<=0)return t[0];if(e>=1)return t[o];let a=0,u=o;for(;a<u-1;){const m=a+u>>1;i[m]<=e?a=m:u=m}const s=a,l=t[s+1]-t[s];if(l<Mo)return t[s];const c=e-i[s],d=(r[s+1]-r[s])/l;let p;if(Math.abs(d)<EJ)p=c/r[s];else{const m=r[s]*r[s]+2*d*c;p=(-r[s]+Math.sqrt(Math.max(0,m)))/d}return t[s]+p}function dv(e,n,t,r,i){var l;const{nParams:o,perTrialLoadings:a,trialPicker:u}=SI(e,n,t,r),s=Array.from({length:o},()=>new Float64Array(i));for(let c=0;c<i;c++){const d=u(),p=e[d],{loadingMatrix:m,residualSds:f}=a[d],h=((l=m[0])==null?void 0:l.length)??0;if(h===0)for(let v=0;v<o;v++)s[v][c]=$r(Math.random(),p[v]);else{const v=[];for(let _=0;_<h;_++)v.push(Va()[0]);for(let _=0;_<o;_++){const g=Va()[0],b=m[_];let y=f[_]*g;for(let E=0;E<h;E++)y+=b[E]*v[E];s[_][c]=$r(cv(y),p[_])}}}return s}function SI(e,n,t,r){const i=e.length;if(i===0)throw new Error("sampleCopulaMatrix: need at least one trial");const o=r.length;if(e.some(u=>u.length!==o))throw new Error(`sampleCopulaMatrix: trials disagree with params on parameter count (${o} params)`);if(n.length!==i)throw new Error(`sampleCopulaMatrix: ${n.length} per-trial lloads specs for ${i} trials`);const a=n.map(u=>hJ(u,r));return{trialCount:i,nParams:o,perTrialLoadings:a,trialPicker:wJ(t,i)}}function wJ(e,n){if(e.length!==n)throw new Error(`sampleCopulaMatrix: ${e.length} per-trial weights for ${n} trials`);const t=new Float64Array(n);let r=0;for(const[i,o]of e.entries()){if(!(o>0))throw new Error("sampleCopulaMatrix: every per-trial weight must be positive");r+=o,t[i]=r}return()=>{const i=Math.random()*r;for(let o=0;o<n;o++)if(i<t[o])return o;return n-1}}function AJ(e,n,t,r,i){var d;const{nParams:o,perTrialLoadings:a,trialPicker:u}=SI(e,n,t,r),s=Array.from({length:o},()=>new Float64Array(i)),c=a.some(({loadingMatrix:p})=>{var m;return(((m=p[0])==null?void 0:m.length)??0)>0})?Array.from({length:o},()=>new Float64Array(i)):s;for(let p=0;p<i;p++){const m=u(),f=e[m],{loadingMatrix:h,residualSds:v}=a[m],_=((d=h[0])==null?void 0:d.length)??0;if(_===0)for(let g=0;g<o;g++){const b=$r(Math.random(),f[g]);s[g][p]=b,c[g][p]=b}else{const g=[];for(let b=0;b<_;b++)g.push(Va()[0]);for(let b=0;b<o;b++){const y=Va()[0];s[b][p]=$r(cv(y),f[b]);const E=h[b];let A=v[b]*y;for(let T=0;T<_;T++)A+=E[T]*g[T];c[b][p]=$r(cv(A),f[b])}}}return{independent:s,joint:c}}function Po(e,n){if(e.length===0)throw new Error("combineSampleColumns: need at least one sampled column");const t=e[0].length,r=new Float64Array(t),i=new Array(e.length);for(let o=0;o<t;o++){for(let a=0;a<e.length;a++)i[a]=e[a][o];r[o]=n(i)}return r}function $J(e){if(typeof e=="string")return w_(e)!==null?{kind:"pairs",pairs:bI(e)}:{kind:"family",spec:vI(e)};if(!e||e.length===0)throw new Error("sampleValueToSpec: no sample value present (gate on sampleValueHasData to tolerate absence)");return{kind:"pairs",pairs:e}}function wI(e,n){const t=e.trim(),r=Number(t);if(isNaN(r)||!Cr(n,r))throw new Error(`"${t}" is not a valid value in ${$a(n)}`);return r}function AI(e,n){const t=e.trim(),r=t.split(/\s+/);if(r.length!==2)throw new Error(`expected "lo hi", got "${t}"`);const i=Number(r[0]),o=Number(r[1]),a=qw(n);if(isNaN(i)||isNaN(o)||!Cr(a,i)||!Cr(a,o)||i>o)throw new Error(`invalid bounds "${t}" (need lo ≤ hi within ${$a(a)})`);return[i,o]}const TJ=/\(\s*([\d.eE+-]+)\s+([\d.eE+-]+)\s*\)/g;function us(e,n){const t=e.trim(),r=w_(t);if(r!==null){if(!Cr(n,r))throw new Error(`pointmass value ${r} not in ${$a(n)}`);return{kind:"pairs",pairs:bI(t)}}if(pJ(t)){const s=vI(t);return S_(s,n.lo,n.hi),{kind:"family",spec:s}}if(!t.includes("("))throw new Error(`expected a family spec "name(num, ...)" or PWL pairs "(x y) ..." (pointmass(num) is also accepted), got "${t}"`);const i=[...t.matchAll(TJ)];if(i.length<2)throw new Error(`need at least 2 (x y) pairs, got ${i.length}`);const o=i.map(s=>[Number(s[1]),Number(s[2])]),a=qw(n);let u=-1/0;for(let s=0;s<o.length;s++){const[l,c]=o[s];if(isNaN(l)||!Cr(a,l))throw new Error(`pair ${s+1} x=${l} not in ${$a(a)}`);if(isNaN(c)||c<0||c>1)throw new Error(`pair ${s+1} y=${c} not in [0, 1]`);if(l<u)throw new Error(`pair ${s+1} x=${l} not sorted (prev was ${u})`);u=l}return{kind:"pairs",pairs:o}}function $I(e){return typeof e=="string"?e.length>0:((e==null?void 0:e.length)??0)>0}function ss(e){const n=new Float64Array(e);n.sort();const t=n.length;let r=0;for(let i=0;i<t;i++)r+=n[i];return{mean:r/t,median:n[Math.floor(t*.5)],p5:n[Math.floor(t*.05)],p95:n[Math.floor(t*.95)],samples:n,count:t}}const IJ=.5,LJ=.05,RJ=.95,CJ=1e-12,OJ=200;function Do(e){return!(e instanceof E_)}function A_(e){const{xs:n}=e,t=n[0];return n[n.length-1]-t<Mo?t:null}function TI(e,n){let t=0,r=e.length-1;for(;t<r-1;){const i=t+r>>1;e[i]<=n?t=i:r=i}return t}function NJ(e,n){const{xs:t,fs:r,Fs:i}=e,o=t.length-1;if(n<t[0])return 0;if(n>=t[o])return 1;const a=TI(t,n),u=t[a+1]-t[a];if(u<Mo)return i[a];const s=n-t[a],l=(r[a+1]-r[a])/u;return i[a]+r[a]*s+l*s*s/2}function kJ(e,n){if(A_(e)!==null)return 0;const{xs:t,fs:r}=e,i=t.length-1;if(n<t[0]||n>t[i])return 0;if(n===t[i])return r[i];const o=TI(t,n),a=t[o+1]-t[o];return a<Mo?r[o]:r[o]+(r[o+1]-r[o])*(n-t[o])/a}function MJ(e){const n=A_(e);if(n!==null)return n;const{xs:t,fs:r}=e;let i=0;for(let o=0;o<t.length-1;o++){const a=t[o+1]-t[o];if(a<=0)continue;const u=(r[o+1]-r[o])/a;i+=t[o]*r[o]*a+(t[o]*u+r[o])*a*a/2+u*a**3/3}return i}function PJ(e,n){return Do(e)?NJ(e,n):e.cdf(n)}function DJ(e,n){return Do(e)?kJ(e,n):e.pdf(n)}function j7(e,n){return $r(n,e)}function II(e){return Do(e)?MJ(e):e.mean()}function FJ(e){return Do(e)?A_(e):null}function qJ(e){return Do(e)?Array.from(e.xs):[]}function oi(e,n,t){return yI(n,e.length,t)}function xJ(e,n,t){const r=oi(e,n,"mixtureCdf");let i=0;return e.forEach((o,a)=>{i+=r[a]*PJ(o,t)}),i}function BJ(e,n,t){const r=oi(e,n,"mixturePdf");let i=0;return e.forEach((o,a)=>{i+=r[a]*DJ(o,t)}),i}function LI(e,n){const t=oi(e,n,"mixtureMean");let r=0;for(const[i,o]of e.entries()){const a=II(o);if(a===null)return null;r+=t[i]*a}return r}function Si(e,n,t){if(oi(e,n,"mixtureQuantile"),!(t>0&&t<1))throw new Error(`mixtureQuantile: quantile level ${t} is not in (0, 1)`);if(e.length===1)return j7(e[0],t);const r=e.map(a=>j7(a,t));let i=Math.min(...r),o=Math.max(...r);for(let a=0;a<OJ&&!(o-i<=CJ*Math.max(Math.abs(i),Math.abs(o)));a++){const u=i+(o-i)/2;xJ(e,n,u)>=t?o=u:i=u}return o}function RI(e,n){const t=oi(e,n,"mixtureAtoms"),r=new Map;return e.forEach((i,o)=>{const a=FJ(i);if(a===null)return;const u=r.get(a)??{count:0,mass:0};r.set(a,{count:u.count+1,mass:u.mass+t[o]})}),[...r.entries()].sort(([i],[o])=>i-o).map(([i,{count:o,mass:a}])=>({x:i,count:o,mass:a}))}function CI(e,n){return oi(e,n,"mixtureStats"),{mean:LI(e,n),median:Si(e,n,IJ),p5:Si(e,n,LJ),p95:Si(e,n,RJ)}}const HJ=32,UJ=4e6,xn=new Map;let ma=0;function Bt(e){return JSON.stringify(e,(n,t)=>{if(typeof t=="function"||typeof t=="symbol")throw new Error(`mc_memo key parts must be JSON-serializable data; got a ${typeof t}. Identify a combine function by a string tag / form id instead.`);return t})}function ls(e,n){const t=Bt(e),r=xn.get(t);if(r!==void 0)return xn.delete(t),xn.set(t,r),r;const i=n();for(xn.set(t,i),ma+=i.samples.length;(xn.size>HJ||ma>UJ)&&xn.size>1;){const o=xn.keys().next().value;ma-=xn.get(o).samples.length,xn.delete(o)}return i}function GJ(){xn.clear(),ma=0}const jJ=256,ct=new Map,Ji=new Map;let OI=1;function NI(e){const n=Bt(e),t=ct.get(n);if(t!==void 0)return ct.delete(n),ct.set(n,t),t;const r={token:`mcpool-${OI++}`,extraBlocks:0};for(ct.set(n,r),Ji.set(r.token,r);ct.size>jJ;){const i=ct.keys().next().value;Ji.delete(ct.get(i).token),ct.delete(i)}return r}const VJ=64,Wa=new Map,dt=new Map;function kI(e){const n=Bt([...e].sort()),t=dt.get(n);if(t!==void 0)return dt.delete(n),dt.set(n,t),t;const r=`mcpoolgroup-${OI++}`;for(dt.set(n,r),Wa.set(r,[...e]);dt.size>VJ;){const i=dt.keys().next().value;Wa.delete(dt.get(i)),dt.delete(i)}return r}function WJ(e){const n=Wa.get(e);if(n!==void 0){let r=!1;for(const i of n){const o=Ji.get(i);o!==void 0&&(o.extraBlocks+=1,r=!0)}return r}const t=Ji.get(e);return t===void 0?!1:(t.extraBlocks+=1,!0)}function KJ(){ct.clear(),Ji.clear(),Wa.clear(),dt.clear()}const XJ=2048,mt=new Map;function V7(e){const n=Bt(e),t=mt.get(n);if(t!==void 0)return mt.delete(n),mt.set(n,t),t}function W7(e){const n=Bt(e);if(mt.has(n))throw new Error(`streaming mean entry already exists for key ${n}`);const t={n:0,mean:0,m2:0,blocksFolded:0};for(mt.set(n,t);mt.size>XJ;){const r=mt.keys().next().value;mt.delete(r)}return t}function Ch(e,n,t){let{n:r,mean:i,m2:o}=e;for(let a=0;a<n.length;a++){const u=n[a];if(!Number.isFinite(u))throw new Error(`streaming mean fold: non-finite sample value ${u} at block index ${a}`);r+=1;const s=u-i;i+=s/r,o+=s*(u-i)}e.n=r,e.mean=i,e.m2=o,e.blocksFolded=t}function K7(e){return Math.sqrt(e.m2/(e.n-1)/e.n)}function YJ(){mt.clear()}const Fo="Bounds are not available for this formula: no interval for it follows from bounds responses. Its point and distribution results are unaffected.",cs="copula-matrix";function $_(e,n,t,r){const i=uo(n,t);if(i.bounds&&!i.boundsTightness)throw new Error(`form ${e} has a bounds implementation but no boundsTightness — regenerate form_fns`);return{key:Dw(e,n,t),params:i.params,valueRange:i.valueRange,point:i.point,bounds:i.bounds??null,boundsTightness:i.bounds?i.boundsTightness:null,sampleStage:i.sampleStage,barrierRegistry:r&&hk(r,t)}}function Jn(e,n,t,r){if(n.length!==e.length)throw new Error(`resolveTrialRecordInputs: expected one weight per trial (${e.length}); got ${n.length}`);return t==="point"?{mode:t,trialWeights:n,trials:e.map(i=>i.point)}:t==="bounds"?{mode:t,trialWeights:n,trials:e.map(i=>i.bounds)}:{mode:t,ranges:r,trialWeights:n,trials:e.map(i=>{const o={};for(const[a,u]of Object.entries(i.sample))$I(u)&&(o[a]=$J(u));return{specs:o,lloads:i.lloads??null}})}}class zi extends Error{constructor(n,t){super(`no trial has ${n} data for ${JSON.stringify(t)}`),this.missingParams=t,this.name="NoUsableTrialsError"}}function zn(e,n,t){switch(n.mode){case"point":{const r=qr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial),i=r.trials.map(a=>e.params.map(u=>a[u])),o=i.map(a=>e.point(a));return{kind:"point",value:as(o,r.weights),perTrial:o,perTrialInputs:i}}case"bounds":{const r=qr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial),i=r.trials.map(s=>e.params.map(l=>s[l])),o=e.bounds;if(!o)throw new Error(Fo);const{lo:a,hi:u}=bJ(i,o);return{kind:"bounds",lo:a,hi:u,tightness:e.boundsTightness??"loose",trialCount:r.trials.length}}case"sample":return JJ(e,n,t)}}function qr(e,n,t,r,i){const o=u=>e==="sample"?u.specs:u;if(n.length===0)throw i==="skip"?new zi(e,r):new Error(`record has no trials with ${e} data`);if(i==="error"){for(const[u,s]of n.entries()){const l=r.filter(c=>o(s)[c]===void 0);if(l.length>0)throw new Error(`Missing required ${e} input(s) for trial ${u+1}: ${JSON.stringify(l)}`)}return{trials:n,weights:t}}const a=n.map((u,s)=>r.every(l=>o(u)[l]!==void 0)?s:-1).filter(u=>u>=0);if(a.length===0){const u=r.filter(s=>o(n[0])[s]===void 0);throw new zi(e,u)}return{trials:a.map(u=>n[u]),weights:a.map(u=>t[u])}}function JJ(e,n,t){if(t.precomputed)return fv(t.precomputed.stats);const r=t.mcIters;if(r===void 0)throw new Error("live sample evaluation requires opts.mcIters");if(e.params.length===0)throw new Error(`form ${e.key} has no params to Monte-Carlo over`);const i=qr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial);if(e.sampleStage!==void 0)return QJ(e,e.sampleStage,n,i,r,t.mcItersPerClick);const{matrixContentParts:o,sampleFreshBlock:a}=ds(n,i),u=Ka(cs,o,r,t.mcItersPerClick,a),s=ls([...u.matrixKeyParts,"form",e.key],()=>ss(Po(e.params.map(l=>u.matrices.joint.get(l)),e.point)));return{kind:"mc",mean:s.mean,median:s.median,p5:s.p5,p95:s.p95,samples:s.samples,storedDistribution:null,provenance:"live",mcIters:u.totalIters,barrierInnerIters:null,mcPoolToken:u.poolToken,trialCount:i.trials.length}}function fv(e){return{kind:"mc",mean:e.mean,median:e.median,p5:e.p5,p95:e.p95,samples:null,storedDistribution:e.quantile_table_mixture??null,provenance:"precomputed",mcIters:e.mc_iters,barrierInnerIters:null,mcPoolToken:null,trialCount:0}}function MI(e){return{independent:fv(e.independent),joint:fv(e.joint)}}function T_(e,n,t){if(n.mode!=="sample")throw new Error(`joint-dependence comparison requires sample inputs, got ${n.mode}`);if(t.precomputed)return MI(t.precomputed);const r=t.mcIters;if(r===void 0)throw new Error("live joint-dependence comparison requires opts.mcIters");if(e.params.length===0)throw new Error(`form ${e.key} has no params to Monte-Carlo over`);const i=qr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial);if(e.sampleStage!==void 0)throw new Error(`joint dependence is not supported for form ${e.key}: correlation across an E[·] aggregation barrier has no defined semantics`);const{matrixContentParts:o,sampleFreshBlock:a}=ds(n,i),u=Ka(cs,o,r,t.mcItersPerClick,a),s=(p,m)=>ls([...u.matrixKeyParts,...m,"form",e.key],()=>ss(Po(e.params.map(f=>p.get(f)),e.point))),l=s(u.matrices.joint,[]),c=s(u.matrices.independent,["independent"]),d=p=>({kind:"mc",mean:p.mean,median:p.median,p5:p.p5,p95:p.p95,samples:p.samples,storedDistribution:null,provenance:"live",mcIters:u.totalIters,barrierInnerIters:null,mcPoolToken:u.poolToken,trialCount:i.trials.length});return{independent:d(c),joint:d(l)}}function PI(e,n,t){if(n.mode!=="sample")throw new Error(`live sample MC key requires sample inputs, got ${n.mode}`);if(e.sampleStage!==void 0)throw new Error(`live sample MC key is not defined for E[·] barrier form ${e.key}`);const r=qr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial),{matrixContentParts:i}=ds(n,r);return DI(cs,i,t.mcIters,t.mcItersPerClick)}function ds(e,n){const{trials:t,weights:r}=n,i=Object.keys(t[0].specs).filter(c=>t.every(d=>d.specs[c]!==void 0)).sort(),o=[i,t.map(c=>i.map(d=>c.specs[d])),i.map(c=>e.ranges[c]??null),t.map(c=>c.lloads),"weights",r],a=()=>t.map(c=>i.map(d=>Yi(c.specs[d],e.ranges[d]))),u=c=>new Map(i.map((d,p)=>[d,c[p]]));return{matrixContentParts:o,sampleFreshBlock:c=>{const d=AJ(a(),t.map(f=>f.lloads),r,i,c),p=u(d.independent),m=d.joint===d.independent?p:u(d.joint);return{independent:p,joint:m}},sampleFreshJointBlock:c=>u(dv(a(),t.map(d=>d.lloads),r,i,c))}}function zJ(e,n,t){if(n.mode!=="sample")throw new Error(`streaming mean evaluation requires sample inputs, got ${n.mode}`);if(e.sampleStage!==void 0)throw new Error(`streaming mean evaluation of ${e.key} is not supported for formulas with E[·] aggregation barriers`);const r=t.mcIters;if(r===void 0)throw new Error("streaming mean evaluation requires opts.mcIters");if(e.params.length===0)throw new Error(`form ${e.key} has no params to Monte-Carlo over`);const i=qr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial),{matrixContentParts:o,sampleFreshJointBlock:a}=ds(n,i),u=m=>Po(e.params.map(f=>a(m).get(f)),e.point),s=t.mcItersPerClick;if(s===void 0){const m=["stream-mean",...o,r,"form",e.key];let f=V7(m);return f===void 0&&(f=W7(m),Ch(f,u(r),0)),{mean:f.mean,n:f.n,standardError:K7(f),mcPoolToken:null}}const l=["stream-mean-pool",...o,r,s],c=NI(l),d=[...l,"form",e.key];let p=V7(d);return p===void 0?(p=W7(d),Ch(p,u(r+c.extraBlocks*s),c.extraBlocks)):c.extraBlocks>p.blocksFolded?Ch(p,u((c.extraBlocks-p.blocksFolded)*s),c.extraBlocks):c.extraBlocks<p.blocksFolded&&(p.blocksFolded=c.extraBlocks),{mean:p.mean,n:p.n,standardError:K7(p),mcPoolToken:c.token}}function DI(e,n,t,r){return[`${e}-pool`,...n,t,r]}function Ka(e,n,t,r,i){if(r===void 0){const u=[e,...n,t];return{matrixKeyParts:u,poolToken:null,extraBlocks:0,totalIters:t,matrices:tz(u,()=>i(t))}}const o=DI(e,n,t,r),a=NI(o);return{matrixKeyParts:[...o,"blocks",a.extraBlocks],poolToken:a.token,extraBlocks:a.extraBlocks,totalIters:t+a.extraBlocks*r,matrices:iz(o,a.extraBlocks,t,r,i)}}function QJ(e,n,t,r,i,o){if(r.trials.some(E=>{var A;return(((A=E.lloads)==null?void 0:A.latents.length)??0)>0}))throw new Error(`joint dependence is not supported for form ${e.key}: correlation across an E[·] aggregation barrier has no defined semantics`);const a=e.barrierRegistry;if(a===void 0)throw new Error(`form ${e.key} contains an E[·] barrier but no barrier registry was provided — evaluating it without one would silently compute per-draw (pre-E) semantics`);const u=n.params.filter(E=>E.barrier);for(const E of u)if(a[E.name]===void 0)throw new Error(`form ${e.key}: barrier ${E.name} is not in the barrier registry`);const s=[...new Set(Object.values(a).flatMap(E=>E.params))].sort(),l=[],c=[],d=[],p=[];for(const E of r.trials){const A=s.filter(L=>E.specs[L]!==void 0),T=[A,A.map(L=>E.specs[L]),A.map(L=>t.ranges[L]??null)],C=Ka("barrier-inner-matrix",T,i,o,L=>{const $=A.map(S=>Yi(E.specs[S],t.ranges[S])),w=dv([$],[null],[1],A,L);return X7(new Map(A.map((S,I)=>[S,w[I]])))});C.poolToken!==null&&l.push(C.poolToken),c.push(C.extraBlocks),d.push(C.totalIters),p.push(u.map(L=>ZJ(C.matrixKeyParts,C.matrices.joint,L.name,a[L.name])))}const m=Object.keys(r.trials[0].specs).filter(E=>r.trials.every(A=>A.specs[E]!==void 0)).sort(),f=u.map(E=>E.name),h=[m,r.trials.map(E=>m.map(A=>E.specs[A])),m.map(E=>t.ranges[E]??null),"weights",r.weights,"barriers",f,i,o??null,c,p],_=Ka(cs,h,i,o,E=>{const A=[...m,...f],T=r.trials.map(($,w)=>[...m.map(S=>Yi($.specs[S],t.ranges[S])),...p[w].map(S=>EI({pairs:[[S,1],[S,1]]}))]),C=dv(T,r.trials.map(()=>null),r.weights,A,E),L=new Map(A.map(($,w)=>[$,C[w]]));if(L.size!==A.length)throw new Error(`barrier key collides with a svar column name (${JSON.stringify(A)})`);return X7(L)}),g=n.params.map(E=>{const A=_.matrices.joint.get(E.name);if(A===void 0)throw new Error(`form ${e.key}: no sampled column for sample-stage param ${E.name}`);return A}),b=ls([..._.matrixKeyParts,"form",e.key],()=>ss(Po(g,n.point))),y=_.poolToken===null?null:kI([_.poolToken,...l]);return{kind:"mc",mean:b.mean,median:b.median,p5:b.p5,p95:b.p95,samples:b.samples,storedDistribution:null,provenance:"live",mcIters:_.totalIters,barrierInnerIters:Math.min(...d),mcPoolToken:y,trialCount:r.trials.length}}function ZJ(e,n,t,r){const i=r.cparamBindingKey===void 0?[...e,"barrier",t]:[...e,"barrier",t,r.cparamBindingKey];return ls(i,()=>{const a=r.params.map(p=>{const m=n.get(p);if(m===void 0)throw new Error(`barrier ${t}: trial has no inner sample column for leaf ${p}`);return m}),u=Po(a,r.point);for(const p of u)if(!Number.isFinite(p))throw new Error(`barrier ${t}: non-finite operand draw (${p})`);const s=ss(u);if(!Number.isFinite(s.mean))throw new Error(`barrier ${t}: non-finite mean (${s.mean})`);const l=u.length;let c=0;for(const p of u)c+=(p-s.mean)**2;const d=Math.sqrt(c/l/l)/Math.abs(s.mean);return console.debug(`[E-barrier] ${t}: n=${l} mean=${s.mean} relSE=${d}`),s}).mean}const ez=8,nz=6e6,Bn=new Map;let ha=0;function X7(e){return{independent:e,joint:e}}function Y7(e){let n=0;const t=new Set;for(const r of[e.independent,e.joint])for(const i of r.values())t.has(i)||(t.add(i),n+=i.length);return n}function pv(e){const n=Bn.get(e);return n!==void 0&&(Bn.delete(e),Bn.set(e,n)),n}function mv(e,n){for(Bn.set(e,n),ha+=Y7(n);(Bn.size>ez||ha>nz)&&Bn.size>1;){const t=Bn.keys().next().value;ha-=Y7(Bn.get(t)),Bn.delete(t)}return n}function tz(e,n){const t=Bt(e);return pv(t)??mv(t,n())}function J7(e,n){const t=new Map;for(const[r,i]of e){const o=n.get(r);if(o===void 0)throw new Error(`concatSampleMatrices: fresh block lacks column for svar ${r}`);const a=new Float64Array(i.length+o.length);a.set(i,0),a.set(o,i.length),t.set(r,a)}return t}function rz(e,n){const t=J7(e.independent,n.independent),r=e.independent===e.joint&&n.independent===n.joint?t:J7(e.joint,n.joint);return{independent:t,joint:r}}function iz(e,n,t,r,i){const o=l=>Bt([...e,"blocks",l]),a=pv(o(n));if(a!==void 0)return a;let u=n-1,s;for(;u>=0&&(s=pv(o(u)))===void 0;)u--;s===void 0&&(s=mv(o(0),i(t)),u=0);for(let l=u+1;l<=n;l++)s=mv(o(l),rz(s,i(r)));return s}function oz(){Bn.clear(),ha=0}function FI(e,n){const t=e.map(r=>`<span style="--density-legend-color: ${X(r.color)}; --density-legend-style: ${r.dashed?"dashed":"solid"}">${x(r.label)}</span>`).join("");return`<div class="density-overlay-legend" aria-label="${X(n)}">${t}</div>`}function I_(e,n){return'<div class="density-overlay-plot">'+FI(n,"Density curve legend")+`<canvas id="${X(e)}" width="400" height="200"></canvas></div>`}const az=5,uz=5,sz=[0,.25,.5,.75,1];function qI(e,n,t){const r=n/2;return Math.min(Math.max(e,r),t-r)}function fs(e,n){return{value:e,label:n===null?e.toFixed(2):n(e)}}function ps(e,n){const t=az/100*(n-e);return[e-t,n+t]}function L_(e,n,t){return e??ps(n,t)}function lz(e){return Math.max(0,-Math.floor(Math.log10(e)))}function cz(e){const n=10**Math.floor(Math.log10(e)),t=e/n;return(t<=1?1:t<=2?2:t<=5?5:10)*n}function Xa(e,n,t=null){const r=dz(e,n);return t===null?r:r.map(i=>({value:i.value,label:t(i.value)}))}function dz(e,n){if(e===0&&n===1)return sz.map(a=>({value:a,label:a.toFixed(2)}));if(n<=e)return[fs(e,null)];const t=cz((n-e)/uz),r=lz(t),i=[],o=t*1e-9;for(let a=Math.ceil(e/t)*t;a<=n+o;a+=t){const u=Math.abs(a)<o?0:a;i.push({value:u,label:u.toFixed(r)})}return i}const z7={ui:"sans-serif",mono:"monospace"},fz={ui:"--font-ui",mono:"--font-mono"},Q7=new Map;function xI(e){const n=Q7.get(e);if(n!==void 0)return n;if(typeof getComputedStyle>"u"||typeof document>"u")return z7[e];const t=getComputedStyle(document.documentElement).getPropertyValue(fz[e]).trim();return t?(Q7.set(e,t),t):z7[e]}function ms(e){return`${e}px ${xI("ui")}`}function Jt(e){return`${e}px ${xI("mono")}`}const pz="pchip",mz=200,hz={logit:e=>Math.log(e/(1-e)),log:e=>Math.log(e),identity:e=>e};function vz(e,n){const t=e.length,r=[],i=[];for(let u=0;u<t-1;u++)r.push(e[u+1]-e[u]),i.push((n[u+1]-n[u])/r[u]);if(t===2)return[i[0],i[0]];const o=new Array(t);for(let u=1;u<t-1;u++){const s=i[u-1],l=i[u];if(s*l<=0){o[u]=0;continue}const c=2*r[u]+r[u-1],d=r[u]+2*r[u-1];o[u]=(c+d)/(c/s+d/l)}const a=(u,s,l,c)=>{const d=((2*u+s)*l-u*c)/(u+s);return Math.sign(d)!==Math.sign(l)?0:Math.sign(l)!==Math.sign(c)&&Math.abs(d)>3*Math.abs(l)?3*l:d};return o[0]=a(r[0],r[1],i[0],i[1]),o[t-1]=a(r[t-2],r[t-3],i[t-2],i[t-3]),o}function _z(e,n,t){if(e.length!==ht.length)throw new Error(`a quantile table has one value per level (${ht.length} levels); got ${e.length}`);const r=[],i=[],o=[];e.forEach((l,c)=>{const d=ht[c],p=r.length-1;if(p>=0&&l===r[p]){o[p]=d;return}if(p>=0&&!(l>r[p]))throw new Error(`quantile table values must be nondecreasing; got ${r[p]} then ${l}`);r.push(l),i.push(d),o.push(d)});const a=hz[n],u=r.map(a),s=r.slice(0,-1).map((l,c)=>({levelAtStart:o[c],levelAtEnd:i[c+1],hermite:null}));if(t==="pchip"){let l=0;for(;l<s.length;){if(!Number.isFinite(u[l])||!Number.isFinite(u[l+1])){l++;continue}let c=l+1;for(;c<r.length-1&&i[c]===o[c]&&Number.isFinite(u[c+1]);)c++;const d=u.slice(l,c+1),p=d.map((f,h)=>h===0?o[l]:i[l+h]),m=vz(d,p);for(let f=0;f<d.length-1;f++)s[l+f].hermite={uStart:d[f],uEnd:d[f+1],slopeStart:m[f],slopeEnd:m[f+1]};l=c}}return{values:Float64Array.from(r),levelFirst:Float64Array.from(i),levelLast:Float64Array.from(o),pieces:s,forward:a}}function BI(e,n,t){const r=e.pieces[n],{levelAtStart:i,levelAtEnd:o,hermite:a}=r;if(a===null){const p=e.values[n],m=e.values[n+1];return i+(o-i)*(t-p)/(m-p)}const u=a.uEnd-a.uStart,s=(e.forward(t)-a.uStart)/u,l=s*s,c=l*s,d=i*(2*c-3*l+1)+u*a.slopeStart*(c-2*l+s)+o*(-2*c+3*l)+u*a.slopeEnd*(c-l);return Math.min(Math.max(d,i),o)}function HI(e,n,t){let r=0,i=e.length;for(;r<i;){const o=r+i>>>1;(t?e[o]<n:e[o]<=n)?r=o+1:i=o}return r-1}function gz(e,n){const t=HI(e.values,n,!1);return t<0?0:e.values[t]===n||t===e.values.length-1?e.levelLast[t]:BI(e,t,n)}function bz(e,n){const t=HI(e.values,n,!0);return t===e.values.length-1?e.levelLast[t]:e.values[t+1]===n?e.levelFirst[t+1]:t<0?0:BI(e,t,n)}function yz(e,n){const t=r=>{let i=0;return e.forEach((o,a)=>{i+=n[a]*r(o)}),Math.min(i,1)};return{atOrBelow:r=>t(i=>gz(i,r)),below:r=>t(i=>bz(i,r))}}function Ez(e,n,t,r){if(e.atOrBelow(t)>=n)return t;for(let i=0;i<mz;i++){const o=t+(r-t)/2;if(o<=t||o>=r)break;e.atOrBelow(o)>=n?r=o:t=o}return r}function UI(e,n=pz){const{tables:t,weights:r,transform:i}=e;if(t.length===0)throw new Error("a stored distribution needs at least one table");if(r.length!==t.length)throw new Error(`expected one weight per table (${t.length}); got ${r.length}`);const o=r.reduce((c,d)=>c+d,0);if(Math.abs(o-1)>1e-9)throw new Error(`stored distribution weights must sum to 1; got ${o}`);const a=t.map(c=>_z(c,i,n)),u=yz(a,r),s=[Math.min(...t.map(c=>c[0])),Math.max(...t.map(c=>c[c.length-1]))],l=c=>{const d=b=>b>c.domainLow&&(c.domainHigh===null||b<c.domainHigh);let p=1/0,m=-1/0;for(const b of t)for(const y of b)d(y)&&(p=Math.min(p,y),m=Math.max(m,y));if(p>m)return null;const f=u.atOrBelow(c.domainLow),h=c.domainHigh===null?0:1-u.below(c.domainHigh),v=[c.forward(p),c.forward(m)],_={cdfAtOrBelow:b=>u.atOrBelow(c.inverse(b)),cdfBelow:b=>u.below(c.inverse(b)),support:v,inView:()=>{throw new Error("a viewed stored distribution has no further view")}},g=b=>{if(b<=f)return v[0];if(b>=1-h)return v[1];const y=Ez(u,b,p,m);return Math.min(Math.max(c.forward(y),v[0]),v[1])};return{source:_,droppedLow:f,droppedHigh:h,centralRange:b=>[g(b),g(1-b)]}};return{cdfAtOrBelow:u.atOrBelow,cdfBelow:u.below,support:s,inView:l}}function GI(e){return e.samples!==null?e.samples:e.storedDistribution===null?null:UI(e.storedDistribution)}function R_(e){if(e instanceof Float64Array){if(e.length===0)throw new Error("density source has no samples");return[e[0],e[e.length-1]]}return e.support}function jI(e,n,t,r,i){if(!(t>=1)||!(i>r))throw new Error(`columnDensityFromCdf: need nColumns ≥ 1 and xMax > xMin; got ${t}, [${r}, ${i}]`);const o=(i-r)/t,a=new Float64Array(t);let u=e(r);for(let s=0;s<t;s++){const l=s===t-1?n(i):e(r+(i-r)*(s+1)/t);a[s]=(l-u)/o,u=l}return a}function Sz(e,n){let t=0,r=e.length;for(;t<r;){const i=t+r>>>1;e[i]<n?t=i+1:r=i}return t}function wz(e,n){let t=0,r=e.length;for(;t<r;){const i=t+r>>>1;e[i]<=n?t=i+1:r=i}return t}function Az(e,n,t,r){if(e.length===0)throw new Error("sampledColumnDensity: no samples");const i=e.length;return jI(o=>Sz(e,o)/i,o=>wz(e,o)/i,n,t,r)}function VI(e,n,t,r){return e instanceof Float64Array?Az(e,n,t,r):jI(e.cdfBelow,e.cdfAtOrBelow,n,t,r)}function WI(e,n,t){return ke.left+(e+.5)/n*t}const ke={top:4,bottom:18,left:4,right:4},$z=12,C_="#333",hs=1.5,Tz="#777",KI="#2166ac",Iz="rgba(110, 110, 110, 0.12)",XI="rgba(33, 102, 172, 0.12)",Ya=C_,YI="rgba(51, 51, 51, 0.10)",Ja=KI,JI=XI;function Lz(e){return e.quantile_table_mixture===void 0?null:{source:UI(e.quantile_table_mixture),p5:e.p5,p95:e.p95,color:Ya,dashed:!1,bandFill:YI}}function Z7(e,n,t,r,i,o=null){const a=e.width,u=e.height,s=e.getContext("2d");if(!s)return;s.clearRect(0,0,a,u);const l=a-ke.left-ke.right,c=u-ke.top-ke.bottom,d=ke.top+c;if(n instanceof Float64Array&&n.length===0)return;const p=R_(n),[m,f]=L_(i,p[0],p[1]);if(f<=m){tS(s,ke.left+l/2,c),wi(s,[fs(m,o)],()=>ke.left+l/2,d,a);return}const h=b=>ke.left+(b-m)/(f-m)*l,v=Math.round(l);if(p[1]-p[0]<(f-m)/l){tS(s,h((p[0]+p[1])/2),c),wi(s,Xa(m,f,o),h,d,a);return}const _=VI(n,v,m,f);let g=0;for(const b of _)g=Math.max(g,b);if(!(g<=0)){s.fillStyle="#e8e8e8",s.fillRect(h(t),ke.top,h(r)-h(t),c),s.beginPath();for(let b=0;b<v;b++){const y=WI(b,v,l),E=ke.top+c-_[b]/g*c;b===0?s.moveTo(y,E):s.lineTo(y,E)}s.strokeStyle=C_,s.lineWidth=hs,s.stroke(),wi(s,Xa(m,f,o),h,d,a)}}const Rz=13,eS=20,Cz="#777";function Oz(e,n){const t=e.width,r=e.height,i=e.getContext("2d");if(!i)return;i.clearRect(0,0,t,r),i.save(),i.fillStyle=Cz,i.font=ms(Rz),i.textAlign="center",i.textBaseline="middle";const o=r/2-(n.length-1)*eS/2;n.forEach((a,u)=>{i.fillText(a,t/2,o+u*eS)}),i.restore()}function nS(e,n,t,r=null){const i=e.width,o=e.height,a=e.getContext("2d");if(!a||(a.clearRect(0,0,i,o),n.length===0))return;const u=i-ke.left-ke.right,s=o-ke.top-ke.bottom,l=ke.top+s,c=n.map(_=>O_(_.source,t)),d=(t==null?void 0:t[0])??Math.min(...c.map(_=>_[0])),p=(t==null?void 0:t[1])??Math.max(...c.map(_=>_[1])),m=_=>ke.left+(_-d)/(p-d)*u;if(p<=d){for(const _ of n)zI(a,ke.left+u/2,s,_.color);wi(a,[fs(d,r)],()=>ke.left+u/2,l,i);return}const f=Math.round(u),h=n.map(_=>Nz(_.source,f,d,p));let v=0;for(const _ of h)if(_.density!==null)for(const g of _.density)v=Math.max(v,g);for(const _ of n)_.bandFill!==null&&(a.fillStyle=_.bandFill,a.fillRect(m(_.p5),ke.top,m(_.p95)-m(_.p5),s));n.forEach((_,g)=>{kz(a,h[g],f,u,s,v,_.color,_.dashed,m)}),wi(a,Xa(d,p,r),m,l,i)}function O_(e,n){const t=R_(e);return L_(n,t[0],t[1])}function Nz(e,n,t,r){const i=R_(e);return i[1]-i[0]<(r-t)/n?{density:null,pointMassX:(i[0]+i[1])/2}:{density:VI(e,n,t,r),pointMassX:null}}function kz(e,n,t,r,i,o,a,u,s){if(n.pointMassX!==null){zI(e,s(n.pointMassX),i,a);return}if(!(n.density===null||o<=0)){e.beginPath();for(let l=0;l<t;l++){const c=WI(l,t,r),d=ke.top+i-n.density[l]/o*i;l===0?e.moveTo(c,d):e.lineTo(c,d)}e.strokeStyle=a,e.lineWidth=hs,e.setLineDash(u?[5,4]:[]),e.stroke(),e.setLineDash([])}}function tS(e,n,t){e.beginPath(),e.moveTo(n,ke.top+t),e.lineTo(n,ke.top),e.strokeStyle=C_,e.lineWidth=hs,e.stroke()}function zI(e,n,t,r){e.beginPath(),e.moveTo(n,ke.top+t),e.lineTo(n,ke.top),e.strokeStyle=r,e.lineWidth=hs,e.stroke()}function wi(e,n,t,r,i){e.strokeStyle="#bbb",e.lineWidth=.5,e.fillStyle="#4d4d4d",e.font=ms($z),e.textAlign="center";for(const o of n){const a=t(o.value);e.beginPath(),e.moveTo(a,r),e.lineTo(a,r+3),e.stroke();const u=qI(a,e.measureText(o.label).width,i);e.fillText(o.label,u,r+12)}}function Mz(e,n){if(e.length!==n.length)throw new Error(`pwlToShape: xs length ${e.length} !== ys length ${n.length}`);return{points:e.map((t,r)=>({x:t,y:n[r]}))}}const tr=.001,za=101,Pz=.04;function Dz(e){const n=e.inverseCdf(tr),t=e.inverseCdf(1-tr);if(!(t>n))return{points:[{x:n,y:1}]};const r=[],i=[];for(let a=0;a<za;a++){const u=n+a/(za-1)*(t-n);r.push(u),i.push(e.pdf(u))}const o=Math.max(...i);if(o<=0)throw new Error("familyToShape: zero density over the display window");return{points:r.map((a,u)=>({x:a,y:i[u]/o}))}}function QI(e,n){const t=RI(e,n),r=t.map(m=>m.x),i=Math.min(Si(e,n,tr),...r),o=Math.max(Si(e,n,1-tr),...r);if(!(o>i))return{points:[{x:i,y:1}]};const a=[];for(let m=0;m<za;m++)a.push(i+m/(za-1)*(o-i));for(const m of e)for(const f of qJ(m))f>i&&f<o&&a.push(f);const u=new Set(r),s=[...new Set(a)].filter(m=>!u.has(m)).sort((m,f)=>m-f),l=s.map(m=>BJ(e,n,m)),c=Math.max(0,...l),d=c>0?1:Math.max(...t.map(m=>m.mass));return{points:[...s.map((m,f)=>({x:m,points:[{x:m,y:c>0?l[f]/c:0}]})),...t.map(m=>{const f=Math.max(m.mass/d,Pz);return{x:m.x,points:[{x:m.x,y:0},{x:m.x,y:f},{x:m.x,y:0}]}})].sort((m,f)=>m.x-f.x).flatMap(m=>m.points)}}function ZI(e,n){const t=e.points;return L_(n?_u(n):null,t[0].x,t[t.length-1].x)}const qn={top:4,bottom:18,left:4,right:4},Fz=10,qz="rgba(100, 149, 237, 0.25)",rS="#4477bb",iS=1.5,xz="#e8e8e8";function oS(e,n,t,r,i=null){const o=e.width,a=e.height,u=e.getContext("2d");if(!u)return;u.clearRect(0,0,o,a);const{points:s}=n;if(s.length===0)return;const l=o-qn.left-qn.right,c=a-qn.top-qn.bottom,d=qn.top+c,[p,m]=t;if(m<=p){const b=qn.left+l/2;Math.max(...s.map(y=>y.y))>0&&(u.beginPath(),u.moveTo(b,d),u.lineTo(b,qn.top),u.strokeStyle=rS,u.lineWidth=iS,u.stroke()),aS(u,[fs(p,i)],()=>b,d,o);return}const f=b=>qn.left+(b-p)/(m-p)*l,h=Math.max(...s.map(b=>b.y));if(h<=0)return;const v=b=>qn.top+c-b/h*c;if(r){const[b,y]=r;u.fillStyle=xz,u.fillRect(f(b),qn.top,f(y)-f(b),c)}u.beginPath(),u.moveTo(f(s[0].x),d);for(const b of s)u.lineTo(f(b.x),v(b.y));u.lineTo(f(s[s.length-1].x),d),u.closePath(),u.fillStyle=qz,u.fill(),u.beginPath();const _=s[0],g=s[s.length-1];_.y>0?(u.moveTo(f(_.x),d),u.lineTo(f(_.x),v(_.y))):u.moveTo(f(_.x),v(_.y));for(let b=1;b<s.length;b++)u.lineTo(f(s[b].x),v(s[b].y));g.y>0&&u.lineTo(f(g.x),d),u.strokeStyle=rS,u.lineWidth=iS,u.stroke(),aS(u,Xa(p,m,i),f,d,o)}function aS(e,n,t,r,i){e.strokeStyle="#bbb",e.lineWidth=.5,e.fillStyle="#4d4d4d",e.font=ms(Fz),e.textAlign="center";for(const o of n){const a=t(o.value);e.beginPath(),e.moveTo(a,r),e.lineTo(a,r+3),e.stroke();const u=qI(a,e.measureText(o.label).width,i);e.fillText(o.label,u,r+12)}}function Bz(){const e=new WeakMap;return{get(n,t){var r;return(r=e.get(n))==null?void 0:r.get(t)},set(n,t,r){let i=e.get(n);i===void 0&&(i=new Map,e.set(n,i)),i.set(t,r)}}}const Hz=.5,Uz=3,uS=new WeakMap,sS=new WeakMap,lS=Bz();function vs(e,n,t){var p;if(uS.set(e,n),(p=e.parentElement)!=null&&p.classList.contains("resizable-canvas-wrapper"))return;const r=e.width,i=e.height;sS.set(e,{w:r,h:i});const o=t===void 0?1:lS.get(t.stateHost,t.stateKey)??1,a=document.createElement("div");a.className="resizable-canvas-wrapper",e.parentElement.insertBefore(a,e),a.appendChild(e);const u=document.createElement("div");u.className="resizable-canvas-handle",a.appendChild(u),o!==1&&(e.width=Math.round(r*o),e.height=Math.round(i*o)),a.style.width=`${e.width}px`,o!==1&&n();let s=!1,l=0,c=r;u.addEventListener("pointerdown",m=>{var f;s=!0,l=m.clientX,c=e.width,(f=u.setPointerCapture)==null||f.call(u,m.pointerId),m.preventDefault()}),u.addEventListener("pointermove",m=>{var b;if(!s)return;const f=sS.get(e)??{w:r,h:i},h=m.clientX-l,v=Math.max(f.w*Hz,Math.min(f.w*Uz,c+h)),_=v/f.w,g=Math.round(f.h*_);e.width=Math.round(v),e.height=g,a.style.width=`${e.width}px`,t!==void 0&&lS.set(t.stateHost,t.stateKey,e.width/f.w),(b=uS.get(e))==null||b()});const d=()=>{s=!1};u.addEventListener("pointerup",d),u.addEventListener("lostpointercapture",d)}function Vn(e){return{scale:e.densityScale,statsDisplay:e.probAsOdds}}const N_="density-scale-switch",Gz="density-scale-switch-left",jz="density-scale-switch-right",Vz="density-scale-option",Wz="density-scale-option-active",Qi="data-density-scale",Kz="raw",Xz="Density plot scale: raw values, or the density of their logarithm (tick labels are then the logarithm). Applies to every plot that offers it.",Yz=.25,cS=256,Jz=1e-9,zz=10,Qz=2,Zz=10,eQ="#555",nQ="rgba(255, 255, 255, 0.85)",dS=3,ra=2,fS=14;function eL(e){return{label:e,domainLow:0,domainHigh:null,inDomain:n=>n>0,forward:n=>Math.log(n),inverse:n=>Math.exp(n),jacobian:n=>n,sideOutside:()=>"low",outsideText:{low:"≤ 0",high:""}}}const tQ=eL("ln(prob)"),rQ=eL("ln"),iQ={label:"ln(odds)",domainLow:0,domainHigh:1,inDomain:e=>e>0&&e<1,forward:e=>Math.log(e/(1-e)),inverse:e=>1/(1+Math.exp(-e)),jacobian:e=>e*(1-e),sideOutside:e=>e<=0?"low":"high",outsideText:{low:"≤ 0",high:"≥ 1"}};function k_(e,n){return e===void 0||!bk(e)?null:vu(e)?n==="odds"?iQ:tQ:rQ}function M_(e,n){return e!==void 0&&vu(e)&&n==="odds"?cT:null}function oQ(e,n){const t=[];let r=0,i=0;for(const o of e)n.inDomain(o)?t.push(n.forward(o)):n.sideOutside(o)==="low"?r++:i++;return{values:Float64Array.from(t),droppedLow:r,droppedHigh:i,total:e.length}}function aQ(e){const n=e.values.length-1;if(n<0)throw new Error("logViewSampleRange: no in-domain draws");const t=Math.floor(tr*(e.total-1)+Jz),r=a=>Math.min(Math.max(a,0),n),i=e.values[r(t-e.droppedLow)],o=e.values[r(e.total-1-t-e.droppedLow)];return ps(i,o)}function pS(e){const n=e*100;return n>=zz?n.toFixed(0):String(Number(n.toPrecision(Qz)))}function uQ(e){return{low:e.droppedLow/e.total,high:e.droppedHigh/e.total}}function nL(e,n,t){if(e.low+e.high<=tr)return null;const r=[],i=t?"up to ":"";return e.low>0&&r.push(`${i}${pS(e.low)}% of draws ${n.outsideText.low}`),e.high>0&&r.push(`${i}${pS(e.high)}% of draws ${n.outsideText.high}`),`not shown: ${r.join(", ")}`}function sQ(e,n){const t=e[n].x;return n>0&&e[n-1].x===t||n<e.length-1&&e[n+1].x===t}function lQ(e,n){const t=e.points,r=t.map((l,c)=>sQ(t,c));let i=0,o=0;t.forEach((l,c)=>{r[c]||(i=Math.max(i,l.y),n.inDomain(l.x)&&(o=Math.max(o,l.y*n.jacobian(l.x))))});const a=i>0&&o>0?o/i:1,u=new Set,s=[];return t.forEach((l,c)=>{if(!n.inDomain(l.x)){r[c]&&u.add(l.x);return}s.push({x:n.forward(l.x),y:r[c]?l.y*a:l.y*n.jacobian(l.x)})}),s.length===0||Math.max(...s.map(l=>l.y))<=0?null:{shape:{points:s},droppedPointMassXs:[...u]}}function cQ(e){return e.length===0?null:`not shown: point mass at ${e.map(String).join(" and ")}`}function xr(e,n,t){return n.inDomain(e)?n.forward(e):n.sideOutside(e)==="low"?t[0]:t[1]}function P_(e,n){return n<e?"right":"left"}function tL(e,n){const t=(n-e)*Yz;return{leftEdge:e+t,rightEdge:n-t}}function rL(e,n,t){const{leftEdge:r,rightEdge:i}=tL(n,t);if(e instanceof Float64Array){let o=0,a=0;for(const u of e)u<=r?o++:u>=i&&a++;return{left:o/e.length,right:a/e.length}}return{left:e.cdfAtOrBelow(r),right:1-e.cdfBelow(i)}}function dQ(e,n,t){const{leftEdge:r,rightEdge:i}=tL(n,t),o=e.points;let a=0,u=0,s=0,l=0;for(let c=0;c<cS;c++){const d=n+(t-n)*c/(cS-1);for(;a<o.length-1&&o[a+1].x<d;)a++;const p=o[a],m=o[Math.min(a+1,o.length-1)];if(d<p.x||d>m.x)continue;const f=m.x===p.x?p.y:p.y+(m.y-p.y)*(d-p.x)/(m.x-p.x);l+=f,d<=r?u+=f:d>=i&&(s+=f)}return l<=0?{left:0,right:0}:{left:u/l,right:s/l}}function D_(e,n,t){const r=e.getContext("2d");if(!r)return;r.save(),r.font=ms(Zz),r.textBaseline="middle";const i=r.measureText(n).width+2*dS,o=t==="left"?e.width-ra-i:ra;r.fillStyle=nQ,r.fillRect(o,ra,i,fS),r.fillStyle=eQ,r.textAlign="left",r.fillText(n,o+dS,ra+fS/2),r.restore()}const F_=new WeakMap;function hv(e){const n=F_.get(e);n!==void 0&&(n.active==="log"&&n.log!==null?n.log():n.raw())}function iL(e,n){for(const t of e.querySelectorAll(`[${Qi}]`)){const r=t.getAttribute(Qi)===n;t.classList.toggle(Wz,r),t.setAttribute("aria-pressed",String(r))}}function fQ(e,n,t,r){const i=document.createElement("span");i.className=`${N_} `+(n==="left"?Gz:jz),i.setAttribute("role","group"),i.title=Xz;const o=[["raw",Kz],["log",t]];for(const[a,u]of o){const s=document.createElement("button");s.type="button",s.className=Vz,s.setAttribute(Qi,a),s.textContent=u,i.appendChild(s)}iL(i,r),e.appendChild(i)}function q_(e,n,t,r){var u;const i=n.log,o=i===null?null:i.corner();F_.set(e,{raw:n.raw,log:i===null?null:()=>i.draw(o),active:t.scale}),hv(e),vs(e,()=>hv(e),r);const a=e.parentElement;(u=a.querySelector(`.${N_}`))==null||u.remove(),i!==null&&fQ(a,o,i.label,t.scale)}function pQ(e,n){var t;for(const r of e.querySelectorAll(`.${N_}`)){const i=(t=r.parentElement)==null?void 0:t.querySelector("canvas"),o=i?F_.get(i):void 0;!i||o===void 0||(o.active=n,hv(i),iL(r,n))}}function oL(e,n,t,r,i,o,a){const u=_u(i),s=M_(i,o.statsDisplay),l=()=>Z7(e,n,t,r,u,s),c=k_(i,o.statsDisplay),d=c===null?null:aL(n,c);q_(e,{raw:l,log:d===null?null:{label:c.label,corner:()=>{const[p,m]=O_(n,u),f=rL(n,p,m);return P_(f.left,f.right)},draw:p=>{Z7(e,d.source,xr(t,c,d.range),xr(r,c,d.range),d.range);const m=nL(d.dropped,c,!1);m!==null&&D_(e,m,p)}}},o,a)}function aL(e,n){if(e instanceof Float64Array){const o=oQ(e,n);return o.values.length===0?null:{source:o.values,range:aQ(o),dropped:uQ(o)}}const t=e.inView(n);if(t===null)return null;const[r,i]=t.centralRange(tr);return{source:t.source,range:i>r?ps(r,i):[r,i],dropped:{low:t.droppedLow,high:t.droppedHigh}}}function uL(e,n,t,r,i){const o=_u(t),a=M_(t,r.statsDisplay),u=()=>nS(e,n,o,a),s=k_(t,r.statsDisplay);let l=null;const c=s===null||n.length===0?null:n.map(d=>aL(d.source,s));if(s!==null&&c!==null&&c.every(d=>d!==null)){const d=c,p=[Math.min(...d.map(v=>v.range[0])),Math.max(...d.map(v=>v.range[1]))],m=n.map((v,_)=>({...v,source:d[_].source,p5:xr(v.p5,s,p),p95:xr(v.p95,s,p)})),f={low:Math.max(0,...d.map(v=>v.dropped.low)),high:Math.max(0,...d.map(v=>v.dropped.high))},h=nL(f,s,n.length>1);l={label:s.label,corner:()=>{const v=n.map(E=>O_(E.source,o)),_=(o==null?void 0:o[0])??Math.min(...v.map(E=>E[0])),g=(o==null?void 0:o[1])??Math.max(...v.map(E=>E[1]));let b=0,y=0;for(const E of n){const A=rL(E.source,_,g);b+=A.left/n.length,y+=A.right/n.length}return P_(b,y)},draw:v=>{nS(e,m,p),h!==null&&D_(e,h,v)}}}q_(e,{raw:u,log:l},r,i)}function sL(e,n,t,r,i,o,a){const u=M_(r,i.statsDisplay),s=()=>oS(e,n,t,o,u),l=k_(r,i.statsDisplay),c=l===null?null:lQ(n,l);let d=null;if(l!==null&&c!==null){const p=c.shape.points,m=p[0],f=p[p.length-1],h=f.x>m.x?ps(m.x,f.x):[m.x,f.x],v=o?[xr(o[0],l,h),xr(o[1],l,h)]:null,_=cQ(c.droppedPointMassXs);d={label:l.label,corner:()=>{const g=dQ(n,t[0],t[1]);return P_(g.left,g.right)},draw:g=>{oS(e,c.shape,h,v),_!==null&&D_(e,_,g)}}}q_(e,{raw:s,log:d},i,a)}const gr={top:10,bottom:35,left:50,right:15},mQ=800,hQ=500,mS=12,vQ=5,_Q=3,gQ=2,hS=3,vS=5,bQ=10,yQ=1,EQ=15,_S=["#333","#c44","#44c","#4c4","#c84","#84c","#4cc","#c4c","#888","#ca4"],lL="#333",cL=2,SQ=1.5,wQ={color:lL,lineWidth:cL};function AQ(e,n,t=bQ,r=[]){if(n)return n;let i=1/0,o=-1/0;const a=c=>{c<i&&(i=c),c>o&&(o=c)};for(const c of e)for(const d of c.points)a(d.y);for(const c of r)a(c.y);if(!Number.isFinite(i)||!Number.isFinite(o))return null;const l=(o-i||yQ)*t/100;return[i-l,o+l]}function gS(e,n,t){e.width||(e.width=mQ),e.height||(e.height=hQ);const r=e.width,i=e.height,o=e.getContext("2d");if(!o)return;o.clearRect(0,0,r,i);const a=t.scatterOverlay;if(n.length===0&&!a)return;const u=i-gr.top-gr.bottom,s=AQ(n,t.yRange,t.yRangePaddingPercent,a==null?void 0:a.points);if(!s)return;const[l,c]=s,d=TQ(l,c,vQ),p=d.length>1?d[1]-d[0]:c-l,m=d.map($=>IQ($,p));o.font=Jt(mS);const f=m.reduce(($,w)=>Math.max($,o.measureText(w).width),0),h=Math.max(gr.left,Math.ceil(f)+hS+vS),v=r-h-gr.right;if(v<=0)return;const _=t.xLabels.length,g=_>1?v/(_-1):0,b=$=>h+$*g,y=$=>gr.top+u-($-l)/(c-l)*u;o.save(),o.strokeStyle="#ddd",o.lineWidth=.5,o.setLineDash([3,3]);for(const $ of d){const w=y($);o.beginPath(),o.moveTo(h,w),o.lineTo(h+v,w),o.stroke()}if(o.restore(),a){o.fillStyle=a.color;for(const $ of a.points)o.beginPath(),o.arc(b($.x),y($.y),gQ,0,Math.PI*2),o.fill()}const E=n.length===1;for(let $=0;$<n.length;$++){const w=n[$],S=w.color??(E?lL:_S[$%_S.length]),I=w.lineWidth??(E?cL:SQ);o.strokeStyle=S,o.lineWidth=I;for(const R of $Q(w.points))R.length<2||(o.beginPath(),R.forEach((P,k)=>{const H=b(P.x),D=y(P.y);k===0?o.moveTo(H,D):o.lineTo(H,D)}),o.stroke());o.fillStyle=S;for(const R of w.points)o.beginPath(),o.arc(b(R.x),y(R.y),_Q,0,Math.PI*2),o.fill()}const A=gr.top+u;o.strokeStyle="#bbb",o.lineWidth=.5,o.fillStyle="#4d4d4d",o.font=Jt(mS),o.textAlign="center",o.textBaseline="top";const T=t.xLabels.reduce(($,w)=>Math.max($,o.measureText(w).width),0),C=_>1?g:v,L=T>C-4;for(let $=0;$<_;$++){const w=b($);o.beginPath(),o.moveTo(w,A),o.lineTo(w,A+3),o.stroke(),o.save(),L?(o.translate(w,A+5),o.rotate(-Math.PI/4),o.textAlign="right",o.fillText(t.xLabels[$],0,0)):o.fillText(t.xLabels[$],w,A+5),o.restore()}o.fillStyle="#777",o.textAlign="center",o.textBaseline="bottom",o.fillText(t.xAxisLabel,h+v/2,i-1),o.fillStyle="#4d4d4d",o.textAlign="right",o.textBaseline="middle";for(let $=0;$<d.length;$++){const w=d[$],S=y(w);o.strokeStyle="#bbb",o.lineWidth=.5,o.beginPath(),o.moveTo(h-hS,S),o.lineTo(h,S),o.stroke(),o.fillText(m[$],h-vS,S)}}function $Q(e){const n=[];for(const t of e){const r=n[n.length-1],i=r==null?void 0:r[r.length-1];r!==void 0&&i!==void 0&&t.x===i.x+1?r.push(t):n.push([t])}return n}function TQ(e,n,t){const r=n-e;if(r<=0)return[e];const i=r/(t-1),o=Math.pow(10,Math.floor(Math.log10(i))),a=i/o;let u;a<=1.5?u=1*o:a<=3.5?u=2*o:a<=7.5?u=5*o:u=10*o;const s=Math.ceil(e/u)*u,l=[];for(let c=s;c<=n+u*.001;c+=u)l.push(c);return l}function IQ(e,n){if(Number.isInteger(e)||!Number.isFinite(n)||n<=0)return e.toString();const t=Math.min(EQ,Math.max(0,-Math.floor(Math.log10(n)))),r=e.toFixed(t).replace(/0+$/,"").replace(/\.$/,"");return r==="-0"?"0":r}const _s={top:10,bottom:35,left:60,right:60},LQ=80,RQ=120,CQ=1e3,OQ=60,NQ=90,kQ=800,MQ=35,kt=12,PQ=12,dL="#ddd",DQ="#eee",FQ=220,bS=10,qQ=80,xQ=25,yS=95,bi=12,fL=8,vv=4,Oh=64,pL=8,BQ=6,mL=5,hL=4,HQ=4,vL=-Math.PI/4,UQ=6,_L=1,GQ=.6;function jQ(e){return Math.max(_s.left,pL+kt+BQ+Math.ceil(e)+mL)}function VQ(e){return Math.max(_s.right,fL+bi+vv+Math.ceil(e))}function WQ(e){const n=Math.max(kt,e*Math.abs(Math.sin(vL)));return Math.max(_s.bottom,hL+Math.ceil(n)+UQ+kt+_L)}let Nh;function KQ(){return Nh===void 0&&(Nh=typeof document>"u"?null:document.createElement("canvas").getContext("2d")),Nh}function kh(e,n){return n?(n.font=Jt(kt),e.reduce((t,r)=>Math.max(t,n.measureText(r).width),0)):e.reduce((t,r)=>Math.max(t,r.length*GQ*kt),0)}function gL(e){if(e.valueRange){const[r,i]=e.valueRange;return{vMin:r,vMax:i,hasValues:!0}}let n=1/0,t=-1/0;for(const r of e.cells)for(const i of r)i!==null&&(i<n&&(n=i),i>t&&(t=i));return{vMin:n,vMax:t,hasValues:isFinite(n)&&isFinite(t)}}function XQ(e,n){const{vMin:t,vMax:r,hasValues:i}=gL(e);return{yTickPx:kh(e.yLabels,n),xTickPx:kh(e.xLabels,n),legendPx:i?kh([Zi(t),Zi(r)],n):0}}function bL(e,n){const t=XQ(e,n);return{top:_s.top,bottom:WQ(t.xTickPx),left:jQ(t.yTickPx),right:VQ(t.legendPx)}}function ES(e,n,t){return Math.max(n,Math.min(t,Math.floor(e)))}function yL(e){const n=bL(e,KQ()),t=ES(CQ/e.xLabels.length,LQ,RQ),r=ES(kQ/e.yLabels.length,OQ,NQ);return{width:n.left+e.xLabels.length*t+n.right,height:n.top+e.yLabels.length*r+n.bottom}}function SS(e,n){var _;const t=n.xLabels.length,r=n.yLabels.length;if(t===0||r===0)return;const i=e.getContext("2d");if(!i)return;if(!e.width||!e.height){const g=yL(n);e.width=g.width,e.height=g.height}const o=e.width,a=e.height;i.clearRect(0,0,o,a);const u=bL(n,i),s=(o-u.left-u.right)/t,l=(a-u.top-u.bottom)/r;if(s<=0||l<=0)return;const{vMin:c,vMax:d,hasValues:p}=gL(n),m=p&&d-c||1,f=s>=MQ;i.font=Jt(PQ),i.textAlign="center",i.textBaseline="middle";for(let g=0;g<r;g++)for(let b=0;b<t;b++){const y=u.left+b*s,E=u.top+g*l,A=((_=n.cells[g])==null?void 0:_[b])??null;if(A===null)i.fillStyle=DQ,i.fillRect(y,E,s,l);else{const T=p?(A-c)/m:0;i.fillStyle=EL(T),i.fillRect(y,E,s,l),f&&(i.fillStyle=T>.55?"#fff":"#333",i.fillText(Zi(A),y+s/2,E+l/2))}i.strokeStyle=dL,i.lineWidth=1,i.strokeRect(y,E,s,l)}i.fillStyle="#4d4d4d",i.font=Jt(kt),i.textBaseline="top";const v=n.xLabels.reduce((g,b)=>Math.max(g,i.measureText(b).width),0)>s-HQ;for(let g=0;g<t;g++){const b=u.left+g*s+s/2,y=u.top+r*l+hL;i.save(),i.textAlign="center",v?(i.translate(b,y),i.rotate(vL),i.textAlign="right",i.fillText(n.xLabels[g],0,0)):i.fillText(n.xLabels[g],b,y),i.restore()}i.fillStyle="#777",i.textAlign="center",i.textBaseline="bottom",i.fillText(n.xAxisLabel,u.left+t*s/2,a-_L),i.fillStyle="#4d4d4d",i.font=Jt(kt),i.textAlign="right",i.textBaseline="middle";for(let g=0;g<r;g++){const b=u.top+g*l+l/2;i.fillText(n.yLabels[g],u.left-mL,b)}i.save(),i.fillStyle="#777",i.textAlign="center",i.textBaseline="top",i.translate(pL,u.top+r*l/2),i.rotate(-Math.PI/2),i.fillText(n.yAxisLabel,0,0),i.restore(),p&&YQ(i,o,u,r*l,c,d)}function EL(e){const n=bS+(qQ-bS)*e,t=yS+(xQ-yS)*e;return`hsl(${FQ}, ${n.toFixed(0)}%, ${t.toFixed(0)}%)`}function Zi(e){return Number.isInteger(e)?e.toString():e.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}function YQ(e,n,t,r,i,o){const a=n-t.right+fL,u=t.top,s=r,l=s/Oh;for(let c=0;c<Oh;c++){const d=1-c/(Oh-1);e.fillStyle=EL(d),e.fillRect(a,u+c*l,bi,l+1)}e.strokeStyle=dL,e.lineWidth=1,e.strokeRect(a,u,bi,s),e.fillStyle="#4d4d4d",e.font=Jt(kt),e.textAlign="left",e.textBaseline="middle",e.fillText(Zi(o),a+bi+vv,u),e.fillText(Zi(i),a+bi+vv,u+s)}const SL="data-outside-click-neutral";function x_(e){return e instanceof Element&&e.closest(`[${SL}]`)!==null}const B_=18,H_=80,JQ=16,Qa=new Set;let wS=!1;function zQ(){wS||(wS=!0,document.addEventListener("click",e=>{if(!x_(e.target))for(const n of[...Qa])document.contains(n.wrapper)?n.wrapper.contains(e.target)||n.close():Qa.delete(n)}))}function QQ(e,n=B_,t=H_){return U_(r=>{r.textContent=e},!1,!0,n,t)}function ut(e,n=B_,t=H_){return U_(r=>{r.innerHTML=e()},!0,!1,n,t)}const wL="help-widget-nested-slot",ZQ="nestedHelp";function eZ(e){return`<span class="${wL}" data-nested-help="${X(e)}"></span>`}function nZ(e,n){for(const t of e.querySelectorAll(`.${wL}`)){const r=t.dataset[ZQ]??"",i=n[r];i!==void 0&&t.appendChild(ut(i))}}function tZ(e,n){return U_(t=>{t.innerHTML=e(),nZ(t,n)},!0,!1,B_,H_)}function U_(e,n,t,r,i){const o=document.createElement("span");o.className="help-widget",o.style.display="inline-block";const a=document.createElement("button");a.className="help-widget-btn",a.type="button",a.textContent="?",a.setAttribute("aria-label","Help"),a.style.width=`${r}px`,a.style.height=`${r}px`,a.style.fontSize=`${Math.round(r*.6)}px`,a.style.lineHeight=`${r}px`;const u=document.createElement("div");u.className="help-widget-popover",u.hidden=!0;const s=document.createElement("button");s.className="help-widget-close",s.type="button",s.textContent="×",s.setAttribute("aria-label","Close");const l=document.createElement("div");l.className=n?"help-widget-body html-content":"help-widget-body",u.appendChild(s),u.appendChild(l),o.appendChild(a),o.appendChild(u),t&&e(l);const c={wrapper:o,close:()=>p()};function d(){e(l),u.hidden=!1,Qa.add(c);const m=window.innerWidth,f=window.innerHeight,h=Math.round(m*i/100),v=f-2*JQ;u.style.width=`${h}px`,u.style.maxHeight=`${v}px`;const _=Math.min(u.offsetHeight,v);u.style.left=`${Math.round((m-h)/2)}px`,u.style.top=`${Math.round((f-_)/2)}px`}function p(){u.hidden=!0,Qa.delete(c)}return a.addEventListener("click",m=>{m.stopPropagation(),u.hidden?d():p()}),s.addEventListener("click",m=>{m.stopPropagation(),p()}),u.addEventListener("keydown",m=>{m.key==="Escape"&&(p(),a.focus({preventScroll:!0}))}),o.addEventListener("keydown",m=>{m.key==="Escape"&&!u.hidden&&(p(),a.focus({preventScroll:!0}))}),zQ(),o}const _v="stats-display-select",AL="Stats display",rZ=["probability","odds"],iZ="Mean, median, and credible interval probabilities displayed as odds",oZ="Computed probabilities displayed as odds";function aZ(e,n,t){return Wn(n)||Qn(e,t)==="sample"}function uZ(e){return e?Object.values(e).some(n=>vu(n.valueRange)):!1}function sZ(e,n,t,r,i){if(!uZ(r)){e.innerHTML="";return}const o=n.ui.probAsOdds,a=rZ.map(l=>`<option value="${l}"${l===o?" selected":""}>${l}</option>`).join(""),u=aZ(n,t,i)?iZ:oZ,s=o==="odds"?`<p class="stats-display-odds-note"><strong>${u}</strong></p>`:"";e.innerHTML=`<div class="stats-display-row"><label for="${_v}" class="${u_}">${AL}</label><select id="${_v}">${a}</select></div>`+s}const $L=1,lZ="shortcutKeys",cZ=new Set(["","date","datetime-local","email","month","number","password","search","tel","text","time","url","week"]),Ht=Object.freeze([{id:"toggle_mnames",description:"Toggle longer meaning-carrying names",short_label:"names",default_shortcut:"n",enabled:!0,in_touch_panel:!0},{id:"goto_calculator",description:"Move to Calculator section",short_label:"calc",default_shortcut:"c",enabled:!0,in_touch_panel:!0},{id:"goto_top",description:"Move to top of page",short_label:"top",default_shortcut:"t",enabled:!0,in_touch_panel:!0},{id:"goto_next_section",description:"Jump to next section",short_label:"section",default_shortcut:"s",enabled:!0,in_touch_panel:!0},{id:"toggle_srcquotes_inlined",description:"Toggle source quotes inline in the text vs. behind a glyph",short_label:"quotes",default_shortcut:"q",enabled:!0,in_touch_panel:!0},{id:"toggle_framing_notes",description:"Show/hide all framing notes",short_label:"framing",default_shortcut:"f",enabled:!0,in_touch_panel:!0},{id:"toggle_long_text_abbrev",description:"Toggle abbreviation of long text",short_label:"abbrev",default_shortcut:"a",enabled:!0,in_touch_panel:!0},{id:"switch_interaction_mode",description:"Cycle interaction mode (Estimate / ReadTrials / Compare), restoring its remembered selection",short_label:"mode",default_shortcut:"m",enabled:!0,in_touch_panel:!0},{id:"toggle_keymap",description:"Show/hide this keymap",short_label:"keymap",default_shortcut:"?",enabled:!0,in_touch_panel:!1}]);function TL(){return Ht}function gv(e){return Ht.find(n=>n.id===e)}function G_(e){const n=e.trim().toLowerCase();return n===""?{ok:!0,key:n}:[...n].length!==$L?{ok:!1,key:n,error:"Use a single key, or clear the field to disable this shortcut."}:{ok:!0,key:n}}function IL(e){if(!e||typeof e!="object"||Array.isArray(e))return{};const n={};for(const[t,r]of Object.entries(e)){if(gv(t)===void 0)continue;if(typeof r!="string"){console.error(`Ignoring non-string shortcut key for ${t}.`);continue}const i=G_(r);if(!i.ok){console.error(`Ignoring invalid persisted shortcut key for ${t}: ${r}`);continue}n[t]=i.key}return n}function LL(){const e={};for(const n of Ht)e[n.id]=n.default_shortcut;return e}function dr(){const e=IL(Ye().shortcutKeys);return{...LL(),...e}}function RL(e,n,t=dr()){if(n==="")return null;for(const r of TL())if(r.id!==e&&t[r.id]===n)return r.id;return null}function dZ(e,n){var u;if(!gv(e))throw new Error(`Unknown shortcut id: ${e}`);const r=G_(n);if(!r.ok)return{ok:!1,key:r.key,error:r.error};const i=dr(),o=RL(e,r.key,{...i,[e]:r.key});if(o)return{ok:!1,key:r.key,conflictId:o,error:`Already assigned to "${((u=gv(o))==null?void 0:u.description)??o}".`};const a=IL(Ye().shortcutKeys);a[e]=r.key,Ui(lZ,pZ(a));for(const s of[...bv])s();return{ok:!0,key:r.key}}const bv=new Set;function fZ(e){return bv.add(e),()=>{bv.delete(e)}}function pZ(e){const n=LL(),t={};for(const[r,i]of Object.entries(e))i!==n[r]&&(t[r]=i);return Object.keys(t).length===0?void 0:t}function mZ(e){if(e.altKey||e.ctrlKey||e.metaKey)return null;const n=e.key.toLowerCase();return[...n].length!==$L?null:n}function hZ(e){if(!(e instanceof HTMLElement))return!1;if(e.isContentEditable)return!0;let n=e;for(;n;){if(n.isContentEditable||n.contentEditable==="true")return!0;const t=n.getAttribute("contenteditable");if(t!==null&&t.toLowerCase()!=="false")return!0;n=n.parentElement}return e instanceof HTMLTextAreaElement?!0:e instanceof HTMLInputElement?cZ.has(e.type.toLowerCase()):!1}let va=new Set;const yv=new Set;function vZ(e){if(!(e.size===va.size&&[...e].every(t=>va.has(t)))){va=new Set(e);for(const t of[...yv])t()}}function CL(e){return!va.has(e)}function _Z(e){return yv.add(e),()=>{yv.delete(e)}}function OL(e,n){if(!CL(n))return!1;const t=e[n];return t?(t(),!0):!1}function gZ(e){const n=t=>{if(hZ(t.target))return;const r=mZ(t);if(r===null)return;const i=dr();for(const o of TL())if(i[o.id]===r){OL(e,o.id)&&t.preventDefault();return}};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)}const j_="touch-shortcut-panel",bZ="touch-shortcut-panel-opener",AS="touch-shortcut-panel-body",yZ="touch-shortcut-labels-toggle",$S="compact",NL="touch-shortcut-btn",EZ="touch-shortcut-btn-keyless",SZ="touch-shortcut-key",wZ="touch-shortcut-word",kL="shortcutId",AZ="touchShortcutPanelCompact",ML="☝︎",$Z="Shortcut buttons",TZ="Shortcut buttons",IZ="?",LZ="Show what each button does",RZ="help-widget-btn";function CZ(){return Ht.filter(e=>e.in_touch_panel)}function OZ(){return Ye().touchShortcutPanelCompact===!0}function NZ(e){Ui(AZ,e?!0:void 0)}function kZ(e,n){const t=document.createElement("button");if(t.type="button",t.className=NL,t.dataset[kL]=e.id,t.setAttribute("aria-label",e.description),t.title=e.description,n==="")t.classList.add(EZ);else{const i=document.createElement("kbd");i.className=SZ,i.textContent=n,t.appendChild(i)}const r=document.createElement("span");return r.className=wZ,r.textContent=e.short_label,t.appendChild(r),t.hidden=!CL(e.id),t}let br=null;function MZ(e){br==null||br();const n=document.createElement("div");n.id=j_,n.setAttribute(SL,"");const t=document.createElement("div");t.id=AS,t.setAttribute("role","group"),t.setAttribute("aria-label",TZ),t.hidden=!0;const r=document.createElement("div");r.className="touch-shortcut-btns";const i=document.createElement("button");i.type="button",i.id=yZ,i.className=RZ,i.textContent=IZ,i.setAttribute("aria-label",LZ);const o=document.createElement("button");o.type="button",o.id=bZ,o.textContent=ML,o.setAttribute("aria-label",$Z),o.setAttribute("aria-controls",AS);const a=()=>{const p=dr();r.replaceChildren(...CZ().map(m=>kZ(m,p[m.id]??"")))},u=p=>{t.hidden=!p,o.setAttribute("aria-expanded",String(p))},s=p=>{n.classList.toggle($S,p),i.setAttribute("aria-pressed",String(!p))};r.addEventListener("click",p=>{const m=p.target instanceof Element?p.target.closest(`.${NL}`):null,f=m==null?void 0:m.dataset[kL];f!==void 0&&OL(e,f)}),o.addEventListener("click",()=>u(t.hidden)),i.addEventListener("click",()=>{const p=!n.classList.contains($S);NZ(p),s(p)}),a(),u(!1),s(OZ()),t.appendChild(r),t.appendChild(i),n.appendChild(t),n.appendChild(o),document.body.appendChild(n);const l=fZ(a),c=_Z(a),d=()=>{l(),c(),n.remove(),br===d&&(br=null)};return br=d,d}const PZ=[{aid:"alpoker"},{aid:"mcovidB6",family:"mcovidB"},{aid:"mcovidB13",family:"mcovidB"},{aid:"mcovidB14",family:"mcovidB"},{aid:"simfix",family:"sim"},{aid:"simBetter",family:"sim"},{aid:"bbdoom3",family:"bbdoom"}],DZ={bbdoom:{sequence:[{aid:"bbdoom1",version:"0.1.0"},{aid:"bbdoom2",version:"0.2.0"},{aid:"bbdoom3",version:"1.0.0"}]},"cov-ATC":{sequence:[{aid:"covid0",version:"1.0.0"},{aid:"covatc1",version:"2.0.0"}]},mcovidB:{sequence:[{aid:"mcovidB1",version:"0.0.0"},{aid:"mcovidB2",version:"0.0.1"},{aid:"mcovidB3",version:"0.0.2"},{aid:"mcovidB4",version:"0.0.3"},{aid:"mcovidB5",version:"0.0.4"},{aid:"mcovidB6",version:"1.0.0"},{aid:"mcovidB7",version:"2.0.0"},{aid:"mcovidB8",version:"2.1.0"},{aid:"mcovidB9",version:"2.2.0"},{aid:"mcovidB10",version:"2.3.0"},{aid:"mcovidB11",version:"3.0.0"},{aid:"mcovidB12",version:"3.1.0"},{aid:"mcovidB13",version:"4.0.0"},{aid:"mcovidB14",version:"5.0.0"},{aid:"mcovidB15",version:"6.0.0"}]},mcovidA:{sequence:[{aid:"mcovidA",version:"0.0.0"},{aid:"mcovidA2",version:"0.0.1"}]},eggs:{sequence:[{aid:"eggsFH1",version:"0.1.0"},{aid:"eggsFH2",version:"0.2.0"}]},lhc:{sequence:[{aid:"lhcFXH1",version:"1.0.0"},{aid:"lhcFXH_SolMax",version:"2.0.0"},{aid:"lhcFXH_SolMax_Ultra",version:"3.0.0"}]},aminds:{sequence:[{aid:"cmindsBareParam1",version:"1.0.0"},{aid:"aminds2",version:"2.0.0"},{aid:"aminds3",version:"3.0.0"}]},sim:{sequence:[{aid:"simfix",version:"0.1.0"},{aid:"simBetter",version:"0.2.0"}]},testE:{sequence:[{aid:"testprob_preE",version:"pre"},{aid:"testprob_postE",version:"post"},{aid:"testprob_postE_extra",version:"postextra"}]}},FZ={navList:PZ,families:DZ},qZ="../../data/",xZ="/index.ts",PL=Object.assign({"../../data/alpoker/index.ts":()=>Vt(()=>import("./index-BZ_bB1m_.js"),[]),"../../data/bbdoom3/index.ts":()=>Vt(()=>import("./index-B2DPShP4.js"),[]),"../../data/mcovidB13/index.ts":()=>Vt(()=>import("./index-DwfwajkI.js"),[]),"../../data/mcovidB14/index.ts":()=>Vt(()=>import("./index-C9Cwsiwi.js"),[]),"../../data/mcovidB6/index.ts":()=>Vt(()=>import("./index-CMxZ0n6Q.js"),__vite__mapDeps([0,1])),"../../data/simBetter/index.ts":()=>Vt(()=>import("./index-FLPvizaX.js"),[]),"../../data/simfix/index.ts":()=>Vt(()=>import("./index-InWLkXXw.js"),__vite__mapDeps([2,1]))});function V_(e){return`${qZ}${e}${xZ}`}function DL(e){return PL[V_(e)]}function W_(e){return V_(e)in PL}const gs=FZ,FL=(()=>{const e=new Map;for(const[n,{sequence:t}]of Object.entries(gs.families))t.forEach((r,i)=>e.set(r.aid,{family:n,index:i}));return e})();function BZ(){return gs.navList}function HZ(){const e={};for(const[n,{sequence:t}]of Object.entries(gs.families))e[n]=t;return e}function qL(e){var n;return(n=FL.get(e))==null?void 0:n.family}function TS(e,n,t,r){for(let i=n+t;i>=0&&i<e.length;i+=t){const o=e[i].aid;if(r(o))return o}}function xL(e,n=W_){const t=FL.get(e);if(t===void 0)return;const r=gs.families[t.family].sequence,i={version:r[t.index].version},o=TS(r,t.index,-1,n);o!==void 0&&(i.prev=o);const a=TS(r,t.index,1,n);return a!==void 0&&(i.next=a),i}const UZ={showGlobalProseFoldControls:e=>e.bodyHasProseFolds,showExampleClassification:e=>e.bodyHasExampleLists,plaincodeEvalTimeoutMs:e=>e.hasCparams};function GZ(e,n){const t=UZ[e];return t===void 0||t(n)}const Ai="data-pref-row";function jZ(e,n){for(const t of e.querySelectorAll(`[${Ai}]`)){const r=t.getAttribute(Ai);r!==null&&(t.hidden=!GZ(r,n))}}const It={point:"point",bounds:"bounds",sample:"distr"},VZ="Response",WZ="timeline-nav",K_="interaction-mode-selector",Ev="data-interaction-mode",X_="yours-fixfree-toggle",KZ="jprob-selector",Y_="sticky-bar",BL="--sticky-bar-h",bs="options-controls",HL="options-expand-btn",UL="options-panel",eo="options-panel-open",GL="visible",jL="⚙︎",IS="Settings",VL="jprob-selector-select",WL="/",KL="error-console-btn",XL="view-url-btn";function XZ(e,n,t,r,i,o){tee(e),YZ(i),zZ(e.ui.estimateQueryMode,o),JL(e,t),nee(n),eee(r)}function YZ(e){const n=document.getElementById(K_);if(n){if(e.available.length<=1){n.hidden=!0,n.innerHTML="";return}n.hidden=!1,n.innerHTML=Ct.filter(t=>e.available.includes(t)).map(t=>{const r=t===e.active,i=r?t:Ux[t];return`<button type="button" class="atog-btn interaction-mode-btn${r?" active":""}" ${Ev}="${t}" aria-pressed="${r}" title="${X(`${t} — ${Gx[t]}`)}">${i}</button>`}).join("")}}function JZ(){const e=document.getElementById(K_);return e!==null&&!e.hidden}function zZ(e,n){const t=document.getElementById(X_);if(t){if(!n){t.hidden=!0,t.innerHTML="";return}t.hidden=!1,t.innerHTML=ST(e)}}function QZ(){const e=document.getElementById(X_);return e!==null&&!e.hidden}function ZZ(e,n,t,r,i=W_){var l;const o=new Set(e.map(c=>c.aid).filter(i)),a=[],u=new Set;let s=t;for(const c of e){const d=c.family;if(d===void 0){o.has(c.aid)&&a.push({label:c.aid,value:c.aid});continue}if(u.has(d))continue;u.add(d);const m=(l=[...n[d]??[]].reverse().find(f=>o.has(f.aid)))==null?void 0:l.aid;m!==void 0&&(a.push({label:d,value:m}),d===r&&(s=m))}return{options:a,selectedValue:s}}function eee(e,n=BZ(),t=HZ(),r=W_){const i=document.getElementById(KZ);if(!i)return;const{options:o,selectedValue:a}=ZZ(n,t,e.currentAid,e.currentFamily,r),u=o.some(c=>c.value===a);i.hidden=!1;const s=u?"":'<option value="" disabled selected>switch</option>',l=o.map(c=>`<option value="${c.value}"${c.value===a?" selected":""}>${c.label}</option>`).join("");i.innerHTML=`<select id="${VL}" class="jprob-selector-select" title="Switch to another problem">${s}${l}<option value="${WL}">≣ Index</option></select>`}function nee(e){const n=document.getElementById(WZ);if(!n)return;const{prev:t,next:r,version:i}=e;if(t===void 0&&r===void 0&&i===void 0){n.hidden=!0,n.innerHTML="";return}n.hidden=!1;const o=[];t!==void 0&&o.push(`<button class="timeline-nav-btn" data-timeline-target="${t}" title="Previous version">◀</button>`),o.push(`<span class="timeline-version">${i??""}</span>`),r!==void 0&&o.push(`<button class="timeline-nav-btn" data-timeline-target="${r}" title="Next version">▶</button>`),n.innerHTML=o.join("")}function tee(e){const n=document.getElementById(bs);if(!n)return;const t=n.classList.contains(eo);let r=`<button class="options-expand-btn${t?" active":""}" id="${HL}" type="button" aria-label="${IS}" title="${IS}" aria-expanded="${t}">${jL}</button>`;r+=`<div class="${UL}${t?` ${GL}`:""}">`,r+=uee(e),r+=`<div class="options-buttons-row"><button id="${XL}" class="g-btn" title="Copy a link to this view (and put it in the address bar)">url</button> <button id="keymap-btn" class="g-btn">keymap</button> <button id="${KL}" class="g-btn">errors</button></div>`,r+='<div class="options-buttons-row options-buttons-row-continued"><button id="save-all-data-btn" class="g-btn">save data</button> <button id="load-all-data-btn" class="g-btn">load data</button></div>',r+="</div>",n.innerHTML=r,t&&n.classList.add(eo)}function ree(e){const n=document.getElementById(bs);n&&jZ(n,e)}function iee(){const e=document.getElementById(bs);return(e==null?void 0:e.classList.contains(eo))??!1}function YL(e){const n=document.getElementById(bs);if(!n||n.classList.contains(eo)===e)return;n.classList.toggle(eo,e);const t=n.querySelector(".options-expand-btn"),r=n.querySelector(`.${UL}`);t&&(t.classList.toggle("active",e),t.setAttribute("aria-expanded",String(e))),r&&r.classList.toggle(GL,e)}function oee(){YL(!iee())}function LS(){YL(!1)}function JL(e,n){const t=document.getElementById("response-type-toggle");t&&zL(t,e,n,null)}function zL(e,n,t,r){const i=[],o=l$(t,n.ui.inputMode);let a=0;for(const[s,l]of Object.entries(It)){const c=s===o?" active":"",d=t[s];d&&a++;const p=d?"":" hidden";i.push(`<button class="atog-btn${c}${p}" data-mode="${s}">${l}</button>`)}const u=r===null?"":`<span class="${u_}">${r}</span>`;e.innerHTML=u+i.join(""),e.hidden=a<2}function Kt(e){return`pref-${e}`}const aee=new Set(["inputMode","probAsOdds","densityScale"]);function uee(e){const n=[];for(const t of Nu)if(!aee.has(t.id)){if(t.type==="boolean"){const r=t.id,i=e.ui[r]?" checked":"";n.push(`<div class="options-pref-row" ${Ai}="${t.id}"><label for="${Kt(t.id)}" class="option-label">${t.description}</label><input id="${Kt(t.id)}" class="option-checkbox pref-checkbox" type="checkbox" data-pref="${t.id}"${i}></div>`)}else if(t.type==="integer"){const i=Ye()[t.id]??t.default,o=t.min===void 0?"":` min="${t.min}"`,a=t.step===void 0?"":` step="${t.step}"`;n.push(`<div class="options-pref-row" ${Ai}="${t.id}"><label for="${Kt(t.id)}" class="option-label">${t.description}</label><input id="${Kt(t.id)}" class="pref-number-input" type="number" data-pref-int="${t.id}" value="${i}"${o}${a}></div>`)}else if(t.type==="enum"){const r=Ye()[t.id]??t.default,i=t.values.map(o=>`<option value="${o}"${o===r?" selected":""}>${o}</option>`).join("");n.push(`<div class="options-pref-row" ${Ai}="${t.id}"><label for="${Kt(t.id)}" class="option-label">${t.description}</label><select id="${Kt(t.id)}" class="pref-select" data-pref-enum="${t.id}">${i}</select></div>`)}}return n.join("")}const no=`<b>${jL} settings</b>`,RS="examples, framing notes and the sections of text under a heading",CS="joint_dependence";function J_(){const e=i_[CS];if(e===void 0)throw new Error(`shared_text.json is missing section '${CS}' (regenerate via \`just gen\`)`);return e}const QL="joint_dependence",see={[QL]:J_};function lee(){return"<p>Version numbers are semantic versioning inspired, incremented according to:</p><ul><li><b>1st/major</b>: Improved and clean enough over previous major version to run a full set of AI trials.</li><li><b>2nd/minor</b>: Improvements/fixes affecting semantics</li><li><b>3rd/patch</b>: Everything else</li></ul>"}function Sv(e){return e?`<b>${x(e)}</b>`:"<i>(unbound)</i>"}const cee={toggle_mnames:"toggle between short and long names for some defined entities",goto_top:"jump to top of the page",goto_calculator:"jump to the Calculator section",switch_interaction_mode:"switch between <b>Yours</b> / <b>Adhoc</b> / <b>AI results</b> modes, restoring the last viewed preset in each",toggle_srcquotes_inlined:`toggle source quotes inlined in the text (mirroring what AI agents see when source quotes are enabled) vs. accessible by clicking the <button class="srcquote-glyph" type="button" tabindex="-1">❝</button> buttons. This is a view setting only — it never changes what a preset's estimator actually read`,toggle_framing_notes:"show or hide all framing notes at once, without disturbing which ones the problem itself enables",goto_next_section:"jump to the next top-level section, wrapping from the last back to the first",toggle_long_text_abbrev:"abbreviate or unabbreviate every long block of text at once — the same switch as the <b>Abbreviate long text</b> preference",toggle_keymap:"show or hide the keymap, where each of these keys can be changed"};function dee(){return`<li>When relevant (not all Adhoc / AI-results presets have all response modes), you can switch between estimation response modes <b>${It.point}</b> | <b>${It.bounds}</b> | <b>${It.sample}</b>. For each subjective variable (the cards in the <b>Estimation</b> section) they mean:<ul><li><b>point</b>: A single real value. Use for low-effort estimation.</li><li><b>bounds</b>: A real interval given as <code>low high</code>. Use to incorporate flat uncertainty, without any sampling interpretation. The Calculator will show the interval each compute formula can range over, given your intervals: "≅ [low, high]" means the shown interval is exactly that range; "⫇ [low, high]" means it is an outer enclosure — the true range may be narrower, but never wider. Displayed endpoints are rounded outward, so rounding also never narrows a shown interval.</li><li><b>${It.sample}</b>: A belief distribution; Monte Carlo sampling evaluates. This is the advanced mode. The ${no} dropdown on the left side of the sticky bar has parameters for controlling the number of iterations, in case the defaults make your experience too slow. When in distribution mode, click the help icon in any Estimation card to learn what you can put in the input fields. The Calculator section has a redundant single input box for the same data; useful for copy-pasting from a read-only Adhoc or AI result.</li></ul></li>`}function ZL(){return"<b>fix</b> requires setting each parameter to one of its allowed values in the <b>Parameters</b> section, and your estimates apply to that one setting. <b>free</b> opens a code editor in which you write a function giving your estimates for every allowed parameter combination at once."}function fee(){return Ct.map(e=>`<b>${e}</b>`).join(" | ")}function pee(e,n){const t=dr(),r=[];n.interactionModeSelector&&r.push(`<p>The ${fee()} buttons switch between the three things you can do here; the ${Sv(t.switch_interaction_mode)} shortcut cycles through the same modes, and each remembers what you last had selected in it. The selected button shows its full name, the others their initial.</p><ul><li><b>Estimate</b>: explore the problem using your own subjective estimations.</li><li><b>ReadTrials</b>: read one result set — methodical AI trials, or one adhoc response — either as the mixture of its trials' belief distributions or as one trial. Which result set is the side panel at the right edge of the page; which of its trials is the selector under the sticky bar.</li><li><b>Compare</b>: compare results across model configurations.</li></ul>`),r.push("<h4>Sticky bar</h4><ul>"),r.push("<li>On the far right of the sticky bar, there's a dropdown for switching to a different judgement problem (hidden when there are no others).</li>"),qL(e.aid)!==void 0&&r.push("<li>This judgement problem is part of a development timeline exposition sequence. The ◀ and/or ▶ buttons move backward and forward in the timeline.</li>"),n.yoursFixFreeToggle&&r.push(`<li><b>fix</b> | <b>free</b>: ${ZL()}</li>`),n.proseFoldControls&&r.push(`<li>The <b>prose</b> buttons act on ${RS} together. <b>open</b> unfolds all of them and <b>close</b> folds all of them, and both are remembered like folding each one yourself. <b>peek</b> temporarily unfolds all of them, and <b>unpeek</b> returns each to where you had it.</li>`),n.proseFoldControlsOffInSettings&&r.push(`<li>Turn on <b>${x(Hi("showGlobalProseFoldControls"))}</b> in the ${no} dropdown for sticky-bar buttons that fold or unfold ${RS} all at once.</li>`),r.push(dee()),r.push("</ul>"),r.push(`<h4>Keyboard shortcuts</h4><p>There are just a few, which you can customize in the keymap: its own shortcut is in the list below, and so is a <b>keymap</b> button in the sticky bar's ${no} dropdown. On a touch screen, the <b>${ML}</b> button at the bottom right opens the same actions as buttons. Currently:</p>`),r.push("<ul>");for(const i of Ht){const o=cee[i.id]??x(i.description);r.push(`<li>${Sv(t[i.id])} : ${o}</li>`)}return r.push("</ul>"),r.join("")}function mee(){const e=Object.values(Nt).filter(i=>!i.hasTruncWindow),n=Object.entries(Nt).filter(([,i])=>i.hasTruncWindow),t=e.map(i=>`<li><code>${x(i.signature)}</code> — ${x(i.note)}</li>`),r=n.map(([i])=>`<code>${x(i)}(…)</code>`);return`<p>Enter your belief distribution over this variable in one of three forms:</p><ul><li><b>Point mass</b>: <code>pointmass(x)</code> — all probability mass at <code>x</code>.</li><li><b>Distribution family</b> (preferred when one fits your belief), e.g. <code>lognormal(-4.2, 1.3)</code>. Available families:<ul>${t.join("")}</ul>Every family is automatically truncated to the variable's allowed range and renormalized, so e.g. <code>normal(mu, sigma)</code> on a probability variable means a normal truncated to [0, 1]. The ${r.join(", ")} variants take two extra trailing arguments <code>lo, hi</code> — an explicit truncation window — for when your belief has its own truncation. Most important for a heavy-tailed family on an unbounded-range variable (e.g. a Student-t on a log-odds variable), where automatic truncation is a no-op.</li><li><b>Piecewise linear density</b> (fully general): space-separated pairs <code>(x1 y1) (x2 y2) …</code>, minimum 2. x values are sorted positions spanning your uncertainty, anywhere in the variable's allowed range; y values are unnormalized density heights in [0, 1].</li></ul>`}function hee(e,n,t,r){const i=dr(),o=[];return o.push("<p><b>This help text changes based on which interaction mode you are in.</b></p>"),n.kind==="methodical"&&(o.push("<p>To see detailed results for the selected result set, click the <b>pin</b> checkbox.</p>","<p>An AI's plain text reasoning about one subjective variable shows in that variable's own card, and its notes about the response as a whole in the <b>Response Notes</b> section. Both show the trial the cards' <b>trial</b> selector points at.</p>","<p>To read the code that trial wrote, click <b>View code</b> beside the <b>Estimation</b> heading.</p>"),e.form.length>0&&o.push("<p>To explore compute formula results other than the main conclusion, there's a drop down below next to the <b>formulas</b> / <b>raw responses</b> radio buttons.</p>",`<p>Use the <b>${AL}</b> dropdown to switch between seeing probabilities as percentages or as odds.</p>`)),tt(n)==="plainnum"&&OT(e,t)&&o.push(`<p>To see compute formula results other than the main conclusion, choose one from the <b>${TT}</b> dropdown.</p>`),e.has_cparams()&&n.kind==="yours"&&o.push(`<p><b>fix</b> | <b>free</b> toggle (next to <b>Yours</b>): ${ZL()}</p>`),n.kind==="yours"&&n.queryMode==="plaincode"&&r&&o.push(`<p>Your function may also return <code>lloads</code> beside <code>point</code>, <code>bounds</code> and <code>sample</code>: a joint-dependence specification (latent factor copula) between the variables, stated separately for each parameter combination and used only in <b>${It.sample}</b> mode. Leave it out for independent variables. The starter code ends with a commented-out example. What a specification means: ${eZ(QL)}</p>`),n.kind==="yours"?o.push(`<p>To start from someone else's response, switch to <b>ReadTrials</b> (${Sv(i.switch_interaction_mode)} shortcut), choose a result set in the side panel at the right edge of the page, and find the <b>Copy to Estimate</b> button.</p><p>From scratch: Suggest starting with <b>point</b> response mode, then try <b>bounds</b>. If you're experienced or courageous, try <b>${It.sample}</b> and start with <code>tri(low, peak, hi)</code> or <code>uniform(low, high)</code> lines. For full syntax of distribution inputs accepted, find the help icon in any of <b>Estimation</b> cards above.</p>`):n.kind==="adhoc"&&o.push(`<p>To start your own estimation from this response, find the <b>Copy to Estimate</b> button below.</p><p>For advanced users, in <b>${It.sample}</b> mode, there is a second type of <b>Copy to Estimate</b> button inside the <b>Joint-dependence specification</b> section (latent factor copula), when the entry states one.</p>`),o.join("")}function vee(e){const n=x(Hi("mcItersPerClickPerPlot")),t=x(Hi("mcItersInitialPerPlot")),r=e.itersPerTarget.toLocaleString(),i=["<p>The <b>+</b> button above pools another block of Monte&nbsp;Carlo draws into this plot and redraws it. Draws accumulate — nothing already sampled is thrown away — so the plot starts cheap and you click until its shape stops moving.</p>"];return e.targetCount===1?i.push(`<p>Each click adds <b>${r}</b> draws to this plot`+(e.pooledSampleCount===null?".</p>":` (pooled so far: ${e.pooledSampleCount.toLocaleString()}).</p>`)):i.push(`<p>Each click adds <b>${r}</b> draws to <i>each</i> of the ${e.targetCount.toLocaleString()} plotted points/cells. The setting is a budget for the whole plot, divided equally among the targets it draws, so a plot over a wider axis gets fewer draws per point per click than a single density does — same cost per click, spread thinner.</p>`),e.pooledSampleCount===null?i.push("<p>This plot's button stays yellow: it displays a mean per point/cell rather than a distribution, so the green convergence indicator — which reads a distribution's quantiles — does not apply. Means converge as 1/&radic;n; a few clicks go a long way.</p>"):e.converged?i.push(`<p><b>Green</b>: with ${e.convergedMinSamples.toLocaleString()} or more pooled draws, every quantile of the displayed distribution is pinned to within ${e.displayEpsilon} probability mass at ${e.confidencePercent}% confidence (a distribution-free Dvoretzky&ndash;Kiefer&ndash;Wolfowitz bound). Green is not a stop sign: further clicks keep sharpening the curve.</p>`):i.push(`<p><b>Yellow &rarr; green</b>: the button turns green at ${e.convergedMinSamples.toLocaleString()} pooled draws, the point where every quantile of the displayed distribution is pinned to within ${e.displayEpsilon} probability mass at ${e.confidencePercent}% confidence (a distribution-free Dvoretzky&ndash;Kiefer&ndash;Wolfowitz bound).</p>`),i.push(`<p>To change how much a click adds, open ${no} in the bar at the top of the page and edit <b>${n}</b>. <b>${t}</b> sets what a plot draws before you click at all.</p>`),i.join("")}const _ee={equal_per_trial:"Each contributing trial has <b>equal weight</b>, however many trials its model configuration ran.",equal_per_config:"Each model configuration has <b>equal weight</b>, shared equally among its contributing trials."};function eR(){return`<p><b>mix</b> is the mixture of the selected trials' stated belief distributions. ${_ee[$$]}</p><p>A draw from it picks a contributing trial, with its weight as the probability, and then samples that trial's stated distribution. For a formula, the draw samples all of that one trial's quantities together, respecting its stated dependence between them.</p><p>It is a mixture of stated distributions, not the distribution of the trials' point estimates: two trials that each state a narrow distribution around different values mix into a two-peaked one, not a narrow one in between.</p><p>A trial contributes only where it answered. One that gave no response at a parameter combination, or stated no distribution for a quantity, is left out there and never stood in for by its point value or bounds; the view says how many trials contribute wherever that is not all of them.</p><p>In the point view, mix is the same weighted average of the trials' point values; where bounds are offered for several trials, it is the envelope of their bounds.</p>`}function gee(e){const n=x(Hi("mcItersPerClickPerPlot")),t=x(Hi("mcItersInitialPerPlot")),r=`<b>${e.initialIters.toLocaleString()}</b>`,i=e.stored==="mean"?`<p>The mean beside this plot is <b>mixed from</b> the means the result generator stored for each model configuration in this result set. A mean is all that can be mixed exactly that way, so there is no median, interval or curve here yet. Nothing is being sampled here.</p><p>The <b>&#9654;</b> button above runs ${r} live Monte&nbsp;Carlo draws in your browser from the same estimates and plots them, with their own summary; the stored mean stays on screen so you can compare the numbers. `:e.stored==="curve"?`<p>This plot is drawn from a <b>precomputed</b> curve: the result generator sampled it once, with a far larger draw budget than a browser would spend, and stored the shape. Nothing is being sampled here.</p><p>The <b>&#9654;</b> button above runs ${r} live Monte&nbsp;Carlo draws in your browser from the same estimates, and draws them on the same axis beside the stored curve; both summaries stay on screen so you can compare the numbers. `:`<p>The numbers beside this plot are <b>precomputed</b>: the result generator sampled this quantity once, with a far larger draw budget than a browser would spend, and stored its summary, but no curve to draw. Nothing is being sampled here.</p><p>The <b>&#9654;</b> button above runs ${r} live Monte&nbsp;Carlo draws in your browser from the same estimates and plots them; the precomputed summary stays on screen so you can compare the numbers. `,o=e.stored==="curve"?"<p>Expect the live curve to be the rougher of the two at first — it is the same distribution with fewer draws behind it. ":"<p>Expect the live numbers to stray a little from the precomputed ones at first — they describe the same distribution with fewer draws behind them. ";return i+`The button then becomes the ordinary <b>+</b> accumulate control, adding <b>${e.itersPerTarget.toLocaleString()}</b> draws per click until the live shape stops moving.</p>`+o+`A difference that survives many clicks is worth a closer look.</p><p>Both draw counts are settings: open ${no} in the bar at the top of the page and edit <b>${t}</b> and <b>${n}</b>.</p>`}const to="mc-accumulate-btn",OS="Sample",NS="Sample more",nR="mc-activate-live-btn",Za="mc-accumulate-help",bee="mc-converged",_a=.05,$i=.01;function yee(e){if(!Number.isInteger(e)||e<1)throw new Error(`distributionCount must be a positive integer, got ${e}`);return Math.ceil(Math.log(2*e/_a)/(2*$i*$i))}const tR=16;function ys(e,n,t,r,i=1){var d,p;const o=e.parentElement;if(!(o!=null&&o.classList.contains("resizable-canvas-wrapper"))){console.warn("attachMcAccumulateButton: canvas is not wrapped by makeResizable");return}(d=o.querySelector(`.${to}`))==null||d.remove(),(p=o.querySelector(`.${Za}`))==null||p.remove();const a=r.itersPerTarget,u=yee(i),s=t!==null&&t>=u,l=document.createElement("button");l.className=to+(s?` ${bee}`:""),l.dataset.mcPoolToken=n,l.textContent="+",l.setAttribute("aria-label",NS),l.title=`${NS}: `+(t===null?`pool ${a.toLocaleString()} more MC samples into every plotted point/cell.`:`pool ${a.toLocaleString()} more MC samples into this plot (n=${t.toLocaleString()}). `+(s?`Green: every displayed quantile is within ${$i} probability mass at ${(1-_a)*100}% confidence; further clicks keep sharpening.`:`Turns green when every displayed quantile is within ${$i} probability mass at ${(1-_a)*100}% confidence.`)),o.appendChild(l);const c=ut(()=>vee({itersPerTarget:a,targetCount:r.targetCount,pooledSampleCount:t,converged:s,convergedMinSamples:u,displayEpsilon:$i,confidencePercent:(1-_a)*100}),tR);c.classList.add(Za),o.appendChild(c)}function Eee(e,n,t,r,i){var s,l;const o=e.parentElement;if(!(o!=null&&o.classList.contains("resizable-canvas-wrapper"))){console.warn("attachLiveMcActivationButton: canvas is not wrapped by makeResizable");return}(s=o.querySelector(`.${to}`))==null||s.remove(),(l=o.querySelector(`.${Za}`))==null||l.remove();const a=document.createElement("button");a.className=`${to} ${nR}`,a.dataset.mcLiveActivationToken=n,a.textContent="▶",a.setAttribute("aria-label",OS),a.title=`${OS}: run ${t.toLocaleString()} live Monte Carlo draws in your browser and `+(i==="curve"?"overlay them on the precomputed curve.":i==="summary"?"plot them beside the precomputed numbers.":"plot them beside the stored mean.")+" Nothing is sampled until you ask.",o.appendChild(a);const u=ut(()=>gee({initialIters:t,itersPerTarget:r.itersPerTarget,stored:i}),tR);u.classList.add(Za),o.appendChild(u)}const rR="mixture-coverage",iR="show-single-trial-view",See="Show single trial view",oR="data-record-trial-index",aR="data-cparams";function uR(e,n){return e>=n?null:`${e} of ${n} trials contribute here`}function sR(e){const n=e.contributingRecordTrialIndices,t=uR(n.length,e.recordTrialCount);if(t===null)return"";const r=n.length===1?` <button type="button" class="${iR}" ${oR}="${n[0]}"`+(e.cparams===void 0?"":` ${aR}="${X(JSON.stringify(e.cparams))}"`)+`>${See}</button>`:"";return`<span class="${rR}">${t}.${r}</span>`}const wee=256,ft=new Map,eu=new Map;let Aee=1;function $ee(e){const n=Bt(e),t=ft.get(n);if(t!==void 0)return ft.delete(n),ft.set(n,t),t;const r={token:`mclive-${Aee++}`,activated:!1};for(ft.set(n,r),eu.set(r.token,r);ft.size>wee;){const i=ft.keys().next().value;eu.delete(ft.get(i).token),ft.delete(i)}return r}function Tee(e){const n=eu.get(e);return n===void 0?!1:(n.activated=!0,!0)}function Iee(){ft.clear(),eu.clear()}const Lee="no finite mean (the tail is too heavy for one)";function ro(e,n,t,r,i){return'<div class="result-main">'+(i===""?"":`${i} = `)+`mean ≈ <span class="hl">${Pe(e.mean,n,t,r)}</span>, median ≈ <span class="hl">${Pe(e.median,n,t,r)}</span></div><div class="result-detail">90% interval: [${Pe(e.p5,n,t,r)}, ${Pe(e.p95,n,t,r)}]</div>`}const z_="Mean mixed from stored means";function wv(e,n,t,r){return'<div class="result-main">'+(r===""?"":`${r} = `)+`mean ≈ <span class="hl">${Pe(e,n,t,"monte-carlo")}</span></div>`}function Ree(e,n,t){return{valueHtml:`mean <span class="derived-value">${Pe(e.mean,n,t,"monte-carlo")}</span>, median <span class="derived-value">${Pe(e.median,n,t,"monte-carlo")}</span>`,detailHtml:`<span class="derived-detail">· 90% interval [${Pe(e.p5,n,t,"monte-carlo")}, ${Pe(e.p95,n,t,"monte-carlo")}]</span>`}}function Cee(e,n,t,r){const i=a=>Pe(a,n,t,"deterministic"),o=e.mean===null?`<span class="hl">${Lee}</span>`:`mean = <span class="hl">${i(e.mean)}</span>`;return'<div class="result-main">'+(r===""?"":`${r}: `)+`${o}, median = <span class="hl">${i(e.median)}</span></div><div class="result-detail">90% interval: [${i(e.p5)}, ${i(e.p95)}]</div>`}const Oee=new mn({html:!1,linkify:!0,breaks:!0}),Av="estimator-text";function lR(e){try{return Oee.render(e)}catch{return x(e)}}function cR(e,n){e.innerHTML=lR(n)}function dR(e,n){const t=document.createElement("div");return t.classList.add(Av,n),cR(t,e),t}const fR={specPointerHtml:`<div class="lloads-spec-pointer">Each trial's joint-dependence specification is shown in <a href="#${Fe.ESTIMATION}-section">Estimation</a>.</div>`,couplingIrrelevantNoteHtml:'<div class="code-info">The stated dependence below does not change this view: coupling describes how responses move together, not how any one of them is distributed on its own.</div>'},Nee={specPointerHtml:`<div class="lloads-spec-pointer">Each trial's joint-dependence specification is shown in ReadTrials.</div>`,couplingIrrelevantNoteHtml:'<div class="code-info">The stated dependence does not change this view: coupling describes how responses move together, not how any one of them is distributed on its own.</div>'},kee="lloads-spec-intro",pR="lloads-spec-help-slot";function Mee(){return`<div class="${kee}"><span class="${pR}"></span><p>A latent is one shared uncertainty that can move two or more quantities together, or in opposite directions.</p></div>`}function Q_(e){for(const n of e.querySelectorAll(`.${pR}`))n.childElementCount>0||n.appendChild(ut(J_))}function Z_(e,n,t,r={}){if(e===void 0)return{hasDependence:!1,specHtml:""};const i=n.svar_entries().map(s=>s.bareName);let o,a=!1;if(e===null)o='<div class="lloads-independent-trial">No named latents; sampled independently.</div>';else{const s=ko(e,i);if(s!==null)throw new Error(s);a=os(e),o=Pee(e,i,n,t,r.offerCopyToYours??!1)}const u=a&&!(r.keepFolded??!1);return{hasDependence:a,specHtml:`<details class="lloads-spec-view"${u?" open":""}><summary>Joint-dependence specification</summary><div class="lloads-spec-body">${Mee()}${o}</div></details>`}}function mR(e,n){const t=n.svar_entries().map(i=>i.bareName);let r=!1;for(const i of e){if(i.lloads===null||i.lloads===void 0)continue;const o=ko(i.lloads,t);if(o!==null)throw new Error(o);r||(r=os(i.lloads))}return r}function Pee(e,n,t,r,i){const o=so(t);if(o.length!==n.length)throw new Error(`joint-dependence disclosure has ${n.length} eligible variables but ${o.length} display labels`);const a=new Map(n.map((s,l)=>[s,nt(o[l],r)])),u=e.latents.map(s=>{const l=Object.entries(s.loadings).map(([c,d])=>{const p=a.get(c);if(p===void 0)throw new Error(`joint-dependence disclosure has no display label for loaded variable ${c}`);return`<li><span class="lloads-svar-label">${p}</span>: <span class="lloads-loading">${Fee(d)}</span></li>`}).join("");return`<article class="lloads-latent"><div class="lloads-latent-name ${Av}">${x(s.name)}</div><div class="lloads-latent-description ${Av}">${lR(s.description)}</div><ul class="lloads-loadings">${l}</ul></article>`}).join("");return Dee(e,i)+u}function Dee(e,n){return n?`<div class="lloads-copy-row"><button class="copy-to-yours-btn lloads-copy-to-yours-btn" type="button" data-lloads-spec="${X(JSON.stringify(e))}" title="Copy this joint-dependence specification into your editable Estimate inputs">Copy to Estimate</button></div>`:""}function Fee(e){if(Object.is(e,-0)||e===0)return"0";const n=Math.abs(e).toPrecision(6).replace(/\.?0+$/,"");return e>0?`+${n}`:`−${n}`}function hR(e){switch(e){case"series":return{independent:{color:Tz,bandFill:Iz},joint:{color:KI,bandFill:XI}};case"stored":return{independent:{color:Ya,bandFill:null},joint:{color:Ya,bandFill:YI}};case"live":return{independent:{color:Ja,bandFill:null},joint:{color:Ja,bandFill:JI}}}}const e3="Independent",n3="Stated joint";function vR(e){const n=(t,r)=>{switch(r){case"series":return t;case"stored":return`${t} (precomputed)`;case"live":return`${t} (live MC)`}};return e.flatMap(t=>{const r=hR(t);return[{label:n(e3,t),color:r.independent.color,dashed:!0},{label:n(n3,t),color:r.joint.color,dashed:!1}]})}function $v(e){const{comparison:n,valueRange:t,statsDisplay:r,targetLabelHtml:i}=e,o=e.canvasId===void 0?"":I_(e.canvasId,e.legend??vR(["series"]));return`<div class="result-label">Joint-dependence comparison (${e.provenanceDetail})</div><div class="dependence-comparison density-result-row"><div class="dependence-comparison-stats density-result-text"><div class="dependence-series-label dependence-series-independent">${e3}</div>`+ro(n.independent,t,r,"monte-carlo",i)+`<div class="dependence-series-label dependence-series-joint">${n3}</div>`+ro(n.joint,t,r,"monte-carlo",i)+`</div>${o}</div>`}function qee(e){const{means:n,valueRange:t,statsDisplay:r,targetLabelHtml:i}=e,o=e.canvasId===void 0?"":I_(e.canvasId,e.legend??[]);return`<div class="result-label">Joint-dependence comparison (${e.provenanceDetail})</div><div class="dependence-comparison density-result-row"><div class="dependence-comparison-stats density-result-text"><div class="dependence-series-label dependence-series-independent">${e3}</div>`+wv(n.independent,t,r,i)+`<div class="dependence-series-label dependence-series-joint">${n3}</div>`+wv(n.joint,t,r,i)+`</div>${o}</div>`}function _R(e){const n=e.box.querySelector(`#${e.canvasId}`);if(n===null)return!1;const t=[];for(const r of e.layers){const i=hR(r.palette),o=kS(r.comparison.independent,i.independent,!0),a=kS(r.comparison.joint,i.joint,!1);if(o===null||a===null)return!1;t.push(o,a)}if(t.length===0)return!1;uL(n,t,e.valueRange,e.axis,{stateHost:e.box,stateKey:e.resizeStateKey});for(const{comparison:r}of e.layers){const{independent:i,joint:o}=r;if(i.mcPoolToken!==o.mcPoolToken)throw new Error("CRN-paired density results do not share one MC pool token");o.mcPoolToken!==null&&ys(n,o.mcPoolToken,o.samples.length,{itersPerTarget:e.mcItersPerClick,targetCount:1},t.length)}return!0}function kS(e,n,t){const r=GI(e);return r===null?null:{source:r,p5:e.p5,p95:e.p95,color:n.color,dashed:t,bandFill:n.bandFill}}const xee="Precomputed",Bee="Live MC",Hee=["No precomputed plot here.","▶ draws it with live Monte Carlo."];function gR(e,n){return{scale:e.densityScale,statsDisplay:n.statsDisplay}}function bR(e,n){const t=()=>Oz(n,Hee);t(),vs(n,t,{stateHost:e.box,stateKey:e.resizeStateKey})}function yR(e,n,t,r,i,o){if(n!==null&&n.mcPoolToken!==null){ys(e,n.mcPoolToken,n.sampleCount,{itersPerTarget:r.mcItersPerClick,targetCount:1},i);return}t!==null&&Eee(e,t.token,r.mcIters,{itersPerTarget:r.mcItersPerClick},o)}function ER(e,n){if(!e)return null;const t=n.activationKeyParts();return t===null?null:$ee(t)}function Mh(e,n){return`<div class="density-result-row"><div class="density-result-text">${e}</div>${n}</div>`}function SR(e,n,t,r,i,o){const{box:a,canvasId:u}=e,s=(r==null?void 0:r.kind)==="pair"?MI(r.pair):null,l=s!==null&&s.independent.storedDistribution!==null&&s.joint.storedDistribution!==null?s:null,c=(r==null?void 0:r.kind)==="means"?r.means:null,d=ER(r!==null,i),m=r===null||((d==null?void 0:d.activated)??!1)?i.run():null,f=[];l!==null&&f.push({comparison:l,palette:"stored"}),m!==null&&f.push({comparison:m,palette:f.length===0?"series":"live"});const h=vR(f.map(g=>g.palette)),v=f.length>0||d!==null,_=[];if(s!==null?_.push($v({comparison:s,valueRange:n.valueRange,statsDisplay:n.statsDisplay,targetLabelHtml:n.targetLabelHtml,canvasId:v?u:void 0,legend:h,provenanceDetail:`precomputed, ${n.storedTrialsDetail}`})):c!==null&&_.push(qee({means:c,valueRange:n.valueRange,statsDisplay:n.statsDisplay,targetLabelHtml:n.targetLabelHtml,canvasId:v?u:void 0,legend:h,provenanceDetail:`${z_.toLowerCase()}, ${n.storedTrialsDetail}`})),m!==null&&_.push($v({comparison:m,valueRange:n.valueRange,statsDisplay:n.statsDisplay,targetLabelHtml:n.targetLabelHtml,canvasId:r===null?u:void 0,legend:h,provenanceDetail:`live Monte Carlo, ${n.liveSampleCountDetail(m.joint)}`})),_.push(o),a.innerHTML=_.join(""),f.length>0&&_R({box:a,canvasId:u,layers:f,valueRange:n.valueRange,axis:gR(e,n),resizeStateKey:e.resizeStateKey,mcItersPerClick:t.mcItersPerClick}),m===null){const g=a.querySelector(`#${u}`);g&&(f.length===0&&bR(e,g),yR(g,null,d,t,f.length*2,l!==null?"curve":c!==null?"mean":"summary"))}}function wR(e,n,t,r,i){const{box:o,canvasId:a}=e,u=n.valueRange,s=(r==null?void 0:r.kind)==="stats"?Lz(r.stats):null,l=ER(r!==null,i),d=r===null||((l==null?void 0:l.activated)??!1)?i.run():null,p=s!==null||d!==null||l!==null,m=s===null||d===null?[]:[{label:xee,color:Ya,dashed:!1},{label:Bee,color:Ja,dashed:!1}],f=m.length===0?`<canvas id="${a}" width="400" height="200"></canvas>`:I_(a,m),h=[];(r==null?void 0:r.kind)==="stats"?h.push(`<div class="result-label">Precomputed (independent, ${n.storedTrialsDetail})</div>`+Mh(ro(r.stats,u,n.statsDisplay,"monte-carlo",n.targetLabelHtml),p?f:"")):(r==null?void 0:r.kind)==="mean"&&h.push(`<div class="result-label">${z_} (independent, ${n.storedTrialsDetail})</div>`+Mh(wv(r.mean,u,n.statsDisplay,n.targetLabelHtml),p?f:"")),d!==null&&h.push(`<div class="result-label">Live MC (independent, ${n.liveSampleCountDetail(d)})</div>`+Mh(ro(d,u,n.statsDisplay,"monte-carlo",n.targetLabelHtml),r!==null?"":f)),o.innerHTML=h.join("");const v=o.querySelector(`#${a}`);if(v===null)return;const _=gR(e,n),g={stateHost:o,stateKey:e.resizeStateKey};if(s!==null){const b=[s];d!==null&&b.push({source:d.samples,p5:d.p5,p95:d.p95,color:Ja,dashed:!1,bandFill:JI}),uL(v,b,u,_,g)}else d!==null?oL(v,d.samples,d.p5,d.p95,u,_,g):bR(e,v);yR(v,d===null?null:{mcPoolToken:d.mcPoolToken,sampleCount:d.samples.length},l,t,(s===null?0:1)+(d===null?0:1),s!==null?"curve":(r==null?void 0:r.kind)==="mean"?"mean":"summary")}const Uee=1;function AR(e,n){const t=Math.max(1,n),r=i=>Math.max(Uee,Math.floor(i/t));return{mcIters:r(e.mcItersInitialPerPlot),mcItersPerClick:r(e.mcItersPerClickPerPlot)}}function Br(e){return AR(e,1)}const t3="Your beliefs specification yields infinite or undefined values. Consider using non-zero numbers.",Gee="≅",jee="⫇",$R="The interval computed for this formula from the bounds responses is unbounded on both sides, i.e. carries no information. Point and distribution results are unaffected.";function TR(e,n){return e===-1/0&&n===1/0}function IR(e){return e==="tight"?Gee:jee}const nu="from point estimates";function Tr(e){return e.some(Number.isNaN)?"undefined":e.some(n=>!Number.isFinite(n))?"infinite":null}function tu(){return`<p class="arg-warning">${t3}</p>`}function Vee(e,n,t,r){const i=Ki(e,"floor"),o=Ki(n,"ceil");return`[${Pe(i,t,r)}, ${Pe(o,t,r)}]`}function Wee(e,n,t,r){const i=(e+n)/2;return Number.isNaN(i)?"undefined":Pe(i,t,r)}function ru({labelHtml:e,value:n,valueRange:t,statsDisplay:r,labelPrefix:i="",detail:o}){const a=Tr([n]);if(a==="undefined")throw new Error(t3);return`<div class="result-main">${x(i)}${e} = <span class="hl">${Pe(n,t,r)}</span></div>`+(o===void 0?"":`<div class="result-detail">${x(o)}</div>`)+(a==="infinite"?tu():"")}function r3({labelHtml:e,lo:n,hi:t,tightness:r,valueRange:i,statsDisplay:o,midpointDetailSuffix:a=""}){if(n>t)throw new Error(`Invalid calculated bounds: lo=${n} is greater than hi=${t}`);const u=Tr([n,t]);if(u==="undefined")throw new Error(t3);if(TR(n,t))return`<div class="result-detail">${x($R)}</div>`;const s=Ki(n,"floor"),l=Ki(t,"ceil"),c=u==="infinite"&&r==="tight";return`<div class="result-main">${e} ${IR(r)} [<span class="hl">${Pe(s,i,o)}</span>, <span class="hl">${Pe(l,i,o)}</span>]</div><div class="result-detail">midpoint: ${Wee(n,t,i,o)}${x(a)}</div>`+(c?tu():"")}function io(e,n){if(typeof e!="number"||Number.isNaN(e))throw new Error(`${n}: expected a number, got ${JSON.stringify(e)}`);return e}function Tv(e,n){if(!Array.isArray(e)||e.length!==2)throw new Error(`${n}: expected [lo, hi], got ${JSON.stringify(e)}`);const t=io(e[0],`${n} lo`),r=io(e[1],`${n} hi`);if(t>r)throw new Error(`${n}: lo=${t} is greater than hi=${r}`);return[t,r]}function LR(e,n){return io(e.point[n],`Code result point data for ${JSON.stringify(n)}`)}function RR(e,n){return Tv(e.bounds[n],`Code result bounds data for ${JSON.stringify(n)}`)}function CR(e,n,t){var o;const r=(o=e.compform_point_val)==null?void 0:o[n];if(r!==void 0)return io(r,`Code result computed point value for ${n}`);if(!t)throw new Error(`Code result has no computed point value or form implementation for ${n}`);const i=t.params.map(a=>LR(e,a));return io(t.point(i),`Directly evaluated code result point value for ${n}`)}function OR(e,n,t){var a,u;const r=(a=e.compform_bounds_val)==null?void 0:a[n];if(r!==void 0){const s=(u=e.compform_bounds_tightness)==null?void 0:u[n];return{interval:Tv(r,`Code result computed bounds value for ${n}`),tightness:s==="tight"?"tight":"loose"}}if(!t)throw new Error(`Code result has no computed bounds value or form implementation for ${n}`);if(!t.bounds)return null;if(!t.boundsTightness)throw new Error(`form ${n} has a bounds implementation but no boundsTightness — regenerate form_fns`);const i=t.params.map(s=>RR(e,s)),o=t.bounds(i);return{interval:Tv([o.lo,o.hi],`Directly evaluated code result bounds value for ${n}`),tightness:t.boundsTightness}}function ai(e){return e.some(n=>os(n.lloads))}function Es(e){return new Error(`A record with stated joint dependence must carry both its independence precompute (${Cn}) and joint precompute (${jn}), or neither for ${e}`)}function Ss(e,n){if(e===void 0)return;const t=e[Cn],r=e[jn];if(!n)return t===void 0?void 0:{stats:t,strengthKey:Cn};if(!(t===void 0&&r===void 0)){if(t===void 0||r===void 0)throw Es("live evaluation");return{stats:r,strengthKey:jn}}}function NR(e){if(e===void 0)return null;const n=e[Cn],t=e[jn];if(n===void 0&&t===void 0)return null;if(n===void 0||t===void 0)throw Es("live comparison");return{independent:n,joint:t}}function ui(e,n,t){var r;return t?e.precomputed:(r=e.precomputed_aux_forms)==null?void 0:r[n]}function kR(e,n,t,r){return Ss(ui(e,n,n===t),r)}function MR(e,n,t){var r;return t||(r=e.aux_form_means)==null?void 0:r[n]}function PR(e,n,t,r){const i=MR(e,n,t);if(i===void 0)return;const o=i[Cn],a=i[jn];if(!r)return o===void 0?void 0:{mean:o,strengthKey:Cn};if(!(o===void 0&&a===void 0)){if(o===void 0||a===void 0)throw Es("explicit sampling");return{mean:a,strengthKey:jn}}}function Kee(e,n,t){const r=MR(e,n,t);if(r===void 0)return null;const i=r[Cn],o=r[jn];if(i===void 0&&o===void 0)return null;if(i===void 0||o===void 0)throw Es("explicit sampling");return{independent:i,joint:o}}const Xee=5,Yee="rgb(59, 130, 246)",Jee="Dots show each trial's own distribution mean.",zee="Lines show each trial's own distribution mean.",Qee=" Each comes from joint or independent sampling according to that trial's stated coupling.",Iv=2,DR="code-density",Lv="code-density-canvas",Zee="code-line",ene="code-heatmap",MS=["#c44","#44c","#2a9d4a","#c84","#84c","#2aa","#c4c","#888","#ca4"];function nne(e){return{key:e.id,formEntry:e.formEntry}}function FR(e,n){if(n===null)throw new Error(`Distribution view for ${e.id} has no sample evaluator`);return n}function qR(e,n,t){if(n.formEntry===null)throw new Error(`Distribution view for ${e.id} requires its generated form implementation`);const r=uo(n.formEntry,t);return{paramKeys:r.params,combine:r.point}}function i3(e,n,t){return n.kind==="raw_response"?LR(e,n.bareName):CR(e,n.id,n.formEntry&&uo(n.formEntry,t))}function tne(e,n,t){return n.kind==="raw_response"?{interval:RR(e,n.bareName),tightness:"tight"}:OR(e,n.id,n.formEntry&&uo(n.formEntry,t))}function rne(e,n){if(e.length===0)return null;const t=[...e].sort((i,o)=>i-o),r=i=>{const o=Math.min(t.length-1,Math.max(0,Math.round(i*(t.length-1))));return t[o]};return{count:e.length,mean:as(e,n),median:r(.5),p5:r(.05),p95:r(.95)}}function xR(e,n,t){return rne(n.trials.map(r=>i3(r,t,n.cparams)),vt(e,n.trials))}function hn(e,n){for(const t of e.cparam_combos){let r=!0;for(const i of e.cparam_names)if(t.cparams[i]!==n[i]){r=!1;break}if(r)return t}return null}function o3(e,n,t){const r=new Set;for(const i of e.cparam_combos){const o=i.cparams[n];o!==void 0&&r.add(o)}return t?t.filter(i=>typeof i!="boolean"&&r.has(i)):Array.from(r)}function ws(e,n){return n[e]!==!1}function ine(e,n){let t=0;for(const r of e)n[r]===!1&&t++;return t}function BR(e,n){return e.filter(t=>n[t]===!1)}function HR(e,n){var t;if(n.kind==="formula")return(t=Ss(ui(e,n.id,n.isConclusion),ai(e.trials)))==null?void 0:t.stats}function one(e,n){return n.kind!=="formula"?null:NR(ui(e,n.id,n.isConclusion))}function UR(e,n){var t;if(n.kind==="formula")return(t=PR(e,n.id,n.isConclusion,ai(e.trials)))==null?void 0:t.mean}function ane(e,n){return n.kind!=="formula"?null:Kee(e,n.id,n.isConclusion)}function une(e,n){var t;if(n.kind==="formula")return(t=Ss(ui(e,n.id,n.isConclusion),ai([e])))==null?void 0:t.stats.mean}function As(e,n,t){var o;if(((o=n.formEntry)==null?void 0:o.sampleStage)!==void 0)throw new Error(`Distribution view for ${n.id} is not supported for formulas with E[·] barriers (v1)`);const{paramKeys:r,combine:i}=qR(n,t,e.cparams);for(const a of e.trials){const u=r.filter(s=>!$I(a.sample[s]));if(u.length>0)throw new Error(`Code distribution MC for ${t.key}: a trial lacks sample data for parameter(s) ${JSON.stringify(u)}`)}return{key:t.formEntry===null?t.key:Dw(t.key,t.formEntry,e.cparams),params:r,valueRange:n.valueRange,point:i,bounds:null,boundsTightness:null}}function GR(e,n,t){const r=Jn([e],[1],"sample",t);if(r.mode!=="sample")throw new Error(`Exact distribution for ${n.bareName} needs sample-mode inputs`);const i=r.trials[0].specs[n.bareName];if(i===void 0)throw new Error(`Exact distribution for ${n.bareName}: a trial has no sample response`);return Yi(i,r.ranges[n.bareName])}function jR(e,n,t,r){return{distribs:n.trials.map(i=>GR(i,t,r)),weights:vt(e,n.trials)}}function sne(e,n){return n.kind==="raw_response"?!0:e.cparam_combos.some(t=>t.trials.some(r=>ui(r,n.id,n.isConclusion)!==void 0))}function lne(e,n,t,r){if(n.kind==="raw_response"){const i=II(GR(e,n,t));if(i===null){r&&(r.encountered=!0);return}return i}return une(e,n)}function cne(e,n,t,r,i,o){const a=As(n,t,r);return zn(a,Jn(n.trials,vt(e,n.trials),"sample",i),{onIncompleteTrial:"error",mcIters:o.mcIters,mcItersPerClick:o.mcItersPerClick})}function dne(e,n,t,r,i,o){const a=As(n,t,r);return zJ(a,Jn(n.trials,vt(e,n.trials),"sample",i),{onIncompleteTrial:"error",mcIters:o.mcIters,mcItersPerClick:o.mcItersPerClick})}function fne(e,n,t,r,i,o,a,u){if(t.kind==="raw_response"){const d=jR(e,n,t,i),p=LI(d.distribs,d.weights);if(p===null){u&&(u.encountered=!0);return}return{mean:p}}const s=HR(n,t);if(s)return s;const l=UR(n,t);if(l!==void 0)return{mean:l};const c=dne(e,n,t,FR(t,r),i,o);return c.mcPoolToken!==null&&(a==null||a.add(c.mcPoolToken)),c}function VR(e){var n;return e===null?'<div class="code-info">No distribution plot target is available.</div>':e.kind==="formula"&&((n=e.formEntry)==null?void 0:n.sampleStage)!==void 0?'<div class="code-info">Distribution view is not yet supported for formulas containing E[·] aggregation.</div>':null}function WR(e,n,t,r){const i=n.kind==="formula"?nne(n):null,o=xw(e.svar_entries()),a=AR(t,r),u=new Set,s={encountered:!1};return{sampleTarget:i,paramRanges:o,statsForCombo:(l,c)=>fne(l,c,n,i,o,a,u,s),trialSampleMeanFor:l=>sne(l,n)?c=>lne(c,n,o,s):void 0,attachFollowUps:l=>{if(u.size>0){const c=l.querySelector("#code-line-canvas, #code-heatmap-canvas");c&&ys(c,kI([...u]),null,{itersPerTarget:a.mcItersPerClick,targetCount:r})}s.encountered&&l.insertAdjacentHTML("beforeend",Ine)}}}function KR(e,n,t){let r=t.reduce((i,o)=>i*o,1);for(const i of e)r*=(n.get(i)??[]).length;return r}function XR(e,n){const t=(n==null?void 0:n.valueRange)??e.conclusion_range_or_none(),r=t===null?null:_u(t);return{heatmapValueRange:r??void 0,linePlotYRangePaddingPercent:r===null?void 0:Xee}}function si(e,n,t,r){return j2(n.ui.cparamValues[e],t==null?void 0:t.default_value,r)}function pne(e,n,t){if(ine(e.cparam_names,t.ui.cparamPinned)>0)return null;const r={};for(const i of e.cparam_names){const o=n.find_cparam(i),a=o3(e,i,o==null?void 0:o.allowed_values);r[i]=si(i,t,o,a)}return hn(e,r)}function mne(e){if(e.length===0)return;const n=e[0].cparam_names;for(let t=1;t<e.length;t++){const r=e[t].cparam_names;if(r.length!==n.length||!r.every((o,a)=>o===n[a]))throw new Error(`validateRecsCparamCompat: incompatible cparam_names: ${JSON.stringify(n)} vs ${JSON.stringify(r)}. Cannot sweep across published entries with mismatched cparam shapes.`)}}function YR(e,n,t,r,i){const o=new Map;for(let u=0;u<t.length;u++){const s={...r,[n]:t[u]},l=hn(e,s);if(l)for(const c of l.trials){const d=i(c,l);if(d===void 0)continue;const p=or(c),m=o.get(p),f={x:u,y:d};m?m.push(f):o.set(p,[f])}}const a=hne(e);return{series:[...o.entries()].sort(([u],[s])=>u-s).map(([u,s])=>({points:s,...a.styles.get(u)})),legend:a.legend}}function hne(e){const n=new Map,t=[];return x2(e).forEach((r,i)=>{if(r.configuration===null){for(const u of r.trials)n.set(u.recordTrialIndex,{label:`trial ${u.trialNumber}`});return}const o=D2(gn(r.configuration)),a=MS[i%MS.length];t.push({label:o,color:a});for(const u of r.trials)n.set(u.recordTrialIndex,{label:`${o} trial ${u.trialNumber}`,color:a})}),{styles:n,legend:t}}function vne(e){return(n,t)=>i3(n,e,t.cparams)}function JR(e,n,t,r,i,o,a){const u=t.map(String);if(i==="average"){const s=[],l=[];for(let c=0;c<t.length;c++){const d={...r,[n]:t[c]},p=hn(e,d);if(!p)continue;const m=o?o(e,p):p.precomputed[Cn];if(m&&(s.push({x:c,y:m.mean}),a!==void 0))for(const f of p.trials){const h=a(f,p);h!==void 0&&l.push({x:c,y:h})}}return{series:[{points:s,label:"avg"}],xLabels:u,scatterPoints:l,legend:[]}}if(a===void 0)throw new Error("Separate mode of a distribution sweep needs a per-trial mean source");return{...YR(e,n,t,r,a),xLabels:u,scatterPoints:[]}}function zR(e,n,t,r,i,o,a){const u=t.map(String),s=i.map(String),l=[];for(let c=0;c<i.length;c++){const d=[];for(let p=0;p<t.length;p++){const m={...o,[n]:t[p],[r]:i[c]},f=hn(e,m);if(!f){d.push(null);continue}const h=a?a(e,f):f.precomputed[Cn];d.push((h==null?void 0:h.mean)??null)}l.push(d)}return{cells:l,xLabels:u,yLabels:s,xAxisLabel:n,yAxisLabel:r}}function _ne(e,n,t,r,i,o){const a=t.map(String);if(i==="average"){const u=[];for(let s=0;s<t.length;s++){const l={...r,[n]:t[s]},c=hn(e,l);if(!c)continue;const d=xR(e,c,o);d&&u.push({x:s,y:d.mean})}return{series:[{points:u,label:"avg"}],xLabels:a,scatterPoints:[],legend:[]}}return{...YR(e,n,t,r,vne(o)),xLabels:a,scatterPoints:[]}}function gne(e,n,t,r,i,o,a){const u=t.map(String),s=i.map(String),l=[];for(let c=0;c<i.length;c++){const d=[];for(let p=0;p<t.length;p++){const m={...o,[n]:t[p],[r]:i[c]},f=hn(e,m),h=f?xR(e,f,a):null;d.push((h==null?void 0:h.mean)??null)}l.push(d)}return{cells:l,xLabels:u,yLabels:s,xAxisLabel:n,yAxisLabel:r}}function QR(e,n,t,r,i,o,a){if(!i||!o)return"";const u={};for(const s of e.cparam_names){const l=r.find_cparam(s),c=t.get(s)??[];if(c.length===0)return"";const d=si(s,n,l,c);if((l!==void 0?gu(l.allowed_values):typeof d=="string"?"string":"number")==="string"){u[s]=d;continue}const m=Number(d);if(!Number.isFinite(m))return"";u[s]=m}return i(u)?"":`<div class="arg-warning">${a(o)}</div>`}const bne="These controls change only this plot.",yne="cparam-controls-scope-note";function Ene(e,n,t,r,i,o,a,u,s,l,c){const d=QR(n,r,i,t,s,l,c);let p=CT(t,r,o,a,u);p+=d+'<div class="cparam-controls">';const m=ZR(n.cparam_names,t,r,i);p+=m.html,m.rowCount>0&&(p+=`<p class="${yne}">${x(bne)}</p>`),p+="</div>",e.innerHTML=p}function ZR(e,n,t,r){let i="",o=0;for(const a of e){const u=n.find_cparam(a),s=r.get(a)??[];if(s.length===0)continue;const l=si(a,t,u,s),c=s.indexOf(l),d=ws(a,t.ui.cparamPinned),p=(u==null?void 0:u.longname)??a;i+='<div class="cparam-row">',i+=`<label class="cparam-label">${x(p)}</label>`,i+=`<input type="range" class="cparam-slider" data-cparam="${a}" `,i+=`min="0" max="${s.length-1}" step="1" value="${c>=0?c:0}" `,i+=`${d?"":"disabled "}`,i+=`data-values='${x(JSON.stringify(s))}'>`,i+=`<span class="cparam-value-label">${x(String(l))}</span>`,i+='<label class="cparam-pin-label"><input type="checkbox" class="cparam-pin-checkbox" ',i+=`data-cparam="${a}"${d?" checked":""}> pin</label>`,i+="</div>",o++}return{html:i,rowCount:o}}function PS(e){return console.warn(`code viewer controls sync: ${e}; falling back to a full controls rebuild`),!1}function Sne(e,n,t,r,i,o,a,u){const s=e.querySelector(".cparam-controls");if(!s)return PS("no existing .cparam-controls block");const l=QR(n,r,i,t,o,a,u),c=e.querySelector(":scope > .arg-warning");l===""?c==null||c.remove():c?c.outerHTML=l:s.insertAdjacentHTML("beforebegin",l);for(const d of n.cparam_names){const p=i.get(d)??[];if(p.length===0)continue;const m=t.find_cparam(d),f=si(d,r,m,p),h=p.indexOf(f),v=s.querySelector(`.cparam-slider[data-cparam="${d}"]`),_=v==null?void 0:v.closest(".cparam-row"),g=_==null?void 0:_.querySelector(".cparam-value-label"),b=_==null?void 0:_.querySelector(".cparam-pin-checkbox");if(!v||!g||!b)return PS(`cparam row for ${d} is missing expected controls`);const y=ws(d,r.ui.cparamPinned);v.value=String(h>=0?h:0),v.disabled=!y,g.textContent=String(f),b.checked=y}return!0}function wne(e){return`<div class="sweep-mode-toggle"><button class="sweep-mode-btn${e==="average"?" active":""}" data-sweep-mode="average">Average</button><button class="sweep-mode-btn${e==="separate"?" active":""}" data-sweep-mode="separate">Separate</button></div>`}const a3='<div class="code-info">No data for this parameter combination.</div>';function Ane(e,n,t,r,i,o,a){const u=hn(n,t);if(!u){e.innerHTML=a3;return}if(!r){e.innerHTML='<div class="code-info">No point plot target is available.</div>';return}if(u.trials.length===0)throw new Error("Code point result has no trials for the selected parameter combination");const s=u.trials.map(p=>i3(p,r,u.cparams)),l=as(s,vt(n,u.trials)),c=r.valueRange,d=s.length===1?nu:`per trial: ${s.map(p=>Pe(p,c,a.ui.probAsOdds)).join(", ")}`;e.innerHTML=ru({labelHtml:$o(r,i,o),value:l,valueRange:c,statsDisplay:a.ui.probAsOdds,labelPrefix:s.length===1?"":"mean ",detail:d})}function $ne(e,n,t,r,i,o,a){const u=hn(n,t);if(!u){e.innerHTML=a3;return}if(!r){e.innerHTML='<div class="code-info">No bounds plot target is available.</div>';return}if(!R2(n)||u.trials.length!==1)throw new Error(`Code bounds display requires one trial; record count=${n.count}, selected combo trials=${u.trials.length}`);const s=tne(u.trials[0],r,u.cparams);if(!s){e.innerHTML=`<div class="code-info">${x(Fo)}</div>`;return}const[l,c]=s.interval;e.innerHTML=r3({labelHtml:$o(r,i,o),lo:l,hi:c,tightness:s.tightness,valueRange:r.valueRange,statsDisplay:a.ui.probAsOdds})}function DS(e,n,t,r,i,o,a,u,s,l,c){eC(e,n,t,r,i,o,a,u,s,l,c,!1)}function FS(e,n,t,r,i,o,a,u,s,l,c){eC(e,n,t,r,i,o,a,u,s,l,c,!0)}function eC(e,n,t,r,i,o,a,u,s,l,c,d){C2(t);const p=c$(a,t,o.ui.inputMode),m=LT(r,o,p,s),f=new Map;for(const S of t.cparam_names){const I=r.find_cparam(S),R=o3(t,S,I==null?void 0:I.allowed_values);f.set(S,R)}d&&Sne(e,t,r,o,f,l,c,S=>je(S,i))||Ene(e,t,r,o,f,p,m,s,l,c,S=>je(S,i));const v=BR(t.cparam_names,o.ui.cparamPinned),_=v.length,g=o.ui.codeSweepMode,b={};for(const S of t.cparam_names)if(ws(S,o.ui.cparamPinned)){const I=r.find_cparam(S),R=f.get(S)??[];b[S]=si(S,o,I,R)}const{heatmapValueRange:y,linePlotYRangePaddingPercent:E}=XR(r,m);if(p==="bounds"){_>0?n.innerHTML='<div class="code-info">Pin every axis to display code-response bounds.</div>':$ne(n,t,b,m,r,i,o);return}let A=null;if(p==="sample"){const S=VR(m);if(m===null||S!==null){n.innerHTML=S;return}A=WR(r,m,u,KR(v,f,[]))}const T=(A==null?void 0:A.sampleTarget)??null,C=(A==null?void 0:A.paramRanges)??null,L=A==null?void 0:A.statsForCombo,$=A==null?void 0:A.trialSampleMeanFor(t),w=p;if(_===0)if(p==="point")Ane(n,t,b,m,r,i,o);else{if(m===null||C===null)throw new Error("Sample-mode code density routing has no resolved sample target");Cne(n,t,o,u,b,m,T,C,r,$o(m,r,i),a)}else if(_===1)Nne(n,t,v[0],f,b,g,E,m,w,L,$);else if(_===2)kne(n,t,v,f,b,y,m,w,L);else{const S=t.cparam_names.length-Iv;n.innerHTML=`<div class="code-info"><p>Pin at least ${S} parameter${S===1?"":"s"} to visualize results.</p><p>Currently ${_} parameter${_===1?"":"s"} unpinned.</p></div>`}A==null||A.attachFollowUps(n)}function Tne(e,n,t,r,i,o){return r.formEntry===null?null:[...PI(As(n,t,r),Jn(n.trials,vt(e,n.trials),"sample",i),{onIncompleteTrial:"error",mcIters:o.mcIters,mcItersPerClick:o.mcItersPerClick}),"target",r.key]}const Ine='<div class="code-info">Some points are not plotted: the response there has no finite mean, so there is no value to place on this axis. Its distribution view still shows an exact median and interval.</div>';function Lne(e,n,t,r){const i=e.map(o=>`${Pe(o.x,t,r,"deterministic")} (${o.count} of ${n})`).join(", ");return`<div class="code-info">Point-mass responses: ${x(i)}. Each is drawn as a spike whose height is its share of the responses, not a density.</div>`}function Rne(e,n,t,r,i,o,a,u,s,l){const{distribs:c,weights:d}=jR(n,t,r,i),p=CI(c,d),m=RI(c,d),f=QI(c,d),h=r.valueRange,v=o.ui.probAsOdds,_=c.length,g=[`<div class="result-label">Exact (${L2(l,_)})</div>`,'<div class="density-result-row"><div class="density-result-text">'+Cee(p,h,v,a)+`</div><canvas id="${Lv}" width="400" height="200"></canvas></div>`];m.length>0&&g.push(Lne(m,_,h,v)),u&&(g.push(s.couplingIrrelevantNoteHtml),g.push(s.specPointerHtml)),e.innerHTML=g.join("");const b=e.querySelector(`#${Lv}`);if(!b)return;const y=ZI(f,h),E=[p.p5,p.p95];sL(b,f,y,h,Vn(o.ui),E,{stateHost:e,stateKey:DR})}function Cne(e,n,t,r,i,o,a,u,s,l,c){const d=hn(n,i);if(!d){e.innerHTML=a3;return}nC(e,n,d,t,r,o,a,u,s,l,fR,c);const p=sR({contributingRecordTrialIndices:d.trials.map(or),recordTrialCount:n.count,cparams:d.cparams});p!==""&&e.insertAdjacentHTML("afterbegin",`<div class="code-info">${p}</div>`)}function nC(e,n,t,r,i,o,a,u,s,l,c,d){const p=o.valueRange,m=mR(t.trials,s);if(o.kind==="raw_response"){Rne(e,n,t,o,u,r,l,m,c,d);return}const f=FR(o,a),h=Br(i),v={box:e,canvasId:Lv,resizeStateKey:DR,densityScale:r.ui.densityScale},_={valueRange:p,statsDisplay:r.ui.probAsOdds,targetLabelHtml:l,storedTrialsDetail:L2(d,t.trials.length),liveSampleCountDetail:E=>`n=${E.samples.length.toLocaleString()}`},g=()=>Tne(n,t,o,f,u,h);if(m){const E=one(t,o),A=E===null?ane(t,o):null;SR(v,_,h,E!==null?{kind:"pair",pair:E}:A!==null?{kind:"means",means:A}:null,{run:()=>T_(As(t,o,f),Jn(t.trials,vt(n,t.trials),"sample",u),{onIncompleteTrial:"error",mcIters:h.mcIters,mcItersPerClick:h.mcItersPerClick}),activationKeyParts:g},c.specPointerHtml);return}const b=HR(t,o),y=b===void 0?UR(t,o):void 0;f.formEntry===null&&b===void 0&&y===void 0&&qR(o,f,t.cparams),wR(v,_,h,b!==void 0?{kind:"stats",stats:b}:y!==void 0?{kind:"mean",mean:y}:null,{run:()=>cne(n,t,o,f,u,h),activationKeyParts:g})}function One(e){return e.length===0?{}:{scatterOverlay:{points:e,color:Yee}}}function tC(e,n){const t=n.kind==="formula"?Qee:"";return`<div class="code-info" style="margin-top: 6px;">${e}${t}</div>`}function u3(e,n){return e.length===0||n===null?"":tC(Jee,n)}function Nne(e,n,t,r,i,o,a,u,s,l,c){const d=r.get(t)??[],p=s==="sample",m=!p||c!==void 0,f=n.count>1&&m,h=f?o:"average",{series:v,xLabels:_,scatterPoints:g,legend:b}=u===null?{series:[],xLabels:d.map(String),scatterPoints:[],legend:[]}:p?JR(n,t,d,i,h,l,c):_ne(n,t,d,i,h,u);let y="";f&&(y+=wne(h),h==="separate"?y+=p&&u!==null?tC(zee,u):'<div class="code-info" style="margin-top: 6px;">Separate mode shows per-trial point values.</div>':p||(y+='<div class="code-info" style="margin-top: 6px;">Average mode uses point values only.</div>')),y+=u3(g,u),s3(e,{series:v,xLabels:_,scatterPoints:g,legend:b},t,a,y)}function s3(e,{series:n,xLabels:t,scatterPoints:r,legend:i},o,a,u){let s='<div class="code-plot-container">';i.length>0&&(s+=FI(i.map(c=>({...c,dashed:!1})),"Model configuration line colours")),s+='<canvas id="code-line-canvas" class="code-plot-canvas" width="800" height="500"></canvas>',s+=u,s+="</div>",e.innerHTML=s;const l=e.querySelector("#code-line-canvas");if(l){const c={xLabels:t,xAxisLabel:o,...a===void 0?{}:{yRangePaddingPercent:a},...One(r)};gS(l,n,c),vs(l,()=>gS(l,n,c),{stateHost:e,stateKey:Zee})}}function kne(e,n,t,r,i,o,a,u,s){const l=t[0],c=t[1],d=r.get(l)??[],p=r.get(c)??[],m=u==="sample",f=m?zR(n,l,d,c,p,i,s):a?gne(n,l,d,c,p,i,a):{cells:[],xLabels:d.map(String),yLabels:p.map(String),xAxisLabel:l,yAxisLabel:c};iu(e,f,o,m?"":'<div class="code-info" style="margin-top: 6px;">Cells show average point values.</div>')}function iu(e,n,t,r){t&&(n.valueRange=t);const{width:i,height:o}=yL(n);let a='<div class="code-plot-container">';a+=`<canvas id="code-heatmap-canvas" class="code-plot-canvas" width="${i}" height="${o}"></canvas>`,a+=r,a+="</div>",e.innerHTML=a;const u=e.querySelector("#code-heatmap-canvas");u&&(SS(u,n),vs(u,()=>SS(u,n),{stateHost:e,stateKey:ene}))}const Mne=0,qS=new WeakMap;function Pne(e,n){const t=Pt(e);if(!Number.isInteger(n)||n<0||n>=t)throw new Error(`singleTrialRecord: trial ${n} is not one of the record's ${t} trials`);if(t===1)return e;let r=qS.get(e);r===void 0&&(r=new Map,qS.set(e,r));let i=r.get(n);return i===void 0&&(i=_n(e)?Fne(e,n):Dne(e,n),r.set(n,i)),i}function Dne(e,n){const t=e.trials[n],{precomputed_aux_forms:r,...i}=e;return{...i,count:1,trials:[t],precomputed:t.precomputed??{},...t.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:t.precomputed_aux_forms}}}function Fne(e,n){const t=Mu(e,n),r=e.cparam_combos.flatMap(u=>{const s=d$(u.trials,n);return s===void 0?[]:[{cparams:u.cparams,trials:[{...s,trial_index:Mne}],precomputed:s.precomputed??{},...s.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:s.precomputed_aux_forms}}]}),{entry_id:i,result_set:o,...a}=e;return{...a,count:1,cparam_combos:r,model:(t==null?void 0:t.model)??e.model,version:(t==null?void 0:t.version)??e.version,effort:(t==null?void 0:t.effort)===void 0?e.effort:t.effort,trial_metadata:e.trial_metadata===void 0||e.trial_metadata.length===0?e.trial_metadata:[t??{}]}}function l3(e,n){return e>0?Math.max(0,Math.min(n,e-1)):0}function xS(e,n){return e<2?Wi(0):n.kind==="mix"?Ar:Wi(l3(e,n.recordTrialIndex))}function wn(e,n){if(n===void 0||e.interactionMode!=="ReadTrials")return null;const{resultSet:t}=Nn(e.readTrials,{presetData:n});return t.kind==="adhoc"?Vq(t.entry,n):t.kind==="methodical"?t.record:null}function _t(e,n){const t=iC(e,n),r=ci(e,n);if(r===null)return xS(t,Ar);if(t===0)return Ar;const i=Yx(e.ui.readTrials.trial,e.ui.interactionMode==="ReadTrials"&&e.ui.readTrials.adhoc!==null?"adhoc":"methodical",r);return xS(t,i===null?Ar:Wi(i))}function kn(e,n){const t=wn(e.ui,n);if(t===null)return null;const r=_t(e,n);return r.kind==="mix"?t:Pne(t,r.recordTrialIndex)}const qne={point:!1,bounds:!1,sample:!1};function li(e,n){return n!==void 0?Xr(e.ui,{presetData:n}):{kind:"yours",queryMode:e.ui.estimateQueryMode}}function rC(e,n){return e.ui.interactionMode==="Compare"?qne:s$(kn(e,n))}function Qn(e,n){return c$(li(e,n).kind,kn(e,n),e.ui.inputMode)}function ci(e,n){return wn(e.ui,n)}function $s(e,n){return Array.from({length:Pt(e)},(t,r)=>n(r))}function iC(e,n){const t=ci(e,n);return t?Pt(t):0}function oC(e,n){const t=ci(e,n);return t?$s(t,r=>Yq(t,r)):[]}function c3(e,n){return oC(e,n).map(t=>t==null?void 0:t.reasoning)}function xne(e,n){const t=ci(e,n);return t?$s(t,r=>Mu(t,r)):[]}function Bne(e,n){const t=kn(e,n);return t?$s(t,r=>{var i;return(i=Mu(t,r))==null?void 0:i.logical_consistency_outcome}):[]}function aC(e,n,t){return hn(e,Bu(n,t))}function uC(e,n){var r;const t=n.yoursCodeRecord;if(ho(t))return(r=aC(vo(t),e,n))==null?void 0:r.trials[0]}function d3(e,n,t){const r=wn(n.ui,t);if(!r)return[];if(!_n(r))return r.trials;const i=aC(r,e,n);return Array.from({length:Pt(r)},(o,a)=>i?d$(i.trials,a):void 0)}function f3(e,n){const t=ci(e,n);return t?er(t):[]}function sC(e,n){const t=ci(e,n);return t?$s(t,r=>Jq(t,r)??{}):void 0}var Ph,BS;function Hne(){if(BS)return Ph;BS=1;function e(O){return O instanceof Map?O.clear=O.delete=O.set=function(){throw new Error("map is read-only")}:O instanceof Set&&(O.add=O.clear=O.delete=function(){throw new Error("set is read-only")}),Object.freeze(O),Object.getOwnPropertyNames(O).forEach(F=>{const W=O[F],ce=typeof W;(ce==="object"||ce==="function")&&!Object.isFrozen(W)&&e(W)}),O}class n{constructor(F){F.data===void 0&&(F.data={}),this.data=F.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(O){return O.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(O,...F){const W=Object.create(null);for(const ce in O)W[ce]=O[ce];return F.forEach(function(ce){for(const xe in ce)W[xe]=ce[xe]}),W}const i="</span>",o=O=>!!O.scope,a=(O,{prefix:F})=>{if(O.startsWith("language:"))return O.replace("language:","language-");if(O.includes(".")){const W=O.split(".");return[`${F}${W.shift()}`,...W.map((ce,xe)=>`${ce}${"_".repeat(xe+1)}`)].join(" ")}return`${F}${O}`};class u{constructor(F,W){this.buffer="",this.classPrefix=W.classPrefix,F.walk(this)}addText(F){this.buffer+=t(F)}openNode(F){if(!o(F))return;const W=a(F.scope,{prefix:this.classPrefix});this.span(W)}closeNode(F){o(F)&&(this.buffer+=i)}value(){return this.buffer}span(F){this.buffer+=`<span class="${F}">`}}const s=(O={})=>{const F={children:[]};return Object.assign(F,O),F};class l{constructor(){this.rootNode=s(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(F){this.top.children.push(F)}openNode(F){const W=s({scope:F});this.add(W),this.stack.push(W)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(F){return this.constructor._walk(F,this.rootNode)}static _walk(F,W){return typeof W=="string"?F.addText(W):W.children&&(F.openNode(W),W.children.forEach(ce=>this._walk(F,ce)),F.closeNode(W)),F}static _collapse(F){typeof F!="string"&&F.children&&(F.children.every(W=>typeof W=="string")?F.children=[F.children.join("")]:F.children.forEach(W=>{l._collapse(W)}))}}class c extends l{constructor(F){super(),this.options=F}addText(F){F!==""&&this.add(F)}startScope(F){this.openNode(F)}endScope(){this.closeNode()}__addSublanguage(F,W){const ce=F.root;W&&(ce.scope=`language:${W}`),this.add(ce)}toHTML(){return new u(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function d(O){return O?typeof O=="string"?O:O.source:null}function p(O){return h("(?=",O,")")}function m(O){return h("(?:",O,")*")}function f(O){return h("(?:",O,")?")}function h(...O){return O.map(W=>d(W)).join("")}function v(O){const F=O[O.length-1];return typeof F=="object"&&F.constructor===Object?(O.splice(O.length-1,1),F):{}}function _(...O){return"("+(v(O).capture?"":"?:")+O.map(ce=>d(ce)).join("|")+")"}function g(O){return new RegExp(O.toString()+"|").exec("").length-1}function b(O,F){const W=O&&O.exec(F);return W&&W.index===0}const y=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function E(O,{joinWith:F}){let W=0;return O.map(ce=>{W+=1;const xe=W;let Be=d(ce),ee="";for(;Be.length>0;){const J=y.exec(Be);if(!J){ee+=Be;break}ee+=Be.substring(0,J.index),Be=Be.substring(J.index+J[0].length),J[0][0]==="\\"&&J[1]?ee+="\\"+String(Number(J[1])+xe):(ee+=J[0],J[0]==="("&&W++)}return ee}).map(ce=>`(${ce})`).join(F)}const A=/\b\B/,T="[a-zA-Z]\\w*",C="[a-zA-Z_]\\w*",L="\\b\\d+(\\.\\d+)?",$="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",w="\\b(0b[01]+)",S="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",I=(O={})=>{const F=/^#![ ]*\//;return O.binary&&(O.begin=h(F,/.*\b/,O.binary,/\b.*/)),r({scope:"meta",begin:F,end:/$/,relevance:0,"on:begin":(W,ce)=>{W.index!==0&&ce.ignoreMatch()}},O)},R={begin:"\\\\[\\s\\S]",relevance:0},P={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[R]},k={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[R]},H={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},D=function(O,F,W={}){const ce=r({scope:"comment",begin:O,end:F,contains:[]},W);ce.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const xe=_("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return ce.contains.push({begin:h(/[ ]+/,"(",xe,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),ce},q=D("//","$"),M=D("/\\*","\\*/"),Z=D("#","$"),G={scope:"number",begin:L,relevance:0},z={scope:"number",begin:$,relevance:0},te={scope:"number",begin:w,relevance:0},ae={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[R,{begin:/\[/,end:/\]/,relevance:0,contains:[R]}]},j={scope:"title",begin:T,relevance:0},Y={scope:"title",begin:C,relevance:0},V={begin:"\\.\\s*"+C,relevance:0};var me=Object.freeze({__proto__:null,APOS_STRING_MODE:P,BACKSLASH_ESCAPE:R,BINARY_NUMBER_MODE:te,BINARY_NUMBER_RE:w,COMMENT:D,C_BLOCK_COMMENT_MODE:M,C_LINE_COMMENT_MODE:q,C_NUMBER_MODE:z,C_NUMBER_RE:$,END_SAME_AS_BEGIN:function(O){return Object.assign(O,{"on:begin":(F,W)=>{W.data._beginMatch=F[1]},"on:end":(F,W)=>{W.data._beginMatch!==F[1]&&W.ignoreMatch()}})},HASH_COMMENT_MODE:Z,IDENT_RE:T,MATCH_NOTHING_RE:A,METHOD_GUARD:V,NUMBER_MODE:G,NUMBER_RE:L,PHRASAL_WORDS_MODE:H,QUOTE_STRING_MODE:k,REGEXP_MODE:ae,RE_STARTERS_RE:S,SHEBANG:I,TITLE_MODE:j,UNDERSCORE_IDENT_RE:C,UNDERSCORE_TITLE_MODE:Y});function ne(O,F){O.input[O.index-1]==="."&&F.ignoreMatch()}function se(O,F){O.className!==void 0&&(O.scope=O.className,delete O.className)}function $e(O,F){F&&O.beginKeywords&&(O.begin="\\b("+O.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",O.__beforeBegin=ne,O.keywords=O.keywords||O.beginKeywords,delete O.beginKeywords,O.relevance===void 0&&(O.relevance=0))}function Se(O,F){Array.isArray(O.illegal)&&(O.illegal=_(...O.illegal))}function bt(O,F){if(O.match){if(O.begin||O.end)throw new Error("begin & end are not supported with match");O.begin=O.match,delete O.match}}function an(O,F){O.relevance===void 0&&(O.relevance=1)}const _e=(O,F)=>{if(!O.beforeMatch)return;if(O.starts)throw new Error("beforeMatch cannot be used with starts");const W=Object.assign({},O);Object.keys(O).forEach(ce=>{delete O[ce]}),O.keywords=W.keywords,O.begin=h(W.beforeMatch,p(W.begin)),O.starts={relevance:0,contains:[Object.assign(W,{endsParent:!0})]},O.relevance=0,delete W.beforeMatch},$n=["of","and","for","in","not","or","if","then","parent","list","value"],Je="keyword";function Tn(O,F,W=Je){const ce=Object.create(null);return typeof O=="string"?xe(W,O.split(" ")):Array.isArray(O)?xe(W,O):Object.keys(O).forEach(function(Be){Object.assign(ce,Tn(O[Be],F,Be))}),ce;function xe(Be,ee){F&&(ee=ee.map(J=>J.toLowerCase())),ee.forEach(function(J){const le=J.split("|");ce[le[0]]=[Be,Ut(le[0],le[1])]})}}function Ut(O,F){return F?Number(F):Q(O)?0:1}function Q(O){return $n.includes(O.toLowerCase())}const ve={},In=O=>{console.error(O)},pi=(O,...F)=>{console.log(`WARN: ${O}`,...F)},st=(O,F)=>{ve[`${O}/${F}`]||(console.log(`Deprecated as of ${O}. ${F}`),ve[`${O}/${F}`]=!0)},yt=new Error;function fr(O,F,{key:W}){let ce=0;const xe=O[W],Be={},ee={};for(let J=1;J<=F.length;J++)ee[J+ce]=xe[J],Be[J+ce]=!0,ce+=g(F[J-1]);O[W]=ee,O[W]._emit=Be,O[W]._multi=!0}function mi(O){if(Array.isArray(O.begin)){if(O.skip||O.excludeBegin||O.returnBegin)throw In("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),yt;if(typeof O.beginScope!="object"||O.beginScope===null)throw In("beginScope must be object"),yt;fr(O,O.begin,{key:"beginScope"}),O.begin=E(O.begin,{joinWith:""})}}function hi(O){if(Array.isArray(O.end)){if(O.skip||O.excludeEnd||O.returnEnd)throw In("skip, excludeEnd, returnEnd not compatible with endScope: {}"),yt;if(typeof O.endScope!="object"||O.endScope===null)throw In("endScope must be object"),yt;fr(O,O.end,{key:"endScope"}),O.end=E(O.end,{joinWith:""})}}function Vo(O){O.scope&&typeof O.scope=="object"&&O.scope!==null&&(O.beginScope=O.scope,delete O.scope)}function ze(O){Vo(O),typeof O.beginScope=="string"&&(O.beginScope={_wrap:O.beginScope}),typeof O.endScope=="string"&&(O.endScope={_wrap:O.endScope}),mi(O),hi(O)}function De(O){function F(ee,J){return new RegExp(d(ee),"m"+(O.case_insensitive?"i":"")+(O.unicodeRegex?"u":"")+(J?"g":""))}class W{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(J,le){le.position=this.position++,this.matchIndexes[this.matchAt]=le,this.regexes.push([le,J]),this.matchAt+=g(J)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const J=this.regexes.map(le=>le[1]);this.matcherRe=F(E(J,{joinWith:"|"}),!0),this.lastIndex=0}exec(J){this.matcherRe.lastIndex=this.lastIndex;const le=this.matcherRe.exec(J);if(!le)return null;const We=le.findIndex((vi,Fs)=>Fs>0&&vi!==void 0),Ge=this.matchIndexes[We];return le.splice(0,We),Object.assign(le,Ge)}}class ce{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(J){if(this.multiRegexes[J])return this.multiRegexes[J];const le=new W;return this.rules.slice(J).forEach(([We,Ge])=>le.addRule(We,Ge)),le.compile(),this.multiRegexes[J]=le,le}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(J,le){this.rules.push([J,le]),le.type==="begin"&&this.count++}exec(J){const le=this.getMatcher(this.regexIndex);le.lastIndex=this.lastIndex;let We=le.exec(J);if(this.resumingScanAtSamePosition()&&!(We&&We.index===this.lastIndex)){const Ge=this.getMatcher(0);Ge.lastIndex=this.lastIndex+1,We=Ge.exec(J)}return We&&(this.regexIndex+=We.position+1,this.regexIndex===this.count&&this.considerAll()),We}}function xe(ee){const J=new ce;return ee.contains.forEach(le=>J.addRule(le.begin,{rule:le,type:"begin"})),ee.terminatorEnd&&J.addRule(ee.terminatorEnd,{type:"end"}),ee.illegal&&J.addRule(ee.illegal,{type:"illegal"}),J}function Be(ee,J){const le=ee;if(ee.isCompiled)return le;[se,bt,ze,_e].forEach(Ge=>Ge(ee,J)),O.compilerExtensions.forEach(Ge=>Ge(ee,J)),ee.__beforeBegin=null,[$e,Se,an].forEach(Ge=>Ge(ee,J)),ee.isCompiled=!0;let We=null;return typeof ee.keywords=="object"&&ee.keywords.$pattern&&(ee.keywords=Object.assign({},ee.keywords),We=ee.keywords.$pattern,delete ee.keywords.$pattern),We=We||/\w+/,ee.keywords&&(ee.keywords=Tn(ee.keywords,O.case_insensitive)),le.keywordPatternRe=F(We,!0),J&&(ee.begin||(ee.begin=/\B|\b/),le.beginRe=F(le.begin),!ee.end&&!ee.endsWithParent&&(ee.end=/\B|\b/),ee.end&&(le.endRe=F(le.end)),le.terminatorEnd=d(le.end)||"",ee.endsWithParent&&J.terminatorEnd&&(le.terminatorEnd+=(ee.end?"|":"")+J.terminatorEnd)),ee.illegal&&(le.illegalRe=F(ee.illegal)),ee.contains||(ee.contains=[]),ee.contains=[].concat(...ee.contains.map(function(Ge){return Qe(Ge==="self"?ee:Ge)})),ee.contains.forEach(function(Ge){Be(Ge,le)}),ee.starts&&Be(ee.starts,J),le.matcher=xe(le),le}if(O.compilerExtensions||(O.compilerExtensions=[]),O.contains&&O.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return O.classNameAliases=r(O.classNameAliases||{}),Be(O)}function pr(O){return O?O.endsWithParent||pr(O.starts):!1}function Qe(O){return O.variants&&!O.cachedVariants&&(O.cachedVariants=O.variants.map(function(F){return r(O,{variants:null},F)})),O.cachedVariants?O.cachedVariants:pr(O)?r(O,{starts:O.starts?r(O.starts):null}):Object.isFrozen(O)?r(O):O}var Ln="11.11.1";class cn extends Error{constructor(F,W){super(F),this.name="HTMLInjectionError",this.html=W}}const Gt=t,mr=r,hr=Symbol("nomatch"),XN=7,V3=function(O){const F=Object.create(null),W=Object.create(null),ce=[];let xe=!0;const Be="Could not find the language '{}', did you forget to load/include a language module?",ee={disableAutodetect:!0,name:"Plain text",contains:[]};let J={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:c};function le(U){return J.noHighlightRe.test(U)}function We(U){let oe=U.className+" ";oe+=U.parentNode?U.parentNode.className:"";const he=J.languageDetectRe.exec(oe);if(he){const Te=Et(he[1]);return Te||(pi(Be.replace("{}",he[1])),pi("Falling back to no-highlight mode for this block.",U)),Te?he[1]:"no-highlight"}return oe.split(/\s+/).find(Te=>le(Te)||Et(Te))}function Ge(U,oe,he){let Te="",Ve="";typeof oe=="object"?(Te=U,he=oe.ignoreIllegals,Ve=oe.language):(st("10.7.0","highlight(lang, code, ...args) has been deprecated."),st("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Ve=U,Te=oe),he===void 0&&(he=!0);const Rn={code:Te,language:Ve};Ko("before:highlight",Rn);const St=Rn.result?Rn.result:vi(Rn.language,Rn.code,he);return St.code=Rn.code,Ko("after:highlight",St),St}function vi(U,oe,he,Te){const Ve=Object.create(null);function Rn(K,re){return K.keywords[re]}function St(){if(!de.keywords){Ze.addText(Ie);return}let K=0;de.keywordPatternRe.lastIndex=0;let re=de.keywordPatternRe.exec(Ie),pe="";for(;re;){pe+=Ie.substring(K,re.index);const Ae=Dn.case_insensitive?re[0].toLowerCase():re[0],en=Rn(de,Ae);if(en){const[lt,dk]=en;if(Ze.addText(pe),pe="",Ve[Ae]=(Ve[Ae]||0)+1,Ve[Ae]<=XN&&(Jo+=dk),lt.startsWith("_"))pe+=re[0];else{const fk=Dn.classNameAliases[lt]||lt;Pn(re[0],fk)}}else pe+=re[0];K=de.keywordPatternRe.lastIndex,re=de.keywordPatternRe.exec(Ie)}pe+=Ie.substring(K),Ze.addText(pe)}function Xo(){if(Ie==="")return;let K=null;if(typeof de.subLanguage=="string"){if(!F[de.subLanguage]){Ze.addText(Ie);return}K=vi(de.subLanguage,Ie,!0,Z3[de.subLanguage]),Z3[de.subLanguage]=K._top}else K=qs(Ie,de.subLanguage.length?de.subLanguage:null);de.relevance>0&&(Jo+=K.relevance),Ze.__addSublanguage(K._emitter,K.language)}function dn(){de.subLanguage!=null?Xo():St(),Ie=""}function Pn(K,re){K!==""&&(Ze.startScope(re),Ze.addText(K),Ze.endScope())}function Y3(K,re){let pe=1;const Ae=re.length-1;for(;pe<=Ae;){if(!K._emit[pe]){pe++;continue}const en=Dn.classNameAliases[K[pe]]||K[pe],lt=re[pe];en?Pn(lt,en):(Ie=lt,St(),Ie=""),pe++}}function J3(K,re){return K.scope&&typeof K.scope=="string"&&Ze.openNode(Dn.classNameAliases[K.scope]||K.scope),K.beginScope&&(K.beginScope._wrap?(Pn(Ie,Dn.classNameAliases[K.beginScope._wrap]||K.beginScope._wrap),Ie=""):K.beginScope._multi&&(Y3(K.beginScope,re),Ie="")),de=Object.create(K,{parent:{value:de}}),de}function z3(K,re,pe){let Ae=b(K.endRe,pe);if(Ae){if(K["on:end"]){const en=new n(K);K["on:end"](re,en),en.isMatchIgnored&&(Ae=!1)}if(Ae){for(;K.endsParent&&K.parent;)K=K.parent;return K}}if(K.endsWithParent)return z3(K.parent,re,pe)}function ak(K){return de.matcher.regexIndex===0?(Ie+=K[0],1):(Us=!0,0)}function uk(K){const re=K[0],pe=K.rule,Ae=new n(pe),en=[pe.__beforeBegin,pe["on:begin"]];for(const lt of en)if(lt&&(lt(K,Ae),Ae.isMatchIgnored))return ak(re);return pe.skip?Ie+=re:(pe.excludeBegin&&(Ie+=re),dn(),!pe.returnBegin&&!pe.excludeBegin&&(Ie=re)),J3(pe,K),pe.returnBegin?0:re.length}function sk(K){const re=K[0],pe=oe.substring(K.index),Ae=z3(de,K,pe);if(!Ae)return hr;const en=de;de.endScope&&de.endScope._wrap?(dn(),Pn(re,de.endScope._wrap)):de.endScope&&de.endScope._multi?(dn(),Y3(de.endScope,K)):en.skip?Ie+=re:(en.returnEnd||en.excludeEnd||(Ie+=re),dn(),en.excludeEnd&&(Ie=re));do de.scope&&Ze.closeNode(),!de.skip&&!de.subLanguage&&(Jo+=de.relevance),de=de.parent;while(de!==Ae.parent);return Ae.starts&&J3(Ae.starts,K),en.returnEnd?0:re.length}function lk(){const K=[];for(let re=de;re!==Dn;re=re.parent)re.scope&&K.unshift(re.scope);K.forEach(re=>Ze.openNode(re))}let Yo={};function Q3(K,re){const pe=re&&re[0];if(Ie+=K,pe==null)return dn(),0;if(Yo.type==="begin"&&re.type==="end"&&Yo.index===re.index&&pe===""){if(Ie+=oe.slice(re.index,re.index+1),!xe){const Ae=new Error(`0 width match regex (${U})`);throw Ae.languageName=U,Ae.badRule=Yo.rule,Ae}return 1}if(Yo=re,re.type==="begin")return uk(re);if(re.type==="illegal"&&!he){const Ae=new Error('Illegal lexeme "'+pe+'" for mode "'+(de.scope||"<unnamed>")+'"');throw Ae.mode=de,Ae}else if(re.type==="end"){const Ae=sk(re);if(Ae!==hr)return Ae}if(re.type==="illegal"&&pe==="")return Ie+=`
`,1;if(Hs>1e5&&Hs>re.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Ie+=pe,pe.length}const Dn=Et(U);if(!Dn)throw In(Be.replace("{}",U)),new Error('Unknown language: "'+U+'"');const ck=De(Dn);let Bs="",de=Te||ck;const Z3={},Ze=new J.__emitter(J);lk();let Ie="",Jo=0,jt=0,Hs=0,Us=!1;try{if(Dn.__emitTokens)Dn.__emitTokens(oe,Ze);else{for(de.matcher.considerAll();;){Hs++,Us?Us=!1:de.matcher.considerAll(),de.matcher.lastIndex=jt;const K=de.matcher.exec(oe);if(!K)break;const re=oe.substring(jt,K.index),pe=Q3(re,K);jt=K.index+pe}Q3(oe.substring(jt))}return Ze.finalize(),Bs=Ze.toHTML(),{language:U,value:Bs,relevance:Jo,illegal:!1,_emitter:Ze,_top:de}}catch(K){if(K.message&&K.message.includes("Illegal"))return{language:U,value:Gt(oe),illegal:!0,relevance:0,_illegalBy:{message:K.message,index:jt,context:oe.slice(jt-100,jt+100),mode:K.mode,resultSoFar:Bs},_emitter:Ze};if(xe)return{language:U,value:Gt(oe),illegal:!1,relevance:0,errorRaised:K,_emitter:Ze,_top:de};throw K}}function Fs(U){const oe={value:Gt(U),illegal:!1,relevance:0,_top:ee,_emitter:new J.__emitter(J)};return oe._emitter.addText(U),oe}function qs(U,oe){oe=oe||J.languages||Object.keys(F);const he=Fs(U),Te=oe.filter(Et).filter(X3).map(dn=>vi(dn,U,!1));Te.unshift(he);const Ve=Te.sort((dn,Pn)=>{if(dn.relevance!==Pn.relevance)return Pn.relevance-dn.relevance;if(dn.language&&Pn.language){if(Et(dn.language).supersetOf===Pn.language)return 1;if(Et(Pn.language).supersetOf===dn.language)return-1}return 0}),[Rn,St]=Ve,Xo=Rn;return Xo.secondBest=St,Xo}function YN(U,oe,he){const Te=oe&&W[oe]||he;U.classList.add("hljs"),U.classList.add(`language-${Te}`)}function xs(U){let oe=null;const he=We(U);if(le(he))return;if(Ko("before:highlightElement",{el:U,language:he}),U.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",U);return}if(U.children.length>0&&(J.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(U)),J.throwUnescapedHTML))throw new cn("One of your code blocks includes unescaped HTML.",U.innerHTML);oe=U;const Te=oe.textContent,Ve=he?Ge(Te,{language:he,ignoreIllegals:!0}):qs(Te);U.innerHTML=Ve.value,U.dataset.highlighted="yes",YN(U,he,Ve.language),U.result={language:Ve.language,re:Ve.relevance,relevance:Ve.relevance},Ve.secondBest&&(U.secondBest={language:Ve.secondBest.language,relevance:Ve.secondBest.relevance}),Ko("after:highlightElement",{el:U,result:Ve,text:Te})}function JN(U){J=mr(J,U)}const zN=()=>{Wo(),st("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function QN(){Wo(),st("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let W3=!1;function Wo(){function U(){Wo()}if(document.readyState==="loading"){W3||window.addEventListener("DOMContentLoaded",U,!1),W3=!0;return}document.querySelectorAll(J.cssSelector).forEach(xs)}function ZN(U,oe){let he=null;try{he=oe(O)}catch(Te){if(In("Language definition for '{}' could not be registered.".replace("{}",U)),xe)In(Te);else throw Te;he=ee}he.name||(he.name=U),F[U]=he,he.rawDefinition=oe.bind(null,O),he.aliases&&K3(he.aliases,{languageName:U})}function ek(U){delete F[U];for(const oe of Object.keys(W))W[oe]===U&&delete W[oe]}function nk(){return Object.keys(F)}function Et(U){return U=(U||"").toLowerCase(),F[U]||F[W[U]]}function K3(U,{languageName:oe}){typeof U=="string"&&(U=[U]),U.forEach(he=>{W[he.toLowerCase()]=oe})}function X3(U){const oe=Et(U);return oe&&!oe.disableAutodetect}function tk(U){U["before:highlightBlock"]&&!U["before:highlightElement"]&&(U["before:highlightElement"]=oe=>{U["before:highlightBlock"](Object.assign({block:oe.el},oe))}),U["after:highlightBlock"]&&!U["after:highlightElement"]&&(U["after:highlightElement"]=oe=>{U["after:highlightBlock"](Object.assign({block:oe.el},oe))})}function rk(U){tk(U),ce.push(U)}function ik(U){const oe=ce.indexOf(U);oe!==-1&&ce.splice(oe,1)}function Ko(U,oe){const he=U;ce.forEach(function(Te){Te[he]&&Te[he](oe)})}function ok(U){return st("10.7.0","highlightBlock will be removed entirely in v12.0"),st("10.7.0","Please use highlightElement now."),xs(U)}Object.assign(O,{highlight:Ge,highlightAuto:qs,highlightAll:Wo,highlightElement:xs,highlightBlock:ok,configure:JN,initHighlighting:zN,initHighlightingOnLoad:QN,registerLanguage:ZN,unregisterLanguage:ek,listLanguages:nk,getLanguage:Et,registerAliases:K3,autoDetection:X3,inherit:mr,addPlugin:rk,removePlugin:ik}),O.debugMode=function(){xe=!1},O.safeMode=function(){xe=!0},O.versionString=Ln,O.regex={concat:h,lookahead:p,either:_,optional:f,anyNumberOfTimes:m};for(const U in me)typeof me[U]=="object"&&e(me[U]);return Object.assign(O,me),O},vr=V3({});return vr.newInstance=()=>V3({}),Ph=vr,vr.HighlightJS=vr,vr.default=vr,Ph}var Une=Hne();const lC=rt(Une);function Gne(e){const n=e.regex,t=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),r=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],u={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:r,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},s={className:"meta",begin:/^(>>>|\.\.\.) /},l={className:"subst",begin:/\{/,end:/\}/,keywords:u,illegal:/#/},c={begin:/\{\{/,relevance:0},d={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,s,c,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,s,c,l]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,c,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,c,l]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},p="[0-9](_?[0-9])*",m=`(\\b(${p}))?\\.(${p})|\\b(${p})\\.`,f=`\\b|${r.join("|")}`,h={className:"number",relevance:0,variants:[{begin:`(\\b(${p})|(${m}))[eE][+-]?(${p})[jJ]?(?=${f})`},{begin:`(${m})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${f})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${f})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${f})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${f})`},{begin:`\\b(${p})[jJ](?=${f})`}]},v={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:u,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},_={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:u,contains:["self",s,h,d,e.HASH_COMMENT_MODE]}]};return l.contains=[d,h,s],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:u,illegal:/(<\/|\?)|=>/,contains:[s,h,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},d,v,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,t],scope:{1:"keyword",3:"title.function"},contains:[_]},{variants:[{match:[/\bclass/,/\s+/,t,/\s*/,/\(\s*/,t,/\s*\)/]},{match:[/\bclass/,/\s+/,t]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[h,_,d]}]}}lC.registerLanguage("python",Gne);const HS=lC,cC="agent-code-modal-backdrop",Rv="agent-code-view-btn",jne="agent-code-block",Vne="View code";function Wne(e){const n=e==null?void 0:e.agent_code;return n!==void 0&&n.trim()!==""?n:void 0}function Kne(e,n){const t=`trial ${n+1} code`;return e===""?t:`${e} — ${t}`}function Xne(e,n,t,r){var s;if(Ti(),(s=e.querySelector(`:scope > .${Rv}`))==null||s.remove(),t.kind==="mix")return;const i=l3(n.length,t.recordTrialIndex),o=Wne(n[i]);if(o===void 0)return;const a=Kne(r,i),u=document.createElement("button");u.className=Rv,u.textContent=Vne,u.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation(),Yne(o,a)}),e.appendChild(u)}function Yne(e,n){Ti();const t=document.createElement("div");t.id=cC,t.className="agent-code-backdrop";const r=document.createElement("div");r.className="agent-code-modal";const i=document.createElement("button");i.className="agent-code-close-btn",i.textContent="×",i.title="Close (Esc)",i.addEventListener("click",Ti),r.appendChild(i);const o=document.createElement("h2");o.className="agent-code-modal-header",o.textContent=n,r.appendChild(o),r.appendChild(Jne(e)),t.appendChild(r),document.body.appendChild(t),document.addEventListener("keydown",dC),t.addEventListener("click",a=>{a.target===t&&Ti()})}function Ti(){const e=document.getElementById(cC);e&&(e.remove(),document.removeEventListener("keydown",dC))}function dC(e){e.key==="Escape"&&Ti()}function Jne(e){const n=document.createElement("pre");n.className=jne;const t=document.createElement("code");if(HS)try{return t.innerHTML=HS.highlight(e,{language:"python"}).value,n.appendChild(t),n}catch{}return t.textContent=e,n.appendChild(t),n}const fC="trial-selection-suffix",pC="inspected-combination-suffix",US=[fC,pC];function zne(e,n,t){var o;if((o=e.querySelector(`:scope > .${n}`))==null||o.remove(),t===null)return;const r=document.createElement("span");r.className=n,r.textContent=t;const i=Qne(e,n);i===null?e.appendChild(r):e.insertBefore(r,i)}function mC(e,n,t){for(const r of e){const i=document.getElementById(`${r}-section-header`);i&&zne(i,n,t)}}function Qne(e,n){const t=US.indexOf(n);if(t===-1)throw new Error(`Unknown section heading suffix: ${n}`);for(const r of US.slice(t+1)){const i=e.querySelector(`:scope > .${r}`);if(i!==null)return i}return e.querySelector(`:scope > .${Rv}`)}const hC="combination-selector",Zne="combination-selector-pair",ete="combination-selector-param-name",nte="inspected-cparam-select",tte="data-inspected-cparam",rte=".arg-warning",ite=`View your beliefs
at parameters`,ote=`View responses
at parameters`,ate="; switch view in side panel",ute=", ";function p3(e,n){return e.has_cparams()&&Wn(tt(n))}function vC(e,n,t){return e!=="Compare"&&p3(n,t)}function ste(e){return e.kind==="yours"?ite:ote}function lte(e,n,t,r,i={}){if(!p3(n,r)){e.replaceChildren();return}const o=n.get_cparams().map(a=>fte(a,W2(a,t))).join("");e.innerHTML=`<div class="${hC}">`+o+gC(n,t,i)+"</div>"}function cte(e,n,t,r){const i=e.querySelector(`.${hC}`);if(i===null)return;const o=gC(n,t,r),a=i.querySelector(`:scope > ${rte}`);o===""?a==null||a.remove():a?a.outerHTML=o:i.insertAdjacentHTML("beforeend",o)}function dte(e,n,t){return p3(e,t)?`${e.get_cparams().map(i=>`${bC(i)} = ${W2(i,n)}`).join(ute)}${ate}`:null}function _C(e,n,t){mC([Fe.ESTIMATION],pC,dte(e,n,t))}function gC(e,n,t){return vT(e.get_cparams(),Bu(e,n),t.renderDefn??x,t.filter,t.description)}function bC(e){return e.longname??ge(e.id)}function fte(e,n){const t=ge(e.id),r=So(e).map(i=>{const o=String(i),a=o===String(n)?" selected":"";return`<option value="${X(o)}"${a}>${x(o)}</option>`}).join("");return`<span class="${Zne}"><span class="${ete}">${x(bC(e))}</span><select class="${nte}" ${tte}="${X(t)}">${r}</select></span>`}const fe={interactionMode:"imode",queryMode:"query_mode",jtaskGroup:"jtask_group",mixAgentCli:"mix_cli",mixModelVersion:"mix_model_version",mixEffort:"mix_effort",adhocMode:"adhoc_mode",adhocName:"adhoc_name",adhocLabel:"adhoc_label",trialEntry:"trial_entry",trialIndex:"trial_index",comparePinned:"cmp_pinned",compareJtaskGroup:"cmp_jtask_group",compareAgentCli:"cmp_agent_cli",compareModelVersion:"cmp_model_version",compareEffort:"cmp_effort"},m3=Object.values(fe),Ts="aux_forms",qo={exampleList:"example_folds",framingNote:"framing_folds",proseSection:"prose_section_folds"},pte=["response_type","prob_as_odds","density_scale","show_framing","long_symbol_names","srcquotes_view",Ts,...wo.map(e=>qo[e]),"calc_pin","calc_unpin","calc_value","inspect_value"],yC=[...pte,...m3],mte=[...yC,...r_],Cv="view",GS="default",hte=m3.filter(e=>e!==fe.interactionMode),EC=[...m3,...r_,Vi],jS="model_effort",Ov=":",Nv={jtaskGroup:"jtask_group",agentCli:"agent_cli",modelVersion:"model_version",effort:"effort"},kv={jtaskGroup:fe.compareJtaskGroup,agentCli:fe.compareAgentCli,modelVersion:fe.compareModelVersion,effort:fe.compareEffort},Mv={point:"point",bounds:"bounds",distr:"sample"},vte=Object.fromEntries(Object.entries(Mv).map(([e,n])=>[n,e])),VS={inline:!0,glyph:!1},_te="inline",gte="glyph",SC="open",wC="closed",WS={[SC]:!0,[wC]:!1};function KS(e){return e?SC:wC}const XS={true:!0,false:!1},YS=["probability","odds"],JS=["raw","log"],bte="Shared link";function AC(e,n){const t={},r=[],i=[],o=e.get("response_type");if(o!==null){const f=Mv[o];f!==void 0?t.inputMode=f:r.push(`response_type=${JSON.stringify(o)} invalid; expected one of: ${Object.keys(Mv).join(", ")}`)}$te(e,n,t,r,i);const a=e.get("prob_as_odds");a!==null&&(YS.includes(a)?t.probAsOdds=a:r.push(`prob_as_odds=${JSON.stringify(a)} invalid; expected one of: ${YS.join(", ")}`));const u=e.get("density_scale");u!==null&&(JS.includes(u)?t.densityScale=u:r.push(`density_scale=${JSON.stringify(u)} invalid; expected one of: ${JS.join(", ")}`));const s=QS(e,"show_framing",r);s!==null&&(t.showFramingNotes=s);const l=QS(e,"long_symbol_names",r);l!==null&&(t.symbolMnames=l);const c=e.get("srcquotes_view");if(c!==null){const f=VS[c];f===void 0?r.push(`srcquotes_view=${JSON.stringify(c)} invalid; expected one of: ${Object.keys(VS).join(", ")}`):t.srcquotesInlinedOverride=f}const d=zS(e,Ts,r);d!==null&&(t.auxFormsFoldOpen=d);for(const f of wo){const h=zS(e,qo[f],r);h!==null&&(t.proseFoldsOpenByKind={...t.proseFoldsOpenByKind,[f]:h})}yte(e,n.jprobTemplate,t,r,i);const p=ZS(e,"calc_value",n.jprobTemplate,r);p!==null&&(t.cparamValues=p);const m=ZS(e,"inspect_value",n.jprobTemplate,r);return m!==null&&(t.inspectedCparamValues=m),{overrides:t,errors:r,readerFacingErrors:i}}function zS(e,n,t){const r=e.get(n);if(r===null)return null;const i=WS[r];return i!==void 0?i:(t.push(`${n}=${JSON.stringify(r)} invalid; expected one of: ${Object.keys(WS).join(", ")}`),null)}function QS(e,n,t){const r=e.get(n);if(r===null)return null;const i=XS[r];return i===void 0?(t.push(`${n}=${JSON.stringify(r)} invalid; expected one of: ${Object.keys(XS).join(", ")}`),null):i}function yte(e,n,t,r,i){const o=e.getAll("calc_pin"),a=e.getAll("calc_unpin");if(o.length===0&&a.length===0)return;const u=new Set(n.get_cparam_bare_names()),s=new Set(o.filter(c=>a.includes(c)));for(const c of s)r.push(`${JSON.stringify(c)} appears in both calc_pin and calc_unpin; skipped`);let l=!1;for(const[c,d]of[[o,!0],[a,!1]]){const p=d?"calc_pin":"calc_unpin";for(const m of c)if(!s.has(m)){if(!u.has(m)){if(m===jS){l=!0;continue}r.push(`${p}=${JSON.stringify(m)} is not a parameter of this jprob; expected one of: ${[...u].join(", ")}`);continue}(t.cparamPinned??(t.cparamPinned={}))[m]=d}}l&&i.push(`The link pins or unpins ${jS}, the model/version/effort plot axis, which this view no longer has: Compare's own pin rows replaced it. The rest of the link still applies.`)}function ZS(e,n,t,r){const i=e.getAll(n);if(i.length===0)return null;const o=new Map,a=new Set;for(const s of i){const l=s.indexOf(Ov);if(l===-1){r.push(`${n}=${JSON.stringify(s)} is not of the form <name>${Ov}<value>; skipped`);continue}let c,d;try{c=decodeURIComponent(s.slice(0,l)),d=decodeURIComponent(s.slice(l+1))}catch(p){if(!(p instanceof URIError))throw p;r.push(`${n}=${JSON.stringify(s)} has a malformed %-escape; skipped`);continue}o.has(c)&&a.add(c),o.set(c,d)}const u={};for(const[s,l]of o){if(a.has(s)){r.push(`${n} names ${JSON.stringify(s)} more than once; skipped`);continue}const c=t.find_cparam(s);if(c===void 0){r.push(`${n}=${JSON.stringify(s)} is not a parameter of this jprob; expected one of: ${t.get_cparam_bare_names().join(", ")}`);continue}const d=So(c),p=d.find(m=>String(m)===l);if(p===void 0){r.push(`${n} value ${JSON.stringify(l)} for ${JSON.stringify(s)} is not one of its allowed values: ${d.join(", ")}`);continue}u[s]=p}return Object.keys(u).length===0?null:u}function ew(e,n){return encodeURIComponent(e)+Ov+encodeURIComponent(String(n))}function ga(e,n){const t=e.get(n);return t===null?null:t.split(",").filter(r=>r!=="").map(decodeURIComponent)}function ba(e,n,t){e.set(n,t.map(encodeURIComponent).join(","))}function Ete(e){const n=ga(e,fe.mixAgentCli),t=ga(e,fe.mixModelVersion),r=ga(e,fe.mixEffort);return n===null&&t===null&&r===null?null:{agentClis:n??[],modelVersions:t??[],efforts:r??[]}}function Ste(e,n){const t=e.get(fe.trialIndex);if(t===null||t===nr)return Yn;if(!/^\d+$/.test(t))return n.push(`${fe.trialIndex}=${JSON.stringify(t)} is neither ${nr} nor a non-negative integer`),Yn;const r=Number(t),i=e.get(fe.trialEntry);return i===null?{kind:"adhoc-trial",entryTrialIndex:r}:{kind:"methodical-trial",identity:{entry_id:i,entry_trial_index:r}}}function wte(e,n){const t=e.get(fe.adhocMode),r=e.get(fe.adhocName),i=e.get(fe.adhocLabel);return t===null&&r===null&&i===null?null:t!=="plainnum"&&t!=="plaincode"?(n.push(`${fe.adhocMode}=${JSON.stringify(t)} invalid; expected plainnum or plaincode`),null):r===null||i===null?(n.push(`${fe.adhocMode} requires ${fe.adhocName} and ${fe.adhocLabel}`),null):{nameOrPseudoname:r,queryMode:t,label:i}}function Ate(e,n){const t=fe.comparePinned;if(!(e.has(t)||Ot.some(u=>e.has(kv[u]))))return null;const i=ga(e,t),o=Object.values(Nv);for(const u of i??[])o.includes(u)||n.push(`${t} names ${JSON.stringify(u)}, which is not one of Compare's rows; expected any of: ${o.join(", ")}`);const a=u=>({pinned:i===null?U2[u].pinned:i.includes(Nv[u]),value:e.get(kv[u])});return{jtaskGroup:a("jtaskGroup"),agentCli:a("agentCli"),modelVersion:a("modelVersion"),effort:a("effort")}}function $te(e,n,t,r,i){const o=e.get(fe.interactionMode);if(o===null){Tte(e,n,t,i);return}const a=Ct.find(s=>s===o);if(a===void 0){i.push(`The link names an unknown mode (${JSON.stringify(o)}); showing the default view instead. Expected one of: ${Ct.join(", ")}.`);return}t.interactionMode=a;const u=e.get(fe.queryMode);if(u==="plainnum"||u==="plaincode"?t.estimateQueryMode=u:u!==null&&r.push(`${fe.queryMode}=${JSON.stringify(u)} invalid; expected plainnum or plaincode`),a!=="Estimate"){if(a==="Compare"){const s=Ate(e,r);s!==null&&(t.compare=s);return}t.readTrials={jtaskGroupId:e.get(fe.jtaskGroup),mixtureGroupSelection:Ete(e),adhoc:wte(e,r),trial:Ste(e,r)}}}function Tte(e,n,t,r){const{identity:i,errors:o}=vH(e);if(r.push(...o),i===null)return;const a=yH(i,n.presetData);t.interactionMode=a.mode,a.estimateQueryMode!==null&&(t.estimateQueryMode=a.estimateQueryMode),a.mode==="ReadTrials"&&(t.readTrials=a.readTrials)}function Ite(e){const n=e.get(Cv);return n===null?!1:n===GS?!0:(console.error(`[url_view_overrides] ${Cv}=${JSON.stringify(n)} invalid; expected ${GS}`),!1)}function Lte(e,n,t){if(typeof window>"u")return{linkAppliedUi:n_(),namedSelection:!1,askedForDefaultView:!1,carriedViewKeys:!1};const r=new URLSearchParams(window.location.search),i=structuredClone(e.ui),o=Ite(r);o&&tv(e.ui,t);const{overrides:a,errors:u,readerFacingErrors:s}=AC(r,n);for(const c of u)console.error(`[url_view_overrides] ${c}`);for(const c of s)Xt(bte,new Error(c));tv(e.ui,a);const l={linkAppliedUi:dH(i,e.ui),namedSelection:r.has(fe.interactionMode)||hH(r)||o&&t.interactionMode!==void 0,askedForDefaultView:o,carriedViewKeys:$C.some(c=>r.has(c))};return o&&Pte(),l}function Rte(e,n){const{ui:t,srcquotesInlined:r,uniformProseFoldOpenByKind:i}=e,{jprobTemplate:o}=n,a=new URLSearchParams,u=[];if(a.set("response_type",vte[t.inputMode]),a.set("prob_as_odds",t.probAsOdds),a.set("density_scale",t.densityScale),a.set("show_framing",String(t.showFramingNotes)),a.set("long_symbol_names",String(t.symbolMnames)),o.has_srcquotes()&&a.set("srcquotes_view",r?_te:gte),r$(o).length>0){const s=t.foldOpenById[Pr]??n$;a.set(Ts,KS(s))}for(const s of wo){const l=i[s];l!==null&&a.set(qo[s],KS(l))}return Cte(t,n,a),kte(t,o,n,a),{params:a,errors:u}}function Cte(e,n,t){if(t.set(fe.interactionMode,e.interactionMode),e.interactionMode==="Estimate"){t.set(fe.queryMode,e.estimateQueryMode);return}if(e.interactionMode==="Compare"){Ote(e.compare,n,t);return}const{resultSet:r}=Nn(e.readTrials,n);if(r.kind==="methodical"){t.set(fe.jtaskGroup,r.jtaskGroupId);const{agentClis:o,modelVersions:a,efforts:u}=r.mixtureGroupSelection;ba(t,fe.mixAgentCli,o),ba(t,fe.mixModelVersion,a),ba(t,fe.mixEffort,u)}const i=e.readTrials.adhoc;i!==null&&(t.set(fe.adhocMode,i.queryMode),t.set(fe.adhocName,i.nameOrPseudoname),t.set(fe.adhocLabel,i.label)),Nte(e.readTrials.trial,t)}function Ote(e,n,t){const{rows:r}=G2(e,n.presetData);ba(t,fe.comparePinned,Ot.filter(i=>e[i].pinned).map(i=>Nv[i]));for(const i of Ot){const o=e[i].pinned?r[i].value:e[i].value;o!==null&&t.set(kv[i],o)}}function Nte(e,n){if(e.kind==="mix"){n.set(fe.trialIndex,nr);return}if(e.kind==="adhoc-trial"){n.set(fe.trialIndex,String(e.entryTrialIndex));return}n.set(fe.trialEntry,e.identity.entry_id),n.set(fe.trialIndex,String(e.identity.entry_trial_index))}function kte(e,n,t,r){const i=Xr(e,t);if(Wn(tt(i))){for(const o of n.get_cparam_bare_names())r.append(e.cparamPinned[o]!==!1?"calc_pin":"calc_unpin",o);for(const o of n.get_cparams()){const a=ge(o.id);r.append("calc_value",ew(a,Mte(o,e)))}if(vC(e.interactionMode,n,i))for(const[o,a]of Object.entries(Bu(n,{ui:e})))r.append("inspect_value",ew(o,a))}}function Mte(e,n){return j2(n.cparamValues[ge(e.id)],e.default_value,So(e))}const $C=[...mte,Vi];function TC(e){if(typeof window>"u")return;const n=new URL(window.location.href);if(!e.some(i=>n.searchParams.has(i)))return;for(const i of e)n.searchParams.delete(i);const t=n.searchParams.toString(),r=`${n.pathname}${t?"?"+t:""}${n.hash}`;window.history.replaceState(null,"",r)}function He(e){TC([e])}function Pte(){TC([...$C,Cv])}const Dte="default_view";function Fte(e,n){if(e===void 0)return{overrides:{},errors:[]};const t=[],r=new URLSearchParams(e),i=yC;for(const u of new Set(r.keys()))i.includes(u)||(t.push(`${JSON.stringify(u)} is not a key of the view vocabulary; expected any of: `+i.join(", ")),r.delete(u));if(!r.has(fe.interactionMode)){const u=hte.filter(s=>r.has(s));if(u.length>0){t.push(`${u.join(", ")} say nothing without ${fe.interactionMode}, which names the mode they select in`);for(const s of u)r.delete(s)}}const o=AC(r,n);return t.push(...o.errors,...o.readerFacingErrors),{overrides:qte(o.overrides,n,t),errors:t}}function qte(e,n,t){var a;const r={...e},i=Eo(n.presetData);r.interactionMode!==void 0&&!i.includes(r.interactionMode)&&(t.push(`${fe.interactionMode}=${r.interactionMode} is a mode this jprob does not offer with the data it has; it offers: ${i.join(", ")}`),delete r.interactionMode),r.estimateQueryMode==="plaincode"&&!n.jprobTemplate.has_cparams()&&(t.push(`${fe.queryMode}=plaincode needs a jprob with parameters, and this one has none`),delete r.estimateQueryMode);const o=((a=r.readTrials)==null?void 0:a.adhoc)??null;return r.readTrials!==void 0&&o!==null&&m$(o,n.presetData)===null&&(t.push("the adhoc entry it names is not in this jprob's adhoc results: "+Ma(o)),r.readTrials={...r.readTrials,adhoc:null}),r}function xte(e,n,t){const{overrides:r,errors:i}=Fte(e,n);if(i.length===0)return r;const o=`this jprob's ${Dte} (${JSON.stringify(e)}) has ${i.length===1?"a part":"parts"} that cannot be honored: ${i.join("; ")}`;return console.error(`[default_view] ${o}`),r}const IC=/([^/]+)\.html$/;function nw(e){var n;return((n=IC.exec(e))==null?void 0:n[1])??null}function Bte(e,n){return e.replace(IC,`${n}.html`)}const LC="link-arrival-notice",Hte="link-arrival-notice-text",Ute="link-arrival-notice-close",Gte="×",jte="Close this notice",Vte="This link opened the author's chosen view, which differs from your saved view settings.",Wte="This link opened a view that differs from your saved view settings.",Kte="Your settings are kept: reload the page to return to them.",Xte='Your settings are kept: to return to them, delete everything after "?" in the address bar, then reload the page.';function Yte(e){const n=e.openedTheDefaultViewAlone?Vte:Wte,t=e.viewParamsLeftTheAddressBar?Kte:Xte;return`${n} ${t}`}function Jte(e,n=document){RC(n);const t=n.createElement("aside");t.id=LC,t.setAttribute("role","status");const r=n.createElement("p");r.className=Hte,r.textContent=Yte(e);const i=n.createElement("button");i.type="button",i.className=Ute,i.setAttribute("aria-label",jte),i.textContent=Gte,i.addEventListener("click",()=>t.remove()),t.append(r,i),n.body.append(t)}function RC(e=document){var n;(n=e.getElementById(LC))==null||n.remove()}function CC(e,n){if(n.length!==e.positions.length)throw new Error(`entry-axis sweep: the ${e.title} axis has ${e.positions.length} positions but was given ${n.length} entries`)}function OC(e,n,t){var i;if(e===null)return null;const r=hn(e,n);return r===null?null:((i=t(e,r))==null?void 0:i.mean)??null}function zte(e,n){const t=new Map;for(const r of n){const i=e.positions[r.x].segmentKey,o=t.get(i);o?o.push(r):t.set(i,[r])}return Array.from(t,([r,i])=>({points:i,label:r,...wQ}))}function Qte(e,n,t,r,i){CC(e,n);const o=[],a=[];return n.forEach((u,s)=>{if(u===null)return;const l=hn(u,t);if(l===null)return;const c=r(u,l);if(c===void 0)return;o.push({x:s,y:c.mean});const d=i==null?void 0:i(u);if(d!==void 0)for(const p of l.trials){const m=d(p,l);m!==void 0&&a.push({x:s,y:m})}}),{series:zte(e,o),xLabels:e.positions.map(u=>u.tickLabel),scatterPoints:a,legend:[]}}function Zte(e,n,t,r,i,o){return CC(e,n),{cells:n.map(a=>r.map(u=>OC(a,{...i,[t]:u},o))),xLabels:r.map(String),yLabels:e.positions.map(a=>a.tickLabel),xAxisLabel:t,yAxisLabel:e.title}}function ere(e,n,t){const{jtaskGroupAxis:r,configurationAxis:i,entries:o}=e;return{cells:i.positions.map((a,u)=>r.positions.map((s,l)=>OC(o[l][u],n,t))),xLabels:r.positions.map(a=>a.tickLabel),yLabels:i.positions.map(a=>a.tickLabel),xAxisLabel:r.title,yAxisLabel:i.title}}const ou="data-mixture-row",h3="data-mixture-value",NC="mixture-group-selector",nre="mixture-group-row",tre="mixture-group-row-label",rre="mixture-group-box",ire="mixture-group-box-unavailable",kC={agentCli:"Agent CLI",modelVersion:"Model",effort:"Effort"},au="unavailable";function ore(e,n){e.className=NC,e.innerHTML=Fx.map(t=>are(t,n.interpretation.rows[t],n.disabled)).join("");for(const t of e.querySelectorAll('input[type="checkbox"]'))t.indeterminate=t.dataset.mixtureState==="partial"}function are(e,n,t){const r=n.length===0?'<span class="mixture-group-row-empty">none published</span>':n.map(i=>ure(e,i,t)).join("");return`<div class="${nre}"><span class="${tre}">${kC[e]}</span>`+r+"</div>"}function ure(e,n,t){const r=t||n.disabled&&!n.unavailable,i=n.unavailable?` ${ire}`:"",o=n.unavailable?`${n.hoverText} — ${au} in this task group`:n.hoverText,a=n.unavailable?`<span class="mixture-group-box-unavailable-mark">(${au})</span>`:"";return`<label class="${rre}${i}" title="${X(o)}"><input type="checkbox" ${ou}="${e}" ${h3}="${X(n.value)}" data-mixture-state="${n.state}"${n.state==="checked"?" checked":""}${r?" disabled":""}>${x(n.label)}${a}</label>`}function sre(e,n,t){for(const r of e.querySelectorAll(`.${NC} input[${ou}]`))if(r.getAttribute(ou)===n&&r.getAttribute(h3)===t){r.focus({preventScroll:!0});return}}const MC="compare-view",lre="Compare results",tw="compare-plot",cre="compare-unavailable-state",dre="compare-pin-row",fre="compare-pin-row-unavailable",PC="compare-row-slider",DC="compare-row-pin-checkbox",zt="data-compare-row",pre="compare-jtask-group-list",mre="compare-jtask-group-designator",FC="view-in-read-trials",hre="View in ReadTrials",qC="data-jtask-group",xC="data-configuration",BC="data-combination",Pv="data-trial-identity",vre="compare-view-in-read-trials",rw={jtaskGroup:"Task group",...kC},_re=`A pinned value is unavailable, so there is nothing to compare. Unpin the row marked "${au}" to remove it.`,gre="No results are published for the pinned task group and model.",bre="The pinned results have no data for this parameter combination.";function yre(e,n,t){const r=(l,c)=>{if(e!=="jtaskGroup"||t.jtaskGroups.length<2)return c;const d=t.jtaskGroups.find(p=>p.jtaskGroupId===l);return d===void 0?c:`${d.designator}: ${c}`},i=n.unavailable?` ${fre}`:"";let o=`<div class="cparam-row ${dre}${i}" ${zt}="${e}">`;o+=`<label class="cparam-label">${x(rw[e])}</label>`;const a=n.offered.length>1&&!n.unavailable;if(a){const l=n.offered.findIndex(c=>c.value===n.value);o+=`<input type="range" class="${PC}" ${zt}="${e}" aria-label="${X(rw[e])}" min="0" max="${n.offered.length-1}" step="1" value="${Math.max(l,0)}" ${n.pinned?"":"disabled "}data-values='${x(JSON.stringify(n.offered.map(c=>c.value)))}'>`}else o+='<span class="compare-row-slider-placeholder"></span>';const u=n.offered.find(l=>l.value===n.value),s=n.value===null?"—":r(n.value,n.valueLabel??n.value);return o+=`<span class="cparam-value-label" title="${X((u==null?void 0:u.hoverText)??n.value??"")}">${x(s)}</span>`,n.unavailable&&(o+=`<span class="compare-pin-row-unavailable-mark">(${au})</span>`),(a||n.unavailable)&&(o+=`<label class="cparam-pin-label"><input type="checkbox" class="${DC}" ${zt}="${e}"${n.pinned?" checked":""}> pin</label>`),o+"</div>"}function Ere(e,n,t){var i;const r=new Map;for(const o of n){const a=(i=t.find_cparam(o))==null?void 0:i.allowed_values,u=new Set(e.flatMap(l=>o3(l,o,a))),s=(a??[]).filter(l=>u.has(l));r.set(o,a===void 0?[...u]:s)}return r}function v3(e){return`<p class="${cre}">${x(e)}</p>`}function iw(e){const{grid:n}=e;return e.configurationAxisSwept?{axis:n.configurationAxis,entries:n.entries[0]}:{axis:n.jtaskGroupAxis,entries:n.entries.map(t=>t[0])}}function Sre(e,n,t,r,i,o){const{jprobTemplate:a,state:u,globalOpts:s}=o,l=BR([...r],u.ui.cparamPinned),c=mB(n,l.length);if(c>Iv){const v=c-Iv;e.innerHTML=`<div class="code-info"><p>Pin at least ${v} more row${v===1?"":"s"} to visualize results.</p><p>Currently ${c} are unpinned, counting the agent CLI, model and effort rows as one.</p></div>`;return}const d={};for(const v of r)ws(v,u.ui.cparamPinned)&&(d[v]=si(v,u,a.find_cparam(v),i.get(v)??[]));const p=[...n.jtaskGroupAxisSwept?[n.grid.jtaskGroupAxis.positions.length]:[],...n.configurationAxisSwept?[n.grid.configurationAxis.positions.length]:[]],m=WR(a,t,s,KR(l,i,p)),{heatmapValueRange:f,linePlotYRangePaddingPercent:h}=XR(a,t);if(p.length===0)wre(e,n,t,l,i,d,m,f,h,o);else if(c===1){const{axis:v,entries:_}=iw(n),g=Qte(v,_,d,m.statsForCombo,m.trialSampleMeanFor);s3(e,g,v.title,h,u3(g.scatterPoints,t))}else if(p.length===2)iu(e,ere(n.grid,d,m.statsForCombo),f,"");else{const{axis:v,entries:_}=iw(n),g=l[0];iu(e,Zte(v,_,g,i.get(g)??[],d,m.statsForCombo),f,"")}m.attachFollowUps(e)}function wre(e,n,t,r,i,o,a,u,s,l){var m;const c=((m=n.grid.entries[0])==null?void 0:m[0])??null;if(c===null){e.innerHTML=v3(gre);return}if(r.length===0){Are(e,n,c,t,o,a,l);return}const[d,p]=r;if(p===void 0){const f=JR(c,d,i.get(d)??[],o,"average",a.statsForCombo,a.trialSampleMeanFor(c));s3(e,f,d,s,u3(f.scatterPoints,t));return}iu(e,zR(c,d,i.get(d)??[],p,i.get(p)??[],o,a.statsForCombo),u,"")}function Are(e,n,t,r,i,o,{jprobTemplate:a,ctx:u,state:s,globalOpts:l}){const c=hn(t,i);if(c===null){e.innerHTML=v3(bre);return}nC(e,t,c,s,l,r,o.sampleTarget,o.paramRanges,a,$o(r,a,u),Nee,"methodical");const d=uR(c.trials.length,t.count);d!==null&&e.insertAdjacentHTML("afterbegin",`<div class="code-info"><span class="${rR}">${x(d)}.</span></div>`),e.insertAdjacentHTML("beforeend",$re(n,t,c))}function $re(e,n,t){const r=e.grid.jtaskGroupAxis.positions[0].identity,i=e.grid.configurationAxis.positions[0].identity,o=t.trials.length===1?B2(n,or(t.trials[0])):null,a=(u,s)=>` ${u}="${X(JSON.stringify(s))}"`;return`<div class="${vre}"><button type="button" class="${FC}" ${qC}="${X(r)}"`+a(xC,i)+a(BC,t.cparams)+(o===null?"":a(Pv,o))+`>${x(hre)}</button></div>`}function Tre(e,{jprobTemplate:n,state:t,presetData:r}){if(e.jtaskGroups.length<2)return"";const i=gT(r),o=e.grid.jtaskGroupAxis.positions.map(a=>{const u=i.find(s=>s.jtaskGroupId===a.identity);if(u===void 0)throw new Error(`Compare: task group ${JSON.stringify(a.identity)} is on the axis but is not a published task group`);return`<li><span class="${mre}">${x(a.tickLabel)}</span>`+bT(u,i,{jprobTemplate:n,jtaskHashGroups:r.jtaskHashGroups,foldOpenById:t.ui.foldOpenById,provenanceFoldId:`${_T}-${a.tickLabel}`})+"</li>"});return`<ul class="${pre}">${o.join("")}</ul>`}const Ire=/^[A-Za-z_][\w-]*$/;function Lre(e){if(!(e instanceof HTMLElement)||e.closest(`.${MC}`)===null)return null;const n=e.classList[0];if(n===void 0||!Ire.test(n))return null;const t=(r,i)=>i===null?"":`[${r}=${JSON.stringify(i)}]`;return`.${n}`+t(zt,e.getAttribute(zt))+t("data-cparam",e.getAttribute("data-cparam"))+(e instanceof HTMLInputElement&&e.type==="radio"?t("value",e.value):"")}function Rre(e,n){var h,v;const{jprobTemplate:t,state:r,presetData:i,formRegistry:o}=n,a=Lre(document.activeElement),u=G2(r.ui.compare,i),s=LT(t,r,"sample",o),l=i.richcodeResults.filter(qu);mne(l);const c=((h=l[0])==null?void 0:h.cparam_names)??[],d=Ere(l,c,t),p=Ot.map(_=>yre(_,u.rows[_],u)).join("");e.innerHTML=`<section class="${MC}" aria-labelledby="compare-view-heading"><h2 id="compare-view-heading">${x(lre)}</h2><div class="compare-controls">`+CT(t,r,"sample",s,o)+`<div class="cparam-controls">${p}`+ZR(c,t,r,d).html+`</div></div><div class="${tw}"></div>`+Tre(u,n)+"</section>";const m=e.querySelector(`.${tw}`),f=VR(s);u.unavailable?m.innerHTML=v3(_re):s===null||f!==null?m.innerHTML=f:Sre(m,u,s,c,d,n),a!==null&&((v=e.querySelector(a))==null||v.focus({preventScroll:!0}))}function ow(e,n="",t=""){return{name:n,description:t,loadings:Object.fromEntries(e.map(r=>[r,0]))}}function HC(e,n){const t=new Set(n);return{latents:e.latents.map(r=>{const i=Object.entries(r.loadings).filter(([o,a])=>!t.has(o)&&a!==0);return i.length>0&&console.warn(`joint-dependence draft: dropping loadings on subjective variable(s) ${i.map(([o])=>o).join(", ")}, which this jprob no longer samples`),{...r,loadings:Object.fromEntries(n.map(o=>[o,r.loadings[o]??0]))}})}}function UC(e,n){return e==null?{latents:[]}:HC({latents:e.latents.map(t=>({name:t.name,description:t.description,loadings:{...t.loadings}}))},n)}function Cre(e){return e.latents.length===0?null:{latents:e.latents.map(n=>({name:n.name.trim(),description:n.description.trim(),loadings:Object.fromEntries(Object.entries(n.loadings).filter(t=>t[1]!==null))}))}}function GC(e,n){return Object.fromEntries(n.map(t=>[t,e.latents.reduce((r,i)=>{const o=i.loadings[t]??0;return r+o*o},0)]))}function Ore(e,n){return n.map(t=>n.map(r=>t===r?1:e.latents.reduce((i,o)=>i+(o.loadings[t]??0)*(o.loadings[r]??0),0)))}function Nre(e){return e.latents.some(n=>Object.values(n.loadings).some(t=>t!==null&&t!==0))}function jC(e,n,t=[],r={}){const i=l=>r[l]??l,o=[];e.latents.length>Ua&&o.push({message:`${e.latents.length} latents exceeds the limit of ${Ua}.`});const a=new Set;e.latents.forEach((l,c)=>{const d=`Latent ${c+1}`;l.name.trim()===""&&o.push({message:`${d} needs a short name.`,latentIndex:c,field:"name"}),l.description.trim()===""&&o.push({message:`${d} needs a description saying what its positive direction means.`,latentIndex:c,field:"description"});for(const p of n){const m=l.loadings[p]??null;m===null?(a.add(p),o.push({message:`${d}: no loading given for ${i(p)} — enter a number from −1 to +1 (0 if the latent does not apply to it).`,latentIndex:c,svar:p})):(!Number.isFinite(m)||m<-1||m>1)&&(a.add(p),o.push({message:`${d}: the loading on ${i(p)} must be between −1 and +1.`,latentIndex:c,svar:p}))}});const u=GC(e,n),s=new Set(t);for(const l of n){const c=u[l];!a.has(l)&&c>1+_I&&o.push({message:`The squared loadings on ${i(l)} sum to ${c.toFixed(3)}, over its budget of 1 by ${(c-1).toFixed(3)} — no independent variation is left for it.`,svar:l}),c>0&&s.has(l)&&o.push({message:`${i(l)} has a single-value distribution in this response, so a loading on it has no effect — zero the loading or give it a spread distribution.`,svar:l})}return o}function VC(e,n,t=[]){const r=jC(e,n,t);if(r.length>0)return{kind:"invalid",problems:r};const i=Cre(e),o=ko(i,n,t);if(o!==null)throw new Error("joint-dependence draft passed the editor's checks but not validateLloads: "+o);return{kind:"valid",lloads:i}}const Is="auto-expand",kre="estimator-text-input",Mre="estimator-text-form",Pre=1;function WC(e){const n=document.createElement("div");n.className=Mre;const t=document.createElement("textarea");t.className=`${kre} ${e.className} ${Is}`,t.rows=Pre,t.spellcheck=!1,t.setAttribute("aria-label",e.ariaLabel);for(const[r,i]of Object.entries(e.dataset??{}))t.dataset[r]=i;return t.value=e.value,n.appendChild(t),KC(t),n}function KC(e){const n=()=>{e.style.height="auto",e.style.height=`${e.scrollHeight}px`};e.addEventListener("input",n),n()}function XC(e){for(const n of e.querySelectorAll(`textarea.${Is}`))KC(n)}const _3="estimator-reasoning",YC="estimator-reasoning-body",Dre="has-estimator-reasoning",JC="estimator-reasoning-input",zC="reasoningBare",Fre="Your reasoning for ",qre={containerClass:_3,ownContentSelector:`:scope > .${YC}`};function xre(e,n){const t=e==null?void 0:e[n];return t!==void 0&&t.trim()!==""?t:void 0}function Bre(e,n){const t=document.createElement("div");if(t.className=_3,n.mode==="edit")return t.appendChild(WC({className:JC,value:n.reasoning[e]??"",ariaLabel:`${Fre}${e}`,dataset:{[zC]:e}})),t;const r=xre(n.reasoning,e);return r===void 0?null:(t.appendChild(dR(r,YC)),t)}function QC(e,n,t,r){const i=e.querySelector(`:scope > .${_3}`),o=Bre(n,t);if(e.classList.toggle(Dre,o!==null),o===null){i==null||i.remove();return}i!==null?i.replaceWith(o):r!==null&&r.parentElement===e?r.after(o):e.appendChild(o)}const Hre=280,Ure=110,Gre="(no response)",jre="This trial gave no response for these parameter values",ZC="assumption-readonly-no-response",g3="assumption-mixture-caption",Vre="assumption-mixture-stats",eO="svar-group-fold",Wre="svar-group-header",nO="svar-group-filled-count",Kre=!1;function Xre(e){return`svargroup-${e.slice(wk.length)}`}function Yre(e,n,t,r){var a;const i=Xre(e.id),o=((a=t.foldOpenById)==null?void 0:a[i])??Kre;return`<details id="${X(i)}" class="${eO} ${gt}"${o?" open":""}><summary><span class="${Wre}">${Mr(e.defn,t)}</span>`+(r?`<span class="${nO}"></span>`:"")+"</summary>"+n+"</details>"}function b3(e){for(const n of e.querySelectorAll(`.${eO}`)){const t=n.querySelector(`:scope > summary > .${nO}`);if(t===null)continue;const r=[...n.querySelectorAll(".assumption-input")],i=r.filter(o=>o.value.trim()!=="").length;t.textContent=`${i}/${r.length} filled`}}function Jre(e,n,t,r){const i=CI(e,n),o=a=>Pe(a,t,r,"deterministic");return`median = ${o(i.median)}, 90% interval [${o(i.p5)}, ${o(i.p95)}]`}function tO(e,n,t){if(t==="point")return String(e.point[n]??"");if(t==="bounds"){const i=e.bounds[n];return i?`${i[0]} ${i[1]}`:""}const r=e.sample[n];return r?typeof r=="string"?r:r.map(([i,o])=>`(${i} ${o})`).join(" "):""}function Dv(e){return Gr(e.svar_entries().map(n=>n.decl))}function rO(e,n){return e.svar_entries().map(({bareName:t},r)=>({bareName:t,cardMode:n,inputIndex:r}))}function iO(e,n,t){const r=On(n.ui);return r==="plaincode"?[uC(e,n)]:r!==null?[]:d3(e,n,t)}function oO(e,n){return e.map(t=>t&&n.map(r=>tO(t,r.bareName,r.cardMode)))}const uu="data-trial-";function y3(e){return`${uu}${e}`}const aO=0;function zre(e,n){for(const t of e.querySelectorAll(".assumption-readonly")){const r=Number(t.dataset.paramIndex);for(const i of t.getAttributeNames())i.startsWith(uu)&&t.removeAttribute(i);n.forEach((i,o)=>{i!==void 0&&t.setAttribute(y3(o),i[r]??"")})}}function su(e,n){for(const t of e.querySelectorAll(".assumption-readonly"))Qre(t,n)}function Qre(e,n){const t=e.getAttribute(y3(n));e.textContent=t??Gre,e.classList.toggle(ZC,t===null),t===null?e.title=jre:e.removeAttribute("title")}function Zre(e){return e.classList.contains(ZC)?"":e.textContent??""}function eie(e){return e.getAttributeNames().filter(n=>n.startsWith(uu)).map(n=>({recordTrialIndex:Number(n.slice(uu.length)),value:e.getAttribute(n)??""}))}function nie(e){return e.querySelector(":scope > .resizable-canvas-wrapper")??e.querySelector(":scope > .param-density-canvas")??e.querySelector(":scope > .assumption-header")}function Fv(e,n){for(const t of e.querySelectorAll(".assumption-card")){const r=t.dataset.svarBare??"";QC(t,r,n,nie(t))}}function tie(e,n,t,r,i){var A;const o=document.getElementById(`${Fe.ESTIMATION}-section`),a=On(r.ui),u=a==="plaincode",s=Qn(r,i),l=a===null,c=l||u,d=u&&!ho(r.yoursCodeRecord),p=n.get_svar_bare_names(),m=A2(n,t),f=so(n);if(f.length===0){e.innerHTML="",o&&(o.hidden=!0);return}o&&(o.hidden=!1);const h=rO(n,s),v=oO(iO(n,r,i),h),_=(((A=r.yoursRecord.raw_input)==null?void 0:A[s])??"").split(`
`),g=l?'<div class="assumption-preset-hint">preset selected; select Yours in Calculator to edit</div>':"",b=Dv(n),y=[];for(let T=0;T<f.length;T++){const C=h[T],L=C.cardMode,$=L==="sample",w=L==="bounds"?" bounds-mode":L==="sample"?" sample-mode":"",S=nt(f[T],t),I=p[T],R=I?n.get_svar(I):void 0,P=I?`isym:${I}`:null,k=P!==null&&n.can_consolidate_isym_svar(P),H=k?n.get_isym(P):void 0,D=(H==null?void 0:H.defn)??(R==null?void 0:R.defn),q=H?H.srcquotes:R==null?void 0:R.srcquotes,M=Kn(q,t),Z=D?M.atStart+je(D,t)+M.atEnd:"",G=I?`svar:${I}`:null,z=k?` id="isym-${X(I??"")}"`:"",te=G&&m?Rq(m.nonroot_anchor_sections.get(G),t,r.ui,G):"",ae=$?`<canvas class="param-density-canvas" data-param-index="${C.inputIndex}" ${sO}="${X(JSON.stringify(b[C.inputIndex]))}" width="${Hre}" height="${Ure}"></canvas>`+(l?`<div class="${g3}" hidden></div>`:""):"";let j;if(c){const Ee=v.flatMap((me,ne)=>me===void 0?[]:[`${y3(ne)}="${X(me[T]??"")}"`]).join(" ");j=`<span class="assumption-readonly${w}" data-param-index="${T}" ${Ee}></span>`}else{const Ee=(_[C.inputIndex]??"").trim();j=`<input class="assumption-input${w}" data-param-index="${C.inputIndex}" data-group="${s}" value="${X(Ee)}" placeholder="${hie(L)}">`}const Y=!c&&L==="sample"?'<span class="assumption-help-slot"></span>':"",V=`<span class="assumption-op">${x(nA(L))}</span>`;y.push(`<div class="assumption-card${l?" preset-mode":""}"${z} data-svar-bare="${X(I??"")}">`+MF(I??"",`${Qv}${I??""}`)+`<div class="assumption-header"><span class="assumption-cond">${S}</span><span class="assumption-input-row"${d?" hidden":""}>`+V+j+Y+"</span></div>"+ae+(Z?`<div id="gloss-${I??""}" class="assumption-narrative">${Z}</div>`:"")+g+te+"</div>")}e.innerHTML=n.svar_card_runs().map(T=>{const C=T.svarIndices.map(L=>y[L]).join("");return T.group===null?C:Yre(T.group,C,t,!c)}).join("");for(const T of e.querySelectorAll(".assumption-help-slot"))T.appendChild(ut(mee));const E=Dv(n);if(l){uO(e,_t(r,i),c3(r,i),Vn(r.ui),f3(r,i),E);return}u?(su(e,aO),s==="sample"&&lu(e,Vn(r.ui),E)):s==="sample"&&S3(e,Vn(r.ui),E),Ls(e,r,E),b3(e),Fv(e,{mode:"edit",reasoning:Pu(r,Pa(r.ui)).reasoning_response})}function rie(e,n,t,r){const i=Qn(t,r),o=On(t.ui),a=o==="plaincode";if(o==="plainnum")return;const u=rO(n,i),s=Dv(n);zre(e,oO(iO(n,t,r),u));const l=Vn(t.ui);if(a){su(e,aO),i==="sample"&&lu(e,l,s);return}const c=_t(t,r);c.kind==="trial"&&su(e,c.recordTrialIndex),i==="sample"&&(c.kind==="trial"?lu(e,l,s):cO(e,l,f3(t,r),s))}function uO(e,n,t,r,i,o){const a=n.kind==="mix";for(const u of e.querySelectorAll(".assumption-input-row"))u.hidden=a;if(a){cO(e,r,i,o),Fv(e,{mode:"read",reasoning:void 0});return}su(e,n.recordTrialIndex),lu(e,r,o),Fv(e,{mode:"read",reasoning:t[n.recordTrialIndex]})}const sO="data-value-range",iie={lo:null,hi:null};function lO(e){const n=e.getAttribute(sO);return n===null?void 0:JSON.parse(n)}function oie(e,n,t){const r=lO(e),i=ZI(n,r);sL(e,n,i,r,t,null)}function aie(e){const n=e.parentElement;return n!=null&&n.classList.contains("resizable-canvas-wrapper")?n:e}function E3(e,n,t){const r=aie(e);if(!n){r.hidden=!0;return}r.hidden=!1,oie(e,n,t)}function uie(e){const n=e.querySelector(`.${g3}`);if(n===null)throw new Error("preset svar card is missing its mixture caption");return n}function lu(e,n,t){const r=e.querySelectorAll(".param-density-canvas");for(const i of r){const o=i.closest(".assumption-card"),a=o==null?void 0:o.querySelector(".assumption-readonly"),u=a?Zre(a):"",s=Number(i.dataset.paramIndex??0);E3(i,dO(u,t==null?void 0:t[s]),n);const l=o==null?void 0:o.querySelector(`.${g3}`);l&&(l.hidden=!0)}}function cO(e,n,t,r){const i=e.querySelectorAll(".param-density-canvas");for(const o of i){const a=o.closest(".assumption-card"),u=a==null?void 0:a.querySelector(".assumption-readonly"),s=Number(o.dataset.paramIndex??0),l=[],c=[],d=[];for(const p of u?eie(u):[]){const m=lie(p.value,r==null?void 0:r[s]),f=t[p.recordTrialIndex];m===null||f===void 0||(l.push(m),c.push(f),d.push(p.recordTrialIndex))}if(E3(o,l.length>0?QI(l,c):null,n),a){const p=uie(a);p.hidden=l.length===0,p.innerHTML=l.length>0?`<span class="${Vre}">`+x(Jre(l,c,lO(o)??iie,n.statsDisplay))+"</span> "+sR({contributingRecordTrialIndices:d,recordTrialCount:t.length}):""}}}function sie(e,n,t){var u;const r=n.ui.inputMode,i=((u=n.yoursRecord.raw_input)==null?void 0:u[r])??"",o=i?i.split(`
`):[];e.querySelectorAll(".assumption-input").forEach(s=>{const l=Number(s.dataset.paramIndex),c=(o[l]??"").trim();s.value!==c&&document.activeElement!==s&&(s.value=c)}),r==="sample"&&S3(e,Vn(n.ui),t),Ls(e,n,t),b3(e)}function S3(e,n,t){const r=e.querySelectorAll(".param-density-canvas");for(const i of r){const o=i.closest(".assumption-card"),a=o==null?void 0:o.querySelector(".assumption-input"),u=(a==null?void 0:a.value)??"",s=Number(i.dataset.paramIndex??0);E3(i,dO(u,t==null?void 0:t[s]),n)}}function dO(e,n){const t=n??ir,r=fO(e,t);if(r===null)return null;switch(r.kind){case"family":return Dz(S_(r.spec,t.lo,t.hi));case"pairs":return Mz(r.pairs.map(i=>i[0]),r.pairs.map(i=>i[1]))}}function lie(e,n){const t=n??ir,r=fO(e,t);return r===null?null:Yi(r,t)}function fO(e,n){const t=e.trim();if(!t)return null;try{return us(t,n)}catch{return null}}function pO(e){return e.trim()}function cie(e,n,t,r){var u;const i=e.ui.inputMode,a=(((u=e.yoursRecord.raw_input)==null?void 0:u[i])??"").split(`
`);for(;a.length<r;)a.push("");return a[n]=i==="sample"?pO(t):t,a.join(`
`)}const die=" — the saved estimate is still ",aw=48;function fie(e,n,t,r){const i=e.trim();if(!i)return null;try{return n==="point"?wI(i,t):n==="bounds"?AI(i,t):us(i,t),null}catch(o){const a=o.message;return r===""?a:a+die+pie(r)}}function pie(e){return e.length<=aw?e:`${e.slice(0,aw)}…`}function mie(e,n,t){const r=e.yoursRecord.trials[0];return r?tO(r,n,t):""}function Ls(e,n,t){const r=n.ui.inputMode,i=e.querySelectorAll(".assumption-card");for(const o of i){const a=o.querySelector(".assumption-input");if(!a)continue;const u=Number(a.dataset.paramIndex),s=o.dataset.svarBare??"",l=fie(a.value,r,t[u]??ir,mie(n,s,r));let c=o.querySelector(".arg-warning");if(l){if(!c){c=document.createElement("p"),c.className="arg-warning";const d=o.querySelector(".resizable-canvas-wrapper")??o.querySelector(".param-density-canvas")??o.querySelector(".assumption-header");d==null||d.after(c)}c.textContent=l}else c&&c.remove()}}function hie(e){switch(e){case"point":return"e.g. .5";case"bounds":return"e.g. .01 1";case"sample":return"e.g. "+mO}}const mO="tri(0, .5, .99)",w3="conclusion-density",oo="density-canvas";function hO(e,n){const t={};for(const r of e.get_cparams()){const i=ge(r.id),o=n[i]??r.default_value;typeof o!="object"&&(t[i]=o)}return t}function vie(e,n,t,r,i,o,a){const u=s_(e,t,r,o);if(u===null)return null;if(o&&u.formEntry===null)throw new Error(`Form "${u.id}" not found in form registry`);const s=u.formEntry?$_(u.id,u.formEntry,i,a):{key:`${u.id}-unavailable`,params:[],valueRange:u.valueRange,point:()=>NaN,bounds:null,boundsTightness:null};return{formId:u.id,isConclusion:u.isConclusion,labelHtml:$o(u,e,n),valueRange:u.valueRange,formEntry:u.formEntry,evalTarget:s}}function _ie(e,n){return so(e).map(t=>`<div class="calc-label-row"><span class="label-full">${nt(t,n)}</span></div>`).join("")}function gie(e,n){const t=x(nA(n));return Array.from({length:e},()=>`<div class="calc-op-row">${t}</div>`).join("")}function qv(e,n,t,r,i,o,a,u,s,l){var y,E,A;const c=li(i,o),d=Qn(i,o);if(o){const T=Wn(tt(c));if(T&&c.kind!=="yours"){const C=kn(i,o);if(C&&C.count===0){e.innerHTML="",n.innerHTML=`<div class="${yie}">${bie}</div>`;return}if(C){const L=Ye();DS(e,n,C,t,r,i,c.kind,L,a,s,l);return}}if(T&&c.kind==="yours"){const C=i.yoursCodeRecord;if(e.innerHTML="",ho(C)){const L=vo(C),$=Ye();DS(e,n,L,t,r,i,c.kind,$,a,s,l)}else n.innerHTML='<div class="result-detail">Write code below and click Sample to compute results.</div>';return}}const p=((y=i.yoursRecord.raw_input)==null?void 0:y[d])??"",f=so(t).length,h=c.kind!=="yours",v=_ie(t,r),_=f>0?`<div class="calc-operators">${gie(f,d)}</div>`:"";let g;if(h)g='<div id="sample-columns"></div>';else{const T=d==="bounds"?" bounds-mode":d==="sample"?" sample-mode":"",C=Rie(d,f);g=`<div class="calc-input"><textarea class="calc-textarea${T}" data-group="${d}" rows="${f}" spellcheck="false" placeholder="${C}">${x(p)}</textarea></div>`}const b=BU(t,d,s_(t,i,d,a),a);if(e.innerHTML=`${b}
    <div class="calc-layout">
      <div class="calc-labels">${v}</div>
      ${_}
      ${g}
    </div>
  `,h&&o){const T=e.querySelector("#sample-columns");if(T&&qU(T,t,o,i)&&((E=e.querySelector(".calc-labels"))==null||E.classList.add("has-sample-col-headers"),(A=e.querySelector(".calc-operators"))==null||A.classList.add("has-sample-col-headers")),c.kind==="adhoc"&&c.entry.queryMode==="plainnum"){const C=kn(i,o),L=(C==null?void 0:C.trials.length)===1?C.trials[0]:void 0,$=t.svar_entries().map(w=>w.bareName);L&&p$(L,$).length>0&&e.insertAdjacentHTML("beforeend",`<div class="calc-copy-to-yours"><button class="copy-to-yours-btn" type="button" title="Copy this entry's estimates into your editable Estimate inputs">Copy to Estimate</button></div>`)}}Rs(n,t,r,i,o,a,u)}const bie="No model configurations are selected. Check an agent CLI, or a model and effort, under Select result set.",yie="calc-empty-result-set";function Eie(e,n,t,r,i,o,a,u,s,l){const c=li(i,o),d=Wn(tt(c)),p=Ye();if(o&&d&&c.kind!=="yours"){const m=kn(i,o);if(m&&m.count===0){qv(e,n,t,r,i,o,a,u,s,l);return}if(m){FS(e,n,m,t,r,i,c.kind,p,a,s,l);return}}else if(d&&c.kind==="yours"){const m=i.yoursCodeRecord;if(ho(m)){const f=vo(m);FS(e,n,f,t,r,i,c.kind,p,a,s,l);return}}console.warn(`Code-control change outside a code result view (viewing ${JSON.stringify(c)}); falling back to a full calculator render`),qv(e,n,t,r,i,o,a,u,s,l)}function Rs(e,n,t,r,i,o,a){Cie(e,n,t,r,i,o,a)}function Sie(e,n,t,r,i,o,a,u){const s=o[n];if(!s){e.innerHTML="",console.warn(`derived-form ${n}: not in form registry (cannot compute)`);return}const l=t.form.find(_=>_.id===n);if(!l){e.innerHTML="",console.error(`derived-form ${n}: not found in jprob template form list`);return}const c=Qn(i,u);if(!Uw(l,c)){e.innerHTML="";return}const d=Gw(n,l.sexpr),p=wie(t,d),m=nt(p,r),f=li(i,u).kind!=="yours",h=t.get_svar_bare_names().length;let v;try{v=Iie(n,s,t,i,c,f,h,hO(t,r.displayOptionValues),u,a)}catch(_){e.innerHTML="",console.error(`derived-form ${n}: ${_.message}`);return}switch(v.kind){case"ok":const _=v.valueHtml??`<span class="derived-value">${v.value}</span>`,g=v.detailHtml??(v.detail?` <span class="derived-detail">${v.detail}</span>`:"");e.innerHTML=`<div class="hir-loud-note">${m} ${v.label} ${v.relation??"≈"} `+_+(g?` ${g}`:"")+"</div>"+(v.nonFiniteWarning?tu():"");return;case"non-finite":e.innerHTML=tu();return;case"unavailable":e.innerHTML=`<div class="hir-loud-note">${m} — <span class="derived-detail">${x(v.explanation)}</span></div>`;return;case"pending":e.innerHTML="";return;case"missing":e.innerHTML="",console.warn(`derived-form ${n}: ${v.reason}`);return;case"error":e.innerHTML="",console.error(`derived-form ${n}: ${v.message}`);return}}function wie(e,n){const t=jw(n);return e.get_display_expr(t)??t}function Hr(e){return xw(e.svar_entries())}function vO(e,n,t){return e.provenance!=="precomputed"?t:`precomputed, ${n} trial${n===1?"":"s"}`}const Aie={point:()=>nu,bounds:"from bounds",mc:()=>"MC"};function $ie(e){return{point:n=>n.perTrial.length>1?`mean of ${n.perTrial.length} samples`:"from preset",bounds:"from preset",mc:n=>vO(n,e,n.trialCount>1?`MC of ${n.trialCount} trials`:"MC")}}function Tie(e){return{point:n=>n.perTrial.length>1?`${nu} (mean of ${n.perTrial.length} trials)`:nu,bounds:"from bounds",mc:n=>vO(n,e,"MC")}}function Ii(e,n,t,r){switch(e.kind){case"point":{const i=Tr([...e.perTrial,e.value]);return i==="undefined"?{kind:"non-finite"}:{kind:"ok",label:r.point(e),value:Pe(e.value,n,t),nonFiniteWarning:i==="infinite"}}case"bounds":{const i=Tr([e.lo,e.hi]);return i==="undefined"?{kind:"non-finite"}:TR(e.lo,e.hi)?{kind:"unavailable",explanation:$R}:{kind:"ok",label:r.bounds,relation:IR(e.tightness),value:Vee(e.lo,e.hi,n,t),nonFiniteWarning:i==="infinite"&&e.tightness==="tight"}}case"mc":{const i=Tr([e.mean,e.median,e.p5,e.p95]);if(i==="undefined")return{kind:"non-finite"};const o=Ree(e,n,t);return{kind:"ok",label:r.mc(e),value:"",valueHtml:o.valueHtml,detailHtml:o.detailHtml,nonFiniteWarning:i==="infinite"}}}}function Iie(e,n,t,r,i,o,a,u,s,l){var _;const c=t.get_svar_bare_names(),d=n.params.filter(g=>!c.includes(g));if(d.length>0)return{kind:"error",message:`params not in svar_list: ${JSON.stringify(d)} (form.params=${JSON.stringify(n.params)}, svar_list=${JSON.stringify(c)})`};const p=r.ui.probAsOdds,m=li(r,s);if(Wn(tt(m)))return Lie(e,n,t,r,i,m.kind,s,l);const f=$_(e,n,u,l);if(i==="bounds"&&f.bounds===null)return{kind:"unavailable",explanation:Fo};if(o){if(!s)return{kind:"pending"};const g=kn(r,s);if(!g)return{kind:"pending"};if(m.kind!=="adhoc"||m.entry.queryMode!=="plainnum")return{kind:"pending"};const b=g,y=t.conclusion_form_or_none()??void 0,E=i==="sample"?kR(b,e,y,ai(b.trials)):void 0;try{const A=Br(Ye()),T=zn(f,Jn(b.trials,er(b),i,Hr(t)),{onIncompleteTrial:"skip",mcIters:A.mcIters,mcItersPerClick:A.mcItersPerClick,precomputed:E});return Ii(T,n.valueRange,p,$ie(b.trials.length))}catch(A){if(A instanceof zi)return{kind:"missing",reason:`record: ${A.message}`};throw A}}const h=((_=r.yoursRecord.raw_input)==null?void 0:_[i])??"";if(!h.trim())return{kind:"pending"};const v=Cs(t,i,h,"tolerant",bO(r));try{const g=Br(Ye()),b=zn(f,v,{onIncompleteTrial:"skip",mcIters:g.mcIters,mcItersPerClick:g.mcItersPerClick});return Ii(b,n.valueRange,p,Aie)}catch(g){if(g instanceof zi)return{kind:"pending"};throw g}}function Lie(e,n,t,r,i,o,a,u){let s;if(o==="yours"){const v=r.yoursCodeRecord;if(!ho(v))return{kind:"pending"};s=vo(v)}else{if(!a)return{kind:"pending"};if(s=kn(r,a),!s)return{kind:"pending"}}C2(s);const l=pne(s,t,r);if(!l)return{kind:"pending"};if(l.trials.length===0)return{kind:"missing",reason:"no trials for the selected scenario combination"};const c=r.ui.probAsOdds,d=Tie(l.trials.length),p=uo(n,l.cparams);if(i==="point"){const v=l.trials.map(g=>CR(g,e,p)),_=as(v,vt(s,l.trials));return Ii({kind:"point",value:_,perTrial:v,perTrialInputs:[]},n.valueRange,c,d)}if(i==="bounds"){if(!R2(s))throw new Error("code bounds derived-form display reached with a multi-trial record; bounds mode should not have been selectable");const v=OR(l.trials[0],e,p);if(!v)return{kind:"unavailable",explanation:Fo};const[_,g]=v.interval;return Ii({kind:"bounds",lo:_,hi:g,tightness:v.tightness,trialCount:1},n.valueRange,c,d)}const m=t.conclusion_form_or_none()??void 0,f=ai(l.trials),h=kR(l,e,m,f);if(h===void 0){const v=PR(l,e,e===m,f);if(v!==void 0){const _=Tr([v.mean]);return _==="undefined"?{kind:"non-finite"}:{kind:"ok",label:`${z_.toLowerCase()}, ${l.trials.length} trial${l.trials.length===1?"":"s"}`,value:Pe(v.mean,n.valueRange,c,"monte-carlo"),nonFiniteWarning:_==="infinite"}}}try{const v=Br(Ye()),_=zn($_(e,n,l.cparams,u),Jn(l.trials,vt(s,l.trials),"sample",Hr(t)),{onIncompleteTrial:"skip",mcIters:v.mcIters,mcItersPerClick:v.mcItersPerClick,precomputed:h});return Ii(_,n.valueRange,c,d)}catch(v){if(v instanceof zi)return{kind:"missing",reason:`combo trials: ${v.message}`};throw v}}function Rie(e,n){const t=e==="sample"?mO:e==="bounds"?".01 1":".5";return"e.g. "+Array.from({length:n},()=>t).join(`
`)}function Cie(e,n,t,r,i,o,a){var m;const u=hO(n,t.displayOptionValues),s=Qn(r,i),l=vie(n,t,r,s,u,o,a);if(l===null){e.innerHTML="";return}const c=li(r,i).kind!=="yours",d=Ye();if(c&&i){try{qie(e,n,r,s,i,l,d)}catch(f){e.innerHTML=`<div class="result-error">${x(f.message)}</div>`}return}const p=((m=r.yoursRecord.raw_input)==null?void 0:m[s])??"";if(!p.trim()){e.innerHTML='<div class="result-detail">Enter probabilities above.</div>';return}try{switch(s){case"point":Oie(e,p,n,l,r.ui.probAsOdds);break;case"bounds":Nie(e,p,n,l,r.ui.probAsOdds);break;case"sample":Fie(e,p,n,r,l,d);break}}catch(f){e.innerHTML=`<div class="result-error">${x(f.message)}</div>`}}function _O(e,n,t){const r=e.trim().split(/\n/).map(i=>i.trim()).filter(i=>i.length>0);if(r.length!==n)throw new Error(`Expected ${n} values, got ${r.length}`);return r.map((i,o)=>{try{return wI(i,(t==null?void 0:t[o])??ir)}catch(a){throw new Error(`Line ${o+1}: ${a.message}`)}})}function gO(){return`<div class="result-detail">${x(Fo)}</div>`}function A3(e,n){for(const t of n.params)if(!e.includes(t))throw new Error(`form param "${t}" is not an input subjective variable`)}const yr=[1];function Cs(e,n,t,r,i=null){const o=e.svar_entries(),a=o.map(d=>d.bareName),u=Gr(o.map(d=>d.decl)),s=Hr(e);if(r==="strict"){if(n==="point"){const p=_O(t,a.length,u);return{mode:n,trialWeights:yr,trials:[Object.fromEntries(a.map((m,f)=>[m,p[f]]))]}}if(n==="bounds"){const p=yO(t,a.length,u);return{mode:n,trialWeights:yr,trials:[Object.fromEntries(a.map((m,f)=>[m,p[f]]))]}}const{specs:d}=EO(t,a.length,u);return{mode:"sample",ranges:s,trialWeights:yr,trials:[{specs:Object.fromEntries(a.map((p,m)=>[p,d[m]])),lloads:i}]}}const l=t.trim().split(/\n/).map(d=>d.trim()).filter(d=>d.length>0);if(n==="point"){const d={};return a.forEach((p,m)=>{const f=Number(l[m]);isNaN(f)||(d[p]=f)}),{mode:n,trialWeights:yr,trials:[d]}}if(n==="bounds"){const d={};return a.forEach((p,m)=>{const f=(l[m]??"").split(/\s+/);if(f.length!==2)return;const h=Number(f[0]),v=Number(f[1]);isNaN(h)||isNaN(v)||(d[p]=[h,v])}),{mode:n,trialWeights:yr,trials:[d]}}const c={};return a.forEach((d,p)=>{try{c[d]=us(l[p]??"",u[p]??ir)}catch{}}),{mode:"sample",ranges:s,trialWeights:yr,trials:[{specs:c,lloads:i}]}}function bO(e){var n;return((n=e.yoursRecord.trials[0])==null?void 0:n.lloads)??null}function Oie(e,n,t,r,i){const o=t.svar_entries().map(l=>l.bareName);r.formEntry&&A3(o,r.formEntry);const a=Cs(t,"point",n,"strict"),u=zn(r.evalTarget,a,{onIncompleteTrial:"error"}),s=a.trials[0];e.innerHTML=ru({labelHtml:r.labelHtml,value:u.value,valueRange:r.valueRange,statsDisplay:i,detail:`from: ${o.map(l=>s[l]).join(", ")}`})}function yO(e,n,t){const r=e.trim().split(/\n/).map(i=>i.trim()).filter(i=>i.length>0);if(r.length!==n)throw new Error(`Expected ${n} lines of "lo hi", got ${r.length}`);return r.map((i,o)=>{try{return AI(i,(t==null?void 0:t[o])??ir)}catch(a){throw new Error(`Line ${o+1}: ${a.message}`)}})}function Nie(e,n,t,r,i){const o=t.svar_entries().map(s=>s.bareName);r.formEntry&&A3(o,r.formEntry);const a=Cs(t,"bounds",n,"strict");if(r.formEntry&&r.evalTarget.bounds===null){e.innerHTML=gO();return}const u=zn(r.evalTarget,a,{onIncompleteTrial:"error"});e.innerHTML=r3({labelHtml:r.labelHtml,lo:u.lo,hi:u.hi,tightness:u.tightness,valueRange:r.valueRange,statsDisplay:i})}function EO(e,n,t){const r=e.trim().split(/\n/).map(o=>o.trim()).filter(o=>o.length>0);if(r.length!==n)throw new Error(`Expected ${n} lines, got ${r.length}`);return{specs:r.map((o,a)=>{try{return us(o,(t==null?void 0:t[a])??ir)}catch(u){throw new Error(`Line ${a+1}: ${u.message}`)}}),warnings:[]}}const kie="⟦",Mie="⟧";function xv(e){const n=`${uw("n")}=${e.samples.length.toLocaleString()}`;return e.barrierInnerIters===null?n:`${n}, E${kie}·${Mie} ${uw("n")}=${e.barrierInnerIters.toLocaleString()}`}function Pie(e,n,t,r){return'<div class="density-result-row"><div class="density-result-text">'+ro(e,n,t,"monte-carlo",r)+`</div><canvas id="${oo}" width="400" height="200"></canvas></div>`}function Die(e,n,t,r,i){const o=e.querySelector(`#${oo}`);if(!o)return;const a=GI(n);a!==null&&(oL(o,a,n.p5,n.p95,t,r,{stateHost:e,stateKey:w3}),n.mcPoolToken!==null&&ys(o,n.mcPoolToken,n.samples.length,{itersPerTarget:i,targetCount:1}))}function Fie(e,n,t,r,i,o){const a=t.svar_entries().map(h=>h.bareName);i.formEntry&&A3(a,i.formEntry);const u=bO(r),s=Cs(t,"sample",n,"strict",u),l=i.labelHtml,c=i.valueRange,d=r.ui.probAsOdds,p=i.evalTarget,m=Br(o);if(os(u)){const h=T_(p,s,{onIncompleteTrial:"error",mcIters:m.mcIters,mcItersPerClick:m.mcItersPerClick});e.innerHTML=$v({comparison:h,valueRange:c,statsDisplay:d,targetLabelHtml:l,canvasId:oo,provenanceDetail:`Monte Carlo, ${xv(h.joint)}`}),_R({box:e,canvasId:oo,layers:[{comparison:h,palette:"series"}],valueRange:c,axis:Vn(r.ui),resizeStateKey:w3,mcItersPerClick:m.mcItersPerClick});return}const f=zn(p,s,{onIncompleteTrial:"error",mcIters:m.mcIters,mcItersPerClick:m.mcItersPerClick});e.innerHTML=`<div class="result-label">Monte Carlo (independent, ${xv(f)})</div>`+Pie(f,c,d,l),Die(e,f,c,Vn(r.ui),m.mcItersPerClick)}function qie(e,n,t,r,i,o,a){const u=kn(t,i);if(!u){e.innerHTML='<div class="result-detail">No data for this preset.</div>';return}const s=Xr(t.ui,{presetData:i});if(s.kind==="adhoc"&&s.entry.queryMode==="plainnum"){xie(e,u,n,t,r,o,a);return}e.innerHTML='<div class="result-detail">Unknown preset source.</div>'}function xie(e,n,t,r,i,o,a){const u=o.valueRange,s=o.labelHtml,l=r.ui.probAsOdds;if(n.trials.length===0)throw new Error("Plainnum record has no trials to display");const c=o.evalTarget;if(i==="point"){const d=zn(c,Jn(n.trials,er(n),"point",Hr(t)),{onIncompleteTrial:"error"});if(d.perTrial.length===1)e.innerHTML=ru({labelHtml:s,value:d.perTrial[0],valueRange:u,statsDisplay:l,detail:`from: ${d.perTrialInputs[0].join(", ")}`});else{const p=d.perTrial.map(m=>Pe(m,u,l)).join(", ");e.innerHTML=ru({labelHtml:s,value:d.value,valueRange:u,statsDisplay:l,labelPrefix:"mean ",detail:`per sample: ${p}`})}return}if(i==="bounds"){if(o.formEntry&&c.bounds===null){e.innerHTML=gO();return}const d=zn(c,Jn(n.trials,er(n),"bounds",Hr(t)),{onIncompleteTrial:"error"});e.innerHTML=r3({labelHtml:s,lo:d.lo,hi:d.hi,tightness:d.tightness,valueRange:u,statsDisplay:l,midpointDetailSuffix:` (envelope of ${d.trialCount} sample${d.trialCount>1?"s":""})`});return}Hie(e,n,o,t,r,a)}function Bie(e,n,t){return e.sampleStage===void 0?[...PI(e,n,t),"target",e.key]:["barrier-plainnum",e.key,n,t.mcIters,t.mcItersPerClick]}function Hie(e,n,t,r,i,o){const a=t.evalTarget,u=Br(o),s=Jn(n.trials,er(n),"sample",Hr(r)),l={onIncompleteTrial:"error",mcIters:u.mcIters,mcItersPerClick:u.mcItersPerClick},c={box:e,canvasId:oo,resizeStateKey:w3,densityScale:i.ui.densityScale},d={valueRange:t.valueRange,statsDisplay:i.ui.probAsOdds,targetLabelHtml:t.labelHtml,storedTrialsDetail:L2("adhoc",n.trials.length),liveSampleCountDetail:xv},p=()=>Bie(a,s,l),m=ui(n,t.formId,t.isConclusion);if(mR(n.trials,r)){const h=NR(m);SR(c,d,u,h===null?null:{kind:"pair",pair:h},{run:()=>T_(a,s,l),activationKeyParts:p},fR.specPointerHtml);return}const f=Ss(m,ai(n.trials));wR(c,d,u,f===void 0?null:{kind:"stats",stats:f.stats},{run:()=>zn(a,s,l),activationKeyParts:p})}function uw(e){return`<span class="lc">${e}</span>`}function Uie(e,n,t,r,i){if(!n.trim())return null;try{if(e==="point"){const u=_O(n,t,i),s={};for(let l=0;l<r.length;l++)s[r[l]]=u[l];return s}if(e==="bounds"){const u=yO(n,t,i),s={};for(let l=0;l<r.length;l++)s[r[l]]=u[l];return s}const{specs:o}=EO(n,t,i),a={};for(let u=0;u<r.length;u++){const s=o[u];a[r[u]]=s.kind==="family"?s.spec.text:s.pairs}return a}catch{return null}}function $3(e,n,t,r,i){const o=e.yoursRecord;o.raw_input={...o.raw_input??{},[r]:i};const a=n.svar_entries(),u=a.map(d=>d.bareName),s=u.length,l=Gr(a.map(d=>d.decl)),c=Uie(r,i,s,u,l);if(c!==null){const d=o.trials[0];r==="point"?d.point=c:r==="bounds"?d.bounds=c:d.sample=c}Z2(n,t,e.plainnumOptionDictKey,o)}function T3(e,n,t,r,i,o){const a=e.yoursRecord;a.lloads_draft=r;const u=VC(r,i,o);return u.kind==="valid"&&(a.trials[0].lloads=u.lloads),Z2(n,t,e.plainnumOptionDictKey,a),u}const SO="response-note-block",wO="response-note-body",Gie="response-note-key",AO="misc",$O="response-note-input",jie="Your notes about this response",Vie={containerClass:SO,ownContentSelector:`:scope > .${wO}`};function TO(e){return e!==void 0&&e.trim()!==""?e:void 0}function Wie(e){if(e===void 0)return[];const n=[];for(const t of Object.keys(e).sort()){const r=TO(e[t]);r!==void 0&&n.push([t,r])}return n}function IO(e){const n=document.createElement("div");n.className=SO;const t=document.createElement("h3");return t.className=Gie,t.textContent=e,n.appendChild(t),n}function sw(e,n){const t=IO(e);return t.appendChild(dR(n,wO)),t}function Kie(e){const n=IO(AO);return n.appendChild(WC({className:$O,value:e,ariaLabel:jie})),n}function Xie(e,n,t){const r=On(e.ui);return r!==null?{mode:"edit",misc:Pu(e,r).misc_response}:{mode:"read",freeTextPerTrial:oC(e,n),trialSelection:t}}function Yie(e,n){const t=document.getElementById(`${Fe.RESPONSE_NOTES}-section`);if(e.innerHTML="",n.mode==="edit"){t&&(t.hidden=!1),e.appendChild(Kie(n.misc));return}const{freeTextPerTrial:r,trialSelection:i}=n,o=i.kind==="mix"?void 0:r[l3(r.length,i.recordTrialIndex)],a=TO(o==null?void 0:o.misc),u=Wie(o==null?void 0:o.extra);if(a===void 0&&u.length===0){t&&(t.hidden=!0);return}t&&(t.hidden=!1),a!==void 0&&e.appendChild(sw(AO,a));for(const[s,l]of u)e.appendChild(sw(s,l))}function I3(e,n,t,r,i){r==="plaincode"?(i(e.yoursCodeRecord),Y2(n,t,e.codeOptionDictKey,e.yoursCodeRecord)):(i(e.yoursRecord),Z2(n,t,e.plainnumOptionDictKey,e.yoursRecord))}function lw(e,n,t,r,i,o){I3(e,n,t,r,a=>{a.trial_choices={...a.trial_choices??{},[i]:o}})}function Jie(e,n,t,r,i,o){I3(e,n,t,r,a=>{a.reasoning_response={...a.reasoning_response,[i]:o}})}function zie(e,n,t,r,i){I3(e,n,t,r,o=>{o.misc_response=i})}function Qie(e,n,t,r){if(e.classList.contains(JC)){const i=e,o=i.dataset[zC];return o===void 0||o===""?!1:(Jie(n,t,r,Pa(n.ui),o,i.value),!0)}return e.classList.contains($O)?(zie(n,t,r,Pa(n.ui),e.value),!0):!1}function Zie(e,n){e.addEventListener("input",t=>{const r=t.target;if(r.classList.contains("calc-textarea")){n.persistCalcTextarea(r);return}if(r.classList.contains("assumption-input")){n.persistAssumptionCard(r);return}}),e.addEventListener("change",t=>{const r=t.target;if(r.classList.contains("calc-textarea")){n.recomputeAfterCalcTextarea();return}if(r.classList.contains("assumption-input")){n.recomputeAfterAssumptionCard(r);return}})}function L3(e,n,t,r){const i=e.yoursCodeRecord;i.raw_code_input=r,Y2(n,t,e.codeOptionDictKey,i)}function R3(e){const n=`yours_${e}_`,t=[];for(let i=0;i<localStorage.length;i++){const o=localStorage.key(i);o!==null&&o.startsWith(n)&&t.push(o)}const r=[];for(const i of t){const o=localStorage.getItem(i);if(o===null)continue;let a;try{a=JSON.parse(o)}catch{continue}r.push({plainnumOptionDictKey:i.slice(n.length),record:nT(a)})}return r.sort((i,o)=>{const a=i.record.timestamp??"";return(o.record.timestamp??"").localeCompare(a)}),r}function eoe(e,n){localStorage.removeItem(ju(e,n))}function noe(e){const n=R3(e).map(i=>({kind:"plainnum",plainnumOptionDictKey:i.plainnumOptionDictKey,record:i.record})),t=J2(e).map(i=>({kind:"plaincode",codeOptionDictKey:i.codeOptionDictKey,record:i.record})),r=[...n,...t];return r.sort((i,o)=>{const a=i.record.timestamp??"";return(o.record.timestamp??"").localeCompare(a)}),r}function toe(e,n,t,r){const i={};for(const[a,u]of Object.entries(r.cparam_values??{}))C3(u)&&(i[a]=u);for(const[a,u]of Object.entries(r.aopts))LO(u)&&(i[a]=u);const o=Gu(n.get_options(),z2(n.get_options(),i));return Q2(n.config,o),{...e,optionValues:o,plainnumOptionDictKey:t,yoursRecord:r}}function roe(e,n,t,r){const i={};for(const[a,u]of Object.entries(r.aopts))LO(u)&&(i[a]=u);for(const a of n.get_cparams()){const u=ge(a.id);if(u in e.optionValues){const s=e.optionValues[u];if(!C3(s))throw new Error(`Cparam ${a.id} has a non-scalar state value`);i[u]=s}}const o=Gu(n.get_options(),z2(n.get_options(),i));return Q2(n.config,o),{...e,optionValues:o,codeOptionDictKey:t,yoursCodeRecord:r}}function C3(e){const n=typeof e;return n==="string"||n==="number"||n==="boolean"}function LO(e){return C3(e)||Array.isArray(e)&&e.every(n=>typeof n=="string")}function RO(e,n){const t=[];for(const r of e.get_options()){const i=ge(r.id),o=Qt(r.id)?n.cparam_values:n.aopts,a=o==null?void 0:o[i];a!==void 0&&(!Qt(r.id)&&a===r.default_value||t.push(`${i}=${OO(a)}`))}return t.join(" ")}function CO(e,n){const t=["code"];for(const r of e.get_aopts()){const i=ge(r.id),o=n.aopts[i];o!==void 0&&o!==r.default_value&&t.push(`${i}=${OO(o)}`)}return t.join(" ")}function OO(e){return typeof e=="boolean"?e?"true":"false":String(e)}function ioe(e,n){const t=noe(e.aid),r='<div class="yours-saved-header">Saved estimations</div>';if(t.length===0)return r+'<div class="yours-saved-empty">No saved estimations yet.</div>';const i=t.map(o=>ooe(e,n,o)).join("");return r+`<div class="yours-saved-list">${i}</div>`}function ooe(e,n,t){const r=On(n.ui);if(t.kind==="plainnum"){const u=x(RO(e,t.record)||"(default options)"),s=x(t.plainnumOptionDictKey);return`<div class="yours-saved-row${r==="plainnum"&&t.plainnumOptionDictKey===n.plainnumOptionDictKey?" yours-saved-row-current":""}" data-kind="plainnum" data-key="${s}" role="button" tabindex="0"><span class="yours-saved-label">${u}</span><button class="yours-saved-delete" data-kind="plainnum" data-key="${s}" aria-label="Delete" title="Delete this saved estimation">×</button></div>`}const i=x(CO(e,t.record)),o=x(t.codeOptionDictKey);return`<div class="yours-saved-row yours-saved-row-code${r==="plaincode"&&t.codeOptionDictKey===n.codeOptionDictKey?" yours-saved-row-current":""}" data-kind="plaincode" data-key="${o}" role="button" tabindex="0"><span class="yours-saved-label">${i}</span><button class="yours-saved-delete" data-kind="plaincode" data-key="${o}" aria-label="Delete" title="Delete this saved estimation">×</button></div>`}function aoe(e,n,t){e.innerHTML=ioe(n,t)}const uoe=["tri","uniform","uni","beta","normal","lognormal","loguniform","t","logt","normal_trunc","lognormal_trunc","t_trunc","logt_trunc","trap","clamp","exp","log","log2","log10","sqrt"],soe=`/**
 * Top-level helper functions injected into the user's \`belief_spec_for_cparam_combo\`.
 *
 * All helpers are available as bare names inside the user's function body
 * (see plaincode_execute.ts for the destructure preamble mechanism).
 *
 * The distribution helpers return family-spec strings (exact — no PWL
 * approximation; see distribution_families.ts for the family set, grammar,
 * and implicit truncation to the svar's range). \`trap\` is the one
 * non-family extra and returns PWL pairs. Mirrors the Python agent-side
 * helper set (hp/query_agents/richcode_eval_src/distribution_families.py
 * FAMILY_SPEC_HELPERS + trap/clamp/math in eval_code_shared.py /
 * belief_helpers_richcode.py) — keep in sync, names included.
 *
 * Name-collision caveat: these bare names are destructured inside the
 * user's function body after the cparam parameters, so a cparam whose name
 * matches a helper (most plausibly \`t\`) is a compile error for user code.
 */

import { formatFamilySpec } from './distribution_families.js';
import { HELPER_NAMES } from './belief_helper_names.js';
export { HELPER_NAMES };


// ── Family spec-string helpers ───────────────────────────────────────────

/** Triangular over [lo, hi] with mode at peak. */
export function tri(lo: number, peak: number, hi: number): string {
  return formatFamilySpec('tri', lo, peak, hi);
}

/** Uniform over [lo, hi]. */
export function uniform(lo: number, hi: number): string {
  return formatFamilySpec('uniform', lo, hi);
}

/** Legacy alias of \`uniform\` (pre-family helper name). */
export const uni = uniform;

/** Beta(a, b) on [0, 1]; a, b > 0. */
export function beta(a: number, b: number): string {
  return formatFamilySpec('beta', a, b);
}

/** Normal(mu, sigma); truncated to the variable's range downstream. */
export function normal(mu: number, sigma: number): string {
  return formatFamilySpec('normal', mu, sigma);
}

/** Log-normal: mu/sigma are mean/sd of log(X). */
export function lognormal(mu: number, sigma: number): string {
  return formatFamilySpec('lognormal', mu, sigma);
}

/** Uniform in log space over [lo, hi]; 0 < lo < hi. */
export function loguniform(lo: number, hi: number): string {
  return formatFamilySpec('loguniform', lo, hi);
}

/** Location-scale Student-t (sigma is the scale parameter, not the std). */
export function t(mu: number, sigma: number, df: number): string {
  return formatFamilySpec('t', mu, sigma, df);
}

/** Exp of location-scale Student-t; log-space params like lognormal. */
export function logt(mu: number, sigma: number, df: number): string {
  return formatFamilySpec('logt', mu, sigma, df);
}

/** Normal explicitly truncated to [lo, hi]. */
export function normal_trunc(mu: number, sigma: number, lo: number, hi: number): string {
  return formatFamilySpec('normal-trunc', mu, sigma, lo, hi);
}

/** Log-normal explicitly truncated to [lo, hi] (x-space bounds). */
export function lognormal_trunc(mu: number, sigma: number, lo: number, hi: number): string {
  return formatFamilySpec('lognormal-trunc', mu, sigma, lo, hi);
}

/** Location-scale Student-t explicitly truncated to [lo, hi]. */
export function t_trunc(mu: number, sigma: number, df: number, lo: number, hi: number): string {
  return formatFamilySpec('t-trunc', mu, sigma, df, lo, hi);
}

/** Exp of location-scale Student-t explicitly truncated to [lo, hi]
 *  (x-space bounds). */
export function logt_trunc(mu: number, sigma: number, df: number, lo: number, hi: number): string {
  return formatFamilySpec('logt-trunc', mu, sigma, df, lo, hi);
}


// ── PWL / utility helpers ────────────────────────────────────────────────

/** Trapezoidal distribution: [[lo, 0], [peak_lo, 1], [peak_hi, 1], [hi, 0]].
 *  No family-spec form; returns PWL pairs. */
export function trap(
  lo: number, peak_lo: number, peak_hi: number, hi: number,
): number[][] {
  return [[lo, 0], [peak_lo, 1], [peak_hi, 1], [hi, 0]];
}

/** Clamp x to [lo, hi]. */
export function clamp(x: number, lo: number, hi: number): number {
  return Math.min(Math.max(x, lo), hi);
}


// ── Math re-exports (match Python richcode's \`from math import ...\`) ─────

export const exp = Math.exp;
export const log = Math.log;
export const log2 = Math.log2;
export const log10 = Math.log10;
export const sqrt = Math.sqrt;


// ── Single bundle for injection into user code ──────────────────────────

/**
 * The bundle destructured inside the user's \`belief_spec_for_cparam_combo\` body.
 * Names in this object are the bare identifiers the user can call.
 *
 * Keys here must match \`HELPER_NAMES\` exactly (asserted at module load).
 */
export const HELPERS = {
  tri,
  uniform,
  uni,
  beta,
  normal,
  lognormal,
  loguniform,
  t,
  logt,
  normal_trunc,
  lognormal_trunc,
  t_trunc,
  logt_trunc,
  trap,
  clamp,
  exp,
  log,
  log2,
  log10,
  sqrt,
} as const;

// Assert HELPER_NAMES and HELPERS agree — protects against silent drift
// since the names list lives in a separate module (so code that only needs
// the names doesn't pull in the distribution machinery).
{
  const keysFromBundle = Object.keys(HELPERS);
  const namesList = [...HELPER_NAMES];
  const missingInNames = keysFromBundle.filter(k => !namesList.includes(k));
  const missingInBundle = namesList.filter(n => !keysFromBundle.includes(n));
  if (missingInNames.length > 0 || missingInBundle.length > 0) {
    throw new Error(
      \`belief_helpers: HELPER_NAMES ↔ HELPERS drift. \` +
      \`Missing from names: \${JSON.stringify(missingInNames)}. \` +
      \`Missing from bundle: \${JSON.stringify(missingInBundle)}.\`
    );
  }
}
`,loe=2,coe=.5;function doe(e){return["  // Optional, used only when sampling distributions: joint dependence","  // between variables at this parameter combination (leave out for independence).",`  // lloads: { latents: [{ name: 'shared_factor', description: 'what they share', loadings: { ${e.slice(0,loe).map(t=>`${t}: ${coe}`).join(", ")} } }] },`]}function foe(e,n){if(e.length===0)return["return {","  point:  {},","  bounds: {},","  sample: {},","};"].join(`
`);const t=e.map(o=>`${o}: 0`).join(", "),r=e.map(o=>`${o}: [0, 1]`).join(", "),i=e.map(o=>`    ${o}: tri(0, 0.4, 1),`).join(`
`);return["return {",`  point:  { ${t} },`,`  bounds: { ${r} },`,"  sample: {",i,"  },",...n===null?[]:doe(n),"};"].join(`
`)}function poe(e){const n=[];for(const t of e.get_cparams()){const r=t.allowed_values;r===void 0||typeof r=="string"||n.push(t.id.slice(7))}return n}const moe="// code data missing",hoe=10;function voe(e,n,t,r){const i=poe(e),o=e.get_svar_bare_names(),a=`function belief_spec_for_cparam_combo(${i.join(", ")}) {`,u=n.raw_code_input!==""?n.raw_code_input:t==="edit"?foe(o,r):moe,s=t==="view"?" readonly":"",c=`// ${uoe.join(", ")} are injected helper functions. For details (warning: the literal code with some irrelevant docs): `,d=t==="edit"?'<div class="code-action-row"><button class="code-run-btn" type="button">Run</button><span class="code-status" aria-live="polite"></span></div><div class="code-error-area"></div>':n.raw_code_input===""?"":`<div class="code-action-row"><button class="copy-to-yours-btn" type="button" title="Copy this entry's code into your editable Estimate code">Copy to Estimate</button></div>`;return`<div class="yours-code-input" data-variant="${t}"><div class="code-editor"><pre class="code-signature-line">${x(a)}</pre><pre class="code-helpers-comment"><span class="code-helpers-comment-text">${x(c)}</span><span class="code-helpers-help-slot"></span></pre><textarea class="code-body-input ${Is}" rows="${hoe}" spellcheck="false"${s}>${x(u)}</textarea><pre class="code-signature-line">}</pre></div>`+d+"</div>"}function cw(e,n,t,r,i){e.innerHTML=voe(n,t,r,i),XC(e),_oe(e)}function _oe(e){for(const n of e.querySelectorAll(".code-helpers-help-slot"))n.childElementCount>0||n.appendChild(QQ(soe))}const goe=1e-15;function boe(e,n){return n.filter(t=>{const r=e[t];if(typeof r=="string")return w_(r)!==null;if(!Array.isArray(r)||r.length===0)return!1;const i=r[0];return r[r.length-1][0]-i[0]<goe})}function yoe(e){const n={};for(const t of e){const r=t.id.startsWith("svar:")?t.id.slice(5):t.id;n[r]=Lt(t)}return n}const Eoe=.8,dw=.05,Soe="Positive values mean…",woe=2;function Bv(e,n,t){if(!n||t&&Object.keys(t).length>0)return null;const r=Fw(n,e.get_svar_bare_names());return r.length<woe?null:r}function NO(e,n,t,r){var o;const i=Bv(n,t,r);return i===null?null:{eligibleSvars:i,degenerateSvars:boe(((o=e.yoursRecord.trials[0])==null?void 0:o.sample)??{},i)}}function O3(e,n,t,r){return On(e.ui)!=="plainnum"||e.ui.inputMode!=="sample"?null:NO(e,n,t,r)}function N3(e,n){var r;const t=e.yoursRecord;return t.lloads_draft===void 0?UC((r=t.trials[0])==null?void 0:r.lloads,n.eligibleSvars):HC(t.lloads_draft,n.eligibleSvars)}function kO(e,n,t){const r=e.get_svar_bare_names(),i=so(e);if(i.length!==r.length)throw new Error(`joint-dependence editor has ${r.length} subjective variables but ${i.length} display labels`);const o=new Map(r.map((a,u)=>[a,i[u]]));return new Map(t.map(a=>[a,nt(o.get(a),n)]))}function Aoe(e,n,t,r,i,o){const a=O3(n,t,i,o);if(a===null){e.innerHTML="";return}const u=N3(n,a);e.innerHTML=$oe(u,a,kO(t,r,a.eligibleSvars),n.ui.jointDependenceEditorOpen),XC(e);const s=e.querySelector(".jde-help-slot");s&&s.appendChild(ut(J_)),MO(e,u,a),PO(e,u,a,t,r)}function $oe(e,n,t,r){const i=e.latents.length===0?Toe():Ioe(e,n,t);return`<details class="joint-dependence-editor"${r?" open":""}><summary class="jde-summary"><span class="jde-summary-title">Joint dependence</span><span class="jde-summary-explainer">Optional named uncertainties shared across your distributions</span><span class="jde-status-pill"></span></summary><div class="jde-body"><div class="jde-intro"><span class="jde-help-slot"></span><p>A latent is one shared uncertainty that can move two or more of your quantities together, or in opposite directions. Describe what it means, then give it signed loadings. Nothing you state here changes the distributions you gave above.</p></div>`+i+"</div></details>"}function Toe(){return'<div class="jde-empty-state"><div class="jde-empty-title">Currently sampled independently</div><p>Add a latent only when the distributions above do not tell the whole joint-belief story.</p><button class="jde-btn jde-add-latent-btn" type="button">Add a shared uncertainty</button></div>'}function Ioe(e,n,t){return'<div class="jde-active"><div class="jde-toolbar"><div class="jde-section-title">Shared uncertainties</div><button class="jde-btn jde-add-latent-btn" type="button">+ Add latent</button></div><div class="jde-latent-list">'+e.latents.map(Loe).join("")+`</div><div class="jde-matrix-section"><div class="jde-matrix-heading"><div class="jde-section-title">Signed loadings</div><div class="jde-matrix-hint">−1 falls as the latent rises · +1 rises with it · 0 unaffected</div></div><div class="jde-matrix-scroll">${Roe(e,n,t)}</div><div class="jde-banner" role="status"></div></div><div class="jde-bottom-actions"><button class="jde-btn jde-zero-loadings-btn" type="button">Zero all loadings</button><button class="jde-btn jde-remove-all-btn" type="button">Remove all latents</button></div><details class="jde-correlations"><summary>Implied pairwise correlations</summary><p class="jde-correlations-note">Derived from the loadings; feedback, not another input surface. Quantities your latents leave uncoupled are omitted.</p><div class="jde-matrix-scroll">`+Ooe(n,t)+'</div></details><div class="jde-artifact"><div class="jde-artifact-caption">What your response discloses:</div><div class="jde-artifact-host"></div></div></div>'}function Loe(e,n){const t=`jde-latent-name-${n}`,r=`jde-latent-description-${n}`;return`<div class="jde-latent-card" data-latent-index="${n}"><div class="jde-latent-header"><span class="jde-latent-number">${n+1}</span><button class="jde-btn jde-remove-latent-btn" type="button" data-latent-index="${n}">Remove</button></div><div class="jde-latent-fields"><div class="jde-field"><label for="${t}">Short name</label><input id="${t}" class="jde-latent-text" type="text" data-latent-index="${n}" data-latent-field="name" placeholder="e.g. shared evidence quality" value="${X(e.name)}"></div><div class="jde-field"><label for="${r}">Meaning and positive direction</label><textarea id="${r}" class="jde-latent-text ${Is}" rows="2" data-latent-index="${n}" data-latent-field="description" placeholder="${X(Soe)}">${x(e.description)}</textarea></div></div></div>`}function Roe(e,n,t){const r='<tr><th class="jde-variable-col">Quantity</th>'+e.latents.map((a,u)=>`<th class="jde-loading-col"><span class="jde-matrix-latent-name" data-latent-index="${u}"></span><span class="jde-matrix-latent-hint">−1 to +1</span></th>`).join("")+'<th class="jde-budget-col">Loading budget</th></tr>',i=new Set(n.degenerateSvars),o=n.eligibleSvars.map(a=>{const u=i.has(a),s=t.get(a),l=u?'<span class="jde-svar-note">single value — no dependence possible</span>':"",c=e.latents.map((d,p)=>`<td>${Coe(d.loadings[a]??null,p,a,s,u)}</td>`).join("");return`<tr data-svar="${X(a)}" data-svar-label="${X(DO(s))}"${u?' class="jde-row-ineligible"':""}><th scope="row" class="jde-svar-cell" data-svar="${X(a)}"><span class="jde-svar-label">${s}</span>${l}</th>`+c+`<td><div class="jde-budget-track"><span class="jde-budget-fill" data-svar="${X(a)}"></span></div><div class="jde-budget-copy" data-svar="${X(a)}"></div></td></tr>`}).join("");return`<table class="jde-loading-matrix"><thead>${r}</thead><tbody>${o}</tbody></table>`}function Coe(e,n,t,r,i){const o=X(`Loading of ${DO(r)} on latent ${n+1}`),a=`data-latent-index="${n}" data-svar="${X(t)}"${i?" disabled":""}`,u=e===null?"":FO(e);return`<div class="jde-loading-control"><input class="jde-loading-range" type="range" min="-1" max="1" step="${dw}" value="${e??0}" ${a} aria-label="${o}"><input class="jde-loading-number" type="number" min="-1" max="1" step="${dw}" value="${u}" ${a} aria-label="${o}, numeric"></div>`}function Ooe(e,n){const t=e.eligibleSvars,r=t.map(o=>`<th class="jde-svar-cell" data-svar="${X(o)}"><span class="jde-svar-label">${n.get(o)}</span></th>`).join(""),i=t.map(o=>`<tr><th class="jde-svar-cell" data-svar="${X(o)}"><span class="jde-svar-label">${n.get(o)}</span></th>`+t.map(()=>"<td></td>").join("")+"</tr>").join("");return`<table class="jde-correlation-table"><thead><tr><th></th>${r}</tr></thead><tbody>${i}</tbody></table>`}function MO(e,n,t){const r=jC(n,t.eligibleSvars,t.degenerateSvars,joe(e)),i=Nre(n),o=e.querySelector(".jde-status-pill");o&&(o.className=`jde-status-pill ${Noe(r,n,i)}`.trimEnd(),o.textContent=koe(r,n,i)),Moe(e,n),Poe(e,r),Doe(e,n),Foe(e,n,t),qoe(e,r,n,i),xoe(e,n,t)}function Noe(e,n,t){return e.length>0?"invalid":t?"valid":n.latents.length>0?"warning":""}function koe(e,n,t){if(e.length>0)return`${e.length} issue${e.length===1?"":"s"}`;const r=n.latents.length;return t?`${r} latent${r===1?"":"s"} · valid`:r>0?`${r} considered · independent`:"Independent"}function Moe(e,n){var t;for(const r of e.querySelectorAll(".jde-loading-range, .jde-loading-number")){if(r===document.activeElement)continue;const i=r.dataset.svar;if(i===void 0)continue;const o=((t=n.latents[Number(r.dataset.latentIndex)])==null?void 0:t.loadings[i])??null;o!==null&&(r.value=FO(o))}}function Poe(e,n){const t=new Set(n.filter(i=>i.field!==void 0).map(i=>`${i.latentIndex}:${i.field}`));for(const i of e.querySelectorAll(".jde-latent-text"))i.classList.toggle("jde-field-invalid",t.has(`${i.dataset.latentIndex}:${i.dataset.latentField}`));const r=new Set(n.filter(i=>i.svar!==void 0&&i.latentIndex!==void 0).map(i=>`${i.latentIndex}:${i.svar}`));for(const i of e.querySelectorAll(".jde-loading-number"))i.classList.toggle("jde-field-invalid",r.has(`${i.dataset.latentIndex}:${i.dataset.svar}`))}function Doe(e,n){var t;for(const r of e.querySelectorAll(".jde-matrix-latent-name")){const i=Number(r.dataset.latentIndex),o=(t=n.latents[i])==null?void 0:t.name.trim();r.textContent=o||`Latent ${i+1}`,r.title=r.textContent}}function Foe(e,n,t){const r=GC(n,t.eligibleSvars);for(const i of e.querySelectorAll(".jde-budget-fill")){const o=r[i.dataset.svar??""];o!==void 0&&(i.style.width=`${Math.min(100,Math.max(0,o*100))}%`,i.className="jde-budget-fill"+(o>1?" over":o>Eoe?" near":""))}for(const i of e.querySelectorAll(".jde-budget-copy")){const o=r[i.dataset.svar??""];if(o===void 0)continue;const a=o>1;i.className=`jde-budget-copy${a?" over":""}`,i.textContent=a?`${o.toFixed(3)} / 1 · over by ${(o-1).toFixed(3)}`:`${o.toFixed(3)} / 1`}}function qoe(e,n,t,r){const i=e.querySelector(".jde-banner");if(i){if(n.length>0){i.className="jde-banner invalid";const o=n.length>1?` (${n.length-1} more)`:"";i.textContent=`${n[0].message}${o} The calculator keeps using your last valid joint specification until this is repaired.`;return}if(!r){i.className="jde-banner warning",i.textContent=t.latents.length>0?"Valid, and exactly independent: the latents you named are disclosed as considered, with every loading at zero.":"Valid: sampled independently.";return}i.className="jde-banner",i.textContent="Valid joint specification. Every quantity is within its loading budget."}}function xoe(e,n,t){const r=e.querySelector(".jde-correlations"),i=e.querySelector(".jde-correlation-table thead tr"),o=e.querySelector(".jde-correlation-table tbody");if(r===null||i===null||o===null)return;const a=Ore(n,t.eligibleSvars),u=t.eligibleSvars.map((s,l)=>t.eligibleSvars.some((c,d)=>d!==l&&a[l][d]!==0));r.hidden=u.filter(Boolean).length<2,i.querySelectorAll("th").forEach((s,l)=>{l>0&&(s.hidden=!u[l-1])}),o.querySelectorAll("tr").forEach((s,l)=>{s.hidden=!u[l],s.querySelectorAll("td").forEach((c,d)=>{var p;c.hidden=!u[d],c.textContent=Voe(((p=a[l])==null?void 0:p[d])??NaN)})})}function Boe(e,n,t,r,i,o){if(e.querySelector(".joint-dependence-editor")===null)return;const a=O3(n,t,i,o);if(a===null)return;const u=kO(t,r,a.eligibleSvars);for(const s of e.querySelectorAll(".jde-svar-cell")){const l=u.get(s.dataset.svar??""),c=s.querySelector(".jde-svar-label");l!==void 0&&c!==null&&(c.innerHTML=l)}PO(e,N3(n,a),a,t,r)}function PO(e,n,t,r,i){const o=e.querySelector(".jde-artifact-host");if(o===null)return;const a=VC(n,t.eligibleSvars,t.degenerateSvars);o.innerHTML=a.kind==="invalid"?'<div class="jde-artifact-pending">Preview pauses until the issues above are repaired.</div>':Z_(a.lloads,r,i,{keepFolded:!0}).specHtml,Q_(o)}function fw(e){const n=Number(e.dataset.latentIndex);if(!Number.isInteger(n))return null;if(e.classList.contains("jde-latent-text")){const t=e.dataset.latentField;return t!=="name"&&t!=="description"?null:{kind:"text",latentIndex:n,field:t,value:e.value}}if(e.classList.contains("jde-loading-range")||e.classList.contains("jde-loading-number")){const t=e.dataset.svar;if(t===void 0)return null;const r=e.value.trim(),i=r===""||!Number.isFinite(Number(r))?null:Number(r);return{kind:"loading",latentIndex:n,svar:t,value:i}}return null}function Hoe(e,n){return{latents:e.latents.map((t,r)=>r!==n.latentIndex?t:n.kind==="text"?{...t,[n.field]:n.value}:{...t,loadings:{...t.loadings,[n.svar]:n.value}})}}function Uoe(e){const n=e.closest("button");if(n===null)return null;if(n.classList.contains("jde-add-latent-btn"))return{kind:"add"};if(n.classList.contains("jde-zero-loadings-btn"))return{kind:"zero-all"};if(n.classList.contains("jde-remove-all-btn"))return{kind:"remove-all"};if(n.classList.contains("jde-remove-latent-btn")){const t=Number(n.dataset.latentIndex);return Number.isInteger(t)?{kind:"remove",latentIndex:t}:null}return null}function Goe(e,n,t){switch(n.kind){case"add":return{latents:[...e.latents,ow(t)]};case"remove":return{latents:e.latents.filter((r,i)=>i!==n.latentIndex)};case"zero-all":return{latents:e.latents.map(r=>({...r,loadings:ow(t).loadings}))};case"remove-all":return{latents:[]}}}function DO(e){return e.replace(/<[^>]*>/g,"").trim()}function joe(e){const n={};for(const t of e.querySelectorAll("tr[data-svar-label]")){const r=t.dataset.svar;r!==void 0&&(n[r]=t.dataset.svarLabel)}return n}function FO(e){return String(e)}function Voe(e){return Number.isFinite(e)?e===0?"0.000":`${e>0?"+":"−"}${Math.abs(e).toFixed(3)}`:"invalid"}function Woe(e,n,t,r,i,o,a){const u=On(n.ui);if(u==="plainnum"){Aoe(e,n,t,r,o,a);return}if(u==="plaincode"){Xoe(e,n,t,r);return}Koe(e,n,t,r,i)}function Koe(e,n,t,r,i){if(!i){e.innerHTML="";return}const o=d3(t,n,i),a=_t(n,i);if(o.length===0||a.kind==="mix"){e.innerHTML="";return}const u=o[a.recordTrialIndex];e.innerHTML=u===void 0?"":Z_(u.lloads,t,r,{offerCopyToYours:n.ui.interactionMode!=="Estimate"}).specHtml,Q_(e)}function Xoe(e,n,t,r){const i=uC(t,n);e.innerHTML=i===void 0?"":Z_(i.lloads,t,r).specHtml,Q_(e)}function k3(e,n){return e??!!(n??!1)}function Yoe(e,n){return!k3(e,n)}const Joe=!0;function zoe(e){return Joe}async function qO(e,n){return{rdevRichcodeResults:[]}}const xO="execution timed out",Hv="execution aborted";function Qoe(e,n){const r=(n.workerFactory??Zoe)();return new Promise((i,o)=>{var c,d;let a=!1;const u=()=>{var p;a=!0,clearTimeout(l),(p=n.signal)==null||p.removeEventListener("abort",s),r.terminate()},s=()=>{a||(u(),o(new Error(Hv)))};if((c=n.signal)!=null&&c.aborted){r.terminate(),o(new Error(Hv));return}(d=n.signal)==null||d.addEventListener("abort",s);const l=setTimeout(()=>{a||(u(),o(new Error(xO)))},n.timeoutMs);r.addEventListener("message",p=>{a||(u(),i(p.data))}),r.addEventListener("error",p=>{a||(u(),o(new Error(p.message||"worker error")))}),r.postMessage(e)})}function Zoe(){return new Worker(new URL("/hirwebdev/assets/plaincode_eval_worker-CBUJMing.js",import.meta.url),{type:"module"})}function eae(e,n,t,r){const{html:i}=yq(n,void 0,t);e.innerHTML=i}const nae=1.01,tae=.5,rae=.3,Ur="pinch-zoom-following",Uv="sticky-bar-zoom-spacer",iae=4;function BO(e){return e>nae}function HO(e){return e**(tae-1)}function oae(e,n){const t=1/e.scale,r=HO(e.scale),i=n(e.width/r),a=rae*e.height/i,u=Math.max(t,Math.min(r,a));return{layoutWidthPx:e.width/u,barScale:u}}function aae(e,n,t,r){const i=HO(e.scale);return{translateXPx:e.offsetLeft+e.width-n.x,translateYPx:e.offsetTop+e.height-n.y,panelScale:i,maxHeightPx:Math.max(0,(e.height-r)/i-t)}}let ya=null;function Os(){const e=document.getElementById(Y_);if(!e)return;const n=document.getElementById(j_),t=window.visualViewport;if(t&&BO(t.scale)){const r=lae(e,t);ya={visualViewport:{scale:t.scale,width:t.width,height:t.height},barScale:r,panel:n?cae(n,e.offsetHeight*r):null},jO(e,n,t,ya)}else ya=null,sae(e),n&&GO(n)}function uae(){const e=document.getElementById(Y_);if(!e)return;const n=window.visualViewport;let t=null,r=!1;const i=o=>{r||(r=o),t===null&&(t=requestAnimationFrame(()=>{t=null;const a=ya,u=!r&&n!==null&&a!==null&&BO(n.scale)&&n.scale===a.visualViewport.scale&&n.width===a.visualViewport.width&&n.height===a.visualViewport.height;r=!1,u?jO(e,document.getElementById(j_),n,a):Os()}))};typeof ResizeObserver<"u"&&new ResizeObserver(()=>{i(!0)}).observe(e),n&&(n.addEventListener("resize",()=>{i(!0)}),n.addEventListener("scroll",()=>{i(!1)}))}function UO(e){document.documentElement.style.setProperty(BL,`${e+iae}px`)}function sae(e){if(e.classList.contains(Ur)){e.classList.remove(Ur),e.style.width="",e.style.transform="";const n=document.getElementById(Uv);n&&(n.hidden=!0)}UO(e.getBoundingClientRect().height)}function lae(e,n){e.classList.add(Ur),e.style.transform="",e.style.width=`${document.documentElement.clientWidth}px`;const t=e.getBoundingClientRect().height,r=dae(e);r.style.height=`${t}px`,r.hidden=!1,UO(t);const i=oae(n,o=>(e.style.width=`${o}px`,e.offsetHeight));return e.style.width=`${i.layoutWidthPx}px`,i.barScale}function cae(e,n){const t=getComputedStyle(e);if(t.display==="none")return GO(e),null;e.classList.add(Ur),e.style.transform="";const r=e.getBoundingClientRect(),i=parseFloat(t.bottom);return{layoutViewportCorner:{x:r.right,y:r.bottom+i},bottomGapPx:i,stickyBarHeightPx:n}}function GO(e){e.classList.contains(Ur)&&(e.classList.remove(Ur),e.style.transform="",e.style.maxHeight="")}function jO(e,n,t,r){if(e.style.transform=`translate(${t.offsetLeft}px, ${t.offsetTop}px) scale(${r.barScale})`,!n||!r.panel)return;const i=aae(t,r.panel.layoutViewportCorner,r.panel.bottomGapPx,r.panel.stickyBarHeightPx);n.style.transform=`translate(${i.translateXPx}px, ${i.translateYPx}px) scale(${i.panelScale})`,n.style.maxHeight=`${i.maxHeightPx}px`}function dae(e){const n=document.getElementById(Uv);if(n)return n;const t=document.createElement("div");return t.id=Uv,t.setAttribute("aria-hidden","true"),e.after(t),t}const VO="keymap-popover";function fae(){return Ht}function WO(){return document.getElementById(VO)}function pae(){return WO()!==null}function Ea(){var e;(e=WO())==null||e.remove()}function mae(){pae()?Ea():KO()}function ia(e,n){e.classList.toggle("keymap-row-invalid",n!=="");const t=e.querySelector(".keymap-error");t&&(t.textContent=n)}function hae(e){const n=dr();e.innerHTML="";for(const t of fae()){const r=document.createElement("div");r.className="keymap-row";const i=document.createElement("label");i.className="keymap-label",i.htmlFor=`keymap-input-${t.id}`,i.textContent=t.description;const o=document.createElement("input");o.id=`keymap-input-${t.id}`,o.className="keymap-input",o.type="text",o.maxLength=1,o.autocomplete="off",o.spellcheck=!1,o.value=n[t.id]??"",o.dataset.shortcutId=t.id,o.setAttribute("aria-label",`${t.description} shortcut key`);const a=document.createElement("div");a.className="keymap-error",o.addEventListener("input",()=>{const u=o.dataset.shortcutId,s=G_(o.value);if(!s.ok){ia(r,s.error??"Invalid shortcut key.");return}const l=RL(u,s.key);if(l){const d=Ht.find(p=>p.id===l);ia(r,`Already assigned to "${(d==null?void 0:d.description)??l}".`);return}const c=dZ(u,s.key);if(!c.ok){ia(r,c.error??"Invalid shortcut key.");return}o.value=c.key,ia(r,"")}),r.appendChild(i),r.appendChild(o),r.appendChild(a),e.appendChild(r)}}function KO(){Ea();const e=document.createElement("div");e.id=VO,e.className="keymap-popover",e.tabIndex=-1;const n=document.createElement("button");n.className="help-widget-close",n.type="button",n.textContent="×",n.setAttribute("aria-label","Close");const t=document.createElement("h3");t.className="keymap-title",t.textContent="Keymap";const r=document.createElement("div");r.className="keymap-body",hae(r),n.addEventListener("click",Ea),e.addEventListener("keydown",i=>{i.key==="Escape"&&Ea()}),e.appendChild(n),e.appendChild(t),e.appendChild(r),document.body.appendChild(e),e.focus()}const vae="arg-title-help",_ae=20,gae=50,pw=/\b\d+\.\d+\.\d+\b/;function bae(e,n){return pw.test(e)||n!==void 0&&pw.test(n)}function yae(e,n){const t=e.querySelector(".arg-title");if(!t||!bae(t.textContent??"",n))return;const r=ut(lee,_ae,gae);r.classList.add(vae),t.prepend(r)}const Eae="arg-title-version",Sae=/^\d+\.\d+\.\d+$/,wae=/\d+\.\d+\.\d+/;function XO(e,n){if(n!==void 0&&Sae.test(n)&&!wae.test(e))return n}function Aae(e,n){const t=XO(e,n);return t===void 0?e:`${e} ${t}`}function $ae(e,n){const t=e.querySelector(".arg-title");if(!t)return;const r=XO(t.textContent??"",n);if(r===void 0)return;const i=document.createElement("span");i.className=Eae,i.textContent=r,t.append(" ",i)}const M3="global-prose-fold-controls";function YO(e,n){const t=document.getElementById(M3);t&&(t.hidden=!(n&&X2(e)))}function Tae(){const e=document.getElementById(M3);return e!==null&&!e.hidden}const mw="calculator-adhoc-meta";function JO(e,n){const t=document.getElementById(mw);if(!n){t==null||t.remove();return}const r=t??(()=>{const o=document.createElement("div");return o.id=mw,e.insertAdjacentElement("beforebegin",o),o})();r.className="adhoc-meta",r.innerHTML="";const i=document.createElement("div");i.className="adhoc-meta-body",cR(i,n),r.appendChild(i)}const Iae="a[href], button, input, select, textarea, label";function Lae(e){const n=e.closest(`.${gt} > summary`);if(n===null)return null;const t=e.closest(Iae);if(t!==null&&n.contains(t))return null;const r=n.parentElement;return r instanceof HTMLDetailsElement?{foldId:r.id,open:!r.open,isProseSection:r.classList.contains(xi)}:null}const zO={SVAR_CARDS:wt("ESTIMATION","SVAR_CARDS"),JOINT_DEPENDENCE:wt("ESTIMATION","JOINT_DEPENDENCE"),CALCULATOR_HEADER:wt("CALCULATOR","CALCULATOR_HEADER"),CALCULATOR_INPUT:wt("CALCULATOR","CALCULATOR_INPUT"),CALCULATOR_RESULTS:wt("CALCULATOR","CALCULATOR_RESULTS"),DERIVED_FORMS:Pr,YOURS_CODE_INPUT:wt("CALCULATOR","YOURS_CODE_INPUT"),YOURS_SAVED_LIST:wt("CALCULATOR","YOURS_SAVED_LIST")};function QO(e){return zO[e]}function Rae(e){const n=new Map;for(const i of e){const o=i.kind==="pair"?i.pair:[i.subentry];for(const a of o){if(n.has(a))throw new Error(`Duplicate subentry mount: ${a}`);n.set(a,i)}}for(const i of Object.keys(zO))if(!n.has(i))throw new Error(`Missing subentry mount: ${i}`);function t(i){return document.getElementById(QO(i))}function r(i,o){var a;if(i.visible&&!i.visible(o)){const u=i.kind==="pair"?i.pair:[i.subentry];for(const s of u)(a=t(s))==null||a.replaceChildren();return}if(i.kind==="pair"){const u=t(i.pair[0]),s=t(i.pair[1]);u&&s&&i.render(u,s,o)}else{const u=t(i.subentry);u&&i.render(u,o)}}return{container:t,render(i,o){r(n.get(i),o)},renderAll(i){for(const o of e)r(o,i)}}}function ZO(e,n){const t={...e.inspectedCparamValues},r={...e.cparamValues},i={...e.cparamPinned};for(const[o,a]of Object.entries(n))t[o]=a,r[o]=a,i[o]=!0;return{inspectedCparamValues:t,cparamValues:r,cparamPinned:i}}function Cae(e,n,t){return{...ZO(e,t),readTrials:eB(e.readTrials,n)}}function Oae(e,n){return{...ZO(e,n.combination),readTrials:Zx(n.jtaskGroupId,n.configuration,n.singleContributingTrial)}}const hw="problem-reconstruction-label",Nae="The problem text on this page is reconstructed from the current problem template, using the options recorded with these results. The wording the trials answered may have differed.";function kae(e,n){var r;if((r=e.querySelector(`:scope > .${hw}`))==null||r.remove(),!n)return;const t=document.createElement("p");t.className=hw,t.textContent=Nae,t.hidden=!0,e.prepend(t)}const Ns="trial-selector-shell",Mae="trial-selector",ks="trial-selector-btn",Ms="data-trial-selection",Pae="trial-selector-group",Dae="trial-selector-mix-help",eN="trial-selector-btn-no-response",Fae="showing",nN="This trial gave no response for these parameter values",tN=2,qae=[Fe.ESTIMATION,Fe.TCHOICE,Fe.RESPONSE_NOTES,Fe.CALCULATOR];function xae(e,n,t,r){var a;const i=wn(t.ui,r);if(i===null||Pt(i)<tN){e.replaceChildren(),e.hidden=!0;return}e.hidden=!1,e.innerHTML=Hae(x2(i),rN(n,t,r));const o=ut(eR);o.classList.add(Dae),(a=e.querySelector(".trial-selector-buttons"))==null||a.after(o),oN(e,_t(t,r))}function rN(e,n,t){const r=new Set;return d3(e,n,t).forEach((i,o)=>{i===void 0&&r.add(o)}),r}function Bae(e,n,t,r){const i=rN(n,t,r);for(const o of e.querySelectorAll(`.${ks}`)){const a=sT(o.getAttribute(Ms)??""),u=a!==null&&a.kind==="trial"&&i.has(a.recordTrialIndex);o.classList.toggle(eN,u),u?o.title=nN:o.removeAttribute("title")}}function Hae(e,n){const t=vw(nr,nr,!1),r=a=>a.trials.map(u=>vw(uT({kind:"trial",recordTrialIndex:u.recordTrialIndex}),String(u.trialNumber),n.has(u.recordTrialIndex))).join(""),i=e.length===1?e[0]:null,o=i!==null?`<div class="trial-selector-buttons">${t}${r(i)}</div>`:`<div class="trial-selector-buttons">${t}</div>`+e.map(a=>{const{plotLabel:u,longLabel:s}=iN(a.configuration);return`<div class="${Pae}"><span class="trial-selector-group-label" title="${X(s)}">${x(u)}:</span><div class="trial-selector-buttons">${r(a)}</div></div>`}).join("");return`<div class="${Mae}"><span class="trial-selector-label">${Fae}</span>`+o+"</div>"}function iN(e){const n=gn(e);return{plotLabel:D2(n),longLabel:P2(n)}}function vw(e,n,t){const r=[ks];t&&r.push(eN);const i=t?` title="${nN}"`:"";return`<button class="${r.join(" ")}"${i} ${Ms}="${e}">${n}</button>`}function oN(e,n){const t=uT(n);for(const r of e.querySelectorAll(`.${ks}`))r.classList.toggle("active",r.getAttribute(Ms)===t)}function Uae(e,n){if(n===null)return null;const t=Pt(n);if(t<tN)return null;const r=x2(n);if(e.kind==="mix")return r.length>1?`mixture of ${t} trials from ${r.length} model configurations`:`mixture of ${t} trials`;for(const i of r){const o=i.trials.find(a=>a.recordTrialIndex===e.recordTrialIndex);if(o!==void 0)return i.configuration===null?`trial ${o.trialNumber}`:`${iN(i.configuration).plotLabel} trial ${o.trialNumber}`}throw new Error(`trialSelectionSummary: trial ${e.recordTrialIndex} is not one of the record's ${t} trials`)}function aN(e,n){mC(qae,fC,Uae(e,n))}const Ir="side-panel",P3="side-panel-tab",_w="side-panel-body",Gae="expanded",jae="side-panel-area",Vae="side-panel-area-title",Wae="side-panel-area-content",Kae="⋮︎",gw="View controls",Xae="View controls",uN=280,Yae="--side-panel-max-width",Jae=720,zae=uN+Jae;let Lr=!1;function Qae(){return window.innerWidth>=zae}function Zae(){document.documentElement.style.setProperty(Yae,`${uN}px`)}function eue(e){Lr=e&&Qae(),cu()}function nue(){return Lr=!Lr,cu(),Lr}function tue(e){const n=document.getElementById(Ir),t=document.getElementById(_w),r=document.getElementById(P3);if(!(n===null||t===null||r===null)){if(n.setAttribute("aria-label",Xae),r.textContent=Kae,r.title=gw,r.setAttribute("aria-label",gw),r.setAttribute("aria-controls",_w),n.hidden=!e.visible,!e.visible){t.replaceChildren(),cu();return}t.replaceChildren(...e.areas.map(rue)),cu()}}function rue(e){const n=document.createElement("section");n.className=jae;const t=document.createElement("h3");t.className=Vae,t.textContent=e.title;const r=document.createElement("div");return r.className=Wae,n.append(t,r),e.render(r),n}function cu(){var e,n;(e=document.getElementById(Ir))==null||e.classList.toggle(Gae,Lr),(n=document.getElementById(P3))==null||n.setAttribute("aria-expanded",String(Lr))}const Gv={refLinkColor:"data-ref-link-color",estimatorTextColor:"data-estimator-text-color"};function iue(e){return Object.hasOwn(Gv,e)}function bw(e){var t;const n=(t=Nu.find(r=>r.id===e))==null?void 0:t.values;if(n===void 0)throw new Error(`Color preference "${e}" has no enum definition in global_options.json`);return n}function sN(e,n=!1){const t=document.documentElement;for(const r of Object.keys(Gv)){const i=e[r],o=bw(r).includes(i);if(n&&!o)throw new Error(`Color preference "${r}" has value "${i}", not one of ${bw(r).join(", ")} (global_options.json). A stale saved value: pick another in Settings, or clear localStorage.`);t.setAttribute(Gv[r],o?i:mo[r])}}const du="long-text-abbreviable",D3="long-text-abbreviated",F3="long-text-abbrev-tail",lN="long-text-abbrev-control",q3="long-text-abbrev-toggle",oue="long-text-abbrev-expand",aue="long-text-abbrev-collapse",uue="more",sue="abbrev",lue="…",cue=20,due=.5,cN=[d2],fue=[...cN,f2,"srcquotes-inline",p2,kA,m2,xi,MA,PA,DA],pue="a, .ref-popover, .symbol-ref-name, .inline-note-ref, .srcquote-widget",mue=`<span class="${lN} ${oue}">${lue}<button class="${q3}">${uue}</button></span>`,hue=`<button class="${lN} ${q3} ${aue}">${sue}</button>`;function vue(e,{containers:n,thresholdChars:t,startAbbreviated:r}){if(!Number.isFinite(t)||t<1)return;const i=[];for(const o of n)for(const a of e.querySelectorAll(`.${o.containerClass}`)){if(a.classList.contains(du))continue;const u=a.querySelector(o.ownContentSelector);if(u===null)continue;const{totalChars:s,cut:l}=Eue(bue(u),t);l===null||s<=t||s-l.headChars<t*due||i.push({container:a,content:u,cut:l})}for(const{container:o,content:a,cut:u}of i){const s=wue(u,a);Iue(s,a).insertAdjacentHTML("afterend",mue),Lue(a).insertAdjacentHTML("beforeend",hue),o.classList.add(du),o.classList.toggle(D3,r)}}function _ue(e,n){for(const t of e.querySelectorAll(`.${du}`))t.classList.toggle(D3,n)}function gue(e){const n=e.closest(`.${du}`);n!==null&&n.classList.toggle(D3)}function bue(e){const n=[],t=r=>{for(const i of r.childNodes)i.nodeType===Node.TEXT_NODE?n.push(i):i.nodeType===Node.ELEMENT_NODE&&!yue(i)&&t(i)};return t(e),n}function yue(e){if(e.hasAttribute("hidden")||e.localName==="svg")return!0;const n=e.parentElement;return n instanceof HTMLDetailsElement&&!n.open&&e.localName!=="summary"?!0:getComputedStyle(e).display==="none"}function Eue(e,n){let t=0,r=!0,i=null;for(const o of e)for(let a=0;a<o.data.length;a++){const u=Sue(o.data[a]);u&&r||(r=u,t++,i===null&&t===n&&(i={node:o,offset:a+1,headChars:t}))}return{totalChars:t,cut:i}}function Sue(e){return e.trim()===""}function wue(e,n){const t=Aue(e.node,n);let r;t!==null?(t.classList.add(F3),r=t):r=dN(e.node.splitText($ue(e.node.data,e.offset)));let i=r;for(;i.parentNode!==null&&i!==n;){const o=[];for(let a=i.nextSibling;a!==null;a=a.nextSibling)o.push(a);for(const a of o)Tue(a);i=i.parentNode}return r}function Aue(e,n){let t=null;for(let r=e.parentElement;r!==null&&r!==n;r=r.parentElement)r.matches(pue)&&(t=r);return t}function $ue(e,n){const t=e.lastIndexOf(" ",n);return t<=0||n-t>cue?n:t}function Tue(e){e.nodeType===Node.ELEMENT_NODE?e.classList.add(F3):e.nodeType===Node.TEXT_NODE&&dN(e)}function dN(e){const n=document.createElement("span");return n.className=F3,e.parentNode.insertBefore(n,e),n.appendChild(e),n}function Iue(e,n){let t=e,r=t.parentElement;for(;r!==null&&r!==n&&!Rue(r);)t=r,r=t.parentElement;return t}function Lue(e){const n=e.lastElementChild;return n!==null&&cN.some(t=>n.classList.contains(t))?n:e}function Rue(e){return fue.some(n=>e.classList.contains(n))}const yw="srcquote-explainer",Cue="srcquote-explainer",Oue=`${Fe.SRCQUOTE_EXPLAINER}-section`;function Nue(){const e=i_[yw];if(e===void 0)throw new Error(`shared_text.json is missing section '${yw}' (regenerate via 'just gen')`);return e}function kue(e,n){const t=document.getElementById(Oue),r=n.renderedSrcquoteIds===void 0||n.renderedSrcquoteIds.size>0;t&&(t.hidden=!r),e.innerHTML=r?`<div class="${Cue}"><blockquote class="${f2}">`+je(Nue(),n)+"</blockquote></div>":""}const Mue="**Reference:** ";function Ew(e,n){if(n.kind==="sourcequote")return{kind:"sourcequote",quotes:e.resolve_srcquotes(n.sourcequoteIds)};if(![...Zv(e).values()].some(r=>r.anchor===n.targetId))throw new Error(`Popover target ${JSON.stringify(n.targetId)} is not present in ${e.aid}.`);return{kind:"entity",rawBody:Pue(e).get(n.targetId)??"",anchor:n.targetId}}function Pue(e){const n=new Map;for(const t of e.isym_entries()){const r=t.id.replace(/^isym:/,"");n.set(`#isym-${r}`,t.defn)}for(const t of e.isym_entries())for(const r of jr)for(const i of t[r]??[])n.set(`#${Eu}${bu(i.id)}`,`**${Yv[r]} example of [${t.id}]:** ${i.defn}`);for(const t of Jv(e))n.set(t.anchor,t.defn);for(const t of e.svar_decls()){const r=xh(t.id);n.set(`#gloss-${r}`,t.defn);const i=`isym:${r}`,o=e.can_consolidate_isym_svar(i)?e.get_isym(i).defn:t.defn,a=[`{expr:${r}}`];o&&a.push(o),n.set(`#${Qv}${r}`,a.join(`

`))}for(const t of e.get_display_form_keys())n.set(`#form-${yu(t)}`,e.get_display_form(t));for(const t of e.get_axioms()){const r=e.get_display_ax(t.id);r&&n.set(`#${zv}${Oi(t.id)}`,r)}for(const t of e.get_options())n.set(`#opt-${ge(t.id)}`,t.defn);for(const t of e.get_tchoice_decls())n.set(`#tchoice-${Ri(t.id)}`,t.defn);for(const t of e.referenceable_framing_notes()){const[,r]=e.fgroup_of_flabel(t.flabel),i=Ni(t.id);n.set(`#${Su}${i}`,`**${r.label_prefix}${t.flabel} (${i}):** ${t.defn}`)}for(const t of e.bib_entries())n.set(`#${wu(t.id)}`,Zw(`${Mue}${e.bib_full_text(t.id)}`,t));for(const t of e.definedSym){const r=t.id.startsWith("definedSym:")?t.id.slice(11):t.id,i=e.get_display_definedSym_or_none(t.id)??"",o=[];i&&o.push(`:= ${i}`),t.defn&&o.push(t.defn),n.set(`#defsym-${r}`,o.join(" — "))}return n}const Sw="hir-popover",Due="hir-popover-rail",Fue="hir-popover-rail-card",que="hir-popover-content",ww="hir-popover-close",xue="ref-popover",_i="srcquote-pinned";function oa(e,n){if(!(e instanceof Element))return null;const t=e.closest(n);return t instanceof HTMLButtonElement?t:null}function Bue(e,n){return n instanceof Node&&e.contains(n)}function Hue(e){const n=e.devMode??!1,t=new Map,r=[];let i=null;const o=y=>{if(console.error("Failed to open popover.",y),n)throw y},a=()=>(i!=null&&i.isConnected||(i=document.createElement("aside"),i.className=Due,i.setAttribute("aria-label","Open notes"),document.body.append(i)),i),u=y=>{const E=r.indexOf(y);E!==-1&&r.splice(E,1)},s=(y,E=!1)=>{var A;t.delete(y.trigger),u(y),y.popover.remove(),y.trigger.setAttribute("aria-expanded","false"),y.kind==="sourcequote"&&((A=y.trigger.closest(`.${gi}`))==null||A.classList.remove(_i)),E&&y.trigger.isConnected&&y.trigger.focus({preventScroll:!0}),i&&i.childElementCount===0&&(i.remove(),i=null)},l=y=>{for(const E of[...r])E.trigger!==y&&s(E)},c=(y,E)=>{const A=document.createElement(y==="sourcequote"?"span":"section");return A.className=y==="sourcequote"?`${Sw} ${DF}`:`${Sw} ${Fue}`,A.setAttribute("role","dialog"),A.setAttribute("aria-label",y==="sourcequote"?"Source quotes":"Reference details"),A.innerHTML=`<button type="button" class="${ww}" aria-label="Close popover">×</button><div class="${que}">${E}</div>`,A},d=(y,E,A)=>{const T={trigger:y,popover:E,kind:A};return t.set(y,T),r.push(T),y.setAttribute("aria-expanded","true"),T},p=y=>{const E=y.getAttribute(BA);if(E!==null)return CF(E);const A=y.getAttribute(Ra);if(A===null)throw new Error("Popover trigger is missing target data.");const T=e.getContext(),C=Ew(T.jprobInstance,lg(A));if(C.kind!=="entity")throw new Error("A rail trigger must resolve to an entity source.");const L=C.rawBody?je(C.rawBody,T):"",$=C.anchor.startsWith(`#${Su}`)&&!w2(T),w=`#${Eu}`,S=C.anchor.startsWith(w)&&!nq(T,C.anchor.slice(w.length)),I=C.anchor.startsWith(`#${Qw}`)&&!T.jprobInstance.cited_bib_ids(T.srcquotesInlined??!1).some(P=>`#${wu(P)}`===C.anchor),R=$||S||I?"":`<a href="${C.anchor}" class="popover-go">go →</a>`;return L+R},m=(y,E)=>{const A=y.firstElementChild;if(!(A instanceof HTMLElement))throw new Error("The rail has no card to reveal.");const T=A.offsetTop,C=Math.max(0,y.scrollHeight-y.clientHeight);y.scrollTop=Math.min(C,E.offsetTop-T)},f=y=>{e.getPersistentPopovers()||l(y);const E=c("rail",p(y)),A=a();A.append(E),d(y,E,"rail"),m(A,E)},h=(y,E)=>{const A=y.closest(`.${gi}`);if(A===null)throw new Error("Source-quote trigger has no widget parent.");const T=y.getAttribute(Ra);if(T===null)throw new Error("Source-quote trigger is missing target data.");const C=e.getContext(),L=Ew(C.jprobInstance,lg(T));if(L.kind!=="sourcequote")throw new Error("A source-quote trigger must resolve to source quotes.");e.getPersistentPopovers()||l(y);const $=GF(L.quotes,C),w=c("sourcequote",$);A.append(w),d(y,w,"sourcequote"),A.classList.toggle(_i,E)},v=y=>{const E=oa(y.target,`.${ww}`);if(E){const C=[...t.values()].find(L=>L.popover.contains(E));C&&s(C,!0);return}const A=oa(y.target,`.${la}`);if(A){const C=t.get(A);if(C){const L=A.closest(`.${gi}`);L!=null&&L.classList.contains(_i)?s(C):L==null||L.classList.add(_i)}else try{h(A,!0)}catch(L){o(L)}return}const T=oa(y.target,`.${xue}, .${xA}`);if(T){const C=t.get(T);if(C)s(C);else try{f(T)}catch(L){o(L)}return}!e.getPersistentPopovers()&&!x_(y.target)&&y.target instanceof Node&&!r.some(C=>C.popover.contains(y.target))&&l()},_=y=>{const E=oa(y.target,`.${la}`);if(!(!E||t.has(E)))try{h(E,!1)}catch(A){o(A)}},g=y=>{const E=y.target,A=E instanceof Element?E.closest(`.${gi}`):null;if(!A||Bue(A,y.relatedTarget)||A.classList.contains(_i))return;const T=A.querySelector(`.${la}`);if(!T)return;const C=t.get(T);C&&s(C)},b=y=>{if(y.key!=="Escape")return;const E=r.at(-1);E&&(y.preventDefault(),s(E,!0))};return document.addEventListener("click",v),document.addEventListener("mouseover",_),document.addEventListener("mouseout",g),document.addEventListener("focusin",_),document.addEventListener("focusout",g),document.addEventListener("keydown",b),{closeDisconnectedTriggers:()=>{for(const y of[...r])y.trigger.isConnected||s(y)},teardown:()=>{document.removeEventListener("click",v),document.removeEventListener("mouseover",_),document.removeEventListener("mouseout",g),document.removeEventListener("focusin",_),document.removeEventListener("focusout",g),document.removeEventListener("keydown",b),l(),i==null||i.remove(),i=null}}}const Uue="dag-highlight";function Aw(e,n){var o;const t=(o=e.closest(`.${Vh}`))==null?void 0:o.getAttribute(Ca);if(!t)return;const r=t.replace(/[\\"]/g,"\\$&"),i=document.querySelectorAll(`[${Ca}="${r}"]`);for(const a of i)a.classList.toggle(Uue,n)}function Gue(){const e=n=>{const t=n.target;return t instanceof Element?t.closest(`.${Wh}`):null};document.addEventListener("mouseover",n=>{const t=e(n);t&&Aw(t,!0)}),document.addEventListener("mouseout",n=>{const t=e(n);t&&Aw(t,!1)})}const jue="Select result set";function Vue(){return"<p>These controls choose the set of trials whose belief distributions are mixed. Which of them you are reading — the mixture, or one trial — is the <code>mix</code> selector under the sticky bar.</p>"+eR()}const fN="jtask-group-select",pN="adhoc-result-select",mN="",hN=":";function Wue(e){return e.queryMode+hN+e.entryIdx}function Kue(e){const[n,t,...r]=e.split(hN);if(r.length>0||t===void 0)return null;const i=ku.find(o=>o===n);return i===void 0||!/^\d+$/.test(t)?null:{queryMode:i,entryIdx:Number(t)}}const Xue="None",Yue="Select None in Adhoc results to enable methodical selection.",Jue="result-set-area",fu="result-set-control",x3="result-set-control-label",zue="result-set-single-value";function Que(e,n){e.className=Jue,e.replaceChildren(),e.appendChild(ut(Vue));const t=n.activeAdhocEntry!==null;if(n.selectedJtaskGroupId!==null&&(e.insertAdjacentHTML("beforeend",ese(n,t)),n.mixtureGroupInterpretation!==null)){const r=document.createElement("div");r.className=fu,r.insertAdjacentHTML("beforeend",`<span class="${x3}">Model configurations</span>`);const i=document.createElement("div");r.appendChild(i),ore(i,{interpretation:n.mixtureGroupInterpretation,disabled:t}),e.appendChild(r)}Zue(n.presetData)&&e.insertAdjacentHTML("beforeend",nse(n)),t&&n.selectedJtaskGroupId!==null&&e.insertAdjacentHTML("beforeend",`<p class="result-set-adhoc-note">${Yue}</p>`)}function Zue(e){return e.adhocPlainnumEntries.length>0||e.adhocPlaincodeEntries.length>0}function ese(e,n){const t=`<span class="${x3}">Task group</span>`,r=I2(e.presetData.richcodeResults);if(e.jtaskGroupIds.length<=1){const a=e.selectedJtaskGroupId??"",u=r.has(a)?D$+a:a;return`<div class="${fu}">${t}<span class="${zue}" title="${X(a)}">${x(u)}</span></div>`}const i=F$(e.jtaskGroupIds,r),o=e.jtaskGroupIds.map((a,u)=>`<option value="${X(a)}" title="${X(a)}"${a===e.selectedJtaskGroupId?" selected":""}>${x(i[u])}</option>`).join("");return`<div class="${fu}">${t}<select id="${fN}" class="jtask-group-select"${n?" disabled":""} title="Task group: which prompt version these results answer">${o}</select></div>`}function nse(e){const n=e.activeAdhocEntry;let t=`<option value="${mN}"${n===null?" selected":""}>${Xue}</option>`;for(const r of ku){const i=Wr(e.presetData,r);for(let o=0;o<i.length;o++){const a=i[o],u=e.presetData.adhocPresets[a.presetIndex];if(u===void 0)continue;const s=T2(u,r,a);if(s===void 0)continue;const l=n!==null&&n.queryMode===r&&n.entryIdx===o;t+=`<option value="${Wue({queryMode:r,entryIdx:o})}"${l?" selected":""}>${x(Fq(u,r,s))}</option>`}}return`<div class="${fu}"><span class="${x3}">Adhoc results</span><select id="${pN}" class="adhoc-select">${t}</select></div>`}const tse=["VISIBLE_AOPTS"],rse={dataAttribute:"data-aopt-body",selectClass:"aopt-body-select",inputClass:"aopt-body-input",textInputClass:"aopt-body-text-input",checkboxClass:"aopt-body-checkbox",checkboxGroupClass:"aopt-body-checkbox-group"};function ise(e,n,t,r=x,i){const o=[];for(const a of e){if(!Li(a))continue;const u=ge(a.id),s=t[u]??a.default_value,l=(i==null?void 0:i(a))??{atStart:"",atEnd:""};let c=V2(u,a);const d=a.input_type==="MultiStringFromSet",p=d?1:2,m=new Set(d?a.required_values??[]:[]),f=Array.isArray(a.allowed_values)&&a.allowed_values.filter(v=>!m.has(v)).length>=p;if(n&&(f||a.allowed_values===void 0))c+=" = "+Da(u,a,s,rse,a.input_type);else{const v=Array.isArray(s)?s.join(", "):String(s);c+=` <span class="cparam-or-aopt-value">= ${x(v)}</span>`}o.push(`<div class="cparam-or-aopt" id="opt-${X(u)}"><div class="cparam-or-aopt-header">${c}</div><div class="cparam-or-aopt-defn">${l.atStart}${r(a.defn)}${l.atEnd}</div></div>`)}return o.join("")}function ose(e,n,t,r,i){const o=ise(t.get_aopts(),i.ui.interactionMode==="Estimate",r.displayOptionValues,u=>je(u,r),u=>Kn(u.srcquotes,r)),a=document.getElementById(`${Fe[n]}-section`);if(!o){e.innerHTML="",a&&(a.hidden=!0);return}a&&(a.hidden=!1),e.innerHTML=o}const ase=2,use="(no recorded choice)",vN="data-tchoice-recorded",jv="data-tchoice-bare",$w={dataAttribute:"data-tchoice-body",selectClass:"tchoice-body-select",inputClass:"tchoice-body-input",checkboxClass:"tchoice-body-checkbox"};function sse(e){return e.input_type==="Bool"||e.allowed_values.length>=ase}function Tw(e,n,t){var i;const r=(i=e[n])==null?void 0:i[t];return r===void 0?"":String(r)}function _N(e){return e===""?use:e}function lse(e,n,t){const r=n.map((a,u)=>`data-trial-${u}="${X(Tw(n,u,e))}"`).join(" "),i=Tw(n,t,e);return`<span class="tchoice-recorded${i===""?" tchoice-recorded-empty":""}" ${vN}="${X(e)}" ${r}>${x(_N(i))}</span>`}const cse="Any number in",Iw="∞";function dse(e){if(Or(e))return H$(e.allowed_values);const[n]=Gr([e]),t=n.lo===null?`(-${Iw}`:`${n.loClosed?"[":"("}${n.lo}`,r=n.hi===null?`${Iw})`:`${n.hi}${n.hiClosed?"]":")"}`;return`<div class="${B$}">${cse} ${x(`${t}, ${r}`)}</div>`}function fse(e,n,t,r={}){const{resultChoicesPerTrial:i,trialSelection:o=Ar,processDefn:a=x,renderSrcquotes:u}=r,s=[];for(const l of e){const c=Ri(l.id),d=(u==null?void 0:u(l))??{atStart:"",atEnd:""};let p=V2(c,l);const m=Hw(l),h=Or(l)&&sse(l)||m,v=n&&h,_=!n&&h&&o.kind==="trial"&&i!==void 0&&i.some(b=>b[c]!==void 0);let g="";if(v&&m){const b=t[c]??"";p+=" = "+Da(c,l,b,$w,"Number")}else if(v&&Or(l)){const b=t[c]??l.default_value;p+=" = "+Da(c,l,b,$w,l.input_type)}else _?p+=" = "+lse(c,i,o.recordTrialIndex):g=dse(l);s.push(`<div class="cparam-or-aopt" id="tchoice-${X(c)}" ${jv}="${X(c)}"><div class="cparam-or-aopt-header">${p}</div><div class="cparam-or-aopt-defn">${d.atStart}${a(l.defn)}${d.atEnd}</div>`+g+"</div>")}return s.join("")}function pse(e){const n=On(e.ui);return n===null?{}:Pu(e,n).trial_choices??{}}function gN(e,n,t,r,i,o,a){const u=n.get_tchoice_decls(),s=On(r.ui),l=s!==null,c=fse(u,l,pse(r),{resultChoicesPerTrial:l?void 0:i,trialSelection:a,processDefn:p=>je(p,t),renderSrcquotes:p=>Kn(p.srcquotes,t)}),d=document.getElementById(`${Fe.TCHOICE}-section`);if(!c){e.innerHTML="",d&&(d.hidden=!0);return}d&&(d.hidden=!1),e.innerHTML=c,bN(e,s!==null?{mode:"edit",reasoning:Pu(r,s).reasoning_response}:{mode:"read",reasoning:a.kind==="mix"?void 0:o[a.recordTrialIndex]})}function bN(e,n){for(const t of e.querySelectorAll(`[${jv}]`)){const r=t.getAttribute(jv)??"";QC(t,r,n,t.querySelector(":scope > .cparam-or-aopt-header"))}}function mse(e,n,t){for(const r of e.querySelectorAll(`[${vN}]`)){const i=r.getAttribute(`data-trial-${n}`)??"";r.textContent=_N(i),r.classList.toggle("tchoice-recorded-empty",i==="")}bN(e,{mode:"read",reasoning:t[n]})}function hse(e,n){if(e.input_type==="Bool"){if(n.type!=="checkbox")throw new Error(`Bool tchoice ${e.id} expected a checkbox control`);return n.checked===!0}if(e.input_type==="Number"){const t=Number(n.value);if(!Number.isFinite(t))throw new Error(`Invalid numeric tchoice value for ${e.id}: ${n.value}`);return t}return n.value}function vse(e,n){if(n.value.trim()==="")return null;const t=Number(n.value);if(!Number.isFinite(t))return null;const[r]=Gr([e]);return Cr(r,t)?t:null}function _se(e,n,t){if(n===void 0)return null;if(n!=="claudecode"&&n!=="codex")return`${t} carries invalid agent_cli ${JSON.stringify(n)}`;if(typeof e!="string")return`${t} carries agent_cli ${JSON.stringify(n)} without a model family`;let r;try{r=Gi(e)}catch(i){return`${t} carries agent_cli ${JSON.stringify(n)} for unknown model ${JSON.stringify(e)}: ${String(i)}`}return n!==r?`${t} model ${JSON.stringify(e)} carries agent_cli ${JSON.stringify(n)}; expected ${JSON.stringify(r)}`:null}function gse(e){return _se(e.model,e.agent_cli,"result")}function bse(e,n){const t=[];for(const r of e){const i=gse(r);if(i===null){t.push(r);continue}const o=`methodical provenance mismatch for ${JSON.stringify(r.label)}: ${i}`;console.warn(`omitting ${o}`)}return t}class Ps extends Error{}function Lw(e,n,t){return JSON.stringify([e,n,t])}function Dh(e,n,t){return`adhoc ${n} entry ${JSON.stringify(t)} of ${JSON.stringify(e)}`}function aa(e,n,t){console.warn(`${e}; ${n}`)}const Rw="showing the entry without precomputed stats";function ua(e){return e.precomputed!==void 0&&Object.keys(e.precomputed).length>0||e.precomputed_aux_forms!==void 0}function yse(e,n){if(e==="plainnum"){const t=n;return ua(t)||t.trials.some(ua)}return n.cparam_combos.some(t=>ua(t)||t.trials.some(ua))}function Ese(e,n){const t=i=>{const{precomputed:o,precomputed_aux_forms:a,...u}=i;return u};if(e==="plainnum"){const{precomputed_aux_forms:i,...o}=n;return{...o,precomputed:{},trials:o.trials.map(t)}}const r=n;return{...r,cparam_combos:r.cparam_combos.map(i=>{const{precomputed_aux_forms:o,...a}=i;return{...a,precomputed:{},trials:i.trials.map(t)}})}}function yN(e,n){const t=new Map;for(const r of n){const i=r.trial_index;if(!Number.isInteger(i)||i<0||i>=e.length||t.has(i))throw new Ps(`stats for trial ${i}, which the entry does not have there`);t.set(i,r)}return e.map((r,i)=>{const o=t.get(i);return o===void 0?r:{...r,...o.precomputed===void 0?{}:{precomputed:o.precomputed},...o.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:o.precomputed_aux_forms}}})}function EN(e){return{precomputed:e.precomputed,...e.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:e.precomputed_aux_forms}}}function Sse(e,n){const[t,...r]=n.cparam_combos,i=Yt(e.cparam_values??{});if(t===void 0||r.length>0||Yt(t.cparams)!==i)throw new Ps(`stats for combination(s) ${n.cparam_combos.map(o=>Yt(o.cparams)).join(", ")}; a plainnum entry has exactly its own combination, ${i}`);return{...e,...EN(t),trials:yN(e.trials,t.trials)}}function wse(e,n){const t=new Map;for(const i of n.cparam_combos)t.set(Yt(i.cparams),i);const r=new Set(e.cparam_combos.map(i=>Yt(i.cparams)));for(const i of t.keys())if(!r.has(i))throw new Ps(`stats for combination ${i}, which the entry does not answer`);return{...e,cparam_combos:e.cparam_combos.map(i=>{const o=t.get(Yt(i.cparams));return o===void 0?i:{...i,...EN(o),trials:yN(i.trials,o.trials)}})}}function Ase(e,n,t){const r=new Map;for(const o of n){const a=Lw(o.name_or_pseudoname,o.query_mode,o.label);if(r.has(a)){aa(`the adhoc precomputed stats name the ${Dh(o.name_or_pseudoname,o.query_mode,o.label)} twice`,"using the first");continue}r.set(a,o)}const i=e.map(o=>{const a=(u,s,l)=>s.map(c=>{const d=Lw(o.name_or_pseudoname,u,c.label),p=r.get(d);r.delete(d);const m=Dh(o.name_or_pseudoname,u,c.label);if(yse(u,c))return aa(`the ${m} carries inline precomputed stats in adhoc-presets.json, whose stats slots stay empty (stats come from adhoc-precomputed.json)`,Rw),Ese(u,c);if(p===void 0)return c;try{return l(c,p)}catch(f){if(!(f instanceof Ps))throw f;return aa(`the adhoc precomputed stats of the ${m} carry ${f.message}`,Rw),c}});return{...o,plaincode:a("plaincode",o.plaincode,wse),plainnum:a("plainnum",o.plainnum,Sse)}});for(const o of r.values())aa(`the adhoc precomputed stats name the ${Dh(o.name_or_pseudoname,o.query_mode,o.label)}, which no loaded preset has`,"ignoring them");return i}const $se=["framing-notes-explainer","srcquote-explainer"],Tse=Object.values(Fe).filter(e=>!$se.includes(e)).map(e=>`${e}-section`),SN=2;function wN(e,n){const t=n+SN;let r=null;for(const i of e)i.top>t||(r===null||i.top>r.top)&&(r=i);return r===null?null:r.id}function Ise(e,n,t){const r=[...e].sort((c,d)=>c.top-d.top);if(r.length===0)return null;const i=r[0],o=wN(e,n),a=o===null?-1:r.findIndex(c=>c.id===o),u=r[a+1];return u===void 0?i.id:u.top-n<=t+SN?u.id:i.id}function Lse(e=document){return wN(H3(e),B3(e))}function Rse(e=document){return Ise(H3(e),B3(e),Cse(e))}function B3(e=document){var r;const n=parseFloat(((r=e.defaultView)==null?void 0:r.getComputedStyle(e.documentElement).getPropertyValue(BL))??"");if(Number.isFinite(n))return n;const t=e.getElementById(Y_);return t===null?0:t.getBoundingClientRect().bottom}function Cse(e){var t;const n=e.documentElement;return Math.max(0,n.scrollHeight-n.clientHeight-(((t=e.defaultView)==null?void 0:t.scrollY)??0))}function H3(e){const n=[];for(const t of Tse){const r=e.getElementById(t);if(r===null)continue;const i=r.getBoundingClientRect();i.width===0&&i.height===0||n.push({id:t,top:i.top})}return n}const Ose="url",Nse="copied ✓",kse="in address bar",Mse=1200;function Pse(e,n,t){const r=n.toString(),i=t===null?"":`#${encodeURIComponent(t)}`;return`${e.origin}${e.pathname}${r?"?"+r:""}${i}`}function Dse(e,n,t=document){const{params:r,errors:i}=Rte(e,n),o=Lse(t);return{href:Pse(new URL(t.location.href),r,o),errors:i}}function Cw(e,n){e.textContent=n,setTimeout(()=>{e.textContent=Ose},Mse)}async function Fse(e,n,t){var o;const{href:r,errors:i}=Dse(n,t);for(const a of i)console.error(`[view_share_link] ${a}`);window.history.replaceState(null,"",r);try{if(!((o=navigator.clipboard)!=null&&o.writeText))throw new Error("Clipboard access is unavailable in this browser.");await navigator.clipboard.writeText(r),Cw(e,Nse)}catch(a){console.error("[view_share_link] copying the view link failed",a),Cw(e,kse)}}const qse={goto_calculator:e=>e.bodyHasCalculatorSection,goto_next_section:e=>e.bodyHasAnchorSections,switch_interaction_mode:e=>e.severalInteractionModesAvailable,toggle_mnames:e=>e.showsProblemBody,toggle_framing_notes:e=>e.showsProblemBody,toggle_long_text_abbrev:e=>e.showsProblemBody,toggle_srcquotes_inlined:e=>e.showsProblemBody&&e.hasSrcquotes};function xse(e,n){const t=qse[e];return t===void 0||t(n)}function Bse(e){return new Set(Ht.map(n=>n.id).filter(n=>!xse(n,e)))}function Hse(e,n){for(const t of e.querySelectorAll(`.${zw}`)){const r=t.dataset.bareid,i=t.dataset.mname;if(r===void 0||i===void 0)throw new Error("Toggleable symbol ref is missing data-bareid or data-mname.");t.textContent=n?i:r}}function Use(e){const n=e.getViewedSource();try{e.renderCurrentView();return}catch(t){if(!e.shouldRecover(n))throw t;try{e.switchToSafeYours(n),e.renderSafeYoursView()}catch(r){throw new AggregateError([t,r],`View ${JSON.stringify(n)} failed, and the fail-safe Yours view also failed`)}e.recovered(n,t)}}const Gse=[Aq,qre,Vie];function pu(e){vue(e,{containers:Gse,thresholdChars:Ye().longTextAbbrevThreshold,startAbbreviated:N.ui.longTextAbbrev})}let B,N,ie,yi,mu=n_(),un,tn,sn,di,xo,qe=null,Sa=0,Hn=null,Vv=null;const Wv="calculator-section",jse="plainnum",Vse="There are no methodical trial results to read for this problem.",Wse="result-set-empty-state";async function nce(e){const n=await qO();cH(),history.scrollRestoration="manual",Zae(),sN(Ye()),U3(e,n),Tle(),Lle();const t=ele();gZ(t),MZ(t),qe=Hue({getContext:An,getPersistentPopovers:()=>N.ui.persistentPopovers}),Gue(),window.addEventListener("resize",Os),uae(),window.addEventListener("pagehide",()=>{Bo(),Me()}),window.addEventListener("popstate",()=>{Qse()}),vk(fn)}function U3(e,n){var u,s;Sa++,Hn==null||Hn.abort(),Hn=null,GJ(),YJ(),oz(),KJ(),Iee(),B=qk(e.jpdefn);const t=Ase(e.adhocPresets??[],Ax(e.adhocPrecomputed??[])),r=Dq(t);ie={adhocPresets:t,adhocPlainnumEntries:r.plainnum,adhocPlaincodeEntries:r.plaincode,richcodeResults:bse(qq($x([...e.richcodeResults??[],...n.rdevRichcodeResults]))),jtaskHashGroups:((u=e.jprobWebConfig)==null?void 0:u.jtask_hash_groups)??[]},Kse(),yi={presetData:ie,defaultView:xte((s=e.jprobWebConfig)==null?void 0:s.default_view,Mt())};const{state:i,readerFacingMessages:o}=nH(B,yi);N=i,un=cq(e.jpdefn),tn=e.formRegistry,sn=e.barrierRegistry??{},di=e.cparamComboFilter,xo=e.cparamFilterDescription;const a=Lte(N,Mt(),yi.defaultView);if(mu=a.linkAppliedUi,!a.namedSelection)for(const l of o)Xt(JB,new Error(l));RC(),fH(mu,z$(yi))&&Jte({openedTheDefaultViewAlone:a.askedForDefaultView&&!a.carriedViewKeys,viewParamsLeftTheAddressBar:a.askedForDefaultView}),eue(N.ui.sidePanelExpanded),zse(),fn()}function Mt(){return{jprobTemplate:B,presetData:ie}}function bn(){return Xr(N.ui,{presetData:ie})}function Kv(){const e=bn();return e.kind==="adhoc"?Wq(e.entry,ie):null}function Me(){pH(mu,N.ui),iT(B.config,mH(N.ui,mu),yi)}function Kse(){const e=Zq(ie);if(e.length===0)return;const n=`these adhoc entries are not uniquely named, so a link or a remembered view naming one of them shows the first: ${e.join("; ")}`;Xt("Adhoc results",new Error(n))}function Xse(){for(const e of EC)He(e)}function AN(){He("calc_pin"),He("calc_unpin")}function $N(){AN(),He("calc_value"),He("inspect_value")}const Yse={showFramingNotes:"show_framing",symbolMnames:"long_symbol_names"};function wa(e,n){N.ui[e]=n,Ui(e,n),Me();const t=Yse[e];if(t!==void 0&&He(t),e==="symbolMnames"){Rr(()=>{Hse(document,n),Fh(e,n)});return}if(e==="longTextAbbrev"){Rr(()=>{_ue(document,n),Fh(e,n)});return}if(e==="showGlobalProseFoldControls"){Rr(()=>{const r=document.getElementById("main-content");r&&YO(r,n),Os(),Fh(e,n)});return}fn()}function Fh(e,n){const t=document.getElementById(Kt(e));t instanceof HTMLInputElement&&(t.checked=n)}function Jse(){return{ui:N.ui,srcquotesInlined:k3(N.ui.srcquotesInlinedOverride,G3().srcquotes_inlined),uniformProseFoldOpenByKind:NB(document.getElementById("main-content"))}}function zse(){var n;const e=B.layout.sections.html.find(t=>"chunkid"in t&&t.style===Vw);if(e&&"chunkid"in e){const t=B.find_textchunk_defn(e.chunkid);t&&(document.title=Aae(iM(t),(n=xL(B.aid))==null?void 0:n.version))}}async function Ow(e){const n=await TN(e);IN(),history.pushState(null,"",Bte(window.location.pathname,e)),U3(n.manifest,n.devOnlyData)}async function TN(e){const n=DL(e);if(!n)throw new Error(`no manifest module for aid '${e}' (looked for ${V_(e)}).`);const{manifest:t}=await n();return{manifest:t,devOnlyData:await qO()}}function IN(){Bo(),Me()}async function Qse(){const e=nw(window.location.pathname);if(e===null||e===B.aid)return;if(DL(e)===void 0){window.location.reload();return}const n=await TN(e);nw(window.location.pathname)===e&&(IN(),U3(n.manifest,n.devOnlyData))}function LN(e,n){e&&(N.ui.foldOpenById[e]=n,e===Pr&&He(Ts),Me())}function Zse(e){!(e instanceof HTMLDetailsElement)||e.open||(e.open=!0,LN(e.id,!0))}function ele(){return{toggle_mnames:()=>{wa("symbolMnames",!N.ui.symbolMnames)},goto_calculator:CN,goto_top:()=>{window.scrollTo({top:0})},switch_interaction_mode:()=>{const e=WN();e!==null&&VN(e)},toggle_srcquotes_inlined:()=>{N.ui.srcquotesInlinedOverride=Yoe(N.ui.srcquotesInlinedOverride,G3().srcquotes_inlined),Me(),He("srcquotes_view"),fn()},toggle_keymap:mae,toggle_framing_notes:()=>{wa("showFramingNotes",!N.ui.showFramingNotes)},toggle_long_text_abbrev:()=>{wa("longTextAbbrev",!N.ui.longTextAbbrev)},goto_next_section:()=>{var n;const e=Rse();e!==null&&((n=document.getElementById(e))==null||n.scrollIntoView({block:"start"}))}}}function G3(){if(N.ui.interactionMode==="Estimate")return N.optionValues;const e=wn(N.ui,ie);if(!e)return N.optionValues;const n={...N.optionValues};for(const t of B.get_aopts()){const r=ge(t.id);r in e.aopts&&(n[r]=e.aopts[r])}if("cparam_values"in e&&e.cparam_values)for(const t of B.get_cparams()){const r=ge(t.id);r in e.cparam_values&&(n[r]=e.cparam_values[r])}return n}function An(){const e=G3(),n=!!(e.show_typical_examples??n2),t=k3(N.ui.srcquotesInlinedOverride,e.srcquotes_inlined),r=Zv(B,{symbolMnames:N.ui.symbolMnames}),i=tt(bn());return{jprobInstance:oA(B,iA(B,e,i),i),showTypical:n,refLookup:r,srcquotesInlined:t,renderedSrcquoteIds:new Set,showFramingNotes:N.ui.showFramingNotes,displayOptionValues:e,showExampleClassification:N.ui.showExampleClassification,showBareIds:zoe(N.ui.interactionMode),exampleFoldState:N.ui.exampleFoldState,exampleFoldsDefaultOpen:N.ui.exampleFoldsDefaultOpen,proseSectionFoldState:N.ui.proseSectionFoldState,proseSectionFoldsDefaultOpen:N.ui.proseSectionFoldsDefaultOpen,foldOpenById:N.ui.foldOpenById,popoverAllRefs:N.ui.popoverAllRefs}}const nle="Keeping your place on the page";function RN(){return{root:document.getElementById("main-content"),viewportTopInsetPx:B3(document)}}function j3(e){try{return e()}catch(n){return Xt(nle,n),null}}function Bo(){const e=Vv;return e===null||e.aid!==B.aid?null:j3(()=>{const n=gB(RN());return N.ui.scrollPositionByInteractionMode[e.interactionMode]=n,n})}function Aa(e,n){j3(()=>bB(e,RN(),n))}function CN(){const e=document.getElementById(Wv);if(!e)throw new Error(`#${Wv} not found.`);Zse(e),e.scrollIntoView({block:"start"})}function Rr(e){const n=Bo();e(),n!==null&&Aa(n,"recordedPageOffset")}function tle(e,n,t,r){if(e==="landOnCalculator"){j3(CN);return}if(n===null&&window.location.hash!=="")return;const i=n!==null&&n.aid===r.aid;if(i&&n.interactionMode===r.interactionMode){t!==null&&Aa(t,"recordedPageOffset");return}const o=N.ui.scrollPositionByInteractionMode[r.interactionMode]??null;if(o!==null){Aa(o,"recordedPageOffset");return}if(i&&t!==null){Aa(t,"pageTop");return}window.scrollTo({top:0})}function fn(e="preserveReadingPosition"){const n=Vv,t=Bo();Ho(ON);const r={aid:B.aid,interactionMode:N.ui.interactionMode};Vv=r,tle(e,n,t,r)}function Ho(e){Use({getViewedSource:bn,shouldRecover:n=>n.kind!=="yours"||rle(),renderCurrentView:()=>{ile(),e()},switchToSafeYours:ole,renderSafeYoursView:ON,recovered:ale})}function rle(){return ie.adhocPresets.length>0||ie.richcodeResults.length>0}function ile(){if(N.ui.interactionMode==="ReadTrials"&&N.ui.readTrials.adhoc!==null&&wn(N.ui,ie)===null)throw new Error(`The selected adhoc entry ${JSON.stringify(N.ui.readTrials.adhoc)} is missing from the loaded data`)}function ole(e){N.ui.interactionMode="Estimate",N.ui.estimateQueryMode=jse,N.ui.readTrials={...N.ui.readTrials,adhoc:null,trial:Yn},N.ui.compare=U2,ie={adhocPresets:[],adhocPlainnumEntries:[],adhocPlaincodeEntries:[],jtaskHashGroups:[],richcodeResults:[]}}function ale(e,n){try{Me()}catch(r){Xt("Persisting the fail-safe Yours selection",r)}for(const r of EC)try{He(r)}catch(i){Xt(`Clearing the failed ${r} URL override`,i)}const t=e.kind==="yours"?"Rendering Yours with loaded result data":`Rendering chosen result ${JSON.stringify(e)}`;Xt(`${t}; switched safely to Yours and disabled loaded result data until reload`,n)}function ule(e,n){YO(e,N.ui.showGlobalProseFoldControls),ree({hasCparams:B.has_cparams(),bodyHasProseFolds:X2(e),bodyHasExampleLists:OB(e)}),vZ(Bse({showsProblemBody:n,bodyHasCalculatorSection:document.getElementById(Wv)!==null,bodyHasAnchorSections:H3(document).length>0,hasSrcquotes:B.has_srcquotes(),severalInteractionModesAvailable:WN()!==null}))}function ON(){const e=An(),n=document.getElementById("main-content"),t=Dle(),r=xL(B.aid),i=t===null&&N.ui.interactionMode!=="Compare";N.ui.interactionMode==="Compare"?UN(e):t===null?(eae(n,B,e),$ae(n,r==null?void 0:r.version),yae(n,r==null?void 0:r.version),kae(n,wn(N.ui,ie)!==null)):n.innerHTML=`<p class="${Wse}">${x(t)}</p>`;const o=rC(N,ie);if(XZ(N,r??{},o,{currentAid:B.aid,currentFamily:qL(B.aid)},{available:Eo(ie),active:N.ui.interactionMode},yT(N.ui.interactionMode,B)),lle(),cle(e),i){sle(e,o);const a=document.getElementById(`${Fe.SRCQUOTE_EXPLAINER}-content`);a&&kue(a,e)}ule(n,i),Os(),qe==null||qe.closeDisconnectedTriggers(),pu(n)}function sle(e,n){for(const l of tse){const c=document.getElementById(`${Fe[l]}-content`);c&&ose(c,l,B,e,N)}const t=document.getElementById(`${Fe.TCHOICE}-content`);t&&gN(t,B,e,N,sC(N,ie),c3(N,ie),_t(N,ie));const r=document.getElementById("cparams-content");r&&bU(r,B,e,N,bn(),di,xo),kN(e),Ue.renderAll({ctx:e,availableModes:n});const i=document.getElementById(t$);i&&sZ(i,N,tt(bn()),tn,ie),FN(e);const o=document.getElementById(e$);o&&Nq(o,e);const a=document.getElementById("framing-notes-root-content");a&&Oq(a,B,e,N.ui),Cq(B,e,N.ui);const u=document.getElementById("framing-notes-explainer-content");u&&kq(u,e);const s=_t(N,ie);NN(s),MN(s),aN(s,wn(N.ui,ie))}const Ue=Rae([{kind:"single",subentry:"CALCULATOR_HEADER",render(e,{availableModes:n}){DU(e,B,ie,N),e.prepend(tZ(()=>hee(B,bn(),Qn(N,ie),Bv(B,tn,sn)!==null),see));const t=e.querySelector(`#${a_}`);zL(t,N,n,VZ)}},{kind:"pair",pair:["CALCULATOR_INPUT","CALCULATOR_RESULTS"],render(e,n,{ctx:t}){qv(e,n,B,t,N,ie,tn,sn,di,xo),JO(n,HN(N,ie))}},{kind:"single",subentry:"DERIVED_FORMS",render:(e,{ctx:n})=>Sle(e,n)},{kind:"single",subentry:"SVAR_CARDS",render:(e,{ctx:n})=>tie(e,B,n,N,ie)},{kind:"single",subentry:"YOURS_SAVED_LIST",render:e=>aoe(e,B,N)},{kind:"single",subentry:"JOINT_DEPENDENCE",render:(e,{ctx:n})=>Woe(e,N,B,n,ie,tn,sn)},{kind:"single",subentry:"YOURS_CODE_INPUT",visible:()=>On(N.ui)==="plaincode"||Kv()!==null,render(e){const n=Bv(B,tn,sn);if(On(N.ui)==="plaincode")cw(e,B,N.yoursCodeRecord,"edit",n);else{const t=Kv();t&&cw(e,B,t,"view",n)}}}]);function Uo(e){return{get ctx(){return e??(e=An())},get availableModes(){return rC(N,ie)}}}function NN(e){const n=document.getElementById(`${Fe.RESPONSE_NOTES}-content`);n&&(Yie(n,Xie(N,ie,e)),pu(n))}function lle(){const e=document.getElementById(Ns);e&&xae(e,B,N,ie)}function cle(e){const n=[];N.ui.interactionMode==="ReadTrials"&&n.push({title:jue,render:dle});const t=bn();vC(N.ui.interactionMode,B,t)&&n.push({title:ste(t),render:r=>lte(r,B,N,t,DN(e))}),tue({visible:n.length>0,areas:n}),_C(B,N,t)}function dle(e){const n=Mt(),{resultSet:t}=Nn(N.ui.readTrials,n),r=Nn({...N.ui.readTrials,adhoc:null},n).resultSet;Que(e,{presetData:ie,jtaskGroupIds:Kr(ie),selectedJtaskGroupId:r.kind==="methodical"?r.jtaskGroupId:null,mixtureGroupInterpretation:r.kind==="methodical"?r.interpretation:null,activeAdhocEntry:t.kind==="adhoc"?t.entry:null})}function kN(e){const n=document.getElementById(dT);n&&fU(n,B,e,bn(),Bne(N,ie),N.ui.probAsOdds)}function MN(e){var t;const n=document.getElementById(`${Fe.ESTIMATION}-section-header`);n&&Xne(n,xne(N,ie),e,((t=wn(N.ui,ie))==null?void 0:t.label)??"")}function fle(e){const n=_t(N,ie),t=Qn(N,ie);if(N.ui.readTrials={...N.ui.readTrials,trial:PN(e)},Me(),He("trial_index"),He("trial_entry"),Qn(N,ie)!==t){fn();return}Rr(()=>ple(n))}function ple(e){const n=_t(N,ie),t=c3(N,ie),r=document.getElementById(Ns);r&&oN(r,n);const i=Ue.container("SVAR_CARDS");i&&(uO(i,n,t,Vn(N.ui),f3(N,ie),ao()),pu(i));const o=An(),a=document.getElementById(`${Fe.TCHOICE}-content`);a&&(n.kind==="trial"&&e.kind==="trial"?mse(a,n.recordTrialIndex,t):gN(a,B,o,N,sC(N,ie),t,n),pu(a)),NN(n),MN(n),fi(o),kN(o),aN(n,wn(N.ui,ie)),Ple()}function mle(e){const n=Number(e.getAttribute(oR));if(!Number.isInteger(n)||n<0||n>=iC(N,ie)){console.warn("Show single trial view: the link names no trial of the viewed record; ignoring");return}const t=e.getAttribute(aR),r=t===null?Bu(B,N):JSON.parse(t),i=PN(Wi(n));i.kind!=="mix"&&(Object.assign(N.ui,Cae(N.ui,i,r)),Me(),He("trial_index"),He("trial_entry"),$N(),fn())}function hle(e){const n=vle(e);if(n===null){console.warn("View in ReadTrials: the button names no published result set; ignoring");return}const t=Oae(N.ui,n);N.ui.inspectedCparamValues=t.inspectedCparamValues,N.ui.cparamValues=t.cparamValues,N.ui.cparamPinned=t.cparamPinned,$N(),jo({interactionMode:"ReadTrials",readTrials:t.readTrials},"landOnCalculator")}function vle(e){const n=u=>{const s=e.getAttribute(u);if(s!==null)try{return JSON.parse(s)}catch{return}},t=e.getAttribute(qC),r=n(xC),i=n(BC);if(t===null||!_le(r)||!gle(i))return null;const o=e.getAttribute(Pv),a=n(Pv);return o!==null&&!ble(a)?null:{jtaskGroupId:t,configuration:r,combination:i,singleContributingTrial:o===null?null:a}}function _le(e){if(typeof e!="object"||e===null)return!1;const{model:n,version:t,effort:r}=e;return typeof n=="string"&&typeof t=="string"&&typeof r=="string"}function gle(e){return typeof e!="object"||e===null||Array.isArray(e)?!1:Object.values(e).every(n=>typeof n=="string"||typeof n=="number"||typeof n=="boolean")}function ble(e){if(typeof e!="object"||e===null)return!1;const{entry_id:n,entry_trial_index:t}=e;return typeof n=="string"&&Number.isInteger(t)&&t>=0}function PN(e){if(e.kind==="mix")return Yn;if(N.ui.readTrials.adhoc!==null)return{kind:"adhoc-trial",entryTrialIndex:e.recordTrialIndex};const n=wn(N.ui,ie),t=n===null||!("cparam_combos"in n)?null:B2(n,e.recordTrialIndex);return t===null?(console.warn(`trial selector: record trial ${e.recordTrialIndex} has no stable identity; showing the mixture`),Yn):{kind:"methodical-trial",identity:t}}function DN(e){return{filter:di,description:xo,renderDefn:n=>je(n,e)}}function yle(e,n){const t=B.get_cparam(n),r=nv(t,e,o_);if(typeof r=="boolean")throw new Error(`Cparam ${t.id} produced a boolean value`);N.ui.inspectedCparamValues[n]=r,Me(),He("inspect_value"),Rr(Ele)}function Ele(){const e=An(),n=Ue.container("SVAR_CARDS");n&&rie(n,B,N,ie);const t=document.getElementById(Ns);t&&Bae(t,B,N,ie);const r=document.getElementById(Ir);r&&cte(r,B,N,DN(e)),_C(B,N,bn()),fi(e)}function Go(e){Ue.render("DERIVED_FORMS",Uo(e)),FN(e)}function FN(e){const n=Ue.container("DERIVED_FORMS"),t=[...document.querySelectorAll(".derived-form")].filter(r=>!(n!=null&&n.contains(r)));qN(t,e)}function qN(e,n){for(const t of e){const r=t.dataset.formId;r&&Sie(t,r,B,n,N,tn,sn,ie)}}function Sle(e,n){const t=[...e.querySelectorAll(".derived-form")];qN(t,n),e.hidden=t.every(r=>r.innerHTML==="")}const wle=QO("JOINT_DEPENDENCE");function fi(e){Ue.render("JOINT_DEPENDENCE",Uo(e))}function xN(){const e=Ue.container("JOINT_DEPENDENCE");if(!e)return null;const n=O3(N,B,tn,sn);return n===null?null:{container:e,editorCtx:n,draft:N3(N,n)}}function Ale(e,n){T3(N,B,un,n,e.editorCtx.eligibleSvars,e.editorCtx.degenerateSvars),MO(e.container,n,e.editorCtx)}function BN(e){const n=An(),t=Ue.container("CALCULATOR_RESULTS");if(t&&Rs(t,B,n,N,ie,tn,sn),Go(n),e)fi(n);else{const r=Ue.container("JOINT_DEPENDENCE");r&&Boe(r,N,B,n,tn,sn)}Ds(),qe==null||qe.closeDisconnectedTriggers()}function $le(e){var r;const n=xN();if(!n)return;const t=Goe(n.draft,e,n.editorCtx.eligibleSvars);T3(N,B,un,t,n.editorCtx.eligibleSvars,n.editorCtx.degenerateSvars),BN(!0),e.kind==="add"&&((r=document.querySelector(`#${wle} .jde-latent-card:last-child [data-latent-field="name"]`))==null||r.focus({preventScroll:!0}))}function Tle(){const e=document.getElementById("sticky-help");e&&e.appendChild(ut(()=>pee(B,{proseFoldControls:Tae(),proseFoldControlsOffInSettings:Ile(),interactionModeSelector:JZ(),yoursFixFreeToggle:QZ()})))}function Ile(){const e=document.getElementById("main-content");return!N.ui.showGlobalProseFoldControls&&e!==null&&X2(e)}function Lle(){var n,t,r,i,o,a,u,s,l,c,d,p;document.addEventListener("click",m=>{if(!m.target.closest(`#response-type-toggle, #${a_}`))return;const h=m.target.closest("[data-mode]");if(!h)return;const v=h.dataset.mode;v!==N.ui.inputMode&&(N.ui.inputMode=v,Me(),He("response_type"),fn())}),document.addEventListener("change",m=>{const f=m.target;if(f.id!==_v)return;const h=f.value;h!==N.ui.probAsOdds&&(N.ui.probAsOdds=h,Me(),He("prob_as_odds"),fn())}),document.addEventListener("click",m=>{const f=m.target.closest(`[${Qi}]`);if(f===null)return;const h=f.getAttribute(Qi);h!==N.ui.densityScale&&(N.ui.densityScale=h,Me(),He("density_scale"),pQ(document,h))}),document.addEventListener("click",m=>{const f=m.target.closest(".timeline-nav-btn");if(!f)return;const h=f.dataset.timelineTarget;h&&Ow(h)}),document.addEventListener("change",m=>{const f=m.target;if(f.id!==VL)return;const h=f.value;if(h===WL){window.location.assign("/hirwebdev/");return}h&&h!==B.aid&&Ow(h)}),(n=document.getElementById(K_))==null||n.addEventListener("click",m=>{const f=m.target.closest(`[${Ev}]`);if(!f)return;const h=Ct.find(v=>v===f.getAttribute(Ev));h!==void 0&&VN(h)}),(t=document.getElementById(X_))==null||t.addEventListener("click",m=>{const f=m.target.closest(`.${rv}`);f&&Mw(f)}),(r=document.getElementById(Ns))==null||r.addEventListener("click",m=>{const f=m.target.closest(`.${ks}`);if(!f)return;const h=f.getAttribute(Ms)??"",v=sT(h);if(v===null){console.warn(`trial selector: unknown selection ${JSON.stringify(h)}; ignoring`);return}fle(v)}),document.addEventListener("click",m=>{const f=m.target.closest(`.${iR}`);f&&mle(f)}),document.addEventListener("click",m=>{const f=m.target.closest('a[href^="#"]');if(!f)return;const h=document.getElementById(decodeURIComponent(f.hash.slice(1)));h&&Xle(h)}),document.addEventListener("click",m=>{const f=m.target.closest(`.${FC}`);f&&hle(f)}),(i=document.getElementById(Ir))==null||i.addEventListener("click",m=>{m.target.closest(`#${P3}`)!==null&&(N.ui.sidePanelExpanded=nue(),Me())}),(o=document.getElementById(Ir))==null||o.addEventListener("change",m=>{const f=m.target;if(f.dataset.inspectedCparam){yle(f,f.dataset.inspectedCparam);return}if(f.id===fN){qle(f.value);return}if(f.id===pN){Ble(f.value);return}const h=f.getAttribute(ou),v=f.getAttribute(h3);if(h!==null&&v!==null){xle(h,v);const _=document.getElementById(Ir);_&&sre(_,h,v);return}}),(a=document.getElementById(M3))==null||a.addEventListener("click",m=>{const f=m.target.closest("[data-action]");if(!f)return;const h=f.dataset.action;FB(h)&&Yle(h)}),(u=document.getElementById("options-controls"))==null||u.addEventListener("change",m=>{const f=m.target;if(f.dataset.pref){wa(f.dataset.pref,f.checked);return}if(f.dataset.prefInt){const h=f.dataset.prefInt,v=parseInt(f.value,10);!isNaN(v)&&v>0&&(Ui(h,v),fn());return}if(f.dataset.prefEnum){const h=f.dataset.prefEnum;Ui(h,f.value),iue(h)?sN(Ye()):fn();return}}),(s=document.getElementById("options-controls"))==null||s.addEventListener("click",m=>{const f=m.target;if(f.id===HL||f.closest(".options-expand-btn")){oee();return}if(f.id===XL){Fse(f,Jse(),Mt());return}if(f.id==="keymap-btn"){LS(),KO();return}if(f.id===KL){_k();return}if(f.id==="save-all-data-btn"){Jle();return}if(f.id==="load-all-data-btn"){zle();return}}),document.addEventListener("click",m=>{const f=m.target,h=document.getElementById("options-controls");!h||h.contains(f)||x_(f)||LS()}),(l=document.getElementById("main-content"))==null||l.addEventListener("input",m=>{const f=m.target;if(f.closest('.yours-code-input[data-variant="view"]'))return;if(f.classList.contains("code-body-input")){L3(N,B,un,f.value);return}if(Qie(f,N,B,un))return;const h=fw(f);if(h!==null){const v=xN();v&&Ale(v,Hoe(v.draft,h));return}if(f.classList.contains(PC)){const v=f,_=Ot.find(b=>b===v.getAttribute(zt)),g=JSON.parse(v.dataset.values??"[]")[parseInt(v.value)];if(_===void 0||g===void 0)return;Nw(pB(N.ui.compare,_,g));return}if(f.classList.contains("cparam-slider")){const v=f,_=v.dataset.cparam;if(!_)return;const g=JSON.parse(v.dataset.values??"[]"),b=parseInt(v.value),y=g[b];if(y===void 0)return;N.ui.cparamValues[_]=y,Me(),He("calc_value"),kw();return}});const e=document.getElementById("main-content");e&&Zie(e,{persistCalcTextarea:Ole,recomputeAfterCalcTextarea:Nle,persistAssumptionCard:kle,recomputeAfterAssumptionCard:Mle}),(c=document.getElementById("main-content"))==null||c.addEventListener("click",m=>{const f=m.target;if(f.classList.contains("code-run-btn")){Ule();return}const h=f.closest(".lloads-copy-to-yours-btn");if(h){Kle(h);return}if(f.classList.contains("copy-to-yours-btn")){Gle();return}const v=f.closest(".jde-summary");if(v){const S=v.closest("details");S&&(N.ui.jointDependenceEditorOpen=!S.open,Me());return}const _=Lae(f);if(_!==null){const{foldId:S,open:I,isProseSection:R}=_;R?KN({kind:"proseSection",foldId:S},I):LN(S,I);return}const g=Uoe(f);if(g!==null){$le(g);return}const b=f.closest(".yours-saved-delete");if(b){m.stopPropagation();const S=b.dataset.key,I=b.dataset.kind;S&&Hle(S,I??"plainnum");return}const y=f.closest(".yours-saved-row");if(y){const S=y.dataset.key,I=y.dataset.kind;S&&Pw(S,I??"plainnum");return}const E=f.closest(`.${rv}`);if(E){Mw(E);return}const A=f.closest(`.${Cu}`);if(A){Xv(K2(A));return}const T=f.closest(`.${E2}`);if(T){Xv(U$(T));return}const C=f.closest(`.${q3}`);if(C){gue(C);return}const L=f.closest(`.${nR}`);if(L){const S=L.dataset.mcLiveActivationToken;(S===void 0||!Tee(S))&&console.warn(`MC activation: unknown token ${JSON.stringify(S)}; re-rendering without activating`),Er();return}const $=f.closest(`.${to}`);if($){const S=$.dataset.mcPoolToken;(S===void 0||!WJ(S))&&console.warn(`MC accumulate: unknown pool token ${JSON.stringify(S)}; re-rendering without accumulating`),Er();return}const w=f.closest(".sweep-mode-btn");if(w){N.ui.codeSweepMode=w.dataset.sweepMode,Me(),Er();return}}),(d=document.getElementById("main-content"))==null||d.addEventListener("keydown",m=>{if(m.key!=="Enter"&&m.key!==" ")return;const f=m.target,h=f.closest(".yours-saved-row");if(!h||f.closest(".yours-saved-delete"))return;m.preventDefault();const v=h.dataset.key,_=h.dataset.kind;v&&Pw(v,_??"plainnum")}),(p=document.getElementById("main-content"))==null||p.addEventListener("change",m=>{const f=m.target;if(fw(f)!==null){BN(!1);return}if(f.dataset.aoptBody){const h=f.dataset.aoptBody,v=f,_=B.get_aopt(h);let g;if(_.input_type==="MultiStringFromSet"){const b=f.closest(".cparam-or-aopt");if(b===null)throw new Error(`MultiStringFromSet control for ${h} is outside an option row`);const y=[...b.querySelectorAll("input[data-aopt-body]")].filter(E=>E.dataset.aoptBody===h);if(y.length===0)throw new Error(`MultiStringFromSet option ${h} has no checkbox controls`);g=wB(_,y)}else g=nv(_,v,_.input_type);h==="srcquotes_inlined"&&N.ui.srcquotesInlinedOverride!==null&&(N.ui.srcquotesInlinedOverride=null,Me(),He("srcquotes_view")),N=nb(N,B,h,g),fn();return}if(f.dataset.cparamBody){const h=f.dataset.cparamBody,v=B.get_cparam(h),_=nv(v,f,o_);N=nb(N,B,h,_),fn();return}if(f.dataset.tchoiceBody){const h=f.dataset.tchoiceBody,v=B.get_tchoice(h),_=Pa(N.ui);if(Hw(v)){const b=vse(v,f);b!==null&&lw(N,B,un,_,h,b);return}if(!Or(v))throw new Error(`tchoice "${h}" has unrecognized response_kind`);const g=hse(v,f);lw(N,B,un,_,h,g);return}if(f.classList.contains(iv)){const h=f.value;if(h!=="formula"&&h!=="raw_response")return;N.ui.plotTargetKind=h,Me(),Er();return}if(f.classList.contains(AT)){N.ui.plotTargetKind="formula",N.ui.plotFormulaId=f.value,Me(),Er();return}if(f.classList.contains($T)){N.ui.plotTargetKind="raw_response",N.ui.plotRawResponseName=f.value,Me(),Er();return}if(f.classList.contains(DC)){const h=f,v=Ot.find(_=>_===h.getAttribute(zt));if(v===void 0)return;Nw(fB(N.ui.compare,ie,v,h.checked));return}if(f.classList.contains("cparam-pin-checkbox")){const h=f.dataset.cparam;if(!h)return;N.ui.cparamPinned[h]=f.checked,Me(),AN(),kw();return}})}function Rle(){var n;const e=document.querySelector(".calc-textarea");if(e&&document.activeElement!==e){const t=e.dataset.group;t&&(e.value=((n=N.yoursRecord.raw_input)==null?void 0:n[t])??"")}}function Cle(){const e=Ue.container("SVAR_CARDS");e&&sie(e,N,ao())}function Ds(){Ue.render("YOURS_SAVED_LIST",Uo())}function Ole(e){const n=e.dataset.group;if(!n)return;const t=n==="sample"?e.value.split(`
`).map(r=>pO(r)).join(`
`):e.value;$3(N,B,un,n,t)}function Nle(){const e=An(),n=Ue.container("CALCULATOR_RESULTS");n&&Rs(n,B,e,N,ie,tn,sn),Go(e),fi(e),Cle(),Ds(),qe==null||qe.closeDisconnectedTriggers()}function ao(){return Gr(B.svar_entries().map(e=>e.decl))}function kle(e){const n=e.dataset.paramIndex,t=e.dataset.group;if(n==null||!t)return;const r=B.svar_entries().length,i=cie(N,parseInt(n),e.value,r);$3(N,B,un,t,i);const o=Ue.container("SVAR_CARDS");o&&(Ls(o,N,ao()),b3(o))}function Mle(e){Rle(),Ds();const n=An(),t=Ue.container("CALCULATOR_RESULTS");t&&Rs(t,B,n,N,ie,tn,sn),Go(n),fi(n);const r=Ue.container("SVAR_CARDS");r&&(S3(r,Vn(N.ui),ao()),Ls(r,N,ao())),qe==null||qe.closeDisconnectedTriggers()}function HN(e,n){var r;if(!n)return;const t=Xr(e.ui,{presetData:n});return t.kind==="adhoc"?(r=Kq(t.entry,n))==null?void 0:r.meta:void 0}function Er(){if(N.ui.interactionMode==="Compare"){GN();return}Ho(jN)}function UN(e){Rre(document.getElementById("main-content"),{jprobTemplate:B,ctx:e,state:N,presetData:ie,globalOpts:Ye(),formRegistry:tn})}function GN(){Ho(()=>{UN(An()),qe==null||qe.closeDisconnectedTriggers()})}function Nw(e){jo({interactionMode:"Compare",compare:e})}function jN(){const e=An();Ue.render("CALCULATOR_INPUT",Uo(e)),Go(e),fi(e),qe==null||qe.closeDisconnectedTriggers()}function Ple(){Ho(()=>{const e=An(),n=Uo(e);JL(N,n.availableModes),Ue.render("CALCULATOR_HEADER",n),jN()})}function kw(){if(N.ui.interactionMode==="Compare"){GN();return}Ho(()=>{const e=An(),n=Ue.container("CALCULATOR_INPUT"),t=Ue.container("CALCULATOR_RESULTS");n&&t&&(Eie(n,t,B,e,N,ie,tn,sn,di,xo),JO(t,HN(N,ie))),Go(e),qe==null||qe.closeDisconnectedTriggers()})}function jo(e,n="preserveReadingPosition"){const t=N.ui.interactionMode;Bo();const r=t==="ReadTrials"?Fle():null;Object.assign(N.ui,e),N.ui.interactionMode==="Compare"&&t!=="Compare"&&(N.ui.compare=lB(N.ui.compare,r)),Me(),Xse(),fn(n)}function VN(e){e!==N.ui.interactionMode&&jo({interactionMode:e})}function rr(e){jo({interactionMode:"Estimate",estimateQueryMode:rT(e,B.has_cparams())})}function hu(e){jo({interactionMode:"ReadTrials",readTrials:Jx(N.ui.readTrials,e,Mt())})}function Dle(){if(N.ui.interactionMode!=="ReadTrials")return null;const{resultSet:e}=Nn(N.ui.readTrials,Mt());return e.kind==="no-results"?Vse:null}function Fle(){const{resultSet:e}=Nn(N.ui.readTrials,Mt());return e.kind==="methodical"?e.jtaskGroupId:null}function qle(e){hu({...N.ui.readTrials,jtaskGroupId:e})}function xle(e,n){const{resultSet:t}=Nn(N.ui.readTrials,Mt());t.kind==="methodical"&&hu({...N.ui.readTrials,mixtureGroupSelection:Bx(t.mixtureGroupSelection,e,n)})}function Ble(e){if(e===mN){hu({...N.ui.readTrials,adhoc:null});return}const n=Kue(e),t=n===null?null:N2(n,ie);if(t===null){console.warn(`adhoc results: unknown entry ${JSON.stringify(e)}; ignoring`);return}hu({...N.ui.readTrials,adhoc:t})}function Mw(e){const n=PU(e);n!==null&&(N.ui.interactionMode==="Estimate"&&n===N.ui.estimateQueryMode||rr(n))}function WN(){const e=Eo(ie);if(e.length<2)return null;const n=e.indexOf(N.ui.interactionMode);return e[(n+1)%e.length]}function Hle(e,n){if(n==="plaincode"){const t=J2(B.aid).find(i=>i.codeOptionDictKey===e);if(!t)return;const r=CO(B,t.record);if(!confirm(`Delete saved estimation?
${r}`))return;BB(B.aid,e)}else{const t=R3(B.aid).find(i=>i.plainnumOptionDictKey===e);if(!t)return;const r=RO(B,t.record)||"(default options)";if(!confirm(`Delete saved estimation?
${r}`))return;eoe(B.aid,e)}Ds()}function Pw(e,n){if(n==="plaincode"){const t=J2(B.aid).find(r=>r.codeOptionDictKey===e);if(!t)return;N=roe(N,B,e,t.record),rr("plaincode");return}else{const t=R3(B.aid).find(r=>r.plainnumOptionDictKey===e);if(!t)return;N=toe(N,B,e,t.record)}rr("plainnum")}async function Ule(){const e=Sa,n=Ue.container("YOURS_CODE_INPUT"),t=n==null?void 0:n.querySelector(".code-error-area"),r=n==null?void 0:n.querySelector(".code-status");t&&(t.innerHTML=""),r&&(r.textContent="Running…");const i=n==null?void 0:n.querySelector(".code-body-input"),o=i?i.value:N.yoursCodeRecord.raw_code_input;i&&o!==N.yoursCodeRecord.raw_code_input&&L3(N,B,un,o);const{names:a,combinations:u}=oM(B.get_cparams(),di),s=yoe(B.svar_decls()),l=Ye();try{new Function(...a,o)}catch(_){r&&(r.textContent=""),t&&(t.textContent=`Syntax error: ${_.message}`);return}Hn==null||Hn.abort();const c=new AbortController;Hn=c;let d;try{d=await Qoe({source:o,cparamNames:a,combinations:u,expectedSvars:B.get_svar_bare_names(),formulaSvars:Fw(tn,B.get_svar_bare_names()),hasExpectationBarrier:Object.keys(sn).length>0,paramRanges:s},{timeoutMs:l.plaincodeEvalTimeoutMs,signal:c.signal})}catch(_){if(e!==Sa||_.message===Hv)return;if(r&&(r.textContent=""),t){const g=_.message;t.textContent=g===xO?`Timed out after ${l.plaincodeEvalTimeoutMs}ms. Possible infinite loop — check your code.`:`Worker error: ${g}`}return}finally{Hn===c&&(Hn=null)}if(e!==Sa)return;if(d.compileError){r&&(r.textContent=""),t&&(t.textContent=`Compile error: ${d.compileError}`);return}const p=d.wellformed.map(_=>{const g={trial_index:0,point:_.point,bounds:_.bounds,sample:_.sample};return _.lloads!==void 0&&(g.lloads=_.lloads),{cparams:_.cparams,trials:[g],precomputed:{}}}),m=N.yoursCodeRecord;m.verified_code_input=o,m.cparam_names=a,m.cparam_combos=p,m.count=1,m.timestamp=new Date().toISOString(),Y2(B,un,N.codeOptionDictKey,m),rr("plaincode");const f=Ue.container("YOURS_CODE_INPUT"),h=f==null?void 0:f.querySelector(".code-status"),v=f==null?void 0:f.querySelector(".code-error-area");if(h&&(h.textContent=""),v&&d.malformed.length>0){const _=d.malformed.slice(0,3).map(g=>`${JSON.stringify(g.cparams)}: ${g.error}`).join(`
`);v.textContent=`${d.wellformed.length}/${d.wellformed.length+d.malformed.length} combinations succeeded. First failures:
${_}`}}function Gle(){const e=bn();if(e.kind!=="adhoc")throw new Error(`Copy to Estimate clicked outside an adhoc entry view (viewing ${JSON.stringify(e)})`);e.entry.queryMode==="plaincode"?jle():Wle()}function jle(){const e=Kv();if(!e)throw new Error(`Copy to Estimate clicked outside an adhoc plaincode view (viewing ${JSON.stringify(bn())})`);confirm(`Copy this entry's code into your Estimate editor?
Your current Estimate code will be overwritten.`)&&(L3(N,B,un,e.raw_code_input),rr("plaincode"))}const Vle={point:"point",bounds:"bounds",sample:"distribution"};function Wle(){const e=kn(N,ie),n=(e==null?void 0:e.trials.length)===1?e.trials[0]:void 0;if(!n)throw new Error(`Copy to Estimate clicked without a viewable adhoc plainnum trial (viewing ${JSON.stringify(bn())})`);const t=B.svar_entries().map(a=>a.bareName),r=p$(n,t);if(r.length===0)throw new Error("Copy to Estimate clicked for an entry with no complete response group");const i=r.map(a=>Vle[a]).join(" + ");if(confirm(`Copy this entry's ${i} estimates into your Estimate inputs?
Your current Estimate ${i} input${r.length>1?"s":""} will be overwritten.`)){for(const a of r)$3(N,B,un,a,zq(n,a,t));r.includes(N.ui.inputMode)||(N.ui.inputMode=r.includes("sample")?"sample":r.includes("bounds")?"bounds":"point"),rr("plainnum")}}function Kle(e){const n=e.dataset.lloadsSpec;if(n===void 0)throw new Error("Joint-dependence Copy to Estimate button carries no specification");const t=JSON.parse(n),r=NO(N,B,tn,sn);if(r===null)throw new Error("Joint-dependence Copy to Estimate clicked on a jprob with no joint-dependence box");const i=ko(t,r.eligibleSvars);if(i!==null)throw new Error(`Disclosed joint-dependence specification is not valid here: ${i}`);confirm(`Copy this joint-dependence specification into your Estimate inputs?
Your current Estimate latents and loadings will be overwritten.`)&&(T3(N,B,un,UC(t,r.eligibleSvars),r.eligibleSvars,r.degenerateSvars),N.ui.inputMode="sample",N.ui.jointDependenceEditorOpen=!0,rr("plainnum"))}function Xle(e){const n=e.closest(`.${v2}`);if(!n||n.classList.contains(Zt))return;const t=LB(n);if(t===null){console.warn("example list: no fold button for a collapsed list; leaving it closed");return}Xv(K2(t))}function Xv(e){if(e===null)return;const n=!e.isOpen();e.setOpen(n),KN(e.key,n)}function KN(e,n){G$(N.ui,e,n),He(qo[e.kind]),Me()}function Yle(e){const n=document.getElementById("main-content");if(n!==null){if(Rr(()=>{qB(n,e,N.ui)}),e==="open"||e==="close")for(const t of wo)He(qo[t]);Me()}}function Jle(){const e=sH(),n=JSON.stringify(e,null,2),t=new Blob([n],{type:"application/json"}),r=URL.createObjectURL(t),i=document.createElement("a"),o=new Date().toISOString().slice(0,10);i.href=r,i.download=`${B.config.localStorage_prefix}-state-${o}.json`,i.click(),URL.revokeObjectURL(r)}function zle(){const e=document.createElement("input");e.type="file",e.accept=".json",e.addEventListener("change",()=>{var t;const n=(t=e.files)==null?void 0:t[0];n&&n.text().then(r=>{let i;try{i=JSON.parse(r)}catch(o){alert(`Invalid JSON: ${o}`);return}if(!i||typeof i!="object"){alert("Expected a JSON object");return}lH(i),window.location.reload()})}),e.click()}export{nce as initApp,Ow as swapJprob};
