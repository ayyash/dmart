import{a as o}from"./chunk-Z3BPB6WE.js";import{a as n,tb as c,xb as l}from"./chunk-ZJ25XDQ3.js";var d=(a=>(a.FOLDER="folder",a.CONTENT="content",a.SCHEMA="schema",a.USER="user",a.GROUP="group",a.ACL="acl",a.COMMENT="comment",a.MEDIA="media",a.LOCATOR="locator",a.RELATIONSHIP="relationship",a.ALTERATION="alteration",a.HISTORY="history",a.SPACE="space",a.BRANCH="branch",a.PERMISSION="permission",a.ROLE="role",a.TICKET="ticket",a.JSON="json",a.POST="post",a.PLUGINWRAPPER="plugin_wrapper",a.NOTIFICATION="notification",a.JSONL="jsonl",a.CSV="csv",a.SQLITE="sqlite",a.PARQUET="parquet",a))(d||{}),h=class i{static NewInstance(t,e){if(!t)return null;let s=`${t.subpath}/${t.shortname}`.replace("//","");return{id:t.uuid,shortname:t.shortname,type:t.resource_type,schema:t.schema_shortname,created:c(t.created_at),updated:c(t.updated_at),isActive:t.is_active,tags:t.tags,displayname:o.MapLanguage(t.displayname)||t.shortname,description:o.MapLanguage(t.description),body:t.payload?.body,contentType:t.payload?.content_type,subpath:s,space:e?.space||t.space_name,path:`${e?.space}/${t.resource_type}/${s}`}}static NewInstances(t){return t.map(e=>i.NewInstance(e))}static NewList(t,e){let s=new p;return s.mapper=r=>i.NewInstance(n(n({},r),r?.attributes),e),s.NewDataList(t)}static NewInstanceFromResponse(t,e){let s=t.records[0];return s?i.NewInstance(n(n({},s),s.attributes),e):null}static PrepCreate(t){let e={};return t.type!=="folder"&&(e={payload:{body:t.body,schema_shortname:null,content_type:t.contentType}}),{space_name:t.space,request_type:"create",records:[{resource_type:t.type,shortname:t.shortname,subpath:t.subpath||"/",attributes:n({resource_type:t.type,shortname:t.shortname,space_name:t.space,is_active:!0,displayname:{en:t.displayname,ar:t.displayname},description:{en:t.description,ar:t.description},relationships:[]},e)}]}}static PrepSave(t){let e=i.PrepCreate(t);return e.records[0].attributes.uuid=t.id,e.request_type="replace",e}static PrepDelete(t){let e=t.subpath.replace(t.shortname,"");return{space_name:t.space,request_type:"delete",records:[{resource_type:t.type,shortname:t.shortname,subpath:e||"/",attributes:{}}]}}};var I=class{static MapQueryListOptions(t){let e,s=t.subpath;if(t.resourceType&&t.resourceType!=="folder"){let r=t.subpath.split("/");e=r.slice(-1),s=r.slice(0,-1).join("/")}return{type:t.type||"search",space_name:t.space||l.API.rootSpace,subpath:s||"/",filter_shortnames:e||null,search:t.keyword||"",limit:t.size||100,exact_subpath:!0,sort_type:"descending",sort_by:"resource_type"}}static MapEntryListOptions(t){return{retrieve_json_payload:t.withPayload||!1,retrieve_attachments:t.withAttachments||!1,validate_schema:!0}}static MapResourceUrlListOptions(t,e){return t.replace(":resource",e.resourceType||"content").replace(":space",e.space).replace(":subpath",e.subpath)}},p=class{mapper;NewDataList(t){return{total:t.attributes?.total,matches:t.records?.map(this.mapper)}}};export{d as a,h as b,I as c};
