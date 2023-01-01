import{_ as a,c as n,b as s,d as o,t as l,a as t,o as p}from"./app.4b6b3d2e.js";const A=JSON.parse('{"title":"Cache custom routes","description":"","frontmatter":{"title":"Cache custom routes"},"headers":[{"level":2,"title":"CacheRouteConfig reference","slug":"cacherouteconfig-reference","link":"#cacherouteconfig-reference","children":[{"level":3,"title":"path","slug":"path","link":"#path","children":[]},{"level":3,"title":"method","slug":"method","link":"#method","children":[]},{"level":3,"title":"hitpass","slug":"hitpass","link":"#hitpass","children":[]},{"level":3,"title":"keys","slug":"keys","link":"#keys","children":[]},{"level":3,"title":"maxAge","slug":"maxage","link":"#maxage","children":[]}]}],"relativePath":"guide/strategy/cache-custom-routes.md","lastUpdated":1672538480000}'),c={name:"guide/strategy/cache-custom-routes.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=t(`<p>By default the plugin registers a middleware to intercept all <a href="https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-endpoints" target="_blank" rel="noreferrer">predefined routes</a>, but you can also enable it on custom routes.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight has-highlighted-lines"><code><span class="line"><span style="color:#676E95;font-style:italic;">// file: /config/plugins.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">rest-cache</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">provider</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">strategy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">contentTypes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">contentType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">api::pages.pages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">routes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* @type {CacheRouteConfig[]} */</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/api/pages/slug/:slug+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// note that we set the /api prefix here</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">method</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// can be omitted, defaults to GET</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">},</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">            ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>At this time a custom route can only be registered within a single Content-Type.</p></div><h2 id="cacherouteconfig-reference" tabindex="-1"><code>CacheRouteConfig</code> reference <a class="header-anchor" href="#cacherouteconfig-reference" aria-hidden="true">#</a></h2><h3 id="path" tabindex="-1"><code>path</code> <a class="header-anchor" href="#path" aria-hidden="true">#</a></h3><p>Refer to an <a href="https://docs.strapi.io/developer-docs/latest/development/backend-customization/routes.html" target="_blank" rel="noreferrer">existing route path in strapi</a> on which the cache middleware will be registered.<br> A warning will be displayed if the path does not exist.</p><ul><li><strong>Type:</strong> <code>string</code></li><li><strong>Default:</strong> <code>GET</code></li></ul><h3 id="method" tabindex="-1"><code>method</code> <a class="header-anchor" href="#method" aria-hidden="true">#</a></h3><p>Refer to an <a href="https://docs.strapi.io/developer-docs/latest/development/backend-customization/routes.html" target="_blank" rel="noreferrer">existing route method in strapi</a> on which the cache middleware will be registered.<br> A warning will be displayed if the path does not exist.</p><ul><li><strong>Type:</strong> <code>&#39;GET&#39; | &#39;POST&#39; | &#39;PUT&#39; | &#39;PATCH&#39; | &#39;DELETE&#39;</code></li><li><strong>Default:</strong> <code>GET</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Cache lookup is performed only on <code>GET</code> requests, and cache invalidation is performed on all other requests.</p></div><h3 id="hitpass" tabindex="-1"><code>hitpass</code> <a class="header-anchor" href="#hitpass" aria-hidden="true">#</a></h3><p>When true, the cache plugin will not lookup for cache and serve fresh response from backend instead. Also, the response is not stored in the cache.</p><ul><li><strong>Type:</strong> <code>(ctx: Context) =&gt; boolean | boolean</code></li><li><strong>Default:</strong> <em>(inherit from <code>CacheContentTypeConfig</code> if set)</em></li></ul><h3 id="keys" tabindex="-1"><code>keys</code> <a class="header-anchor" href="#keys" aria-hidden="true">#</a></h3><p>Options used to generate the cache keys.</p><ul><li><strong>Type:</strong> <a href="./cache-keys.html#cachekeysconfig-reference"><code>CacheKeysConfig</code></a></li><li><strong>Default:</strong> <em>(inherit from <code>CacheContentTypeConfig</code> if set)</em></li></ul><h3 id="maxage" tabindex="-1"><code>maxAge</code> <a class="header-anchor" href="#maxage" aria-hidden="true">#</a></h3><p>Default max age for cached entries.</p><ul><li><strong>Type:</strong> <code>number</code></li><li><strong>Default:</strong> <em>(inherit from <code>CacheContentTypeConfig</code> if set)</em></li></ul>`,20);function h(e,y,D,C,g,F){return p(),n("div",null,[s("h1",r,[o(l(e.$frontmatter.title)+" ",1),i]),d])}const f=a(c,[["render",h]]);export{A as __pageData,f as default};
