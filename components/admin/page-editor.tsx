"use client"

import { useState, useEffect } from "react"
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GripVertical, Plus, Trash2, Image, Type, FileText, Layout, Columns } from "lucide-react"

// Mock page data
const mockPageData = {
  about: [
    {
      id: "section-1",
      type: "hero",
      title: "Where technology, craftsmanship, and nature converge.",
      subtitle: "For a new standard in outdoor and tactical performance.",
    },
    {
      id: "section-2",
      type: "text",
      title: "The Story",
      content:
        "Forest Outfitters was founded with a vision to revolutionize outdoor and tactical gear through innovation, premium quality, and a commitment to American manufacturing.",
    },
    {
      id: "section-3",
      type: "image-text",
      title: "Cutting-Edge Technology",
      content:
        "Our proprietary AI algorithms analyze environments to create adaptive camouflage patterns that provide superior concealment across diverse terrains and lighting conditions.",
      image: "/placeholder.svg",
    },
  ],
  investors: [
    {
      id: "section-1",
      type: "hero",
      title: "Invest in the Future of Outdoor Innovation",
      subtitle: "Join us as we redefine camouflage, tactical gear, and adventure apparel.",
    },
    {
      id: "section-2",
      type: "features",
      title: "Investment Opportunities",
      items: ["Growing Market", "Innovative Technology", "Early Stage Advantage"],
    },
  ],
  shop: [
    { id: "section-1", type: "hero", title: "Shop Forest Outfitters", subtitle: "Premium outdoor and tactical gear" },
    { id: "section-2", type: "products", title: "Featured Products", productIds: [1, 2, 3, 4] },
  ],
  careers: [
    {
      id: "section-1",
      type: "hero",
      title: "Build the Future With Us",
      subtitle: "Join our mission to redefine outdoor and tactical performance.",
    },
    {
      id: "section-2",
      type: "text",
      title: "Join Our Team",
      content: "We're looking for passionate individuals to join our growing team.",
    },
    { id: "section-3", type: "jobs", title: "Open Positions", jobIds: [1, 2, 3] },
  ],
}

// Component for a sortable section
function SortableSection({ section, onEdit, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: section.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const getSectionIcon = (type) => {
    switch (type) {
      case "hero":
        return <Layout className="h-5 w-5" />
      case "text":
        return <FileText className="h-5 w-5" />
      case "image-text":
        return <Columns className="h-5 w-5" />
      case "image":
        return <Image className="h-5 w-5" />
      case "features":
        return <Type className="h-5 w-5" />
      default:
        return <Layout className="h-5 w-5" />
    }
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 mb-4 border border-[#242423] rounded-md bg-black/20 hover:border-[#B99C20]/50 transition-colors"
    >
      <div
        className="p-2 cursor-grab text-muted-foreground hover:text-white hidden sm:block"
        {...attributes}
        {...listeners}
      >
        <GripVertical className="h-5 w-5" />
      </div>

      {/* Mobile drag handle */}
      <div className="flex items-center justify-between sm:hidden mb-2">
        <div className="flex items-center gap-2 bg-[#1A1505] text-[#B99C20] px-2 py-1 rounded text-xs">
          {getSectionIcon(section.type)}
          <span className="capitalize">{section.type}</span>
        </div>
        <div className="p-2 cursor-grab text-muted-foreground hover:text-white" {...attributes} {...listeners}>
          <GripVertical className="h-5 w-5" />
        </div>
      </div>

      <div className="flex-1">
        <div className="hidden sm:flex sm:items-center mb-2">
          <div className="flex items-center gap-2 bg-[#1A1505] text-[#B99C20] px-2 py-1 rounded text-xs">
            {getSectionIcon(section.type)}
            <span className="capitalize">{section.type}</span>
          </div>
          <h3 className="ml-3 font-medium">{section.title || "Untitled Section"}</h3>
        </div>

        {/* Mobile title */}
        <h3 className="font-medium mb-2 sm:hidden">{section.title || "Untitled Section"}</h3>

        <div className="text-sm text-muted-foreground line-clamp-2">
          {section.content || section.subtitle || (section.items && section.items.join(", ")) || "No content"}
        </div>
      </div>

      <div className="flex gap-2 mt-3 sm:mt-0">
        <Button variant="outline" size="sm" onClick={() => onEdit(section)}>
          Edit
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onDelete(section.id)}
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

// Section edit form component
function SectionEditForm({ section, onSave, onCancel }) {
  const [formData, setFormData] = useState({ ...section })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleTypeChange = (value) => {
    // Reset content fields when changing type to avoid invalid data
    const newFormData = {
      ...formData,
      type: value,
    }

    // Clear fields that aren't relevant to the new type
    if (value === "hero") {
      newFormData.content = undefined
    } else if (value !== "hero") {
      newFormData.subtitle = undefined
    }

    if (value !== "image" && value !== "image-text") {
      newFormData.image = undefined
    }

    if (value !== "features") {
      newFormData.items = undefined
    }

    setFormData(newFormData)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h2 className="text-xl font-tektur uppercase tracking-wide">Edit Section</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={onCancel}
            className="border-[#242423] hover:border-[#B99C20] font-mono text-xs uppercase tracking-wide"
          >
            Cancel
          </Button>
          <Button
            onClick={() => onSave(formData)}
            className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
          >
            Save Section
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Section Type</label>
          <Select value={formData.type} onValueChange={handleTypeChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select section type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hero">Hero Banner</SelectItem>
              <SelectItem value="text">Text Section</SelectItem>
              <SelectItem value="image-text">Image with Text</SelectItem>
              <SelectItem value="image">Image Gallery</SelectItem>
              <SelectItem value="features">Features List</SelectItem>
              <SelectItem value="products">Products Grid</SelectItem>
              <SelectItem value="jobs">Job Listings</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <Input name="title" value={formData.title || ""} onChange={handleChange} placeholder="Section title" />
        </div>

        {formData.type === "hero" && (
          <div>
            <label className="block text-sm font-medium mb-1">Subtitle</label>
            <Textarea
              name="subtitle"
              value={formData.subtitle || ""}
              onChange={handleChange}
              rows={4}
              placeholder="Subtitle text"
            />
          </div>
        )}

        {(formData.type === "text" || formData.type === "image-text") && (
          <div>
            <label className="block text-sm font-medium mb-1">Content</label>
            <Textarea
              name="content"
              value={formData.content || ""}
              onChange={handleChange}
              rows={4}
              placeholder="Content text"
            />
          </div>
        )}

        {(formData.type === "image" || formData.type === "image-text") && (
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <Input
              name="image"
              value={formData.image || ""}
              onChange={handleChange}
              placeholder="/images/example.jpg"
            />
            <p className="text-xs text-muted-foreground mt-1">Enter the path to the image or upload a new one</p>
            <Button variant="outline" className="mt-2">
              <Image className="mr-2 h-4 w-4" />
              Upload Image
            </Button>
          </div>
        )}

        {formData.type === "features" && (
          <div>
            <label className="block text-sm font-medium mb-1">Features (one per line)</label>
            <Textarea
              name="featuresText"
              value={(formData.items || []).join("\n")}
              onChange={(e) => {
                const items = e.target.value.split("\n").filter((item) => item.trim() !== "")
                setFormData({ ...formData, items })
              }}
              rows={4}
              placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export function PageEditor({ pageId }: { pageId: string }) {
  const [sections, setSections] = useState([])
  const [editingSection, setEditingSection] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  // Load mock data
  useEffect(() => {
    if (mockPageData[pageId]) {
      setSections(mockPageData[pageId])
    } else {
      setSections([])
    }
  }, [pageId])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // 8px movement required before drag starts - helps on touch devices
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (active.id !== over.id) {
      setSections((sections) => {
        const oldIndex = sections.findIndex((section) => section.id === active.id)
        const newIndex = sections.findIndex((section) => section.id === over.id)

        const newSections = [...sections]
        const [removed] = newSections.splice(oldIndex, 1)
        newSections.splice(newIndex, 0, removed)

        return newSections
      })
    }
  }

  const handleAddSection = () => {
    const newSection = {
      id: `section-${Date.now()}`,
      type: "text",
      title: "New Section",
      content: "Add your content here",
    }

    setSections([...sections, newSection])
    setEditingSection(newSection)
    setIsEditing(true)
  }

  const handleEditSection = (section) => {
    setEditingSection(section)
    setIsEditing(true)
  }

  const handleDeleteSection = (sectionId) => {
    setSections(sections.filter((section) => section.id !== sectionId))
  }

  const handleSaveSection = (updatedSection) => {
    setSections(sections.map((section) => (section.id === updatedSection.id ? updatedSection : section)))
    setIsEditing(false)
    setEditingSection(null)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setEditingSection(null)
  }

  if (isEditing) {
    return <SectionEditForm section={editingSection} onSave={handleSaveSection} onCancel={handleCancelEdit} />
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-tektur uppercase tracking-wide">Page Sections</h2>
        <Button
          onClick={handleAddSection}
          className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Section
        </Button>
      </div>

      {sections.length > 0 ? (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={sections.map((section) => section.id)} strategy={verticalListSortingStrategy}>
            {sections.map((section) => (
              <SortableSection
                key={section.id}
                section={section}
                onEdit={handleEditSection}
                onDelete={handleDeleteSection}
              />
            ))}
          </SortableContext>
        </DndContext>
      ) : (
        <div className="text-center py-12 border border-dashed border-[#242423] rounded-md">
          <p className="text-muted-foreground mb-4">No sections added yet</p>
          <Button
            onClick={handleAddSection}
            className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Section
          </Button>
        </div>
      )}
    </div>
  )
}
