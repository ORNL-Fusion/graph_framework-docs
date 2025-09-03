/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Graph Framework", "index.html", [
    [ "Introduction", "index.html#introduction", [
      [ "Purpose", "index.html#purpose", null ]
    ] ],
    [ "User guides for tools", "index.html#tools", [
      [ "RF Ray tracing", "index.html#rf_ray_tracing", null ]
    ] ],
    [ "Framework user guides", "index.html#framework_user", null ],
    [ "Framework developer guides", "index.html#framework_developer", [
      [ "Developer guide for RF Ray Tracing", "index.html#framework_developer_tools", null ]
    ] ],
    [ "Embedding in C code", "graph_c_binding.html", [
      [ "Introduction", "graph_c_binding.html#graph_c_binding_into", null ],
      [ "C Binding Interface", "graph_c_binding.html#graph_c_binding_interface", null ]
    ] ],
    [ "Code Structure", "code_structure.html", [
      [ "Introduction", "code_structure.html#code_structure_intro", null ],
      [ "Framework", "code_structure.html#code_structure_framework", null ],
      [ "Ray Tracing code", "code_structure.html#code_structure_xrays", null ]
    ] ],
    [ "Build System", "build_system.html", [
      [ "Introduction", "build_system.html#build_system_introduction", null ],
      [ "User Guide", "build_system.html#build_system_user", [
        [ "Dependencies", "build_system.html#build_system_user_dependencies", [
          [ "Required", "build_system.html#build_system_user_dependencies_required", null ],
          [ "Optional", "build_system.html#build_system_user_dependencies_optional", null ]
        ] ],
        [ "Obtaining the code", "build_system.html#build_system_clone", null ],
        [ "Generating the build system", "build_system.html#build_system_gen", [
          [ "Build system Options", "build_system.html#build_system_user_options", null ],
          [ "Trouble Shooting.", "build_system.html#build_system_trouble_shooting", null ]
        ] ],
        [ "Building the code.", "build_system.html#build_system_build", null ],
        [ "Running unit tests", "build_system.html#build_system_test", null ]
      ] ],
      [ "Developer Guide", "build_system.html#build_system_dev", [
        [ "Macro Definitions", "build_system.html#build_system_macros", [
          [ "Tool targets", "build_system.html#build_system_targets", null ],
          [ "Sanitizer flags", "build_system.html#build_system_sanitizer", null ],
          [ "Register an external project", "build_system.html#build_system_project", null ]
        ] ],
        [ "Debugging", "build_system.html#build_system_debug", [
          [ "Build System Options", "build_system.html#build_system_dev_options", null ]
        ] ]
      ] ]
    ] ],
    [ "General Concepts", "general_concepts.html", [
      [ "Introduction", "general_concepts.html#general_concepts_introduction", null ],
      [ "Definitions", "general_concepts.html#general_concepts_definitions", null ],
      [ "Graph", "general_concepts.html#general_concepts_graph", null ],
      [ "Auto Differentiation", "general_concepts.html#general_concepts_diff", null ],
      [ "Reduction", "general_concepts.html#general_concepts_reduction", null ],
      [ "Compile", "general_concepts.html#general_concepts_compile", [
        [ "Inputs", "general_concepts.html#general_concepts_compile_inputs", null ],
        [ "Outputs", "general_concepts.html#general_concepts_compile_outputs", null ],
        [ "Maps", "general_concepts.html#general_concepts_compile_maps", null ]
      ] ],
      [ "Workflows", "general_concepts.html#general_concepts_workflow", null ],
      [ "Safe Math", "general_concepts.html#general_concepts_safe_math", null ]
    ] ],
    [ "Tutorial", "tutorial.html", [
      [ "Introduction", "tutorial.html#tutorial_introduction", null ],
      [ "Basic Nodes", "tutorial.html#tutorial_basic", [
        [ "Constant Nodes", "tutorial.html#tutorial_constant", null ]
      ] ],
      [ "Basic Expressions", "tutorial.html#tutorial_expression", [
        [ "Auto Differentiation", "tutorial.html#tutorial_derivatives", null ]
      ] ],
      [ "Making workflows.", "tutorial.html#tutorial_workflow", [
        [ "Iteration", "tutorial.html#tutorial_workflow_iter", null ]
      ] ],
      [ "Newton's Method.", "tutorial.html#tutorial_workflow_newton", null ]
    ] ],
    [ "xrays Command Line Arguments", "xrays_commandline.html", [
      [ "Introduction", "xrays_commandline.html#xrays_commandline_intro", null ],
      [ "Command Options", "xrays_commandline.html#xrays_commandline_args", null ],
      [ "Example commandline", "xrays_commandline.html#xrays_commandline_example", [
        [ "Ray intialization.", "xrays_commandline.html#xrays_commandline_example_dist", null ],
        [ "Ray Models.", "xrays_commandline.html#xrays_commandline_example_model", null ]
      ] ]
    ] ],
    [ "xrays Output File", "xrays_output.html", [
      [ "Introduction", "xrays_output.html#xrays_output_intro", null ],
      [ "File Format", "xrays_output.html#xrays_output_format", null ]
    ] ],
    [ "Embedding in Fortran code", "graph_fortran_binding.html", [
      [ "Introduction", "graph_fortran_binding.html#graph_fortran_binding_into", null ],
      [ "Fortran Binding Interface", "graph_fortran_binding.html#graph_fortran_binding_interface", null ]
    ] ],
    [ "Absoption Models", "absorption_model.html", [
      [ "Introduction", "absorption_model.html#absorption_model_intro", [
        [ "Hot Plasma Disperison Function", "absorption_model.html#absorption_model_hot", [
          [ "Expansion Terms", "absorption_model.html#absorption_model_hotexpand", null ]
        ] ]
      ] ],
      [ "Root Find", "absorption_model.html#absorption_model_root", null ],
      [ "Weak Damping", "absorption_model.html#absorption_model_damping", null ],
      [ "Developing new absorption models", "absorption_model.html#absorption_model_devel", null ]
    ] ],
    [ "Dispersion Functions", "dispersion_function.html", [
      [ "Introduction", "dispersion_function.html#dispersion_function_intro", null ],
      [ "Normalization", "dispersion_function.html#dispersion_function_normal", null ],
      [ "Wave propagation", "dispersion_function.html#dispersion_function_wave_propagation", null ],
      [ "Available Dispersion Functions", "dispersion_function.html#dispersion_function_avail", [
        [ "Simple", "dispersion_function.html#dispersion_function_simple", null ],
        [ "Bohm Gross", "dispersion_function.html#dispersion_function_bohm_gross", null ],
        [ "Ordinary Wave", "dispersion_function.html#dispersion_function_o_wave", null ],
        [ "Extra Ordinary Wave", "dispersion_function.html#dispersion_function_x_wave", null ],
        [ "Cold Plasma", "dispersion_function.html#dispersion_function_cold_plasma", null ]
      ] ],
      [ "Developing new dispersion functions", "dispersion_function.html#dispersion_function_devel", null ]
    ] ],
    [ "Equilibrium Models", "equilibrum_models.html", [
      [ "Introduction", "equilibrum_models.html#equilibrum_models_intro", null ],
      [ "Spline Formatting", "equilibrum_models.html#equilibrum_splines", [
        [ "Cubic Splines", "equilibrum_models.html#equilibrum_splines_1D", null ],
        [ "Bicubic Splines", "equilibrum_models.html#equilibrum_splines_2D", null ]
      ] ],
      [ "EFIT", "equilibrum_models.html#equilibrum_efit", [
        [ "EFIT file format", "equilibrum_models.html#equilibrum_efit_format", null ]
      ] ],
      [ "VMEC", "equilibrum_models.html#equilibrum_vmec", [
        [ "VMEC file format", "equilibrum_models.html#equilibrum_vmec_format", null ]
      ] ],
      [ "Developing new equilibrium models", "equilibrum_models.html#equilibrum_devel", [
        [ "Noncartesian Coordinates", "equilibrum_models.html#equilibrum_devel_coordinate", null ]
      ] ]
    ] ],
    [ "Adding New Operations Tutorial", "new_operations_tutorial.html", [
      [ "Introduction", "new_operations_tutorial.html#new_operations_tutorial_intro", null ],
      [ "Node Subclasses", "new_operations_tutorial.html#new_operations_tutorial_node_subclass", null ],
      [ "Methods overloads", "new_operations_tutorial.html#new_operations_tutorial_method", [
        [ "Evaluate", "new_operations_tutorial.html#new_operations_tutorial_evalute", null ],
        [ "Is Match", "new_operations_tutorial.html#new_operations_tutorial_is_match", null ],
        [ "Reduce", "new_operations_tutorial.html#new_operations_tutorial_reduce", null ],
        [ "df", "new_operations_tutorial.html#new_operations_tutorial_df", null ],
        [ "Compile preamble", "new_operations_tutorial.html#new_operations_tutorial_compile_preamble", null ],
        [ "Compile", "new_operations_tutorial.html#new_operations_tutorial_compile", null ],
        [ "To Latex", "new_operations_tutorial.html#new_operations_tutorial_to_latex", null ],
        [ "Is Power Like", "new_operations_tutorial.html#new_operations_tutorial_is_power_like", null ],
        [ "Get power base", "new_operations_tutorial.html#new_operations_tutorial_get_power_base", null ],
        [ "Get power exponent", "new_operations_tutorial.html#new_operations_tutorial_get_power_exponent", null ],
        [ "Remove Pseudo", "new_operations_tutorial.html#new_operations_tutorial_remove_pseudo", null ],
        [ "To Vizgraph", "new_operations_tutorial.html#new_operations_tutorial_to_vizgraph", null ]
      ] ]
    ] ],
    [ "Solvers", "solvers.html", [
      [ "Introduction", "solvers.html#solvers_intro", [
        [ "Split Simplextic", "solvers.html#solvers_split_simplextic", null ],
        [ "2nd Order Runge Kutta", "solvers.html#solvers_rk2", null ],
        [ "4th Order Runge Kutta", "solvers.html#solvers_rk4", null ],
        [ "Adaptive 4th Order Runge Kutta", "solvers.html#solvers_adaptive_rk4", null ]
      ] ],
      [ "Developing new solvers", "solvers.html#solvers_devel", null ]
    ] ],
    [ "Quick Start Guide", "md__r_e_a_d_m_e.html", [
      [ "Documentation", "md__r_e_a_d_m_e.html#autotoc_md1", null ],
      [ "Obtaining the Code", "md__r_e_a_d_m_e.html#autotoc_md2", null ],
      [ "Compiling the Code", "md__r_e_a_d_m_e.html#autotoc_md3", null ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ]
      ] ]
    ] ],
    [ "Concepts", "concepts.html", "concepts" ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Typedefs", "functions_type.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"absorption_8hpp.html",
"classdispersion_1_1dispersion__interface.html#a4eaa2a6cf2d7ca1f2b1c4692767f71c5",
"classequilibrium_1_1vmec.html#a53fea8fce98504fc03503e2697064a3d",
"classgraph_1_1divide__node.html#a61e3b01877adcc2d06a035941e1f9fdd",
"classgraph_1_1piecewise__2_d__node.html#a840b44453602c43e0a5b79b3f955ad6f",
"classgraph_1_1variable__node.html#a6cc97fd212ea8cfbdf09f06d50560a46",
"classsolver_1_1solver__interface.html#a87d0f0b95be0f073599cd0c6ea0f344c",
"functions_f.html",
"interfacegraph__fortran_1_1graph__construct__context.html",
"namespacegraph.html#ae5b6a8636a9604506935459453c7f267",
"solver__test_8cpp.html#a549d8acce0278424033d32d170eefcd5"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';