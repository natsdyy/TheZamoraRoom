import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSiteStore } from '../../store/siteStore';
import { Input, Textarea } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import StarRating from '../../components/ui/StarRating';
import Badge from '../../components/ui/Badge';
import { Trash2, Plus, Save, Pencil, X, Video } from 'lucide-react';
import type { Moment, Testimonial, MerchItem, Store, MenuItem, VideoReelData } from '../../types';

type Tab = 'hero' | 'video' | 'menu' | 'moments' | 'testimonials' | 'merch' | 'stores';

export default function DashboardPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<Tab>((searchParams.get('tab') as Tab) || 'hero');

  useEffect(() => {
    const tab = searchParams.get('tab') as Tab;
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  const switchTab = (tab: Tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  const tabs: { key: Tab; label: string }[] = [
    { key: 'hero', label: 'Hero' },
    { key: 'video', label: 'Video Reel' },
    { key: 'menu', label: 'Menu' },
    { key: 'moments', label: 'Moments' },
    { key: 'testimonials', label: 'Testimonials' },
    { key: 'merch', label: 'Merchandise' },
    { key: 'stores', label: 'Stores' },
  ];

  return (
    <div>
      <h1 className="font-display text-3xl text-brand-cream mb-6">Dashboard</h1>
      {/* Tabs */}
      <div className="flex gap-1 mb-8 border-b border-white/5 pb-px overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => switchTab(t.key)}
            className={`px-5 py-2.5 font-body text-sm tracking-wide transition-all duration-200 border-b-2 whitespace-nowrap ${
              activeTab === t.key
                ? 'text-brand-gold border-brand-gold'
                : 'text-brand-gray border-transparent hover:text-brand-cream'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {activeTab === 'hero' && <HeroEditor />}
      {activeTab === 'video' && <VideoReelEditor />}
      {activeTab === 'menu' && <MenuEditor />}
      {activeTab === 'moments' && <MomentsEditor />}
      {activeTab === 'testimonials' && <TestimonialsEditor />}
      {activeTab === 'merch' && <MerchEditor />}
      {activeTab === 'stores' && <StoresEditor />}
    </div>
  );
}

/* ── Hero Editor ── */
function HeroEditor() {
  const hero = useSiteStore((s) => s.hero);
  const updateHero = useSiteStore((s) => s.updateHero);
  const [form, setForm] = useState(hero);

  const handleSave = () => { updateHero(form); };

  return (
    <div className="max-w-xl space-y-4">
      <Input label="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <Input label="Subtitle" value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} />
      <Input label="CTA Label" value={form.ctaLabel} onChange={(e) => setForm({ ...form, ctaLabel: e.target.value })} />
      <Input label="CTA Link" value={form.ctaLink} onChange={(e) => setForm({ ...form, ctaLink: e.target.value })} />
      <Input label="Background Image URL" value={form.bgImage} onChange={(e) => setForm({ ...form, bgImage: e.target.value })} />
      <Button onClick={handleSave} size="sm"><Save size={14} className="mr-2" />Save Changes</Button>
    </div>
  );
}

/* ── Video Reel Editor ── */
function VideoReelEditor() {
  const videoReel = useSiteStore((s) => s.videoReel);
  const updateVideoReel = useSiteStore((s) => s.updateVideoReel);
  const [form, setForm] = useState(videoReel);

  const handleSave = () => { updateVideoReel(form); };

  return (
    <div className="max-w-xl space-y-4">
      <Textarea label="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <Textarea label="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <Input label="Video URL" value={form.videoUrl} onChange={(e) => setForm({ ...form, videoUrl: e.target.value })} />
      <div className="p-4 bg-brand-dark border border-white/5 flex items-center gap-4">
        <Video size={24} className="text-brand-gold" />
        <div className="flex-1 min-w-0">
          <p className="text-xs font-body text-brand-cream truncate">{form.videoUrl}</p>
          <p className="text-[10px] font-body text-brand-gray uppercase tracking-widest mt-0.5">Active Video Asset</p>
        </div>
      </div>
      <Button onClick={handleSave} size="sm"><Save size={14} className="mr-2" />Save Video Reel Settings</Button>
    </div>
  );
}

/* ── Menu Editor ── */
function MenuEditor() {
  const menu = useSiteStore((s) => s.menu);
  const addMenuItem = useSiteStore((s) => s.addMenuItem);
  const updateMenuItem = useSiteStore((s) => s.updateMenuItem);
  const deleteMenuItem = useSiteStore((s) => s.deleteMenuItem);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', description: '', price: '', priceHot: '', priceIced: '', category: 'Espresso-Based Classics', image: '' });

  const handleAdd = () => {
    if (!form.name) return;
    addMenuItem({ id: Date.now().toString(), ...form });
    setForm({ name: '', description: '', price: '', priceHot: '', priceIced: '', category: 'Espresso-Based Classics', image: '' });
  };

  const handleUpdate = () => {
    if (!editId) return;
    updateMenuItem(editId, form);
    setEditId(null);
    setForm({ name: '', description: '', price: '', priceHot: '', priceIced: '', category: 'Espresso-Based Classics', image: '' });
  };

  const startEdit = (m: MenuItem) => {
    setEditId(m.id);
    setForm({ 
      name: m.name, 
      description: m.description || '', 
      price: m.price || '', 
      priceHot: m.priceHot || '', 
      priceIced: m.priceIced || '', 
      category: m.category, 
      image: m.image || '' 
    });
  };

  return (
    <div>
      <div className="max-w-xl space-y-3 mb-8">
        <div className="grid grid-cols-1 gap-3">
          <Input label="Item Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Input label="Price (Single)" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
          <Input label="Price Hot" value={form.priceHot} onChange={(e) => setForm({ ...form, priceHot: e.target.value })} />
          <Input label="Price Iced" value={form.priceIced} onChange={(e) => setForm({ ...form, priceIced: e.target.value })} />
        </div>
        <Textarea label="Description (Optional)" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <div>
          <p className="text-sm font-body text-brand-gray uppercase tracking-wider mb-1.5">Category</p>
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full bg-brand-black border border-white/10 text-brand-cream px-4 py-2.5 font-body text-sm focus:outline-none focus:border-brand-gold/50">
            <option value="Espresso-Based Classics">Espresso-Based Classics</option>
            <option value="Signature House Specials">Signature House Specials</option>
            <option value="Matcha Creations">Matcha Creations</option>
            <option value="Non-Coffee Options">Non-Coffee Options</option>
            <option value="Off-The-Menu">Off-The-Menu</option>
            <option value="Brew It Yourself Experience">Brew It Yourself Experience</option>
          </select>
        </div>
        <div className="flex gap-2">
          {editId ? (
            <>
              <Button onClick={handleUpdate} size="sm"><Save size={14} className="mr-2" />Update Item</Button>
              <Button variant="ghost" size="sm" onClick={() => { setEditId(null); setForm({ name: '', description: '', price: '', priceHot: '', priceIced: '', category: 'Espresso-Based Classics', image: '' }); }}><X size={14} className="mr-1" />Cancel</Button>
            </>
          ) : (
            <Button onClick={handleAdd} size="sm"><Plus size={14} className="mr-2" />Add Menu Item</Button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {menu.map((m) => (
          <div key={m.id} className="relative group bg-brand-dark border border-white/5 p-4 overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-body text-brand-cream font-medium">{m.name}</p>
                <p className="text-[10px] font-body text-brand-gold uppercase tracking-widest mt-0.5">{m.category}</p>
                <div className="mt-2 space-y-0.5">
                  {m.priceHot && <p className="text-[11px] font-body text-brand-gray/70"><span className="text-brand-gold/50 mr-1">Hot:</span> {m.priceHot}</p>}
                  {m.priceIced && <p className="text-[11px] font-body text-brand-gray/70"><span className="text-brand-gold/50 mr-1">Iced:</span> {m.priceIced}</p>}
                  {m.price && <p className="text-[11px] font-body text-brand-gray/70"><span className="text-brand-gold/50 mr-1">Price:</span> {m.price}</p>}
                </div>
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => startEdit(m)} className="p-1.5 bg-brand-black/80 text-brand-gold hover:bg-brand-gold/10 transition-colors"><Pencil size={12} /></button>
                <button onClick={() => deleteMenuItem(m.id)} className="p-1.5 bg-brand-black/80 text-red-400 hover:bg-red-500/10 transition-colors"><Trash2 size={12} /></button>
              </div>
            </div>
            {m.description && <p className="text-[10px] font-body text-brand-gray/40 mt-2 italic truncate">{m.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Moments Editor ── */
function MomentsEditor() {
  const moments = useSiteStore((s) => s.moments);
  const addMoment = useSiteStore((s) => s.addMoment);
  const updateMoment = useSiteStore((s) => s.updateMoment);
  const deleteMoment = useSiteStore((s) => s.deleteMoment);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({ image: '', caption: '' });

  const handleAdd = () => {
    if (!form.image) return;
    addMoment({ id: Date.now().toString(), ...form });
    setForm({ image: '', caption: '' });
  };

  const handleUpdate = () => {
    if (!editId) return;
    updateMoment(editId, form);
    setEditId(null);
    setForm({ image: '', caption: '' });
  };

  const startEdit = (m: Moment) => {
    setEditId(m.id);
    setForm({ image: m.image, caption: m.caption });
  };

  return (
    <div>
      <div className="max-w-xl space-y-3 mb-8">
        <Input label="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
        <Input label="Caption" value={form.caption} onChange={(e) => setForm({ ...form, caption: e.target.value })} />
        <div className="flex gap-2">
          {editId ? (
            <>
              <Button onClick={handleUpdate} size="sm"><Save size={14} className="mr-2" />Update</Button>
              <Button variant="ghost" size="sm" onClick={() => { setEditId(null); setForm({ image: '', caption: '' }); }}><X size={14} className="mr-1" />Cancel</Button>
            </>
          ) : (
            <Button onClick={handleAdd} size="sm"><Plus size={14} className="mr-2" />Add Moment</Button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {moments.map((m) => (
          <div key={m.id} className="relative group bg-brand-dark border border-white/5 overflow-hidden">
            <img src={m.image} alt={m.caption} className="w-full h-32 object-cover" />
            <div className="p-3">
              <p className="text-xs font-body text-brand-gray truncate">{m.caption}</p>
            </div>
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => startEdit(m)} className="p-1.5 bg-brand-black/80 text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors"><Pencil size={12} /></button>
              <button onClick={() => deleteMoment(m.id)} className="p-1.5 bg-brand-black/80 text-red-400 hover:bg-red-500 hover:text-white transition-colors"><Trash2 size={12} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Testimonials Editor ── */
function TestimonialsEditor() {
  const testimonials = useSiteStore((s) => s.testimonials);
  const addTestimonial = useSiteStore((s) => s.addTestimonial);
  const updateTestimonial = useSiteStore((s) => s.updateTestimonial);
  const deleteTestimonial = useSiteStore((s) => s.deleteTestimonial);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', handle: '', text: '', stars: 5 });

  const handleAdd = () => {
    if (!form.name) return;
    addTestimonial({ id: Date.now().toString(), ...form });
    setForm({ name: '', handle: '', text: '', stars: 5 });
  };

  const handleUpdate = () => {
    if (!editId) return;
    updateTestimonial(editId, form);
    setEditId(null);
    setForm({ name: '', handle: '', text: '', stars: 5 });
  };

  const startEdit = (t: Testimonial) => {
    setEditId(t.id);
    setForm({ name: t.name, handle: t.handle, text: t.text, stars: t.stars });
  };

  return (
    <div>
      <div className="max-w-xl space-y-3 mb-8">
        <Input label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Input label="Handle" value={form.handle} onChange={(e) => setForm({ ...form, handle: e.target.value })} />
        <Textarea label="Review" value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} />
        <div>
          <p className="text-sm font-body text-brand-gray uppercase tracking-wider mb-1.5">Rating</p>
          <StarRating rating={form.stars} interactive onChange={(s) => setForm({ ...form, stars: s })} size={20} />
        </div>
        <div className="flex gap-2">
          {editId ? (
            <>
              <Button onClick={handleUpdate} size="sm"><Save size={14} className="mr-2" />Update</Button>
              <Button variant="ghost" size="sm" onClick={() => { setEditId(null); setForm({ name: '', handle: '', text: '', stars: 5 }); }}><X size={14} className="mr-1" />Cancel</Button>
            </>
          ) : (
            <Button onClick={handleAdd} size="sm"><Plus size={14} className="mr-2" />Add Testimonial</Button>
          )}
        </div>
      </div>
      <div className="space-y-3">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-brand-dark border border-white/5 p-4 flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="font-body text-sm text-brand-cream font-medium">{t.name} <span className="text-brand-gray text-xs">{t.handle}</span></p>
              <StarRating rating={t.stars} size={12} />
              <p className="font-body text-xs text-brand-gray mt-1 truncate">{t.text}</p>
            </div>
            <div className="flex gap-1 shrink-0">
              <button onClick={() => startEdit(t)} className="p-1.5 text-brand-gold hover:bg-brand-gold/10 transition-colors"><Pencil size={14} /></button>
              <button onClick={() => deleteTestimonial(t.id)} className="p-1.5 text-red-400 hover:bg-red-500/10 transition-colors"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Merch Editor ── */
function MerchEditor() {
  const merch = useSiteStore((s) => s.merch);
  const addMerchItem = useSiteStore((s) => s.addMerchItem);
  const updateMerchItem = useSiteStore((s) => s.updateMerchItem);
  const deleteMerchItem = useSiteStore((s) => s.deleteMerchItem);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', price: '', tag: '' as string, image: '' });

  const handleAdd = () => {
    if (!form.name) return;
    const item: MerchItem = { id: Date.now().toString(), name: form.name, price: form.price, image: form.image };
    if (form.tag) item.tag = form.tag as MerchItem['tag'];
    addMerchItem(item);
    setForm({ name: '', price: '', tag: '', image: '' });
  };

  const handleUpdate = () => {
    if (!editId) return;
    const data: Partial<MerchItem> = { name: form.name, price: form.price, image: form.image };
    if (form.tag) data.tag = form.tag as MerchItem['tag'];
    else data.tag = undefined;
    updateMerchItem(editId, data);
    setEditId(null);
    setForm({ name: '', price: '', tag: '', image: '' });
  };

  const startEdit = (m: MerchItem) => {
    setEditId(m.id);
    setForm({ name: m.name, price: m.price, tag: m.tag || '', image: m.image });
  };

  return (
    <div>
      <div className="max-w-xl space-y-3 mb-8">
        <Input label="Product Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Input label="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <Input label="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
        <div>
          <p className="text-sm font-body text-brand-gray uppercase tracking-wider mb-1.5">Tag (optional)</p>
          <select value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })} className="w-full bg-brand-black border border-white/10 text-brand-cream px-4 py-2.5 font-body text-sm focus:outline-none focus:border-brand-gold/50">
            <option value="">None</option>
            <option value="New">New</option>
            <option value="Bestseller">Bestseller</option>
            <option value="Limited">Limited</option>
          </select>
        </div>
        <div className="flex gap-2">
          {editId ? (
            <>
              <Button onClick={handleUpdate} size="sm"><Save size={14} className="mr-2" />Update</Button>
              <Button variant="ghost" size="sm" onClick={() => { setEditId(null); setForm({ name: '', price: '', tag: '', image: '' }); }}><X size={14} className="mr-1" />Cancel</Button>
            </>
          ) : (
            <Button onClick={handleAdd} size="sm"><Plus size={14} className="mr-2" />Add Item</Button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {merch.map((m) => (
          <div key={m.id} className="relative group bg-brand-dark border border-white/5 overflow-hidden">
            <img src={m.image} alt={m.name} className="w-full h-28 object-cover" />
            <div className="p-3">
              <p className="text-xs font-body text-brand-cream truncate">{m.name}</p>
              <p className="text-xs font-body text-brand-gray">{m.price}</p>
              {m.tag && <Badge label={m.tag} className="mt-1" />}
            </div>
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => startEdit(m)} className="p-1.5 bg-brand-black/80 text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors"><Pencil size={12} /></button>
              <button onClick={() => deleteMerchItem(m.id)} className="p-1.5 bg-brand-black/80 text-red-400 hover:bg-red-500 hover:text-white transition-colors"><Trash2 size={12} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Stores Editor ── */
function StoresEditor() {
  const stores = useSiteStore((s) => s.stores);
  const addStore = useSiteStore((s) => s.addStore);
  const updateStore = useSiteStore((s) => s.updateStore);
  const deleteStore = useSiteStore((s) => s.deleteStore);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', address: '', hours: '', email: '', phone: '', status: 'Open' as Store['status'] });

  const handleAdd = () => {
    if (!form.name) return;
    addStore({ id: Date.now().toString(), ...form });
    setForm({ name: '', address: '', hours: '', email: '', phone: '', status: 'Open' });
  };

  const handleUpdate = () => {
    if (!editId) return;
    updateStore(editId, form);
    setEditId(null);
    setForm({ name: '', address: '', hours: '', email: '', phone: '', status: 'Open' });
  };

  const startEdit = (s: Store) => {
    setEditId(s.id);
    setForm({ name: s.name, address: s.address, hours: s.hours, email: s.email, phone: s.phone, status: s.status });
  };

  return (
    <div>
      <div className="max-w-xl space-y-3 mb-8">
        <Input label="Store Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Input label="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
        <Input label="Hours" value={form.hours} onChange={(e) => setForm({ ...form, hours: e.target.value })} />
        <Input label="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <Input label="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <div>
          <p className="text-sm font-body text-brand-gray uppercase tracking-wider mb-1.5">Status</p>
          <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as Store['status'] })} className="w-full bg-brand-black border border-white/10 text-brand-cream px-4 py-2.5 font-body text-sm focus:outline-none focus:border-brand-gold/50">
            <option value="Open">Open</option>
            <option value="Coming Soon">Coming Soon</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <div className="flex gap-2">
          {editId ? (
            <>
              <Button onClick={handleUpdate} size="sm"><Save size={14} className="mr-2" />Update</Button>
              <Button variant="ghost" size="sm" onClick={() => { setEditId(null); setForm({ name: '', address: '', hours: '', email: '', phone: '', status: 'Open' }); }}><X size={14} className="mr-1" />Cancel</Button>
            </>
          ) : (
            <Button onClick={handleAdd} size="sm"><Plus size={14} className="mr-2" />Add Store</Button>
          )}
        </div>
      </div>
      <div className="space-y-3">
        {stores.map((s) => (
          <div key={s.id} className="bg-brand-dark border border-white/5 p-4 flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-body text-sm text-brand-cream font-medium">{s.name}</p>
                <Badge label={s.status} />
              </div>
              <p className="font-body text-xs text-brand-gray">{s.address}</p>
              <p className="font-body text-xs text-brand-gray">{s.hours} · {s.email} · {s.phone}</p>
            </div>
            <div className="flex gap-1 shrink-0">
              <button onClick={() => startEdit(s)} className="p-1.5 text-brand-gold hover:bg-brand-gold/10 transition-colors"><Pencil size={14} /></button>
              <button onClick={() => deleteStore(s.id)} className="p-1.5 text-red-400 hover:bg-red-500/10 transition-colors"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
